import React from 'react';
import { BadgeDelta, Card, Flex, Metric, Text } from '@tremor/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  HiAnnotation,
  HiArrowNarrowUp,
  HiDocumentText,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import { Button, Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
// and add to Dashboard Page

export default function DashboardComponent() {
  // const [users, setUsers] = useState([]);
  // const [comments, setComments] = useState([]);
  // const [recordcomments, setRecordComments] = useState([]);
  // const [notecomments, setNoteComments] = useState([]);
  // const [citations, setCitations] = useState([]);
  const [records, setRecords] = useState([]);
  // const [notes, setNotes] = useState([]);
  // const [totalUsers, setTotalUsers] = useState(0);
  // const [totalCitations, setTotalCitations] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  // const [totalNotes, setTotalNotes] = useState(0);
  // const [totalComments, setTotalComments] = useState(0);
  // const [totalRecordComments, setTotalRecordComments] = useState(0);
  // const [totalNoteComments, setTotalNoteComments] = useState(0);
  // const [lastMonthUsers, setLastMonthUsers] = useState(0);
  // const [lastMonthCitations, setLastMonthCitations] = useState(0);
  const [lastMonthRecords, setLastMonthRecords] = useState(0);
  const [averageCohort, setAverageCohort] = useState(0);
  // const [lastMonthNotes, setLastMonthNotes] = useState(0);
  // const [lastMonthComments, setLastMonthComments] = useState(0);
  // const [lastMonthRecordComments, setLastMonthRecordComments] = useState(0);
  // const [lastMonthNoteComments, setLastMonthNoteComments] = useState(0);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    // const fetchUsers = async () => {
    //   try {
    //     const res = await fetch('/api/user/getusers?limit=5');
    //     const data = await res.json();
    //     if (res.ok) {
    //       setUsers(data.users);
    //       setTotalUsers(data.totalUsers);
    //       setLastMonthUsers(data.lastMonthUsers);
    //     }
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // };
    // const fetchCitations = async () => {
    //   try {
    //     const res = await fetch('/api/citation/getcitations?limit=5');
    //     const data = await res.json();
    //     if (res.ok) {
    //       setCitations(data.citations);
    //       setTotalCitations(data.totalCitations);
    //       setLastMonthCitations(data.lastMonthCitations);
    //     }
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // };
    // const fetchComments = async () => {
    //   try {
    //     const res = await fetch('/api/comment/getallcomments?limit=5');
    //     const data = await res.json();
    //     if (res.ok) {
    //       setComments(data.comments);
    //       setTotalComments(data.totalComments);
    //       setLastMonthComments(data.lastMonthComments);
    //     }
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // };

    const fetchRecords = async () => {
      try {
        const res = await fetch('/api/record/getrecords');
        const data = await res.json();
        if (res.ok) {
          setRecords(data.records);
          setTotalRecords(data.totalRecords);
          setLastMonthRecords(data.lastMonthRecords);
          setAverageCohort(data.AverageCohort);
        }
        // console.log(data.records);
      } catch (error) {
        console.log(error.message);
      }
    };

    // const fetchAverageCohort = async () => {
    //   try {
    //     const res = await fetch('/api/record/getrecords');
    //     const data = await res.json();
    //     if (res.ok) {
    //       setRecords(data.records);
    //       setTotalRecords(data.totalRecords);
    //       setLastMonthRecords(data.lastMonthRecords);
    //     }
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // };

    // ======================================================================
    const objects = [{ value: 10 }, { value: 20 }, { value: 30 }];

    function averageOfProperty(array, key) {
      const sum = array.reduce((acc, obj) => acc + (obj[key] || 0), 0);
      return array.length ? sum / array.length : 0;
    }

    const average = averageOfProperty(objects, 'value');

    console.log(average);
    // ======================================================================

    // const fetchAverageCohort = async () => {
    //   try {
    //     const res = await fetch('/api/record/getrecords.cohort');
    //     const data = await res.json();
    //     if (res.ok) {
    //       setRecords(data.records);
    //       setTotalRecords(data.totalRecords);
    //       setLastMonthRecords(data.lastMonthRecords);
    //     }
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // };

    // const fetchRecordComments = async () => {
    //   try {
    //     const res = await fetch(
    //       '/api/recordcomment/getallrecordcomments?limit=5'
    //     );
    //     const data = await res.json();
    //     if (res.ok) {
    //       setRecordComments(data.recordcomments);
    //       setTotalRecordComments(data.totalRecordComments);
    //       setLastMonthRecordComments(data.lastMonthRecordComments);
    //     }
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // };

    // const fetchNotes = async () => {
    //   try {
    //     const res = await fetch('/api/note/getnotes?limit=5');
    //     const data = await res.json();
    //     if (res.ok) {
    //       setNotes(data.notes);
    //       setTotalNotes(data.totalNotes);
    //       setLastMonthNotes(data.lastMonthNotes);
    //     }
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // };
    // const fetchNoteComments = async () => {
    //   try {
    //     const res = await fetch('/api/notecomment/getallnotecomments?limit=5');
    //     const data = await res.json();
    //     if (res.ok) {
    //       setNoteComments(data.notecomments);
    //       setTotalNoteComments(data.totalNoteComments);
    //       setLastMonthNoteComments(data.lastMonthNoteComments);
    //     }
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // };
    if (currentUser) {
      // fetchUsers();
      // fetchCitations();
      // fetchComments();
      // fetchNotes();
      // fetchNoteComments();
      fetchRecords();
      // fetchRecordComments();
    }
  }, [currentUser]);
  return (
    <Card className='w-xs' decoration='top' decorationColor='cyan-800'>
      <Flex justifyContent='between' alignItems='center'>
        <Text>Records</Text>
        <BadgeDelta deltaType='moderateIncrease'>+1.5%</BadgeDelta>
      </Flex>
      <Metric>{totalRecords}</Metric>
    </Card>
  );
}
