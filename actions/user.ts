import { serializeUserData } from "@/lib/helper";
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function getCurrentUser(clerkUserId: string) {
    try {
        if (!clerkUserId) {
            return { success: false, message: 'Unauthorized' };
        }
        const user = await db.user.findUnique({
             where: { clerkUserId }, 
             select: { id: true, name: true, email: true, phone: true, role: true} 
            }
        );
        const serialUser = serializeUserData(user);
        return { success: true, data: serialUser  };
    } catch (err: unknown) {
        console.error('Get current user error:', err);
        return { success: false, message: (err as Error).message || 'Failed to fetch user' };
    }
}

export async function currentUser(){
    try {
        const {userId: clerkUserId} = await auth()
        if(!clerkUserId){
            return null
        }
        const user = await db.user.findUnique({
            where: { clerkUserId },
            select: { id: true, name: true, email: true, phone: true, role: true }
        })
        return serializeUserData(user)
    } catch (err: unknown) {
        console.error('Error fetching current user:', err)
        return null
    }
}