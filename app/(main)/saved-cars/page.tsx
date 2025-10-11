
import { getSavedCars } from "@/actions/car-listing";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SavedCarList from "./_components/saved-car-list";
// import { getSavedCars } from "@/actions/car-listing";
// import SavedCarList from "./_components/saved-car-list";

const SavedCarsPage = async () => {
    const {userId} = await auth();
    if(!userId){
        redirect('/sign-in?redirectTo=/saved-cars');
    }

    const {data: savedCars} = await getSavedCars();
  return (
    <div className="container mx-auto px-4 py-12">
        <h1 className="text-6xl mb-6 gradient-title">Saved Cars</h1>
        <SavedCarList initialData={savedCars} />
    </div>
  )
}

export default SavedCarsPage