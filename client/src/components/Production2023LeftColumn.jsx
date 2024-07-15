// import React, { useState } from 'react';
import Production2023Card from './Production2023Card';
import Production2023BarChart from './Production2023BarChart';
import Production2023Table from './Production2023Table';
import Production2023CardR from './Production2023CardR';

export default function Production2023LeftColumn() {
  return (
    <div className='w-full flex flex-col justify-between p-2'>
      <div className='flex flex-col lg:flex-row gap-2 w-full'>
        <Production2023Card />

        <Production2023CardR />
      </div>
      <div className='flex-auto w-full mb-20'>
        <Production2023BarChart />
      </div>
      <div className='flex-auto w-full'>{/* <Production2023Table /> */}</div>
    </div>
  );
}
