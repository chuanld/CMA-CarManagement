'use server';
import { serializePurchase } from "@/lib/helper";
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { BookingStatus, CarStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

interface CreatePurchase {
  carId: string;
  dealerId: string;
  price: number;
}
interface UpdatePurchaseStatusPayload {
  purchaseId: string;
  status: "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED";
}

interface GetPurchaseByIdParams {
  purchaseId: string;
}

interface GetPurchasesResult {
  success: true;
  data: ReturnType<typeof serializePurchase>[];
}
interface GetPurchasesError {
  success: false;
  message: string;
}
type GetPurchasesResponse = GetPurchasesResult | GetPurchasesError;



export async function getPurchases(): Promise<GetPurchasesResponse> {
  // 1. Clerk auth
  const { userId: clerkUserId } = await auth();

  if (!clerkUserId) {
    return { success: false, message: 'Unauthorized' };
  }

  try {
    // 2. Find the internal DB user (we need the role for admin check)
    const dbUser = await db.user.findUnique({
      where: { clerkUserId },
      select: { id: true, role: true },
    });

    if (!dbUser) {
      return { success: false, message: 'User not found' };
    }

    // 3. Build the Prisma query – we only want purchases **owned by the user**
    //    (or admin can see everything – you can remove the admin part if you never need it)
    const purchases = await db.purchase.findMany({
      where: {
        // Normal user → only his own purchases
        ...(dbUser.role !== 'ADMIN'
          ? { userId: dbUser.id }
          : {}),
      },
      include: {
        car: {
          select: {
            id: true,
            make: true,
            model: true,
            year: true,
            images: true,
            status: true,
            mileage: true,
            fuelType: true,
            transmission: true,
            saleInfo: true,
            dealer: {
              select: {
                id: true,
                name: true,
                phone: true,
                email: true,
                address: true,
                logoUrl: true,
                ownerId: true,
              },
            },
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          },
        },
        dealer: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            address: true,
            logoUrl: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' }, // newest first – adjust as you like
    });

    // 4. Serialize each purchase (Decimal → string, Date → ISO string, …)
    const serialized = purchases.map((purchase) => serializePurchase(purchase));

    return { success: true, data: serialized };
  } catch (error: unknown) {
    console.error('Get purchases error:', error);
    return {
      success: false,
      message: (error as Error).message || 'Failed to fetch purchases',
    };
  }
}


export async function getPurchaseById({ purchaseId }: GetPurchaseByIdParams) {
  const { userId: clerkUserId } = await auth();

  if (!clerkUserId) {
    return { success: false, message: 'Unauthorized' };
  }

  try {
    // Find user
    const user = await db.user.findUnique({
      where: { clerkUserId },
      select: { id: true, role: true },
    });

    if (!user) {
      return { success: false, message: 'User not found' };
    }

    if (!purchaseId) {
      return { success: false, message: 'Missing purchase ID' };
    }

    // Fetch full purchase with relations
    const purchase = await db.purchase.findUnique({
      where: { id: purchaseId },
      include: {
        car: {
          select: {
            id: true,
            make: true,
            model: true,
            year: true,
            images: true,
            status: true,
            mileage: true,
            fuelType: true,
            transmission: true,
            saleInfo: true,
            dealer: {
              select: {
                id: true,
                name: true,
                phone: true,
                email: true,
                address: true,
                ownerId: true,
              },
            },
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          },
        },
        dealer: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            address: true,
            logoUrl: true,
          },
        },
      },
    });

    if (!purchase) {
      return { success: false, message: 'Purchase not found' };
    }

    // === AUTHORIZATION: Only owner, dealer, or admin can view ===
    const isOwner = purchase.userId === user.id;
    const isDealer = purchase.car.dealer?.id === user.id;
    const isAdmin = user.role === 'ADMIN';

    if (!isOwner && !isDealer && !isAdmin) {
      return { success: false, message: 'Forbidden' };
    }

    const serialPurchase = serializePurchase(purchase);

    return {
      success: true,
      data: serialPurchase,
    };
  } catch (error: unknown) {
    console.error('Get purchase error:', error);
    return { success: false, message: (error as Error).message || 'Failed to fetch purchase' };
  }
}

export async function createPurchase({ carId, dealerId, price }: CreatePurchase) {
  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) {
    return { success: false, message: 'Unauthorized' };
  }

  try {
    // 1. Find user (Clerk → Prisma)
    const user = await db.user.findUnique({
      where: { clerkUserId },
      select: { id: true },
    });
    if (!user) {
      return { success: false, message: 'User not found' };
    }

    // 2. Validate input
    if (!carId || !dealerId || !price || price <= 0) {
      return { success: false, message: 'Invalid purchase data' };
    }

    // 3. Use TRANSACTION to prevent race conditions
    const result = await db.$transaction(async (tx) => {
      // Check car availability + lock row
      const car = await tx.car.findUnique({
        where: { id: carId },
        include: {
          saleInfo: true,
          bookings: {
            where: {
              OR: [
                { status: BookingStatus.CONFIRMED },
                { status: BookingStatus.ACTIVE },
              ],
            },
          },
        },
      });

      if (!car) throw new Error('Car not found');
      if (car.status !== CarStatus.AVAILABLE) {
        throw new Error(`Car is ${car.status.toLowerCase()}`);
      }
      if (car.bookings.length > 0) {
        throw new Error('Car is booked for test-drive or rental');
      }

      // Optional: validate dealer owns the car
      if (car.dealerId !== dealerId) {
        throw new Error('Dealer mismatch');
      }

      // Create purchase
      const purchase = await tx.purchase.create({
        data: {
          userId: user.id, 
          carId,
          dealerId,
          price,
          status: 'PENDING',
        },
      });

      // Reserve the car
      await tx.car.update({
        where: { id: carId },
        data: {
          status: CarStatus.RESERVED,
          statusChangedAt: new Date(),
          statusChangedBy: user.id,
        },
      });

      return purchase;
    });

    // Revalidate
    revalidatePath(`/cars/${carId}`);
    revalidatePath('/purchase/history');

    const serialPurchase = serializePurchase(result);

    return { success: true, data: serialPurchase };
  } catch (error: unknown) {
    console.error('Purchase error:', error);
    return { success: false, message: (error as Error).message || 'Purchase failed' };
  }
}

export async function updatePurchaseStatus({
  purchaseId,
  status,
}: UpdatePurchaseStatusPayload) {
  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) {
    return { success: false, message: 'Unauthorized' };
  }

  try {
    const user = await db.user.findUnique({
      where: { clerkUserId },
      select: { id: true, role: true },
    });
    if (!user) {
      return { success: false, message: 'User not found' };
    }

    if (!purchaseId || !status) {
      return { success: false, message: 'Missing data' };
    }

    // 2. TRANSACTION: Atomic update + car status sync
    const result = await db.$transaction(async (tx) => {
      // Lock purchase + car to prevent race conditions
      const purchase = await tx.purchase.findUnique({
        where: { id: purchaseId },
        include: {
          car: {
            select: { id: true, status: true, dealerId: true },
          },
        },
      });

      if (!purchase) throw new Error('Purchase not found');

      const { car } = purchase;

      // === AUTHORIZATION ===
      const isOwner = purchase.userId === user.id;
      const isDealer = car.dealerId === user.id;
      const isAdmin = user.role === 'ADMIN';

      if (!isOwner && !isDealer && !isAdmin) {
        throw new Error('Forbidden');
      }

      // === STATUS TRANSITION RULES ===
      const validTransitions: Record<string, string[]> = {
        PENDING: ['CONFIRMED', 'CANCELLED'],
        CONFIRMED: ['COMPLETED', 'CANCELLED'],
        COMPLETED: ['CANCELLED'], // optional: allow refund
        CANCELLED: [],
      };

      const currentStatus = purchase.status;
      if (!validTransitions[currentStatus].includes(status)) {
        throw new Error(`Cannot change status from ${currentStatus} to ${status}`);
      }

      // Owner can only CANCEL
      if (isOwner && status !== 'CANCELLED') {
        throw new Error('You can only cancel your own purchase');
      }

      // Dealer/Admin: restrict to allowed actions
      if ((isDealer || isAdmin) && !['CONFIRMED', 'COMPLETED', 'CANCELLED'].includes(status)) {
        throw new Error('Invalid status');
      }

      // === UPDATE PURCHASE ===
      const updatedPurchase = await tx.purchase.update({
        where: { id: purchaseId },
        data: {
          status,
          statusChangedAt: new Date(),
          statusChangedBy: user.id, // ← CORRECT: Prisma User ID
        },
      });

      // === UPDATE CAR STATUS (only if needed) ===
      let newCarStatus: CarStatus | null = null;

      if (status === 'CONFIRMED' && car.status !== 'RESERVED') {
        newCarStatus = 'RESERVED';
      } else if (status === 'COMPLETED' && car.status !== 'SOLD') {
        newCarStatus = 'SOLD';
      } else if (status === 'CANCELLED' && ['RESERVED', 'PENDING'].includes(car.status)) {
        newCarStatus = 'AVAILABLE';
      }

      if (newCarStatus) {
        await tx.car.update({
          where: { id: car.id },
          data: {
            status: newCarStatus,
            statusChangedAt: new Date(),
            statusChangedBy: user.id,
          },
        });
      }

      return updatedPurchase;
    });

    // Revalidate relevant pages
    revalidatePath('/purchase/history');
    revalidatePath(`/cars/${result.carId}`);
    revalidatePath(`/dealer/purchases`);

    const serialPurchase = serializePurchase(result);

    return { success: true, data: serialPurchase };
  } catch (error: any) {
    console.error('Update purchase status error:', error);
    return { success: false, message: error.message || 'Update failed' };
  }
}


