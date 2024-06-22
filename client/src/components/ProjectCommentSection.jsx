import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button, Modal, TextInput, Textarea } from 'flowbite-react';
import ProjectComment from './ProjectComment';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function ProjectCommentSection({ projectId }) {
  const { currentUser } = useSelector((state) => state.user);
  const [projectcomment, setProjectComment] = useState('');
  const [projectcommentError, setProjectCommentError] = useState(null);
  const [projectcomments, setProjectComments] = useState([]);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [projectcommentToDelete, setProjectCommentToDelete] = useState(null);

  //console.log(projectcomments);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (projectcomment.length > 200) {
      return;
    }
    try {
      const res = await fetch('/api/projectcomment/createProjectComment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: projectcomment,
          projectId,
          userId: currentUser._id,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setProjectComment('');
        setProjectCommentError(null);
        setProjectComments([data, ...projectcomments]);
      }
    } catch (error) {
      setProjectCommentError(error.message);
    }
  };

  useEffect(() => {
    const getProjectComments = async () => {
      try {
        const res = await fetch(
          `/api/projectcomment/getProjectComments/${projectId}`
        );
        if (res.ok) {
          const data = await res.json();
          setProjectComments(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getProjectComments();
  }, [projectId]);

  const handleLike = async (projectId) => {
    try {
      if (!currentUser) {
        navigate('/sign-in');
        return;
      }
      const res = await fetch(
        `/api/projectcomment/likeProjectComment/${projectId}`,
        {
          method: 'PUT',
        }
      );
      if (res.ok) {
        const data = await res.json();
        setProjectComments(
          projectcomments.map((projectcomment) =>
            projectcomment._id === projectId
              ? {
                  ...projectcomment,
                  likes: data.likes,
                  numberOfLikes: data.likes.length,
                }
              : projectcomment
          )
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = async (projectcomment, editedContent) => {
    setProjectComments(
      projectcomments.map((c) =>
        c._id === projectcomment._id ? { ...c, content: editedContent } : c
      )
    );
  };

  const handleDelete = async (projectId) => {
    setShowModal(false);
    try {
      if (!currentUser) {
        navigate('/sign-in');
        return;
      }
      const res = await fetch(
        `/api/projectcomment/deleteProjectComment/${projectId}`,
        {
          method: 'DELETE',
        }
      );
      if (res.ok) {
        const data = await res.json();
        setProjectComments(
          projectcomments.filter(
            (projectcomment) => projectcomment._id !== projectId
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
            onChange={(e) => setProjectComment(e.target.value)}
            value={projectcomment}
          />
          <div className='flex justify-between items-center mt-5'>
            <p className='text-gray-500 text-xs'>
              {200 - projectcomment.length} characters remaining
            </p>
            <Button outline type='submit'>
              Submit
            </Button>
          </div>
          {projectcommentError && (
            <Alert color='failure' className='mt-5'>
              {projectcommentError}
            </Alert>
          )}
        </form>
      )}
      {projectcomments.length === 0 ? (
        <p className='text-sm my-5'>No project comments yet!</p>
      ) : (
        <>
          <div className='text-sm my-5 flex items-center gap-1'>
            <p>Comments</p>
            <div className='border border-gray-400 py-1 px-2 rounded-sm'>
              <p>{projectcomments.length}</p>
            </div>
          </div>

          {projectcomments.map((projectcomment) => (
            <ProjectComment
              key={projectcomment._id}
              projectcomment={projectcomment}
              onLike={handleLike}
              onEdit={handleEdit}
              onDelete={(projectId) => {
                setShowModal(true);
                setProjectCommentToDelete(projectId);
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
              Are you sure you want to delete this project comment?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button
                color='failure'
                onClick={() => handleDelete(projectcommentToDelete)}
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
