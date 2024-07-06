import React from 'react';
// import ProductionNavbar from './ProductionNavbar';
// import ProductionRightColumn from './ProductionRightColumn';
// import ProductionLeftColumn from './ProductionLeftColumn';
import Production2023RightColumn from './Production2023RightColumn';
import Production2023LeftColumn from './Production2023LeftColumn';
// import {
//   Badge,
//   Card,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeaderCell,
//   TableRow,
// } from '@tremor/react';

// import { useState, useEffect } from 'react';
// import { HiOutlineExclamationCircle } from 'react-icons/hi';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

export default function ProductionProfile2023() {
  // const { currentUser } = useSelector((state) => state.user);
  // const [userRecords, setUserRecords] = useState([]);
  // const [showMore, setShowMore] = useState(true);

  // useEffect(() => {
  //   const fetchRecords = async () => {
  //     try {
  //       const res = await fetch(
  //         `/api/record/getrecords?userId=${currentUser._id}`
  //       );
  //       const data = await res.json();
  //       if (res.ok) {
  //         setUserRecords(data.records);
  //         if (data.records.length < 9) {
  //           setShowMore(false);
  //         }
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   if (currentUser.isAdmin) {
  //     fetchRecords();
  //   }

  //   // run useEffect when the User._id  is changed
  // }, [currentUser._id]);

  return (
    <main className='max-w-6xl mx-auto'>
      <div className='flex flex-col flex-1 relative'>
        {/* <ProductionNavbar /> */}
        <div className='grid md:grid-cols-3 grid-cols-1 w-full'>
          <div className='col-span-2'>
            <Production2023LeftColumn />
          </div>
          <div className='w-full'>
            <Production2023RightColumn />
          </div>
        </div>
      </div>
    </main>
  );
}
