import React from 'react';
import logo from '../assets/images/corm.png';
import { Button } from 'flowbite-react';

export default function CallToActionAbout() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-cyan-800 justify-center items-center rounded-3xl text-center mt-14'>
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl'>
          Scott Cormier: MLIS and Aspiring Front End React Developer
        </h2>
        <p className='text-gray-500 dark:text-slate-200 my-2'>
          Please visit my Home Page for links to my Creative Commons class notes
          and my Resume page.
        </p>

        <Button outline className='rounded-br-none mt-5'>
          <a
            href='https://scotcorm.github.io/'
            target='_blank'
            rel='noopener noreferrer'
          >
            View Scott Cormier's Information
          </a>
        </Button>
      </div>
      <div className='p-7 flex-2'>
        <img src={logo} alt='corm image' />
      </div>
    </div>
  );
}
