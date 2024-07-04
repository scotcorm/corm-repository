import { Button, Modal, Table } from 'flowbite-react';
import React, { useState, useEffect } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function DashProjects() {
  const { currentUser } = useSelector((state) => state.user);
  const [userProjects, setUserProjects] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [projectIdToDelete, setProjectIdToDelete] = useState('');

  // console.log(userProjects);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          `/api/project/getprojects?userId=${currentUser._id}`
        );
        const data = await res.json();
        if (res.ok) {
          setUserProjects(data.projects);
          if (data.projects.length >= 3) {
            setShowMore(true);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchProjects();
    }

    // run useEffect when the User._id  is changed
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = userProjects.length;
    try {
      const res = await fetch(
        `/api/project/getprojects?userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserProjects((prev) => [...prev, ...data.projects]);
        if (data.projects.length >= 3) {
          setShowMore(true);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteProject = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `/api/project/deleteproject/${projectIdToDelete}/${currentUser._id}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUserProjects((prev) =>
          prev.filter((project) => project._id !== projectIdToDelete)
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      {currentUser.isAdmin && userProjects.length > 0 ? (
        <>
          <Table hoverable className='shadow-md'>
            <Table.Head>
              {/* <Table.HeadCell>Date Updated</Table.HeadCell> */}
              <Table.HeadCell>Date</Table.HeadCell>
              <Table.HeadCell>Image</Table.HeadCell>
              <Table.HeadCell>Title</Table.HeadCell>
              <Table.HeadCell>Content</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              {/* <Table.HeadCell>Agent</Table.HeadCell>
              <Table.HeadCell>Completed</Table.HeadCell>
              <Table.HeadCell>Overlaps</Table.HeadCell>
              <Table.HeadCell>QA Passed</Table.HeadCell>
              <Table.HeadCell>QA Failed</Table.HeadCell> */}
              {/* <Table.HeadCell>Content</Table.HeadCell> */}
              {/* <Table.HeadCell>Cohort</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell> */}
              <Table.HeadCell>
                <span>Edit</span>
              </Table.HeadCell>
            </Table.Head>
            {userProjects.map((project) => (
              <Table.Body className='divide-y' key={project._id}>
                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell>
                    {new Date(project.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/project/${project.slug}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className='w-20 h-10 object-cover bg-gray-500'
                      />
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className='font-medium text-gray-900 dark:text-white'
                      to={`/project/${project.slug}`}
                    >
                      {project.title}
                    </Link>
                  </Table.Cell>
                  {/* <Table.Cell>{project.date}</Table.Cell> */}
                  <Table.Cell>{project.content}</Table.Cell>
                  {/* <Table.Cell>{project.completed}</Table.Cell>
                  <Table.Cell>{project.overlaps}</Table.Cell>
                  <Table.Cell>{project.qapassed}</Table.Cell>
                  <Table.Cell>{project.qafailed}</Table.Cell> */}
                  {/* <Table.Cell>{project.content}</Table.Cell> */}
                  {/* <Table.Cell>{project.cohort}</Table.Cell> */}
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setProjectIdToDelete(project._id);
                      }}
                      className='font-medium text-red-500 hover:underline cursor-pointer'
                    >
                      Delete
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className='text-orange-300 hover:underline'
                      to={`/update-project/${project._id}`}
                    >
                      <span>Edit</span>
                    </Link>
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
        <p>You have no projects yet</p>
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
              Are you sure you want to delete this project?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleDeleteProject}>
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
