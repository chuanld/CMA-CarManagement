import arcjet, {  createMiddleware, detectBot, shield } from "@arcjet/next";
import {
  clerkMiddleware,
  createRouteMatcher,
  type ClerkMiddlewareAuth,
} from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/admin (.*)",
  "/saved_cars (.*)",
  "/reservation (.*)",
]);

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  // Optional, but recommended
  // See "Optimizing with route groups" below for more details
  rules: [
    shield({
      mode: 'DRY_RUN',
    }),
    detectBot({
      mode: 'LIVE',
      allow: ['CATEGORY:SEARCH_ENGINE']
    })
  ]
});

const clerk =  clerkMiddleware(async (auth: ClerkMiddlewareAuth,req: NextRequest) => {
    const {userId} = await auth()

    if(!userId && isProtectedRoute(req)){
        const {redirectToSignIn} = await  auth();
        return redirectToSignIn();
    }

    return NextResponse.next();
});



export default createMiddleware(aj, clerk);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",

    "/new-feature-route(.*)",
  ],
};
