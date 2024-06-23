import React from 'react';
import { TextInput } from '@tremor/react';
import { HiSearch } from 'react-icons/hi';

export default function ProductionNavbar() {
  return (
    <div
      id='top'
      className='relative w-full sm:flex justify-between items-center p-2'
    >
      <h1 className='font-bold text-gray-300'>Dashboard</h1>
      <div className='py-2 '>
        <TextInput
          icon={HiSearch}
          placeholder='Search...'
          className='relative bg-white dark:bg-white '
        />
      </div>
    </div>
  );
}
