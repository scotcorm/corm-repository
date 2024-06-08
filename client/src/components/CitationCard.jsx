import React from 'react';
import { Link } from 'react-router-dom';

export default function CitationCard({ citation }) {
  return (
    <div className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[350px] transition-all'>
      <Link to={`/citation/${citation.slug}`}>
        <img
          src={citation.image}
          alt='citation image'
          className='h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20'
        />
      </Link>
      <div className='p-3 flex flex-col gap-2'>
        <p className='text-lg font-semibold line-clamp-2'>{citation.title}</p>
        <span className='italic text-sm'>{citation.license}</span>
        <Link
          to={`/citation/${citation.slug}`}
          className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          Read the Citation
        </Link>
      </div>
    </div>
  );
}
