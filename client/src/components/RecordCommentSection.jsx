import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Textarea } from 'flowbite-react';
import { useState } from 'react';

export default function RecordCommentSection({ recordId }) {
  const { currentUser } = useSelector((state) => state.user);
  const [recordcomment, setRecordComment] = useState('');
  const [recordcommentError, setRecordCommentError] = useState(null);
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
      }
    } catch (error) {
      setRecordCommentError(error.message);
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
    </div>
  );
}
