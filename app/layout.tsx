import './globals.css';
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ThemeProvider } from 'next-themes';
import ProgressBar from '@/components/progress-bar';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Car Marketplace System",
  description: "A platform to buy and sell cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ClerkProvider>
          <ThemeProvider attribute="class" defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            {/* <ClientContent> */}
              <Header />
              <ProgressBar />
              <div className="min-h-screen overflow-x-hidden bg-background text-foreground">{children}</div>
              <Toaster richColors />
            {/* </ClientContent> */}

          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
