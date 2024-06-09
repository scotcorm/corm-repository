import { Modal, Button, Table } from 'flowbite-react';
import React, { useState, useEffect } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { FaCheck, FaTimes } from 'react-icons/fa';

export default function DashNoteComments() {
  const { currentUser } = useSelector((state) => state.user);
  const [notecomments, setNoteComments] = useState([]);
  //const [userCitations, setUserCitations] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [notecommentIdToDelete, setNoteCommentIdToDelete] = useState('');

  // console.log(userCitations);

  useEffect(() => {
    const fetchNoteComments = async () => {
      try {
        const res = await fetch(`/api/notecomment/getallnotecomments`);
        const data = await res.json();
        if (res.ok) {
          setNoteComments(data.notecomments);
          if (data.notecomments.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchNoteComments();
    }

    // run useEffect when the User._id  is changed
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = notecomments.length;
    try {
      const res = await fetch(
        `/api/notecomment/getnotecomments?startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setNoteComments((prev) => [...prev, ...data.notecomments]);
        if (data.notecomments.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // use the delete route and controller already in place for users to add admin delete functionality
  const handleDeleteNoteComment = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `/api/notecomment/deleteNoteComment/${notecommentIdToDelete}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();
      if (res.ok) {
        setNoteComments((prev) =>
          prev.filter(
            (notecomment) => notecomment._id !== notecommentIdToDelete
          )
        );
        setShowModal(false);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      {currentUser.isAdmin && notecomments.length > 0 ? (
        <>
          <Table hoverable className='shadow-md'>
            <Table.Head>
              <Table.HeadCell>Date Updated</Table.HeadCell>
              <Table.HeadCell>noteComment Content</Table.HeadCell>
              <Table.HeadCell>Number of Likes</Table.HeadCell>
              <Table.HeadCell>NoteId</Table.HeadCell>
              <Table.HeadCell>UserId</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
            </Table.Head>
            {notecomments.map((notecomment) => (
              <Table.Body className='divide-y' key={notecomment._id}>
                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  {/* ++++++++++++++++++++++++datestring+++++++++++++++++++++++ */}
                  <Table.Cell>
                    {new Date(notecomment.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>{notecomment.content}</Table.Cell>
                  <Table.Cell>{notecomment.numberOfLikes}</Table.Cell>
                  <Table.Cell>{notecomment.noteId}</Table.Cell>
                  <Table.Cell>{notecomment.userId}</Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setNoteCommentIdToDelete(notecomment._id);
                      }}
                      className='font-medium text-red-500 hover:underline cursor-pointer'
                    >
                      Delete
                    </span>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className='w-full text-orange-400 self-center text-sm py-7'
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <p>You have no note comments yet</p>
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
              Are you sure you want to delete this note comment?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleDeleteNoteComment}>
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
