import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function ProjectsSection() {
  return (
    <div>
      {/* <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        <Link to='https://scotcorm.github.io/'>
          <img src= />
        </Link>
      </div>{' '} */}

      {/* =================================  start section 1-3 =========================== */}
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        <div className='flex flex-col gap-6'>
          <h2 className='text-2xl font-semibold text-center'>
            Recent Projects
          </h2>
          <div className='flex flex-wrap gap-4'>
            <div className='group relative w-full border border-cyan-800 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[350px] transition-all'>
              <Link to='lkjhlkjh'>
                <img
                  src={'corm.png'}
                  alt='project1'
                  className='h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20'
                />
              </Link>
              <div className='p-3 flex flex-col gap-2'>
                <p className='text-lg font-semibold line-clamp-2'>xdgxgfh</p>
                <span className='italic text-sm'>'xgfghdh' </span>
                <Link
                  to=''
                  className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-cyan-800 text-cyan-800 hover:bg-cyan-800 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
                >
                  Visit the Project
                </Link>
              </div>
            </div>
            <div className='group relative w-full border border-cyan-800 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[350px] transition-all'>
              <Link to=''>
                <img
                  src={'corm.png'}
                  alt='project1'
                  className='h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20'
                />
              </Link>
              <div className='p-3 flex flex-col gap-2'>
                <p className='text-lg font-semibold line-clamp-2'></p>
                <span className='italic text-sm'>'' </span>
                <Link
                  to=''
                  className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-cyan-800 text-cyan-800 hover:bg-cyan-800 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
                >
                  Visit the Project
                </Link>
              </div>
            </div>
            <div className='group relative w-full border border-cyan-800 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[350px] transition-all'>
              <Link to=''>
                <img
                  src={'corm.png'}
                  alt='project1'
                  className='h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20'
                />
              </Link>
              <div className='p-3 flex flex-col gap-2'>
                <p className='text-lg font-semibold line-clamp-2'></p>
                <span className='italic text-sm'>'' </span>
                <Link
                  to=''
                  className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-cyan-800 text-cyan-800 hover:bg-cyan-800 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
                >
                  Visit the Project
                </Link>
              </div>
            </div>
          </div>
          <Link
            to={'/search'}
            className='text-lg text-cyan-800 hover:underline text-center'
          >
            View More Projects
          </Link>
        </div>
      </div>

      {/* =================================  end section   =========================== */}
    </div>
  );
}
