import React from 'react';
//import { RiFlag2Line } from '@remixicon/react';
// import { StatusOnlineIcon } from '@heroicons/react/solid';
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';

import { useState, useEffect } from 'react';
// import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const data = [
//   {
//     name: 'Viola Amherd',
//     Role: 'Federal Councillor',
//     departement:
//       'The Federal Department of Defence, Civil Protection and Sport (DDPS)',
//     status: 'active',
//   },
//   {
//     name: 'Albert Rösti',
//     Role: 'Federal Councillor',
//     departement:
//       'The Federal Department of the Environment, Transport, Energy and Communications (DETEC)',
//     status: 'active',
//   },
//   {
//     name: 'Beat Jans',
//     Role: 'Federal Councillor',
//     departement: 'The Federal Department of Justice and Police (FDJP)',
//     status: 'active',
//   },
//   {
//     name: 'Ignazio Cassis',
//     Role: 'Federal Councillor',
//     departement: 'The Federal Department of Foreign Affairs (FDFA)',
//     status: 'active',
//   },
//   {
//     name: 'Karin Keller-Sutter',
//     Role: 'Federal Councillor',
//     departement: 'The Federal Department of Finance (FDF)',
//     status: 'active',
//   },
//   {
//     name: 'Guy Parmelin',
//     Role: 'Federal Councillor',
//     departement:
//       'The Federal Department of Economic Affairs, Education and Research (EAER)',
//     status: 'active',
//   },
//   {
//     name: 'Elisabeth Baume-Schneider',
//     Role: 'Federal Councillor',
//     departement: 'The Federal Department of Home Affairs (FDHA)',
//     status: 'active',
//   },
// ];

export default function ProductionTable() {
  const { currentUser } = useSelector((state) => state.user);
  const [userRecords, setUserRecords] = useState([]);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const res = await fetch(
          `/api/record/getrecords?userId=${currentUser._id}`
        );
        const data = await res.json();
        if (res.ok) {
          setUserRecords(data.records);
          if (data.records.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchRecords();
    }

    // run useEffect when the User._id  is changed
  }, [currentUser._id]);

  // const handleShowMore = async () => {
  //   const startIndex = userRecords.length;
  //   try {
  //     const res = await fetch(
  //       `/api/record/getrecords?userId=${currentUser._id}&startIndex=${startIndex}`
  //     );
  //     const data = await res.json();
  //     if (res.ok) {
  //       setUserRecords((prev) => [...prev, ...data.records]);
  //       if (data.records.length < 9) {
  //         setShowMore(false);
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <Card className='mt-4'>
      <h3 className='text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold'>
        Production Records
      </h3>

      <Table className='mt-5'>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Date Updated</TableHeaderCell>
            {/* <TableHeaderCell>Image</TableHeaderCell> */}
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>Month</TableHeaderCell>
            <TableHeaderCell>Agent</TableHeaderCell>
            <TableHeaderCell>Packages Completed</TableHeaderCell>
            <TableHeaderCell>Overlaps Completed</TableHeaderCell>
            <TableHeaderCell>QA% Passed</TableHeaderCell>
            <TableHeaderCell>QA% Failed</TableHeaderCell>
            <TableHeaderCell>Average Cohort</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {userRecords.map((record) => (
            <TableRow key={record._id}>
              <TableCell>
                {new Date(record.updatedAt).toLocaleDateString()}
              </TableCell>
              {/* <TableCell>
                <Link to={`/record/${record.slug}`}>
                  <img
                    src={record.image}
                    alt={record.title}
                    className='w-20 h-10 object-cover bg-gray-500'
                  />
                </Link>
              </TableCell> */}
              <TableCell>
                <Link
                  className='font-medium text-gray-900 dark:text-white'
                  to={`/record/${record.slug}`}
                >
                  {record.title}
                </Link>
              </TableCell>
              <TableCell>{record.month}</TableCell>
              <TableCell>{record.agent}</TableCell>
              <TableCell>{record.completed}</TableCell>
              <TableCell>{record.overlaps}</TableCell>
              <TableCell>{record.qapassed}</TableCell>
              <TableCell>{record.qafailed}</TableCell>
              <TableCell>{record.cohort}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
