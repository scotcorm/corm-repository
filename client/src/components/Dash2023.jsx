import React from 'react';
import Production2023RightColumn from './Production2023RightColumn';
import Production2023LeftColumn from './Production2023LeftColumn';

export default function Dash2023() {
  return (
    <main className='max-w-6xl mx-auto'>
      <div className='flex flex-col flex-1 relative'>
        <div className='grid md:grid-cols-3 grid-cols-1 w-full'>
          <div className='col-span-2'>
            <Production2023LeftColumn />
          </div>
          <div className='w-full'>
            <Production2023RightColumn />
          </div>
        </div>
      </div>
    </main>
  );
}
