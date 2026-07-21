'use client'

import { useEffect, useState } from 'react'
import type { User } from '@/types/user' // định nghĩa type nếu có
import { getOrCreateUser } from '@/lib/getOrderUser'

export function useCurrentUser() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true)
      setError(null)
      try {
        const data: User | any = await getOrCreateUser() // gọi server action
        setUser(data)
      } catch (err: any) {
        console.error('Failed to fetch current user:', err)
        setError(err.message || 'Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  return { user, loading, error }
}
