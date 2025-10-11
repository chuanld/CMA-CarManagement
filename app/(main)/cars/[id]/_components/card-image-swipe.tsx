"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ImageIcon, View, ZoomIn } from 'lucide-react';
import { Car } from '@/types/car';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";



type CarProps = {
    data: Car,
    testDriveInfo?: any
}

const CardImageSwipe = ({ car }: { car: any }) => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    return (
        <>
            {/* Gallery Section */}
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-indigo-500" />
                Vehicle Gallery
            </h3>

            <Swiper
                navigation
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={2}
                className="rounded-xl flex items-center justify-center"
            >
                {car.images.map((img: string, i: number) => (
                    <SwiperSlide key={i} className='group relative cursor-pointer w-full'>
                        <img
                            src={img}
                            alt={`Car ${i + 1}`}
                            className="rounded-xl w-full h-64 object-cover shadow-md hover:scale-105 transition-transform duration-300"
                        />
                        <div
                            onClick={() => {
                                setIndex(i);
                                setOpen(true);
                            }}
                            className="absolute inset-0 bg-gray-100 bg-opacity-40 opacity-0 group-hover:opacity-30 flex items-center justify-center text-white font-semibold transition">
                            <ZoomIn className="w-10 h-10 text-green-800" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Lightbox
                open={open}
                index={index}
                close={() => setOpen(false)}
                slides={car.images.map((img: string) => ({ src: img }))}
            />

        </>
    )
}

export default CardImageSwipe