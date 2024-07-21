import React, { useState } from 'react';
import ProductionCard from './ProductionCard';
import ProductionBarChart from './ProductionBarChart';
import ProductionTable from './ProductionTable';
import ProductionCardR from './ProductionCardR';

export default function ProductionLeftColumn() {
  return (
    <div className='w-full flex flex-col justify-between p-2'>
      <div className='flex flex-col lg:flex-row gap-2 w-full'>
        <ProductionCard />

        <ProductionCardR />
      </div>
      <div className='flex-auto w-full mb-20'>
        <ProductionBarChart />
      </div>
      {/* <div className='flex-auto w-full'>
        <ProductionTable />
      </div> */}
    </div>
  );
}
