'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'
import { Heart, CarFront, Layout, ArrowLeft, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, SignUp, SignUpButton, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import * as Tooltip from '@radix-ui/react-tooltip'
import { User } from '@/types/user'

interface HeaderProps {
  isAdminPage?: boolean
  user?: any
}

const Header = ({ isAdminPage = false, user }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  // const { user } = useUser() // Client-side user data
  const isAdmin = user?.publicMetadata?.role === 'ADMIN'

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <motion.header
      className="fixed top-0 w-full bg-bg-cma/90 backdrop-blur-md z-50 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={isAdminPage ? '/admin' : '/'}>
          <Image
            src="/chuan_cma.png"
            alt="Car MarketAI Logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {isAdminPage ? (
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <Link href="/">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 border-gray-300 text-gray-200 hover:bg-bg-cma hover:text-white transition-colors rounded-lg"
                    >
                      <ArrowLeft size={18} />
                      <span>Back to App</span>
                    </Button>
                  </Link>
                </Tooltip.Trigger>
                <Tooltip.Content className="bg-gray-900 text-white text-xs rounded-lg p-2 shadow-xl border border-blue-200/20">
                  Return to the main application
                  <Tooltip.Arrow className="fill-gray-900" />
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          ) : (
            <SignedIn>
              {!isAdmin && (
                <Tooltip.Provider>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <Link href="/reservations">
                        <Button
                          variant="outline"
                          className="flex items-center gap-2  text-black-500 hover:bg-bg-cma hover:text-white transition-colors rounded-lg"
                        >
                          <CarFront size={18} />
                          <span>My Reservations</span>
                        </Button>
                      </Link>
                    </Tooltip.Trigger>
                    <Tooltip.Content className="bg-gray-900 text-white text-xs rounded-lg p-2 shadow-xl border border-blue-200/20">
                      View your car reservations
                      <Tooltip.Arrow className="fill-gray-900" />
                    </Tooltip.Content>
                  </Tooltip.Root>
                </Tooltip.Provider>
              )}
              <Tooltip.Provider>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <Link href="/saved-cars">
                      <Button
                        className="flex items-center gap-2 bg-bg-cma hover:bg-bg-cma text-white rounded-lg transition-colors"
                      >
                        <Heart size={18} />
                        <span>Saved Cars</span>
                      </Button>
                    </Link>
                  </Tooltip.Trigger>
                  <Tooltip.Content className="bg-gray-900 text-white text-xs rounded-lg p-2 shadow-xl border border-blue-200/20">
                    View your saved cars
                    <Tooltip.Arrow className="fill-gray-900" />
                  </Tooltip.Content>
                </Tooltip.Root>
              </Tooltip.Provider>
              {isAdmin && (
                <Tooltip.Provider>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <Link href="/admin">
                        <Button
                          variant="outline"
                          className="flex items-center gap-2 border-gray-300 text-gray-200 hover:bg-blue-600 hover:text-white transition-colors rounded-lg"
                        >
                          <Layout size={18} />
                          <span>Admin Portal</span>
                        </Button>
                      </Link>
                    </Tooltip.Trigger>
                    <Tooltip.Content className="bg-gray-900 text-white text-xs rounded-lg p-2 shadow-xl border border-blue-200/20">
                      Access the admin dashboard
                      <Tooltip.Arrow className="fill-gray-900" />
                    </Tooltip.Content>
                  </Tooltip.Root>
                </Tooltip.Provider>
              )}
            </SignedIn>
          )}

          <SignedOut>
            {!isAdminPage && (
              <Tooltip.Provider>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <div>
                      <SignInButton forceRedirectUrl="/">
                      <Button
                        variant="outline"
                        className="border-gray-300 text-gray-200 hover:bg-blue-600 hover:text-white transition-colors rounded-lg"
                      >
                        Login
                      </Button>
                    </SignInButton>
                    <SignUpButton forceRedirectUrl="/">
                      <Button
                        variant="outline"
                        className="ml-2 border-gray-300 text-gray-200 hover:bg-blue-600 hover:text-white transition-colors rounded-lg"
                      >
                        Sign Up
                      </Button>
                    </SignUpButton>
                    </div>
                    
                  </Tooltip.Trigger>
                  <Tooltip.Content className="bg-gray-900 text-white text-xs rounded-lg p-2 shadow-xl border border-blue-200/20">
                    Sign in to your account
                    <Tooltip.Arrow className="fill-gray-900" />
                  </Tooltip.Content>
                </Tooltip.Root>
              </Tooltip.Provider>
            )}
          </SignedOut>

          <SignedIn>
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: 'w-10 h-10 rounded-full border-2 border-gray-300',
                      },
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content className="bg-gray-900 text-white text-xs rounded-lg p-2 shadow-xl border border-blue-200/20">
                  Manage your profile
                  <Tooltip.Arrow className="fill-gray-900" />
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          </SignedIn>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            className="text-gray-200 hover:text-blue-600"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-color-cma/95 backdrop-blur-md border-t border-gray-700"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {isAdminPage ? (
                <Link href="/">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 border-gray-300 text-gray-200 hover:bg-blue-600 hover:text-white w-full max-w-xs rounded-lg"
                  >
                    <ArrowLeft size={18} />
                    <span>Back to App</span>
                  </Button>
                </Link>
              ) : (
                <SignedIn>
                  {!isAdmin && (
                    <Link href="/reservations">
                      <Button
                        variant="outline"
                        className="flex items-center gap-2 border-gray-300 text-gray-200 hover:bg-blue-600 hover:text-white w-full max-w-xs rounded-lg"
                      >
                        <CarFront size={18} />
                        <span>My Reservations</span>
                      </Button>
                    </Link>
                  )}
                  <Link href="/saved-cars">
                    <Button
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white w-full max-w-xs rounded-lg"
                    >
                      <Heart size={18} />
                      <span>Saved Cars</span>
                    </Button>
                  </Link>
                  {isAdmin && (
                    <Link href="/admin">
                      <Button
                        variant="outline"
                        className="flex items-center gap-2 border-gray-300 text-gray-200 hover:bg-blue-600 hover:text-white w-full max-w-xs rounded-lg"
                      >
                        <Layout size={18} />
                        <span>Admin Portal</span>
                      </Button>
                    </Link>
                  )}
                </SignedIn>
              )}

              <SignedOut>
                {!isAdminPage && (
                  <SignInButton forceRedirectUrl="/">
                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-200 hover:bg-blue-600 hover:text-white w-full max-w-xs rounded-lg"
                    >
                      Login
                    </Button>
                  </SignInButton>
                )}
              </SignedOut>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header