import React, { useState } from 'react';
import ProductionCard from './ProductionCard';
import ProductionBarChart from './ProductionBarChart';
import ProductionTable from './ProductionTable';

export default function ProductionLeftColumn() {
  return (
    <div className='w-full flex flex-col justify-between p-2'>
      <div className='flex flex-col lg:flex-row gap-2 w-full'>
        <ProductionCard />

        <ProductionCard />
      </div>
      <div className='flex-auto w-full'>
        <ProductionBarChart />
      </div>
      <div className='flex-auto w-full'>
        <ProductionTable />
      </div>
    </div>
  );
}
