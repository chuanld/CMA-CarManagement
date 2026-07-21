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
import HomePage from "@/components/homepage";
import Header from "@/components/header";

export default async function Home() {
  const featuredCars: Car[] | any = await getFeaturedCars();

  

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground"><HomePage featuredCars={featuredCars}  /></main>
      
    </>
  );
}