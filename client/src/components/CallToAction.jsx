import React from 'react';
import logo from '../assets/images/corm.png';
import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-cyan-800 justify-center items-center rounded-3xl text-center'>
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl'>
          Add more info for the Call to Action section
        </h2>
        <p classname='text-gray-500 my-2'>
          I made this part with an intersting library- check it out!
        </p>

        <Button outline color='gray' className='rounded-bl-none mt-5'>
          <a
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            className='text-cyan-800'
          >
            Their name docs page
          </a>
        </Button>
      </div>
      <div className='p-7 flex-1'>
        <img src={logo} alt='corm image' />
      </div>
    </div>
  );
}
