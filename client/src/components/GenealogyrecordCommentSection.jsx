import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button, Modal, TextInput, Textarea } from 'flowbite-react';
import GenealogyrecordComment from './GenealogyrecordComment';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function GenealogyrecordCommentSection({ genealogyrecordId }) {
  const { currentUser } = useSelector((state) => state.user);
  const [genealogyrecordcomment, setGenealogyrecordComment] = useState('');
  const [genealogyrecordcommentError, setGenealogyrecordCommentError] =
    useState(null);
  const [genealogyrecordcomments, setGenealogyrecordComments] = useState([]);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [genealogyrecordcommentToDelete, setGenealogyrecordCommentToDelete] =
    useState(null);

  //console.log(genealogyrecordcomments);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (genealogyrecordcomment.length > 200) {
      return;
    }
    try {
      const res = await fetch(
        '/api/genealogyrecordcomment/createGenealogyrecordComment',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: genealogyrecordcomment,
            genealogyrecordId,
            userId: currentUser._id,
          }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setGenealogyrecordComment('');
        setGenealogyrecordCommentError(null);
        setGenealogyrecordComments([data, ...genealogyrecordcomments]);
      }
    } catch (error) {
      setGenealogyrecordCommentError(error.message);
    }
  };

  useEffect(() => {
    const getGenealogyrecordComments = async () => {
      try {
        const res = await fetch(
          `/api/genealogyrecordcomment/getGenealogyrecordComments/${genealogyrecordId}`
        );
        if (res.ok) {
          const data = await res.json();
          setGenealogyrecordComments(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getGenealogyrecordComments();
  }, [genealogyrecordId]);

  const handleLike = async (genealogyrecordId) => {
    try {
      if (!currentUser) {
        navigate('/sign-in');
        return;
      }
      const res = await fetch(
        `/api/genealogyrecordcomment/likeGenealogyrecordComment/${genealogyrecordId}`,
        {
          method: 'PUT',
        }
      );
      if (res.ok) {
        const data = await res.json();
        setGenealogyrecordComments(
          genealogyrecordcomments.map((genealogyrecordcomment) =>
            genealogyrecordcomment._id === genealogyrecordId
              ? {
                  ...genealogyrecordcomment,
                  likes: data.likes,
                  numberOfLikes: data.likes.length,
                }
              : genealogyrecordcomment
          )
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = async (genealogyrecordcomment, editedContent) => {
    setGenealogyrecordComments(
      genealogyrecordcomments.map((c) =>
        c._id === genealogyrecordcomment._id
          ? { ...c, content: editedContent }
          : c
      )
    );
  };

  const handleDelete = async (genealogyrecordId) => {
    setShowModal(false);
    try {
      if (!currentUser) {
        navigate('/sign-in');
        return;
      }
      const res = await fetch(
        `/api/genealogyrecordcomment/deleteGenealogyrecordComment/${genealogyrecordId}`,
        {
          method: 'DELETE',
        }
      );
      if (res.ok) {
        const data = await res.json();
        setGenealogyrecordComments(
          genealogyrecordcomments.filter(
            (genealogyrecordcomment) =>
              genealogyrecordcomment._id !== genealogyrecordId
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
            onChange={(e) => setGenealogyrecordComment(e.target.value)}
            value={genealogyrecordcomment}
          />
          <div className='flex justify-between items-center mt-5'>
            <p className='text-gray-500 text-xs'>
              {200 - genealogyrecordcomment.length} characters remaining
            </p>
            <Button outline type='submit'>
              Submit
            </Button>
          </div>
          {genealogyrecordcommentError && (
            <Alert color='failure' className='mt-5'>
              {genealogyrecordcommentError}
            </Alert>
          )}
        </form>
      )}
      {genealogyrecordcomments.length === 0 ? (
        <p className='text-sm my-5'>No genealogy record comments yet!</p>
      ) : (
        <>
          <div className='text-sm my-5 flex items-center gap-1'>
            <p>Comments</p>
            <div className='border border-gray-400 py-1 px-2 rounded-sm'>
              <p>{genealogyrecordcomments.length}</p>
            </div>
          </div>

          {genealogyrecordcomments.map((genealogyrecordcomment) => (
            <GenealogyrecordComment
              key={genealogyrecordcomment._id}
              genealogyrecordcomment={genealogyrecordcomment}
              onLike={handleLike}
              onEdit={handleEdit}
              onDelete={(genealogyrecordId) => {
                setShowModal(true);
                setGenealogyrecordCommentToDelete(genealogyrecordId);
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
              Are you sure you want to delete this genealogyrecord comment?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button
                color='failure'
                onClick={() => handleDelete(genealogyrecordcommentToDelete)}
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
