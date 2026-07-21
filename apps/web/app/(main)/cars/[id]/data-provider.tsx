import { getTestDriveInfo } from "@/actions/bookings";
import { getCarById } from "@/actions/car-listing";
import { currentUser } from "@/actions/user";
import { CarProvider } from "@/app/context/car-context";

export async function CarDataProvider({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const user = await currentUser();
  const car = await getCarById(id);
  const testDriveInfo = await getTestDriveInfo(id);

  const plainCar = car?.success ? JSON.parse(JSON.stringify(car.data)) : null;
  const plainTestDriveInfo = testDriveInfo?.success
    ? JSON.parse(JSON.stringify(testDriveInfo.data))
    : null;
  const plainUser = user ? JSON.parse(JSON.stringify(user)) : null;

  const initialPlain = {
    car: plainCar,
    testDriveInfo: plainTestDriveInfo,
    user: plainUser,
    upcomingBookings: plainCar?.upcomingBookings || {},
  };

  return (
    <CarProvider initialCar={initialPlain}>
      {children}
    </CarProvider>
  );
}
