import React from 'react';

export default function Hero() {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className=' max-h-[500px] relative'>
        {/* overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/20 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-black/50'>
            Scott <span className='text-orange-400'>Cormier's</span>
          </h1>
          <h2 className='px-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-black/50 pb-6'>
            <span className='text-orange-400'>React</span> Portfolio
          </h2>
          {/* <h3 className='text-2xl sm:text-2.5xl md:text-3xl lg:text-3.5xl font-bold bg-black/50 pb-6 px-10 flex flex-display'>
            Links to Coding Projects - Data Dashboard - MERN Database
          </h3> */}
        </div>

        <img
          className='w-full max-h-[500px] object-cover'
          src='https://live.staticflickr.com/65535/53885148189_8e477f3e7d_h.jpg'
          alt='minnowmaze-background'
        />
      </div>
    </div>
  );
}
