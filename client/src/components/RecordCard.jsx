import React from 'react';
import { Link } from 'react-router-dom';
import SimpleDateTime from 'react-simple-timestamp-to-date';

export default function RecordCard({ record }) {
  return (
    <div className='group relative w-full mb-3 border border-cyan-800 hover:border-2 h-[70px] overflow-hidden rounded-lg sm:w-[430px] transition-all'>
      <Link to={`/record/${record.slug}`}>
        {/* <img
          src={record.image}
          alt='record image'
          className='h-[60px] w-full object-cover group-hover:h-[60px] transition-all duration-300 z-20'
        /> */}
      </Link>
      <div className='p-3 flex flex-col gap-1 '>
        <p className='text-lg font-semibold line-clamp-2'>{record.title}</p>
        {/* <span>{record.createdAt}</span> */}
        <span className='italic text-sm'>
          <SimpleDateTime
            dateFormat='MDY'
            dateSeparator='/'
            timeSeparator=':'
            showTime='0'
          >
            {record.createdAt}
          </SimpleDateTime>
        </span>
        <Link
          to={`/record/${record.slug}`}
          className='z-10 group-hover:bottom-0 absolute bottom-[-60px] left-0 right-0 border border-cyan-800 text-cyan-800 hover:bg-cyan-800 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          Go to Record
        </Link>
      </div>
    </div>
  );
}
