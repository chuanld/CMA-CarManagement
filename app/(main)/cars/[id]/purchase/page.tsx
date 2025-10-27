import BreadcrumbComponent from '@/components/breadcrumClient';
import React from 'react'
import PurchaseDetails from './_components/purchase-details';
import { CarDataProvider } from '../data-provider';

const PurchasePage = async ({params}: {params: { id: string }}) => {
  const { id } = await params;

  return (
        <div className="container mx-auto px-4 py-10 bg-background text-foreground">
            <section className="w-full  mb-6">
                <BreadcrumbComponent />
            </section>
                <PurchaseDetails  />
            </div>
    );
}

export default PurchasePage