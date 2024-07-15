import React, { useState } from 'react';
import Production2022Card from './Production2022Card';
import Production2022BarChart from './Production2022BarChart';
import Production2022Table from './Production2022Table';
import Production2022CardR from './Production2022CardR';

export default function ProductionLeftColumn() {
  return (
    <div className='w-full flex flex-col justify-between p-2'>
      <div className='flex flex-col lg:flex-row gap-2 w-full'>
        <Production2022Card />

        <Production2022CardR />
      </div>
      <div className='flex-auto w-full mb-20'>
        <Production2022BarChart />
      </div>
      <div className='flex-auto w-full'>{/* <Production2022Table /> */}</div>
    </div>
  );
}
