import { Button, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CallToAction from '../components/CallToAction';

import CommentSection from '../components/CommentSection';
import CitationCard from '../components/CitationCard';

export default function CitationPage() {
  const { citationSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [citation, setCitation] = useState(null);
  const [recentCitations, setRecentCitations] = useState(null);

  useEffect(() => {
    const fetchCitation = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `/api/citation/getcitations?slug=${citationSlug}`
        );
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setCitation(data.citations[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCitation();
  }, [citationSlug]);

  useEffect(() => {
    try {
      const fetchRecentCitations = async () => {
        const res = await fetch(`/api/citation/getcitations?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentCitations(data.citations);
        }
      };
      fetchRecentCitations();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (loading)
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <Spinner size='xl' />
      </div>
    );
  return (
    <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
      <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
        {citation && citation.title}
      </h1>
      <Link
        to={`/search?license=${citation && citation.license}`}
        className='self-center mt-5'
      >
        <Button color='gray' pill size='xs'>
          {citation && citation.license}
        </Button>
      </Link>
      <img
        src={citation && citation.image}
        alt={citation && citation.title}
        className='mt-10 p-3 max-h-[400px] w-full object-contain'
      />
      <div className='flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs'>
        <span>
          {citation && new Date(citation.createdAt).toLocaleDateString()}
        </span>
        <span className='italic'>
          {citation && (citation.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className='p-3 max-w-2xl mx-auto w-full citation-content'
        dangerouslySetInnerHTML={{ __html: citation && citation.content }}
      ></div>
      <div className='max-w-4xl mx-auto w-full'>
        <CallToAction />
      </div>
      <CommentSection citationId={citation._id} />

      <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='text-xl mt-5'>Recent articles</h1>
        <div className='flex flex-wrap gap-4 mt-5 justify-center'>
          {recentCitations &&
            recentCitations.map((citation) => (
              <CitationCard key={citation._id} citation={citation} />
            ))}
        </div>
      </div>
    </main>
  );
}
