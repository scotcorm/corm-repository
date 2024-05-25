import { Button, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CallToAction from '../components/CallToAction';

import RecordCommentSection from '../components/RecordCommentSection';
// import RecordCard from '../components/RecordCard';

export default function RecordPage() {
  const { recordSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [record, setRecord] = useState(null);
  // const [recentRecords, setRecentRecords] = useStateRecord
  useEffect(() => {
    console.log(recordSlug);
    const fetchRecord = async () => {
      try {
        setLoading(true);

        const res = await fetch(`/api/record/getrecords?slug=${recordSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setRecord(data.records[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchRecord();
  }, [recordSlug]);

  // useEffect(() => {
  //   try {
  //     const fetchRecentNotes = async () => {
  //       const res = await fetch(`/api/note/getnotes?limit=3`);
  //       const data = await res.json();
  //       if (res.ok) {
  //         setRecenNotens(data.notes);
  //       }
  //     };
  //     fetchRecentNotes();
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }, []);

  if (loading)
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <Spinner size='xl' />
      </div>
    );
  return (
    <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
      <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
        {record && record.title}
      </h1>
      {/* <Link
        to={`/search?license=${record && record.category}`}
        className='self-center mt-5'
      >
        <Button color='gray' pill size='xs'>
          {record && record.license}
        </Button>
      </Link> */}
      <img
        src={record && record.image}
        alt={record && record.title}
        className='mt-10 p-3 max-h-[400px] w-full object-contain'
      />
      <div className='flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs'>
        <span>{record && new Date(record.createdAt).toLocaleDateString()}</span>
        <span className='italic'>
          {record && (record.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className='p-3 max-w-2xl mx-auto w-full note-content'
        dangerouslySetInnerHTML={{ __html: record && record.content }}
      ></div>
      <div className='max-w-3xl mx-auto w-full'>
        <CallToAction />
      </div>
      <RecordCommentSection recordId={record._id} />

      <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='text-xl mt-5'>Recent articles</h1>
        {/* <div className='flex flex-wrap gap-5 mt-5 justify-center'>
          {recentNotes &&
            recentNotes.map((note) => (
              <NoteCard key={note._id} note={note} />
            ))}
        </div> */}
      </div>
    </main>
  );
}
