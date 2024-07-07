import React from 'react';
import Production2024RightColumn from './Production2023RightColumn';
import Production2024LeftColumn from './Production2023LeftColumn';

export default function Dash2024() {
  return (
    <main className='max-w-6xl mx-auto'>
      <div className='flex flex-col flex-1 relative'>
        <div className='grid md:grid-cols-3 grid-cols-1 w-full'>
          <div className='col-span-2'>
            <Production2024LeftColumn />
          </div>
          <div className='w-full'>
            <Production2024RightColumn />
          </div>
        </div>
      </div>
    </main>
  );
}
