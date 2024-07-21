import React from 'react';
import { Link } from 'react-router-dom';

export default function CitationCard({ citation }) {
  let contentParagraph = (
    <div
      dangerouslySetInnerHTML={{ __html: citation && citation.content }}
    ></div>
  );
  const shortContent =
    contentParagraph.length > 25
      ? contentParagraph.substr(0, 25) + '...'
      : contentParagraph;
  const shortTitle =
    citation.title.length > 25
      ? citation.title.substr(0, 25) + '...'
      : citation.title;
  return (
    <div className='group relative w-full border border-cyan-800 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[350px] transition-all'>
      <Link to={`/citation/${citation.slug}`}>
        <img
          src={citation.image}
          alt='citation image'
          className='h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20'
        />
      </Link>
      <div className='p-3 flex flex-col gap-2'>
        <p className='text-lg font-semibold line-clamp-2'>{shortTitle}</p>
        <span className='italic text-sm'>License: {citation.license}</span>
        <p className='text-sm font-semibold line-clamp-2'>{shortContent}</p>
        {/* {/* <span className='italic text-sm'>{citation.license}</span> */}
        {/* <span className='text-sm'>
          <p dangerouslySetInnerHTML={{ __html: shortContent }}></p>
        </span> */}
        {/* <span className='italic text-sm'>{citation.value}</span> */}

        {/* <div
          className='p-3 max-w-2xl mx-auto w-full citation-content'
          dangerouslySetInnerHTML={{ __html: citation && citation.content }}
        ></div> */}

        <Link
          to={`/citation/${citation.slug}`}
          className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-cyan-800 text-cyan-800 hover:bg-cyan-800 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          See More!
        </Link>
      </div>
    </div>
  );
}
