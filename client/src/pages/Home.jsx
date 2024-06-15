import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import CitationCard from '../components/CitationCard';

export default function Home() {
  const [citations, setCitations] = useState([]);

  useEffect(() => {
    const fetchCitations = async () => {
      const res = await fetch('/api/citation/getCitations');
      // make sure there is a getcitations controller
      const data = await res.json();
      setCitations(data.citations);
    };
    fetchCitations();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold lg:text-6xl'>Corm Repo</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          similique obcaecati praesentium a consectetur voluptas quo deleniti
          nemo, natus laborum quod incidunt qui? Repellendus culpa perspiciatis
          quidem cum, velit consectetur.
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View All Citations
        </Link>
      </div>
      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {citations && citations.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>
              Recent Citations
            </h2>
            <div className='flex flex-wrap gap-4'>
              {citations.map((citation) => (
                <CitationCard key={citation._id} citation={citation} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all Citations
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
