'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {/* Icon ban đầu: 
            Dùng Sun (mặt trời) làm icon mặc định, ẩn khi dark: 
            Đây là kỹ thuật phổ biến để tránh lỗi render ban đầu (hydration). 
          */}
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          
          {/* Icon thứ hai: 
            Dùng Moon (mặt trăng) làm icon dark, hiện khi dark: 
          */}
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className=' bg-card text-card-foreground '>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          ☀️ Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          🌙 Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          💻 System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}