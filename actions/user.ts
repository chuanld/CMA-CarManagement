import { serializeUserData } from "@/lib/helper";
import { db } from "@/lib/prisma";

export async function getCurrentUser(clerkUserId: string) {
    try {
        if (!clerkUserId) {
            return { success: false, message: 'Unauthorized' };
        }
        const user = await db.user.findUnique({
             where: { clerkUserId }, 
             select: { id: true, name: true, email: true, phone: true, role: true} 
            }
        );
        const serialUser = serializeUserData(user);
        return { success: true, data: serialUser  };
    } catch (err: unknown) {
        console.error('Get current user error:', err);
        return { success: false, message: (err as Error).message || 'Failed to fetch user' };
    }
}