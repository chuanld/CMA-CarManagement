'use client';
import { motion,AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { use } from 'react'
import { usePrefetch } from '../hooks/use-prefetch';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  usePrefetch(["/cars", "/bookings", "/saved-cars","/reservations"]);
  return (
    <div className='container mx-auto my-32 bg-background text-foreground'>
      <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="px-4 sm:px-6 md:px-8"
      >
      {children}
      </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default MainLayout