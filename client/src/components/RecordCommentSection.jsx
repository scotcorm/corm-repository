import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button, Modal, TextInput, Textarea } from 'flowbite-react';
import RecordComment from './RecordComment';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function RecordCommentSection({ recordId }) {
  const { currentUser } = useSelector((state) => state.user);
  const [recordcomment, setRecordComment] = useState('');
  const [recordcommentError, setRecordCommentError] = useState(null);
  const [recordcomments, setRecordComments] = useState([]);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [recordcommentToDelete, setRecordCommentToDelete] = useState(null);

  // console.log(recordcomments);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (recordcomment.length > 200) {
      return;
    }
    try {
      const res = await fetch('/api/recordcomment/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: recordcomment,
          recordId,
          userId: currentUser._id,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setRecordComment('');
        setRecordCommentError(null);
        setRecordComments([data, ...recordcomments]);
      }
    } catch (error) {
      setRecordCommentError(error.message);
    }
  };

  useEffect(() => {
    const getRecordComments = async () => {
      try {
        const res = await fetch(
          `/api/recordcomment/getRecordComments/${recordId}`
        );
        if (res.ok) {
          const data = await res.json();
          setRecordComments(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getRecordComments();
  }, [recordId]);

  const handleLike = async (recordId) => {
    try {
      if (!currentUser) {
        navigate('/sign-in');
        return;
      }
      const res = await fetch(
        `/api/recordcomment/likeRecordComment/${recordId}`,
        {
          method: 'PUT',
        }
      );
      if (res.ok) {
        const data = await res.json();
        setRecordComments(
          recordcomments.map((recordcomment) =>
            recordcomment._id === recordId
              ? {
                  ...recordcomment,
                  likes: data.likes,
                  numberOfLikes: data.likes.length,
                }
              : recordcomment
          )
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = async (recordcomment, editedContent) => {
    setRecordComments(
      recordcomments.map((c) =>
        c._id === recordcomment._id ? { ...c, content: editedContent } : c
      )
    );
  };

  const handleDelete = async (recordId) => {
    setShowModal(false);
    try {
      if (!currentUser) {
        navigate('/sign-in');
        return;
      }
      const res = await fetch(
        `/api/recordcomment/deleteRecordComment/${recordId}`,
        {
          method: 'DELETE',
        }
      );
      if (res.ok) {
        const data = await res.json();
        setRecordComments(
          recordcomments.filter(
            (recordcomment) => recordcomment._id !== recordId
          )
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

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
            onChange={(e) => setRecordComment(e.target.value)}
            value={recordcomment}
          />
          <div className='flex justify-between items-center mt-5'>
            <p className='text-gray-500 text-xs'>
              {200 - recordcomment.length} characters remaining
            </p>
            <Button outline type='submit'>
              Submit
            </Button>
          </div>
          {recordcommentError && (
            <Alert color='failure' className='mt-5'>
              {recordcommentError}
            </Alert>
          )}
        </form>
      )}
      {recordcomments.length === 0 ? (
        <p className='text-sm my-5'>No record comments yet!</p>
      ) : (
        <>
          <div className='text-sm my-5 flex items-center gap-1'>
            <p>Comments</p>
            <div className='border border-gray-400 py-1 px-2 rounded-sm'>
              <p>{recordcomments.length}</p>
            </div>
          </div>

          {recordcomments.map((recordcomment) => (
            <RecordComment
              key={recordcomment._id}
              recordcomment={recordcomment}
              onLike={handleLike}
              onEdit={handleEdit}
              onDelete={(recordId) => {
                setShowModal(true);
                setRecordCommentToDelete(recordId);
              }}
            />
          ))}
        </>
      )}

      <Modal
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
              Are you sure you want to delete this record comment?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button
                color='failure'
                onClick={() => handleDelete(recordcommentToDelete)}
              >
                Yes, I'm sure
              </Button>
              <Button color='gray' onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
