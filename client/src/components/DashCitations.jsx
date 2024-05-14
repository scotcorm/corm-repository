import { Table } from 'flowbite-react';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function DashCitations() {
  const { currentUser } = useSelector((state) => state.user);
  const [userCitations, setUserCitations] = useState([]);
  console.log(userCitations);

  useEffect(() => {
    const fetchCitations = async () => {
      try {
        const res = await fetch(
          `/api/citation/getcitations?userId=${currentUser._id}`
        );
        const data = await res.json();
        if (res.ok) {
          setUserCitations(data.citations);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchCitations();
    }

    // run useEffect when the User._id  is changed
  }, [currentUser._id]);
  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      {currentUser.isAdmin && userCitations.length > 0 ? (
        <>
          <Table hoverable className='shadow-md'>
            <Table.Head>
              <Table.HeadCell>Date Updated</Table.HeadCell>
              <Table.HeadCell>Citation Image</Table.HeadCell>
              <Table.HeadCell>Citation Title</Table.HeadCell>
              <Table.HeadCell>License</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>
                <span>Edit</span>
              </Table.HeadCell>
            </Table.Head>
            {userCitations.map((citation) => (
              <Table.Body className='divide-y'>
                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell>
                    {new Date(citation.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/citation/${citation.slug}`}>
                      <img
                        src={citation.image}
                        alt={citation.title}
                        className='w-20 h-10 object-cover bg-gray-500'
                      />
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className='font-medium text-gray-900 dark:text-white'
                      to={`/citation/${citation.slug}`}
                    >
                      {citation.title}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{citation.license}</Table.Cell>
                  <Table.Cell>
                    <span className='font-medium text-red-500 hover:underline cursor-pointer'>
                      Delete
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className='text-orange-300 hover:underline'
                      to={`/update-citation/${citation._id}`}
                    >
                      <span>Edit</span>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
        </>
      ) : (
        <p>You have no posts yet</p>
      )}
    </div>
  );
}
