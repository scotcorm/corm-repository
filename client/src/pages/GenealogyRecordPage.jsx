import { Button, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import GenealogyrecordCommentSection from '../components/GenealogyrecordCommentSection';
import GenealogyrecordCard from '../components/GenealogyrecordCard';

// import GenealogyrecordCard from '../components/GenealogyrecordCard';

export default function GenealogyRecordPage() {
  const { genealogyrecordSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [genealogyrecord, setGenealogyrecord] = useState(null);
  const [recentGenealogyrecords, setRecentGenealogyrecords] = useState(null);

  useEffect(() => {
    //console.log(GenealogyrecordSlug);
    const fetchGenealogyrecord = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `/api/genealogyrecord/getgenealogyrecords?slug=${genealogyrecordSlug}`
        );
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setGenealogyrecord(data.genealogyrecords[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchGenealogyrecord();
  }, [genealogyrecordSlug]);

  useEffect(() => {
    try {
      const fetchRecentGenealogyrecords = async () => {
        const res = await fetch(
          `/api/genealogyrecord/getgenealogyrecords?limit=3`
        );
        const data = await res.json();
        if (res.ok) {
          setRecentGenealogyrecords(data.genealogyrecords);
        }
      };
      fetchRecentGenealogyrecords();
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
        {genealogyrecord && genealogyrecord.title}
      </h1>
      {/* <Link
        to={`/search?license=${genealogyrecord && genealogyrecord.category}`}
        className='self-center mt-5'
      >
        <Button color='gray' pill size='xs'>
          {genealogyrecord && genealogyrecord.license}
        </Button>
      </Link> */}
      <img
        src={genealogyrecord && genealogyrecord.image}
        alt={genealogyrecord && genealogyrecord.title}
        className='mt-10 p-3 max-h-[400px] w-full object-contain'
      />
      <div className='flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs'>
        <span>
          {genealogyrecord &&
            new Date(genealogyrecord.createdAt).toLocaleDateString()}
        </span>
        <span className='italic'>
          {genealogyrecord &&
            (genealogyrecord.content.length / 1000).toFixed(0)}{' '}
          mins read
        </span>
      </div>
      <div
        className='p-3 max-w-2xl mx-auto w-full genealogyrecord-content'
        dangerouslySetInnerHTML={{
          __html: genealogyrecord && genealogyrecord.content,
        }}
      ></div>
      {/* <div className='max-w-3xl mx-auto w-full'>
        <CallToAction />
      </div> */}
      <GenealogyrecordCommentSection genealogyrecordId={genealogyrecord._id} />
      {/* <GenealogyrecordCommentSection /> */}

      <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='text-xl mt-5'>Recent Genealogy Records</h1>
        <div className='flex flex-wrap gap-5 mt-5 justify-center'>
          {recentGenealogyrecords &&
            recentGenealogyrecords.map((genealogyrecord) => (
              <GenealogyrecordCard
                key={genealogyrecord._id}
                genealogyrecord={genealogyrecord}
              />
            ))}
        </div>
      </div>
    </main>
  );
}
