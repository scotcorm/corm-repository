import { Button, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CallToAction from '../components/CallToAction';

import NotesCommentSection from '../components/NotesCommentSection';
// import NoteCard from '../components/NoteCard';

export default function NotePage() {
  const { noteSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [note, setNote] = useState(null);
  // const [recentNotes, setRecentNotes] = useStateNote
  useEffect(() => {
    console.log(noteSlug);
    const fetchNote = async () => {
      try {
        setLoading(true);

        const res = await fetch(`/api/note/getnotes?slug=${noteSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setNote(data.notes[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchNote();
  }, [noteSlug]);

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
        {note && note.title}
      </h1>
      <Link
        to={`/search?category=${note && note.category}`}
        className='self-center mt-5'
      >
        <Button color='gray' pill size='xs'>
          {note && note.category}
        </Button>
      </Link>
      <img
        src={note && note.image}
        alt={note && note.title}
        className='mt-10 p-3 max-h-[400px] w-full object-contain'
      />
      <div className='flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs'>
        <span>{note && new Date(note.createdAt).toLocaleDateString()}</span>
        <span className='italic'>
          {note && (note.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className='p-3 max-w-2xl mx-auto w-full note-content'
        dangerouslySetInnerHTML={{ __html: note && note.content }}
      ></div>
      <div className='max-w-3xl mx-auto w-full'>
        <CallToAction />
      </div>
      <NotesCommentSection noteId={note._id} />

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
