// app/(main)/cars/[id]/layout.tsx
import { ReactNode } from "react";
import { CarDataProvider } from "./data-provider";

export default async function CarLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;

  return (
    <CarDataProvider id={resolvedParams.id}>
      {children}
    </CarDataProvider>
  );
}
