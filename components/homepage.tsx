'use client'
import React from 'react'
import { getFeaturedCars } from "@/actions/home";
import CarCard from "@/components/car-card";
import HomeSearch from "@/components/home-search";
import { Button } from "@/components/ui/button";
import { bodyTypes, carMakes, faqItems } from "@/lib/data";
import { Car } from "@/types/car";
import { Calendar, Car as CarIcon, ChevronDown, ChevronRight, Pencil, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as Tooltip from '@radix-ui/react-tooltip';
import { motion } from "framer-motion";
import FaQ from "@/components/faq";
import { User } from '@/types/user';
import BreadcrumbComponent from './breadcrumClient';
const HomePage = ({featuredCars}:{featuredCars: Car[]}) => {

  return (
    <div className="pt-20 flex flex-col items-center justify-center gap-8">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 w-full h-[70vh] md:h-[80vh] flex flex-col items-center bg-gray-900">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        >
          <Image
            src="/banner2.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            className="opacity-70"
          />
        </motion.div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 to-black/20"></div>
        <div className="z-10 max-w-6xl px-4 mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            className="flex flex-col text-center md:text-left md:max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 leading-tight">
              Drive the Future of Automotive Intelligence
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-medium max-w-xl">
              Discover your perfect car with our AI-powered platform.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <HomeSearch />
          </motion.div>
        </div>
      </section>

      <section className="w-full max-w-6xl px-4">
        <BreadcrumbComponent />
      </section>


      {/* Featured Cars Section */}
      <section className="py-16 md:py-24 w-full flex flex-col items-center bg-gray-100">
        <div className="max-w-6xl px-4 w-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Featured Cars</h2>
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg transition-all active:scale-95"
                    asChild
                  >
                    <Link href="/cars">
                      View All Cars <ChevronRight size={16} className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Tooltip.Trigger>
                <Tooltip.Content className="bg-gray-900 text-white text-xs rounded-lg p-2 shadow-xl border border-blue-200/20">
                  Browse our full car inventory
                  <Tooltip.Arrow className="fill-gray-900" />
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.length > 0 ? (
              featuredCars.map((car: Car, index: number) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <CarCard car={car} className="hover:shadow-xl transition-shadow duration-300" />
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">No featured cars available.</p>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24 w-full flex flex-col items-center bg-white">
        <div className="max-w-6xl px-4 w-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Why Choose CMA Platform?</h2>
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg transition-all active:scale-95"
                    asChild
                  >
                    <Link href="/about">
                      Learn More <ChevronRight size={16} className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Tooltip.Trigger>
                <Tooltip.Content className="bg-gray-900 text-white text-xs rounded-lg p-2 shadow-xl border border-blue-200/20">
                  Discover more about our platform
                  <Tooltip.Arrow className="fill-gray-900" />
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CarIcon, title: "Wide Selection", description: "Choose from a vast array of vehicles to find the perfect match for your needs and budget." },
              { icon: Calendar, title: "Trusted Sellers", description: "We vet all sellers to ensure you are dealing with reputable individuals and dealerships." },
              { icon: ShieldCheck, title: "Secure Transactions", description: "Our platform provides secure payment options and protects your personal information." },
              { icon: Pencil, title: "Customer Support", description: "Our dedicated support team is here to assist you with any questions or concerns." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <div className="flex items-center mb-4">
                  <item.icon className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Make Section */}
      <section className="py-16 md:py-24 w-full flex flex-col items-center bg-gray-100">
        <div className="max-w-6xl px-4 w-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Browse by Make</h2>
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg transition-all active:scale-95"
                    asChild
                  >
                    <Link href="/cars">
                      View All Cars <ChevronRight size={16} className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Tooltip.Trigger>
                <Tooltip.Content className="bg-gray-900 text-white text-xs rounded-lg p-2 shadow-xl border border-blue-200/20">
                  Explore cars by make
                  <Tooltip.Arrow className="fill-gray-900" />
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {carMakes?.length > 0 ? (
              carMakes.map((make: any, index: number) => (
                <Tooltip.Provider key={make.id}>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <motion.div
                        className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 relative"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        <Link href={`/cars?make=${make.name}`} className="flex flex-col items-center">
                          <Image
                            src={make.image}
                            alt={make.name}
                            width={80}
                            height={40}
                            className="object-contain"
                          />
                          <span className="mt-2 text-sm font-medium text-gray-700">{make.name}</span>
                        </Link>
                      </motion.div>
                    </Tooltip.Trigger>
                    <Tooltip.Content className="bg-gray-900 text-white text-xs rounded-lg p-2 shadow-xl border border-blue-200/20">
                      View cars by {make.name}
                      <Tooltip.Arrow className="fill-gray-900" />
                    </Tooltip.Content>
                  </Tooltip.Root>
                </Tooltip.Provider>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">No car makes available.</p>
            )}
          </div>
        </div>
      </section>

      {/* Browse by Body Type Section */}
      <section className="py-16 md:py-24 w-full flex flex-col items-center bg-white">
        <div className="max-w-6xl px-4 w-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Browse by Body Type</h2>
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg transition-all active:scale-95"
                    asChild
                  >
                    <Link href="/cars">
                      View All Cars <ChevronRight size={16} className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Tooltip.Trigger>
                <Tooltip.Content className="bg-gray-900 text-white text-xs rounded-lg p-2 shadow-xl border border-blue-200/20">
                  Explore cars by body type
                  <Tooltip.Arrow className="fill-gray-900" />
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {bodyTypes?.length > 0 ? (
              bodyTypes.map((bodyType: any, index: number) => (
                <Tooltip.Provider key={bodyType.id}>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <motion.div
                        className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 relative"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        <Link href={`/cars?bodyType=${bodyType.name}`} className="flex flex-col items-center">
                          <Image
                            src={bodyType.image}
                            alt={bodyType.name}
                            width={80}
                            height={40}
                            className="object-contain"
                          />
                          <h3 className="mt-2 text-sm font-medium text-gray-700">{bodyType.name}</h3>
                        </Link>
                      </motion.div>
                    </Tooltip.Trigger>
                    <Tooltip.Content className="bg-gray-900 text-white text-xs rounded-lg p-2 shadow-xl border border-blue-200/20">
                      View {bodyType.name} cars
                      <Tooltip.Arrow className="fill-gray-900" />
                    </Tooltip.Content>
                  </Tooltip.Root>
                </Tooltip.Provider>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">No body types available.</p>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section (Client Component) */}
      <FaQ faqItems={faqItems} />
    </div>
  )
}

export default HomePage