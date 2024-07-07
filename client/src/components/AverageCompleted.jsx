import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function AverageCompleted() {
  const { currentUser } = useSelector((state) => state.user);
  const [userRecords, setUserRecords] = useState([]);
  // const [showMore, setShowMore] = useState(true);
  const display = document.querySelector('#display-data');
  const [averageFinal, setAverageFinal] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const res = await fetch(
          `/api/record/getrecords?userId=${currentUser._id}`
        );
        const data = await res.json();

        if (res.ok) {
          setUserRecords(data.records);
          // console.log(data.records);

          // ========================================find the average
          let average = [];
          let sum = 0;
          let i;

          let displayData = data.records.map((object) => {
            const { cohort, completed } = object;
            console.log(object.completed);
            sum += parseInt([object.completed]);
            average.push(object.completed);
          });
          let averageCompleted = parseInt(sum) / average.length;

          console.log(averageCompleted);
          setAverageFinal([...averageFinal, averageCompleted]);

          // if (data.records.length < 9) {
          //   setShowMore(false);
          // }
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

  return <h1>{averageFinal}</h1>;
}

// the answer was finally at
// https://stackoverflow.com/questions/65486233/react-shows-values-in-console-but-does-not-render-them
