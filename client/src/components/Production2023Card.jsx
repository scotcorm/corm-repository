import React from 'react';
import { BadgeDelta, Card, Flex, Metric, Text } from '@tremor/react';

// ===================================================================added the below============
import { useState, useEffect } from 'react';
// import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// ===================================================================added the above============

export default function Production2023Card() {
  // ===================================================================added the below============

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

  // ===================================================================added the above============
  return (
    <Card className='w-xs' decoration='top' decorationColor='cyan-800'>
      <Flex justifyContent='between' alignItems='center'>
        <Text>Average Files Completed Daily</Text>
        <BadgeDelta deltaType='moderateIncrease'>+.78%</BadgeDelta>
      </Flex>
      <Metric>45</Metric>
    </Card>
  );
}
