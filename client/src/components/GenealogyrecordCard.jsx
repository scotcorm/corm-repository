import React from 'react';
import { Link } from 'react-router-dom';

export default function GenealogyrecordCard({ genealogyrecord }) {
  return (
    <div className='group relative w-full border border-cyan-800 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[350px] transition-all'>
      <Link to={`/genealogyrecord/${genealogyrecord.slug}`}>
        <img
          src={genealogyrecord.image}
          alt='genealogyrecord image'
          className='h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20'
        />
      </Link>
      <div className='p-3 flex flex-col gap-2'>
        <p className='text-lg font-semibold line-clamp-2'>
          {genealogyrecord.title}
        </p>
        <span className='italic text-sm'>{genealogyrecord.date}</span>
        <Link
          to={`/genealogyrecord/${genealogyrecord.slug}`}
          className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-cyan-800 text-cyan-800 hover:bg-cyan-800 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          Read the Note
        </Link>
      </div>
    </div>
  );
}
