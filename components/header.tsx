'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, CarFront, Menu, X } from 'lucide-react'
import Image from 'next/image'
import { UserButton, useUser } from '@clerk/nextjs'
import { ThemeToggle } from './theme-switcher'
import { useRouter } from 'next/navigation'

interface HeaderProps {
  isAdminPage?: boolean
}

const Header = ({ isAdminPage = false }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { user } = useUser()
  const isAdmin = user?.publicMetadata?.role === 'ADMIN'

  const router = useRouter()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <motion.header
      className="fixed top-0 w-full header bg-background/95 backdrop-blur-md z-50 border-b border-border shadow-glow"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="relative flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatDelay: 4,
          }}
          onClick={() => router.push('/')}

        >
          <motion.div
            className="absolute top-3 h-15 inset-0 rounded-4xl bg-gradient-to-r dark:from-accent/30 dark:via-accent/50 dark:to-accent/30 blur-lg
                      from-accent2/0 via-accent2/30 to-accent2/0"
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatDelay: 4,
            }}
          />
          <Image
            src={`${isAdminPage ? '/chuan_DP.png' : '/chuan_CMAS.png'}`}
            alt="Car Marketplace AI System"
            width={250}
            height={50}
            className=" relative z-10"
            quality={90}
            priority
          />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[140%] h-[45%]
  bg-accent/10 blur-3xl rounded-full"></div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Reservations */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="group relative flex items-center gap-2 px-5 py-2.5 border-2 border-accent/70 text-foreground font-medium rounded-full transition-all duration-300 hover:bg-accent/10 hover:border-accent hover:text-accent-foreground shadow-glow"
            onClick={() => router.push('/reservations')}
          >
            <CarFront size={18} className="group-hover:rotate-12 transition-transform" />
            <span>My Reservations</span>
            <motion.div
              className="absolute inset-0 rounded-full bg-accent/20 blur opacity-0 group-hover:opacity-100"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>

          {/* Saved Cars */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="group relative flex items-center gap-2 px-6 py-2.5 bg-accent/70 text-accent-foreground font-semibold rounded-full shadow-glow transition-all duration-300 hover:bg-accent/95 hover:shadow-glow"
            onClick={() => router.push('/saved-cars')}
          >
            <Heart size={18} className="group-hover:scale-110 transition-transform fill-current" />
            <span className="text-foreground">Saved Cars</span>
          </motion.button>

          {/* UserButton */}
          <motion.div whileHover={{ scale: 1.10 }} className="ml-4">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-10 h-10 bg-primary border border-accent rounded-full flex items-center justify-center',
                },
              }}
            />
          </motion.div>
          <ThemeToggle /> {/* ✅ Dùng ThemeSwitcher */}
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-all duration-200"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 border-t border-border overflow-hidden" // ✅ THAY ĐỔI
          >
            <div className="px-4 py-4 space-y-3">
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center gap-3 px-5 py-3 border border-accent/70 text-accent font-medium rounded-xl hover:bg-accent/10 transition-all"
              >
                <CarFront size={20} />
                My Reservations
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center gap-3 px-5 py-3 bg-accent text-accent-foreground font-semibold rounded-xl shadow-glow hover:bg-accent/95 transition-all"
              >
                <Heart size={20} />
                Saved Cars
              </motion.button>

              <motion.div
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center gap-3 px-5 py-3 bg-accent/15 border border-accent/70 rounded-xl cursor-pointer"
              >
                <div className="w-10 h-10 bg-accent/25 border border-accent/70 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold">U</span>
                </div>
                Profile
              </motion.div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header