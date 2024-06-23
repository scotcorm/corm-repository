import React from 'react';
import ProductionNavbar from './ProductionNavbar';
import ProductionRightColumn from './ProductionRightColumn';
import ProductionLeftColumn from './ProductionLeftColumn';

export default function ProductionProfile() {
  return (
    <main className='max-w-6xl mx-auto'>
      <div className='flex flex-col flex-1 relative'>
        <ProductionNavbar />
        <div className='grid md:grid-cols-3 grid-cols-1 w-full'>
          <div className='col-span-2'>
            <ProductionLeftColumn />
          </div>
          <div className='w-full'>
            <ProductionRightColumn />
          </div>
        </div>
      </div>
    </main>
  );
}
