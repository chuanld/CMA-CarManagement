module.exports = [
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/apps/web/lib/checkUser.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkUser",
    ()=>checkUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/app-router/server/currentUser.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/prisma.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/database/dist/index.js [app-rsc] (ecmascript)");
;
;
const checkUser = async ()=>{
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["currentUser"])();
    if (!user) {
        return null;
    }
    try {
        const loggedInUser = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
            where: {
                clerkUserId: user.id
            }
        });
        if (loggedInUser) {
            return loggedInUser;
        }
        const name = `${user.firstName} ${user.lastName}`;
        const newUser = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.create({
            data: {
                clerkUserId: user.id,
                name,
                imageUrl: user.imageUrl,
                email: user.emailAddresses[0].emailAddress
            }
        });
        return newUser;
    } catch (error) {
        console.log(error.message);
    }
};
}),
"[project]/apps/web/lib/getOrderUser.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"008f7ab740e40ddfb234d50c5acbea1dfcaea484c2":"getOrCreateUser"},"",""] */ __turbopack_context__.s([
    "getOrCreateUser",
    ()=>getOrCreateUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$checkUser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/checkUser.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function getOrCreateUser() {
    // Chạy server-side, tạo user nếu chưa tồn tại
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$checkUser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkUser"])();
    return user;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getOrCreateUser
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOrCreateUser, "008f7ab740e40ddfb234d50c5acbea1dfcaea484c2", null);
}),
"[project]/apps/web/lib/supabase.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use server";
// import { createServerClient } from "@supabase/ssr";
// import { SupabaseClient } from "@supabase/supabase-js";
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// export const createClient = (cookieStore: any): SupabaseClient => {
//   return createServerClient(
//     supabaseUrl!,
//     supabaseKey!,
//     {
//       cookies: {
//         getAll() {
//           return cookieStore.getAll()
//         },
//         setAll(cookiesToSet) {
//           try {
//             cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
//           } catch {
//             // The `setAll` method was called from a Server Component.
//             // This can be ignored if you have middleware refreshing
//             // user sessions.
//           }
//         },
//       },
//     },
//   );
// };
__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$110$2e$6$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.110.6/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$110$2e$6$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.110.6/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
;
const createClient = (cookieStore)=>{
    const supabaseUrl = ("TURBOPACK compile-time value", "https://vuuuoaecbivjtnstczol.supabase.co");
    const supabaseKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1dXVvYWVjYml2anRuc3Rjem9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3NzAyMTMsImV4cCI6MjA3NjM0NjIxM30.DE4DmQdiI5MCls8HasTa6m-kJq7iHjZPwzSwUk3SqLc");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$110$2e$6$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(supabaseUrl, supabaseKey, {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll (cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));
                } catch  {
                // Ignore if called from a Server Component
                }
            }
        }
    });
};
}),
"[project]/apps/web/schemas/carFilterSchema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GetCarsInputSchema",
    ()=>GetCarsInputSchema,
    "carFilterSchema",
    ()=>carFilterSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const carFilterSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    search: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "ALL",
        "AVAILABLE",
        "RESERVED",
        "SOLD",
        "RENTED",
        "MAINTENANCE",
        "PENDING"
    ]).optional(),
    featured: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    make: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Make cannot be empty").optional(),
    model: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    year: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(1900, "Year must be 1900 or later").max(new Date().getFullYear() + 1, "Year cannot be in the future").optional(),
    bodyType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "Sedan",
        "SUV",
        "Truck",
        "Van"
    ]).optional(),
    fuelType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "Petrol",
        "Diesel",
        "Electric",
        "Hybrid"
    ]).optional(),
    transmission: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "Automatic",
        "Manual",
        "Semi-Automatic"
    ]).optional(),
    color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    negotiable: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    sortBy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "createdAt",
        "price",
        "year",
        "countViews",
        "avgRating"
    ]).optional(),
    sortOrder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "asc",
        "desc"
    ]).optional(),
    page: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(1).default(1),
    // v3 fields
    carType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "SALE",
        "RENT",
        "BOTH"
    ]).optional(),
    countViews: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0).optional(),
    avgRating: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(5).optional(),
    // Price filters
    minSalePrice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).step(0.01).optional(),
    maxSalePrice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).optional(),
    minRentHourlyPrice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).optional(),
    maxRentHourlyPrice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).optional(),
    minRentDailyPrice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).optional(),
    maxRentDailyPrice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).optional(),
    minDeposit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).optional(),
    maxDeposit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).optional(),
    limit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(1).max(100).default(10)
}).refine((data)=>!data.minSalePrice || !data.maxSalePrice || data.minSalePrice <= data.maxSalePrice, {
    message: "Min sale price must be less than or equal to max sale price",
    path: [
        "minSalePrice"
    ]
}).refine((data)=>!data.minRentHourlyPrice || !data.maxRentHourlyPrice || data.minRentHourlyPrice <= data.maxRentHourlyPrice, {
    message: "Min hourly price must be less than or equal to max hourly price",
    path: [
        "minRentHourlyPrice"
    ]
}).refine((data)=>!data.minRentDailyPrice || !data.maxRentDailyPrice || data.minRentDailyPrice <= data.maxRentDailyPrice, {
    message: "Min daily price must be less than or equal to max daily price",
    path: [
        "minRentDailyPrice"
    ]
}).refine((data)=>!data.minDeposit || !data.maxDeposit || data.minDeposit <= data.maxDeposit, {
    message: "Min deposit must be less than or equal to max deposit",
    path: [
        "minDeposit"
    ]
});
const GetCarsInputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    search: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    pagination: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        page: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive().default(1),
        limit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive().max(100).default(10)
    }).optional(),
    sortBy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "createdAt",
        "year",
        "price",
        "hourlyPrice",
        "dailyPrice"
    ]).default("createdAt"),
    sortOrder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "asc",
        "desc"
    ]).default("desc"),
    filters: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "AVAILABLE",
            "RESERVED",
            "SOLD",
            "RENTED",
            "MAINTENANCE",
            "PENDING"
        ]).optional(),
        featured: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
        bodyType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        fuelType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        transmission: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        year: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().optional(),
        make: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        model: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        countViews: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().optional(),
        avgRating: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(5).optional(),
        //v3 fields
        carType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "SALE",
            "RENT",
            "BOTH"
        ]).optional(),
        minSalePrice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
        maxSalePrice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
        minRentHourlyPrice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
        maxRentHourlyPrice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
        minRentDailyPrice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
        maxRentDailyPrice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
        minDeposit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
        maxDeposit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
        negotiable: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional()
    }).optional()
});
}),
"[project]/apps/web/actions/cars.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"404d5cc0c3ea8209c7a65447a3dd92d2274f76013a":"addCar","4052d773313940a845cc4047563570f80cb3ae8edb":"getCars","4098d263778dfd615962dc23d9ce217b90871ad952":"deleteCar","40cfc1ea9285b94f6cab1a13d521be712268577ee7":"processCarImageAI","40f7aa24867aaea714125b90c65136245b1e5dbf96":"adminGetCarById","60c7d06d0009120330377105607692c224d3bcedf5":"adminUpdateCarById","60cb21ff4170872855742cffae83548ef3b735152c":"updateCarStatus","789305b779e8039006fa96d4102e1177c62dde828a":"uploadImageToSupabase"},"",""] */ __turbopack_context__.s([
    "addCar",
    ()=>addCar,
    "adminGetCarById",
    ()=>adminGetCarById,
    "adminUpdateCarById",
    ()=>adminUpdateCarById,
    "deleteCar",
    ()=>deleteCar,
    "getCars",
    ()=>getCars,
    "processCarImageAI",
    ()=>processCarImageAI,
    "updateCarStatus",
    ()=>updateCarStatus,
    "uploadImageToSupabase",
    ()=>uploadImageToSupabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/prisma.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/database/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$2$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uuid@13.0.2/node_modules/uuid/dist-node/v4.js [app-rsc] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$helper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/helper.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$google$2b$generative$2d$ai$40$0$2e$24$2e$1$2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@google+generative-ai@0.24.1/node_modules/@google/generative-ai/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$schemas$2f$carFilterSchema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/schemas/carFilterSchema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
async function fileToBase64(file) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    return buffer.toString("base64");
}
async function processCarImageAI(file) {
    try {
        if (!process.env.GEMINI_API_KEY) {
            throw new Error("Missing GEMINI_API_KEY");
        }
        const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$google$2b$generative$2d$ai$40$0$2e$24$2e$1$2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash"
        });
        const base64Image = await fileToBase64(file);
        const imagePart = {
            inlineData: {
                data: base64Image,
                mimeType: file.type
            }
        };
        const prompt = `
            Analyze this car image and extract the following information:
            1. Make (manufacturer)
            2. Model
            3. Year (approximately)
            4. Color
            5. Body type (SUV, Sedan, Hatchback, etc.)
            6. Mileage (your best guess, but should be a number)
            7. Fuel type (your best guess)
            8. Transmission type (your best guess)
            9. Seats (your best guess)
            10. Sale Price (your best guess, it's a price sale for car, only show the number following VND (VietNam currency), no currency symbols)
            11. Rent Hourly Price (your best guess, it's a price for renting car hourly, normal range 200000 - 400000vnd, only show the number following VND (VietNam currency), no currency symbols)
            12. Rent Daily Price (your best guess, it's a price for renting car daily, normal range 1000000 - 2000000vnd, only show the number following VND (VietNam currency), no currency symbols)
            13. Short Description as to be added to a car listing

            Format your response as a clean JSON object with these fields:
            {
                "make": "",
                "model": "",
                "year": 0000,
                "color": "",
                "salePrice": 2000000000,
                "rentHourlyPrice":300000,
                "rentDailyPrice":1200000,
                "mileage": 50,
                "bodyType": "",
                "fuelType": "",
                "transmission": "",
                "seats": 4,
                "description": "",
                "confidence": 0.0
            }

            For confidence, provide a value between 0 and 1 representing how confident you are in your overall identification.
            Only respond with the JSON object, nothing else.
        `;
        const result = await model.generateContent([
            imagePart,
            prompt
        ]);
        const response = await result.response;
        const text = response.text();
        const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
        let retries = 3;
        while(0 < retries){
            try {
                const carDetails = JSON.parse(cleanedText);
                const requiredFields = [
                    "make",
                    "model",
                    "year",
                    "color",
                    "salePrice",
                    "rentHourlyPrice",
                    "rentDailyPrice",
                    "mileage",
                    "bodyType",
                    "fuelType",
                    "transmission",
                    "description",
                    "confidence"
                ];
                const missingFields = requiredFields.filter((field)=>!(field in carDetails));
                if (missingFields.length > 0) {
                    throw new Error("Missing fields in AI response: " + missingFields.join(", "));
                }
                return {
                    success: true,
                    data: carDetails
                };
            } catch (err) {
                console.error("Error parsing AI response:", err);
                if (retries && err.message) {
                    retries--;
                    await new Promise((res)=>setTimeout(res, 2000));
                } else {
                    return {
                        success: false,
                        error: "Error parsing AI response: " + err.message
                    };
                }
            }
        }
    } catch (error) {
        console.error();
        throw new Error("Gemini API error:" + error.message);
    }
}
async function uploadImageToSupabase(supabase, folderPath, base64Image, index) {
    if (!base64Image.startsWith("data:image/")) return null;
    const base64 = base64Image.split(",")[1];
    const imageBuffer = Buffer.from(base64, "base64");
    const mimeType = base64Image.match(/data:(image\/[a-zA-Z0-9]+);/);
    const fileExtension = mimeType ? mimeType[1].split("/")[1] : "jpeg";
    const fileName = `image-${Date.now()}-${index}.${fileExtension}`;
    const filePath = `${folderPath}/${fileName}`;
    const { error } = await supabase.storage.from("car-images").upload(filePath, imageBuffer, {
        contentType: `image/${fileExtension}`
    });
    if (error) throw new Error("Supabase upload error: " + error.message);
    return `${"TURBOPACK compile-time value", "https://vuuuoaecbivjtnstczol.supabase.co"}/storage/v1/object/public/car-images/${filePath}`;
}
async function addCar({ carData, images }) {
    try {
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) throw new Error("Unauthorized");
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
            where: {
                clerkUserId: userId
            },
            include: {
                dealers: true
            }
        });
        if (!user) throw new Error("User not found");
        // ensure dealer
        let dealer = user.dealers?.[0];
        if (!dealer) {
            dealer = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].dealer.create({
                data: {
                    name: user.name + "Dealer" || "Unnamed Dealer",
                    ownerId: user.id,
                    email: user.email,
                    phone: user.phone || "updating...",
                    address: "updating...",
                    description: "init dealer profile, please update.",
                    logoUrl: user.imageUrl || ""
                }
            });
            // connect dealer to user (optional, but keep consistency)
            await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.update({
                where: {
                    id: user.id
                },
                data: {
                    dealers: {
                        connect: {
                            id: dealer.id
                        }
                    }
                }
            });
        }
        // upload images -> supabase
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])(cookieStore);
        const folderPath = `cars/${dealer.id}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$2$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])()}`;
        const imageUrls = [];
        for(let i = 0; i < images.length; i++){
            const base64Image = images[i];
            if (!base64Image || typeof base64Image !== "string" || !base64Image.startsWith("data:image/")) {
                console.warn("Skipping invalid image format");
                continue;
            }
            // Extract the base64 part (remove data:image/...;base64,)
            const base64 = base64Image.split(",")[1];
            const imageBuffer = Buffer.from(base64, "base64");
            // Determine file extension
            const mimeType = base64Image.match(/data:(image\/[a-zA-Z0-9]+);/);
            const fileExtension = mimeType ? mimeType[1].split("/")[1] // image/png → png
             : "jpeg";
            // Create filename
            const fileName = `image-${Date.now()}-${i}.${fileExtension}`;
            const filePath = `${folderPath}/${fileName}`;
            // Upload to Supabase
            const { data, error } = await supabase.storage.from("car-images").upload(filePath, imageBuffer, {
                contentType: `image/${fileExtension}`
            });
            if (error) {
                console.error("Supabase upload error:", error);
                throw new Error("Image upload failed: " + error.message);
            }
            const publicUrl = `${("TURBOPACK compile-time value", "https://vuuuoaecbivjtnstczol.supabase.co")}/storage/v1/object/public/car-images/${filePath}`;
            imageUrls.push(publicUrl);
        }
        if (imageUrls.length === 0) {
            throw new Error("No valid images uploaded");
        }
        // 1) Create car (NO price here)
        const createdCar = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].car.create({
            data: {
                dealerId: dealer.id,
                make: carData.make,
                model: carData.model,
                year: carData.year,
                mileage: carData.mileage ?? 0,
                color: carData.color ?? "",
                fuelType: carData.fuelType ?? "",
                transmission: carData.transmission ?? "",
                bodyType: carData.bodyType ?? "",
                seats: carData.seats ?? null,
                description: carData.description ?? "",
                status: (carData.status || "AVAILABLE").toUpperCase(),
                featured: !!carData.featured,
                images: imageUrls
            }
        });
        // 2) If sale info provided -> create SaleInfo
        if ((carData.carType === "SALE" || carData.carType === "BOTH") && carData.salePrice !== undefined && carData.salePrice !== null && carData.salePrice !== "") {
            // price should be decimal-like (string/number). Prisma will coerce.
            await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].saleInfo.create({
                data: {
                    carId: createdCar.id,
                    price: typeof carData.salePrice === "string" ? carData.salePrice : Number(carData.salePrice),
                    negotiable: !!carData.negotiable,
                    status: (carData.saleStatus || "AVAILABLE").toUpperCase()
                }
            });
        }
        // 3) If rent info provided -> create RentInfo
        // check at least one rent field exists
        if (carData.carType === "RENT" || carData.carType === "BOTH" || carData.rentHourlyPrice !== undefined || carData.rentDailyPrice !== undefined || carData.deposit !== undefined) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].rentInfo.create({
                data: {
                    carId: createdCar.id,
                    hourlyPrice: carData.rentHourlyPrice !== undefined ? typeof carData.rentHourlyPrice === "string" ? carData.rentHourlyPrice : Number(carData.rentHourlyPrice) : 0,
                    dailyPrice: carData.rentDailyPrice !== undefined ? typeof carData.rentDailyPrice === "string" ? carData.rentDailyPrice : Number(carData.rentDailyPrice) : null,
                    deposit: carData.deposit !== undefined ? typeof carData.deposit === "string" ? carData.deposit : Number(carData.deposit) : null,
                    available: carData.available !== undefined ? !!carData.available : true
                }
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/cars");
        return {
            success: true,
            data: {
                carId: createdCar.id
            }
        };
    } catch (err) {
        console.error("Add car error:", err);
        return {
            success: false,
            error: err?.message ?? String(err)
        };
    }
}
async function getCars(input) {
    try {
        const validatedInput = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$schemas$2f$carFilterSchema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GetCarsInputSchema"].parse(input);
        const { search, pagination, sortBy, sortOrder, filters } = validatedInput;
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) throw new Error("Unauthorized");
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
            where: {
                clerkUserId: userId
            }
        });
        if (!user) throw new Error("User not found");
        if (user.role !== "ADMIN") throw new Error("Forbidden");
        const where = {};
        if (search) {
            where.OR = [
                {
                    make: {
                        contains: search,
                        mode: "insensitive"
                    }
                },
                {
                    model: {
                        contains: search,
                        mode: "insensitive"
                    }
                },
                {
                    color: {
                        contains: search,
                        mode: "insensitive"
                    }
                },
                {
                    bodyType: {
                        contains: search,
                        mode: "insensitive"
                    }
                },
                {
                    fuelType: {
                        contains: search,
                        mode: "insensitive"
                    }
                },
                {
                    transmission: {
                        contains: search,
                        mode: "insensitive"
                    }
                },
                {
                    description: {
                        contains: search,
                        mode: "insensitive"
                    }
                }
            ];
        }
        if (filters) {
            if (filters.status) where.status = filters.status;
            if (filters.featured !== undefined) where.featured = filters.featured;
            if (filters.bodyType) where.bodyType = {
                contains: filters.bodyType,
                mode: "insensitive"
            };
            if (filters.fuelType) where.fuelType = {
                contains: filters.fuelType,
                mode: "insensitive"
            };
            if (filters.transmission) where.transmission = {
                contains: filters.transmission,
                mode: "insensitive"
            };
            if (filters.color) where.color = {
                contains: filters.color,
                mode: "insensitive"
            };
            if (filters.year) where.year = filters.year;
            if (filters.make) where.make = {
                contains: filters.make,
                mode: "insensitive"
            };
            if (filters.model) where.model = {
                contains: filters.model,
                mode: "insensitive"
            };
            if (filters.countViews) {
                where.countViews = {
                    gte: filters.countViews
                };
            }
            if (filters.avgRating) {
                where.avgRating = {
                    gte: filters.avgRating
                };
            }
            if (filters.carType === "SALE") {
                where.saleInfo = {
                    isNot: null
                };
                where.rentInfo = null;
            } else if (filters.carType === "RENT") {
                where.rentInfo = {
                    isNot: null
                };
                where.saleInfo = null;
            }
            // v3 price filters
            if (filters.carType === "SALE" || filters.carType === "BOTH") {
                if (filters.minSalePrice || filters.maxSalePrice || filters.negotiable !== undefined) {
                    where.saleInfo = where.saleInfo || {};
                    if (filters.minSalePrice) where.saleInfo.price = {
                        gte: filters.minSalePrice
                    };
                    if (filters.maxSalePrice) where.saleInfo.price = {
                        ...where.saleInfo.price,
                        lte: filters.maxSalePrice
                    };
                    if (filters.negotiable !== undefined) where.saleInfo.negotiable = filters.negotiable;
                }
            }
            if (filters.carType === "RENT" || filters.carType === "BOTH") {
                if (filters.minRentHourlyPrice || filters.maxRentHourlyPrice) {
                    where.rentInfo = where.rentInfo || {};
                    if (filters.minRentHourlyPrice) where.rentInfo.hourlyPrice = {
                        gte: filters.minRentHourlyPrice
                    };
                    if (filters.maxRentHourlyPrice) where.rentInfo.hourlyPrice = {
                        ...where.rentInfo.hourlyPrice,
                        lte: filters.maxRentHourlyPrice
                    };
                }
                if (filters.minRentDailyPrice || filters.maxRentDailyPrice) {
                    where.rentInfo = where.rentInfo || {};
                    if (filters.minRentDailyPrice) where.rentInfo.dailyPrice = {
                        gte: filters.minRentDailyPrice
                    };
                    if (filters.maxRentDailyPrice) where.rentInfo.dailyPrice = {
                        ...where.rentInfo.dailyPrice,
                        lte: filters.maxRentDailyPrice
                    };
                }
                if (filters.minDeposit || filters.maxDeposit) {
                    where.rentInfo = where.rentInfo || {};
                    if (filters.minDeposit) where.rentInfo.deposit = {
                        gte: filters.minDeposit
                    };
                    if (filters.maxDeposit) where.rentInfo.deposit = {
                        ...where.rentInfo.deposit,
                        lte: filters.maxDeposit
                    };
                }
            }
        }
        // Pagination
        const page = pagination?.page || 1;
        const limit = pagination?.limit || 10;
        const skip = (page - 1) * limit;
        // Sorting
        let orderBy = [
            {
                createdAt: sortOrder
            }
        ];
        switch(sortBy){
            case "price":
                orderBy = [
                    {
                        saleInfo: {
                            price: sortOrder
                        }
                    },
                    {
                        createdAt: sortOrder
                    }
                ];
                break;
            case "hourlyPrice":
                orderBy = [
                    {
                        rentInfo: {
                            hourlyPrice: sortOrder
                        }
                    },
                    {
                        createdAt: sortOrder
                    }
                ];
                break;
            case "dailyPrice":
                orderBy = [
                    {
                        rentInfo: {
                            dailyPrice: sortOrder
                        }
                    },
                    {
                        createdAt: sortOrder
                    }
                ];
                break;
            case "year":
            case "createdAt":
                orderBy = [
                    {
                        [sortBy]: sortOrder
                    }
                ];
                break;
            default:
                orderBy = [
                    {
                        createdAt: sortOrder
                    }
                ];
        }
        // Query
        const total = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].car.count({
            where
        });
        const cars = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].car.findMany({
            where,
            orderBy,
            skip,
            take: limit,
            include: {
                dealer: {
                    include: {
                        workingHours: true
                    }
                },
                saleInfo: true,
                rentInfo: true,
                _count: {
                    select: {
                        savedBy: true,
                        reviews: true
                    }
                }
            }
        });
        const serialized = cars.map((car)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$helper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializeCarData"])(car));
        return {
            success: true,
            data: serialized,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        };
    } catch (err) {
        console.error("Get cars error:", err);
        return {
            success: false,
            error: err instanceof Error ? err.message : String(err)
        };
    }
}
async function deleteCar(carId) {
    try {
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) throw new Error("Unauthorized");
        const car = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].car.findUnique({
            where: {
                id: carId
            }
        });
        if (!car) throw new Error("Car not found");
        await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].car.delete({
            where: {
                id: carId
            }
        });
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])(cookieStore);
        const filePaths = car.images.map((url)=>{
            const match = url.match(/\/car-images\/(.*)/);
            return match ? match[1] : null;
        }).filter(Boolean);
        if (filePaths.length > 0) {
            const { error } = await supabase.storage.from("car-images").remove(filePaths);
            if (error) console.warn("Failed to delete images:", error.message);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/cars");
        return {
            success: true
        };
    } catch (err) {
        return {
            success: false,
            error: err.message
        };
    }
}
async function updateCarStatus(id, { status, featured }) {
    try {
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) throw new Error("Unauthorized");
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
            where: {
                clerkUserId: userId
            }
        });
        if (!user) throw new Error("User not found");
        if (user.role !== "ADMIN") throw new Error("Forbidden");
        const updateData = {};
        if (status) updateData.status = status;
        if (featured !== undefined) updateData.featured = featured;
        await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].car.update({
            where: {
                id
            },
            data: updateData
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/cars");
        return {
            success: true
        };
    } catch (err) {
        return {
            success: false,
            error: err.message
        };
    }
}
async function adminGetCarById(carId) {
    try {
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) throw new Error("Unauthorized");
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
            where: {
                clerkUserId: userId
            }
        });
        if (!user) throw new Error("User not found");
        if (user.role !== "ADMIN") throw new Error("Forbidden");
        const car = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].car.findUnique({
            where: {
                id: carId
            },
            include: {
                dealer: {
                    include: {
                        workingHours: true
                    }
                },
                saleInfo: true,
                rentInfo: true,
                reviews: true,
                _count: {
                    select: {
                        savedBy: true,
                        reviews: true
                    }
                }
            }
        });
        if (!car) throw new Error("Car not found");
        const serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$helper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializeCarData"])(car);
        return {
            success: true,
            data: serialized
        };
    } catch (err) {
        return {
            success: false,
            error: err.message
        };
    }
}
async function adminUpdateCarById(carId, { carData, images }) {
    try {
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) throw new Error("Unauthorized");
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
            where: {
                clerkUserId: userId
            },
            include: {
                dealers: true
            }
        });
        if (!user) throw new Error("User not found");
        // ensure dealer
        let dealer = user.dealers?.[0];
        if (!dealer) {
            dealer = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].dealer.create({
                data: {
                    name: user.name + "Dealer" || "Unnamed Dealer",
                    ownerId: user.id,
                    email: user.email,
                    phone: user.phone || "updating...",
                    address: "updating...",
                    description: "init dealer profile, please update.",
                    logoUrl: user.imageUrl || ""
                }
            });
            // connect dealer to user (optional, but keep consistency)
            await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.update({
                where: {
                    id: user.id
                },
                data: {
                    dealers: {
                        connect: {
                            id: dealer.id
                        }
                    }
                }
            });
        }
        // upload images -> supabase
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])(cookieStore);
        const car = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].car.findUnique({
            where: {
                id: carId
            },
            include: {
                saleInfo: true,
                rentInfo: true
            }
        });
        if (!car) throw new Error("Car not found");
        const dealerId = dealer.id;
        const oldImages = (carData.images || []).filter((img)=>typeof img === "string" && img.startsWith("http"));
        const newImages = images.filter((img)=>typeof img === "string" && img.startsWith("data:image/"));
        const folderPath = `cars/${dealerId}/${carId}`;
        const uploadedUrls = await Promise.all(newImages.map((img, i)=>uploadImageToSupabase(supabase, folderPath, img, i).catch(()=>null)));
        const validUploadedUrls = uploadedUrls.filter((url)=>typeof url === "string");
        const finalImagesUrls = [
            ...oldImages,
            ...validUploadedUrls
        ];
        const updatedCar = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].car.update({
            where: {
                id: carId
            },
            data: {
                dealerId,
                make: carData.make,
                model: carData.model,
                year: carData.year ? Number(carData.year) : 2025,
                mileage: carData.mileage ? Number(carData.mileage) : 50,
                color: carData.color ? carData.color : "white",
                fuelType: carData.fuelType ?? "",
                transmission: carData.transmission ?? "",
                bodyType: carData.bodyType ?? "",
                seats: carData.seats ?? null,
                description: carData.description ?? "",
                status: (carData.status || "AVAILABLE").toUpperCase(),
                featured: !!carData.featured,
                images: finalImagesUrls
            }
        });
        if (carData.carType === "SALE" || carData.carType === "BOTH") {
            await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].saleInfo.upsert({
                where: {
                    carId: updatedCar.id
                },
                create: {
                    carId: updatedCar.id,
                    price: carData.saleInfo?.price ?? 0,
                    negotiable: !!carData.saleInfo?.negotiable,
                    status: (carData.saleInfo?.status || "AVAILABLE").toUpperCase()
                },
                update: {
                    ...carData.saleInfo?.price !== undefined && {
                        price: carData.saleInfo.price
                    },
                    ...carData.saleInfo?.negotiable !== undefined && {
                        negotiable: !!carData.saleInfo.negotiable
                    },
                    ...carData.saleInfo?.status !== undefined && {
                        status: (carData.saleInfo.status || "AVAILABLE").toUpperCase()
                    }
                }
            });
        }
        if (carData.carType === "RENT" || carData.carType === "BOTH") {
            await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].rentInfo.upsert({
                where: {
                    carId: updatedCar.id
                },
                create: {
                    carId: updatedCar.id,
                    hourlyPrice: carData.rentInfo?.hourlyPrice ?? 0,
                    dailyPrice: carData.rentInfo?.dailyPrice ?? 0,
                    deposit: carData.rentInfo?.deposit ?? 0
                },
                update: {
                    ...carData.rentInfo?.hourlyPrice !== undefined && {
                        hourlyPrice: carData.rentInfo.hourlyPrice
                    },
                    ...carData.rentInfo?.dailyPrice !== undefined && {
                        dailyPrice: carData.rentInfo.dailyPrice
                    },
                    ...carData.rentInfo?.deposit !== undefined && {
                        deposit: carData.rentInfo.deposit
                    }
                }
            });
        }
        if (carData.carType === "SALE") {
            await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].rentInfo.deleteMany({
                where: {
                    carId
                }
            });
        } else if (carData.carType === "RENT") {
            await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].saleInfo.deleteMany({
                where: {
                    carId
                }
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/cars");
        return {
            success: true,
            data: {
                carId: updatedCar.id
            }
        };
    } catch (err) {
        return {
            success: false,
            error: err.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    processCarImageAI,
    uploadImageToSupabase,
    addCar,
    getCars,
    deleteCar,
    updateCarStatus,
    adminGetCarById,
    adminUpdateCarById
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(processCarImageAI, "40cfc1ea9285b94f6cab1a13d521be712268577ee7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(uploadImageToSupabase, "789305b779e8039006fa96d4102e1177c62dde828a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addCar, "404d5cc0c3ea8209c7a65447a3dd92d2274f76013a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCars, "4052d773313940a845cc4047563570f80cb3ae8edb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCar, "4098d263778dfd615962dc23d9ce217b90871ad952", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCarStatus, "60cb21ff4170872855742cffae83548ef3b735152c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(adminGetCarById, "40f7aa24867aaea714125b90c65136245b1e5dbf96", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(adminUpdateCarById, "60c7d06d0009120330377105607692c224d3bcedf5", null);
}),
"[project]/apps/web/app/favicon.ico.mjs { IMAGE => \"[project]/apps/web/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/app/favicon.ico.mjs { IMAGE => \"[project]/apps/web/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/apps/web/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/apps/web/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/apps/web/app/(admin)/admin/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/app/(admin)/admin/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/apps/web/app/(admin)/admin/cars/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/app/(admin)/admin/cars/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/apps/web/app/(admin)/admin/cars/_components/car-list.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/apps/web/app/(admin)/admin/cars/_components/car-list.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/web/app/(admin)/admin/cars/_components/car-list.tsx <module evaluation>", "default");
}),
"[project]/apps/web/app/(admin)/admin/cars/_components/car-list.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/apps/web/app/(admin)/admin/cars/_components/car-list.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/web/app/(admin)/admin/cars/_components/car-list.tsx", "default");
}),
"[project]/apps/web/app/(admin)/admin/cars/_components/car-list.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f28$admin$292f$admin$2f$cars$2f$_components$2f$car$2d$list$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/web/app/(admin)/admin/cars/_components/car-list.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f28$admin$292f$admin$2f$cars$2f$_components$2f$car$2d$list$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/apps/web/app/(admin)/admin/cars/_components/car-list.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f28$admin$292f$admin$2f$cars$2f$_components$2f$car$2d$list$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/apps/web/app/(admin)/admin/cars/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "dynamic",
    ()=>dynamic,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f28$admin$292f$admin$2f$cars$2f$_components$2f$car$2d$list$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/(admin)/admin/cars/_components/car-list.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
;
const dynamic = 'force-dynamic';
const metadata = {
    title: 'Car Marketplace | CMA Admin',
    description: 'Manage cars in the admin panel'
};
const Cars = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/apps/web/app/(admin)/admin/cars/page.tsx",
                lineNumber: 15,
                columnNumber: 29
            }, void 0),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f28$admin$292f$admin$2f$cars$2f$_components$2f$car$2d$list$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/apps/web/app/(admin)/admin/cars/page.tsx",
                lineNumber: 16,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/app/(admin)/admin/cars/page.tsx",
            lineNumber: 15,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/app/(admin)/admin/cars/page.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Cars;
}),
"[project]/apps/web/app/(admin)/admin/cars/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/app/(admin)/admin/cars/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4814962f._.js.map