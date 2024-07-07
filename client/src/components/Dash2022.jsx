import React from 'react';
// import ProductionNavbar from './ProductionNavbar';
// import ProductionRightColumn from './ProductionRightColumn';
// import ProductionLeftColumn from './ProductionLeftColumn';
import Production2022RightColumn from './Production2022RightColumn';
import Production2022LeftColumn from './Production2022LeftColumn';

export default function Dash2022() {
  return (
    <main className='max-w-6xl mx-auto'>
      <div className='flex flex-col flex-1 relative'>
        <div className='grid md:grid-cols-3 grid-cols-1 w-full'>
          <div className='col-span-2'>
            <Production2022LeftColumn />
          </div>
          <div className='w-full'>{<Production2022RightColumn />}</div>
        </div>
      </div>
    </main>
  );
}
