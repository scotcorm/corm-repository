import React from 'react';
import { Button } from 'flowbite-react';
import logo from '../assets/images/corm.png';
import { Link } from 'react-router-dom';

export default function HomeHeadlineCards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/40 rounded-xl border text-white'>
          <p className='font-bold text-2xl px-2 pt-2'>View All Citations</p>
          <p className='px-2'>
            You can click here to go straight to citation records, or scroll
            down to see the most recent ones.{' '}
          </p>
          <Button outline className='mx-2 absolute bottom-4 cursor-pointer'>
            <Link
              to='/search'
              className='text-xs sm:text-sm font-bold cursor-pointer'
            >
              Citations Page
            </Link>
          </Button>
        </div>

        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://firebasestorage.googleapis.com/v0/b/corm-repository.appspot.com/o/1721580500647-Screenshot%202024-07-21%20at%2011.45.46%E2%80%AFAM.png?alt=media&token=3d092041-db55-413d-96b5-ab467274ed66'
          alt='Creative Commons Img'
        />
      </div>
      {/* card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>View All Projects</p>
          <p className='px-2'>
            I'll be adding more projects here as appropriate, and feel free to
            visit my original
            <span>
              <a
                href='https://scotcorm.github.io/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='text-white hover:underline mr-1 ml-1'>
                  Resume Page
                </span>
              </a>
            </span>
            and
            <span>
              <a
                href='https://github.com/scotcorm'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='text-white hover:underline ml-1'>
                  Git Hub Home Page
                </span>
              </a>
            </span>
          </p>
          <Button outline className=' mx-2 absolute bottom-4'>
            <Link
              to={'/projects'}
              className='hover:underline text-center font-bold cursor-pointer'
            >
              View all Projects
            </Link>
          </Button>
        </div>

        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://firebasestorage.googleapis.com/v0/b/corm-repository.appspot.com/o/1721774916664-Screenshot%202024-07-21%20at%2012.14.47%E2%80%AFPM.png?alt=media&token=bd2cd508-9cdc-4b17-960b-8431323303ed'
          alt='Chicago Wing Chun Site Img'
        />
      </div>
      {/* card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/30 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>View Genealogy Records</p>
          <p className='px-2'>
            My Dad has done quite a bit of research, and was willing to share a
            few great pictures from his collection!{' '}
          </p>
          <Button outline className=' mx-2 absolute bottom-4'>
            <Link
              to={'/searchgenealogyrecords'}
              className='hover:underline text-center font-bold cursor-pointer'
            >
              View Album
            </Link>
          </Button>
        </div>

        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://firebasestorage.googleapis.com/v0/b/corm-repository.appspot.com/o/1721514692535-image6.jpg?alt=media&token=2d3bfc36-7f92-4e7f-96b5-0935f6c2b4ae'
          alt='Silton Matt Sr.'
        />
      </div>
    </div>
  );
}
