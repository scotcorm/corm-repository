import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button, Modal, TextInput, Textarea } from 'flowbite-react';
import NoteComment from './NoteComment';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function NoteCommentSection(noteId) {
  const { currentUser } = useSelector((state) => state.user);
  const [notecomment, setNoteComment] = useState('');
  const [notecommentError, setNoteCommentError] = useState(null);
  const [notecomments, setNoteComments] = useState([]);
  // const navigate = useNavigate();
  // const [showModal, setShowModal] = useState(false);
  // const [notecommentToDelete, setNoteCommentToDelete] = useState(null);

  //console.log(notecomments);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (notecomment.length > 200) {
      return;
    }
    try {
      const res = await fetch('/api/notecomment/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: notecomment,
          noteId,
          userId: currentUser._id,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setNoteComment('');
        setNoteCommentError(null);
        setNoteComments([data, ...notecomments]);
      }
    } catch (error) {
      setNoteCommentError(error.message);
    }
  };

  useEffect(() => {
    const getNoteComments = async () => {
      try {
        const res = await fetch(`/api/notecomment/getNoteComments/${noteId}`);
        if (res.ok) {
          const data = await res.json();
          setNoteComments(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getNoteComments();
  }, [noteId]);

  // const handleLike = async (noteId) => {
  //   try {
  //     if (!currentUser) {
  //       navigate('/sign-in');
  //       return;
  //     }
  //     const res = await fetch(
  //       `/api/notecomment/likeNoteComment/${noteId}`,
  //       {
  //         method: 'PUT',
  //       }
  //     );
  //     if (res.ok) {
  //       const data = await res.json();
  //       setNoteComments(
  //         notecomments.map((notecomment) =>
  //           notecomment._id === noteId
  //             ? {
  //                 ...notecomment,
  //                 likes: data.likes,
  //                 numberOfLikes: data.likes.length,
  //               }
  //             : notecomment
  //         )
  //       );
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // const handleEdit = async (notecomment, editedContent) => {
  //   setNoteComments(
  //     notecomments.map((c) =>
  //       c._id === notecomment._id ? { ...c, content: editedContent } : c
  //     )
  //   );
  // };

  // const handleDelete = async (noteId) => {
  //   setShowModal(false);
  //   try {
  //     if (!currentUser) {
  //       navigate('/sign-in');
  //       return;
  //     }
  //     const res = await fetch(
  //       `/api/notecomment/deleteNoteComment/${noteId}`,
  //       {
  //         method: 'DELETE',
  //       }
  //     );
  //     if (res.ok) {
  //       const data = await res.json();
  //       setNoteComments(
  //         notecomments.filter(
  //           (notecomment) => notecomment._id !== noteId
  //         )
  //       );
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <div className='max-w-2xl mx-auto w-full p-3'>
      {currentUser ? (
        <div className='flex items-center gap-1 my-5 text-gray-500 text-sm'>
          <p>Signed in as:</p>
          <img
            className='h-5 w-5 object-cover rounded-full'
            src={currentUser.profilePicture}
            alt=''
          />
          <Link
            to={'/dashboard?tab=profile'}
            className='text-sm text-blue-500 hover:underline'
          >
            @{currentUser.username}
          </Link>
        </div>
      ) : (
        <div className='text-sm text-gray-500 my-5 flex gap-1'>
          You must be signed in to comment.
          <Link className='text-blue-500 hover:underline' to={'/sign-in'}>
            Sign In
          </Link>
        </div>
      )}
      {currentUser && (
        <form
          onSubmit={handleSubmit}
          className='border border-cyan-800 rounded-md p-3'
        >
          <Textarea
            placeholder='Add a comment...'
            rows='3'
            maxLength='200'
            onChange={(e) => setNoteComment(e.target.value)}
            value={notecomment}
          />
          <div className='flex justify-between items-center mt-5'>
            <p className='text-gray-500 text-xs'>
              {200 - notecomment.length} characters remaining
            </p>
            <Button outline type='submit'>
              Submit
            </Button>
          </div>
          {notecommentError && (
            <Alert color='failure' className='mt-5'>
              {notecommentError}
            </Alert>
          )}
        </form>
      )}
      {notecomments.length === 0 ? (
        <p className='text-sm my-5'>No note comments yet!</p>
      ) : (
        <>
          <div className='text-sm my-5 flex items-center gap-1'>
            <p>Comments</p>
            <div className='border border-gray-400 py-1 px-2 rounded-sm'>
              <p>{notecomments.length}</p>
            </div>
          </div>

          {notecomments.map((notecomment) => (
            <NoteComment
              key={notecomment._id}
              notecomment={notecomment}
              onLike={handleLike}
              onEdit={handleEdit}
              onDelete={(noteId) => {
                setShowModal(true);
                setNoteCommentToDelete(noteId);
              }}
            />
          ))}
        </>
      )}
      {/* <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size='md'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete this note comment?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button
                color='failure'
                onClick={() => handleDelete(notecommentToDelete)}
              >
                Yes, I'm sure
              </Button>
              <Button color='gray' onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal> */}
    </div>
  );
}
