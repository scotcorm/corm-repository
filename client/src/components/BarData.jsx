// import React from 'react';
// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';

// export default function BarData() {
//   const { currentUser } = useSelector((state) => state.user);
//   const [userRecords, setUserRecords] = useState([]);
//   // const [showMore, setShowMore] = useState(true);
//   const display = document.querySelector('#display-data');
//   const [productionFinal, setProductionFinal] = useState([]);
//   const [newdata, setData] = useState([]);

//   useEffect(() => {
//     const fetchRecords = async () => {
//       try {
//         const res = await fetch(
//           `/api/record/getrecords?userId=${currentUser._id}`
//         );
//         const data = await res.json();
//         // setService(data);

//         // added the above setService line
//         if (res.ok) {
//           setUserRecords(data.records);
//           let newdata = data.records;
//           console.log(newdata);
//           const production = newdata.map((productionrecord) => {
//             // console.log(productionrecord);
//             return productionrecord.completed;
//           });
//           console.log(production);
//           // console.log(averageCohort);
//           setData([...data, newdata]);
//         }
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     if (currentUser.isAdmin) {
//       fetchRecords();
//     }

//     // run useEffect when the User._id  is changed
//   }, [currentUser._id]);

//   // ===================================================================added the above============
//   // return <h1>{averageFinal}</h1>;
//   return <h1>{newdata}</h1>;
// }

import React from 'react';

export default function BarData() {
  return <div>BarData</div>;
}
