import React, { useState } from 'react';
import Production2024Card from './Production2024Card';
import Production2024BarChart from './Production2024BarChart';
import Production2024Table from './Production2024Table';
import Production2024CardR from './Production2024CardR';

export default function Production2024LeftColumn() {
  return (
    <div className='w-full flex flex-col justify-between p-2'>
      <div className='flex flex-col lg:flex-row gap-2 w-full'>
        <Production2024Card />

        <Production2024CardR />
      </div>
      <div className='flex-auto w-full'>{<Production2024BarChart />}</div>
      <div className='flex-auto w-full'>{<Production2024Table />}</div>
    </div>
  );
}
