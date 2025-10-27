// components/ClientContent.tsx
'use client';
import { useTheme } from 'next-themes';
import Header from './header';
import { Toaster } from 'sonner';

export default function ClientContent({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme(); // hook chỉ dùng bên client

  return (
    <>
      <Header />
      <div className="min-h-screen overflow-x-hidden">{children}</div>
      <Toaster richColors />
    </>
  );
}
