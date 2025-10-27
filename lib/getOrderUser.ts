'use server'

import { checkUser } from '@/lib/checkUser'

export async function getOrCreateUser() {
  // Chạy server-side, tạo user nếu chưa tồn tại
  const user = await checkUser()
  return user
}
