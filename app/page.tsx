import { getFeaturedCars } from "@/actions/home";
import CarCard from "@/components/car-card";
import HomeSearch from "@/components/home-search";
import { Button } from "@/components/ui/button";
import { bodyTypes, carMakes, faqItems, featuredCars } from "@/lib/data";
import { Car } from "@/types/car";
import { Calendar, Car as CarIcon, ChevronDown, ChevronRight, Ligature, Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  const featuredCars: Car[] | any = await getFeaturedCars()

  return (
    <div className="pt-20 flex flex-col items-center justify-center gap-4">
      <section className="relative py-16 md:py-28 dotted-background w-full h-[70vh] md:h-[80vh] flex flex-col items-center">
        <Image
          src="/banner2.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
    
          className="absolute inset-0 z-0 block h-full w-full object-cover"
        />

        <div className="absolute inset-0 z-[1] bg-black/40"></div>
        <div className=" z-20 max-w-5xl px-4  mx-auto flex flex-row items-start justify-between gap-8"> {/* Thêm py-10/20 để có khoảng cách trên/dưới */}

          <div className="flex flex-col mb-10 md:mb-12 flex-50">

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-5 
                       text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-yellow-500 
                       leading-tight md:leading-tight ">
              DRIVE THE FUTURE OF AUTOMOTIVE INTELLIGENCE
            </h1>

            <p className="text-lg md:text-2xl text-gray-300   max-w-3xl mx-auto font-bold">
              Your AI-Powered Journey to the Perfect Car Starts Here.
            </p>
          </div>

          <div className="">
            <HomeSearch />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-26 dotted-background w-full flex flex-col items-center bg-gray-50">
        <div className="max-w-6xl px-4 w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold px-4">Feature Cars</h2>
            <Button className="mt-4 cursor-pointer flex justify-around items-center gap-2" asChild>
              <Link href="/cars">
                View All Cars <ChevronRight size={16} className="ml-1 h-4 w-4" />
              </Link>
            </Button>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8">
            {featuredCars.length !== 0 && featuredCars.map((car:Car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-26 dotted-background w-full flex flex-col items-center bg-gray-50">
        <div className="max-w-6xl px-4 w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold px-4">Why choose CMA platform?</h2>
            <div>
              <Button className="mt-4 cursor-pointer flex justify-around items-center gap-2" asChild>
                <Link href="/about">
                  Learn More <ChevronRight size={16} className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <CarIcon width={24} height={24} className="mr-2" />
                <h3 className="text-xl font-semibold">Wide Selection</h3>
              </div>
              <p className="text-gray-600">Choose from a vast array of vehicles to find the perfect match for your needs and budget.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <Calendar width={24} height={24} className="mr-2" />
                <h3 className="text-xl font-semibold">Trusted Sellers</h3>
              </div>
              <p className="text-gray-600">We vet all sellers to ensure you are dealing with reputable individuals and dealerships.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <Pencil width={24} height={24} className="mr-2" />
                <h3 className="text-xl font-semibold">Secure Transactions</h3>
              </div>
              <p className="text-gray-600">Our platform provides secure payment options and protects your personal information.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <Ligature width={24} height={24} className="mr-2" />
                <h3 className="text-xl font-semibold">Customer Support</h3>
              </div>
              <p className="text-gray-600">Our dedicated support team is here to assist you with any questions or concerns.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-12 md:py-26 dotted-background w-full flex flex-col items-center bg-gray-50">
        <div className="max-w-6xl px-4 w-full">
          <div className="flex flex-wrap justify-between items-center">
            <h2 className="text-2xl font-bold px-4">Browser By Make</h2>
            <Button className="mt-4 cursor-pointer flex justify-around items-center gap-2" asChild>
              <Link href="/cars">
                View All Cars <ChevronRight size={20} className="ml-1 h-4 w-4" />
              </Link>
            </Button>

          </div>

          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-3 mt-8">
            {
              carMakes?.length > 0 && carMakes.map((make) => (
                <div key={make.id} className="border p-4 flex items-center justify-center hover:shadow-lg transition cursor-pointer">
                  <Link href={`/cars?make=${make.name}`} className="text-center">
                    <Image src={make.image} alt={make.name} width={80} height={40} className="object-contain mt-2" />
                  </Link>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-300 transition" />

                </div>
              ))
            }
          </div>
        </div>
      </section>


      <section className="py-12 md:py-26 dotted-background w-full flex flex-col items-center bg-gray-50">
        <div className="max-w-6xl px-4 w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold px-4">Other Views</h2>
            <Button className="mt-4 cursor-pointer flex justify-around items-center gap-2" asChild>
              <Link href="/cars">
                View All Cars <ChevronRight size={16} className="ml-1 h-4 w-4" />
              </Link>
            </Button>

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4 mt-8">
            {
              bodyTypes?.length > 0 && bodyTypes.map((bodyType) => (
                <div key={bodyType.id} className="border p-4 flex items-center justify-center hover:shadow-lg transition cursor-pointer">
                  <Link href={`/cars?bodyType=${bodyType.name}`} className="text-center">
                    <Image src={bodyType.image} alt={bodyType.name} width={80} height={40} className="object-contain mt-2" />
                  </Link>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-300 transition" ></div>
                  <h3 className="text-center mt-2 font-medium">{bodyType.name}</h3>
                </div>
              ))
            }
          </div>
        </div>
      </section>


      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-jetbrains-mono">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 font-jetbrains-mono">
              Everything you need to know about Car MarketAI
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  // onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 font-jetbrains-mono">
                    {faq.question}
                  </h3>
                  <ChevronDown
                  // className={`w-5 h-5 text-gray-600 transition-transform ${
                  //   // openIndex === index ? "rotate-180" : ""
                  // }`}
                  />
                </button>
                {/* {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed font-jetbrains-mono">
                    {faq.answer}
                  </p>
                </div>
              )} */}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
