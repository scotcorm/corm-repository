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
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [recordcomments, setRecordComments] = useState([]);
  const [notecomments, setNoteComments] = useState([]);
  const [citations, setCitations] = useState([]);
  const [records, setRecords] = useState([]);
  const [notes, setNotes] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalCitations, setTotalCitations] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  const [totalNotes, setTotalNotes] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [totalRecordComments, setTotalRecordComments] = useState(0);
  const [totalNoteComments, setTotalNoteComments] = useState(0);
  const [lastMonthUsers, setLastMonthUsers] = useState(0);
  const [lastMonthCitations, setLastMonthCitations] = useState(0);
  const [lastMonthRecords, setLastMonthRecords] = useState(0);
  const [lastMonthNotes, setLastMonthNotes] = useState(0);
  const [lastMonthComments, setLastMonthComments] = useState(0);
  const [lastMonthRecordComments, setLastMonthRecordComments] = useState(0);
  const [lastMonthNoteComments, setLastMonthNoteComments] = useState(0);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/user/getusers?limit=5');
        const data = await res.json();
        if (res.ok) {
          setUsers(data.users);
          setTotalUsers(data.totalUsers);
          setLastMonthUsers(data.lastMonthUsers);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchCitations = async () => {
      try {
        const res = await fetch('/api/citation/getcitations?limit=5');
        const data = await res.json();
        if (res.ok) {
          setCitations(data.citations);
          setTotalCitations(data.totalCitations);
          setLastMonthCitations(data.lastMonthCitations);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchComments = async () => {
      try {
        const res = await fetch('/api/comment/getallcomments?limit=5');
        const data = await res.json();
        if (res.ok) {
          setComments(data.comments);
          setTotalComments(data.totalComments);
          setLastMonthComments(data.lastMonthComments);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchRecords = async () => {
      try {
        const res = await fetch('/api/record/getrecords?limit=5');
        const data = await res.json();
        if (res.ok) {
          setRecords(data.records);
          setTotalRecords(data.totalRecords);
          setLastMonthRecords(data.lastMonthRecords);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchRecordComments = async () => {
      try {
        const res = await fetch(
          '/api/recordcomment/getallrecordcomments?limit=5'
        );
        const data = await res.json();
        if (res.ok) {
          setRecordComments(data.recordcomments);
          setTotalRecordComments(data.totalRecordComments);
          setLastMonthRecordComments(data.lastMonthRecordComments);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchNotes = async () => {
      try {
        const res = await fetch('/api/note/getnotes?limit=5');
        const data = await res.json();
        if (res.ok) {
          setNotes(data.notes);
          setTotalNotes(data.totalNotes);
          setLastMonthNotes(data.lastMonthNotes);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchNoteComments = async () => {
      try {
        const res = await fetch('/api/notecomment/getallnotecomments?limit=5');
        const data = await res.json();
        if (res.ok) {
          setNoteComments(data.notecomments);
          setTotalNoteComments(data.totalNoteComments);
          setLastMonthNoteComments(data.lastMonthNoteComments);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchUsers();
      fetchCitations();
      fetchComments();
      fetchNotes();
      fetchNoteComments();
      fetchRecords();
      fetchRecordComments();
    }
  }, [currentUser]);
  return (
    // <main className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
    <main className='p-3 max-w-6xl md:mx-auto min-h-screen mb-10'>
      <section>
        <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
          Users
        </h1>

        <div className='flex flex-wrap gap-4 py-3 justify-center'>
          <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
            <div className='flex justify-between'>
              <div className=''>
                <h3 className='text-gray-500 mt-10 text-md uppercase'>
                  Total Users
                </h3>
                <p className='text-2xl'>{totalUsers}</p>
              </div>
              <HiOutlineUserGroup className='bg-orange-400  text-white rounded-full mt-10 text-5xl p-3 shadow-lg' />
            </div>
            <div className='flex gap-2 text-sm'>
              <span className='text-green-500 flex items-center'>
                <HiArrowNarrowUp />
                {lastMonthUsers}
              </span>
              <div className='text-gray-500'>Last month</div>
            </div>
          </div>

          <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
            <div className='flex flex-col w-full md:w-auto p-2 rounded-md dark:bg-gray-800'>
              <div className='flex justify-between  p-3 text-sm font-semibold'>
                <h1 className='text-center p-2'>Recent Users</h1>
                <Button outline>
                  <Link to={'/dashboard?tab=users'}>See all</Link>
                </Button>
              </div>
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell>User image</Table.HeadCell>
                  <Table.HeadCell>Username</Table.HeadCell>
                </Table.Head>
                {users &&
                  users.map((user) => (
                    <Table.Body key={user._id} className='divide-y'>
                      <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                        <Table.Cell>
                          <img
                            src={user.profilePicture}
                            alt='user'
                            className='w-10 h-10 rounded-full bg-gray-500'
                          />
                        </Table.Cell>
                        <Table.Cell>{user.username}</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  ))}
              </Table>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
          Citations
        </h1>

        <div className='flex flex-wrap gap-4 py-3 justify-center'>
          <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
            <div className='flex justify-between'>
              <div className=''>
                <h3 className='text-gray-500 mt-10 text-md uppercase'>
                  Total Citations
                </h3>
                <p className='text-2xl'>{totalCitations}</p>
              </div>
              <HiDocumentText className='bg-orange-400  text-white mt-10 rounded-full text-5xl p-3 shadow-lg' />
            </div>
            <div className='flex  gap-2 text-sm'>
              <span className='text-green-500 flex items-center'>
                <HiArrowNarrowUp />
                {lastMonthCitations}
              </span>
              <div className='text-gray-500'>Last month</div>
            </div>
          </div>

          <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
            <div className='flex flex-col w-full md:w-auto p-2 rounded-md dark:bg-gray-800'>
              <div className='flex justify-between  p-3 text-sm font-semibold'>
                <h1 className='text-center p-2'>Recent Citations</h1>
                <Button outline>
                  <Link to={'/dashboard?tab=citations'}>See all</Link>
                </Button>
              </div>
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell>Citation Image</Table.HeadCell>
                  <Table.HeadCell>Citation Title</Table.HeadCell>
                </Table.Head>
                {citations &&
                  citations.map((citation) => (
                    <Table.Body key={citation._id} className='divide-y'>
                      <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                        <Table.Cell>
                          <img
                            src={citation.image}
                            alt='citation'
                            className='w-14 h-10 rounded-md bg-gray-500'
                          />
                        </Table.Cell>
                        <Table.Cell className='w-96'>
                          {citation.title}
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  ))}
              </Table>
            </div>
          </div>

          <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
            <div className='flex flex-col w-full md:w-auto p-2 rounded-md dark:bg-gray-800'>
              <div className='flex justify-between  p-3 text-sm font-semibold'>
                <h1 className='text-center p-2'>Recent Comments</h1>
                <Button outline>
                  <Link to={'/dashboard?tab=citationcomments'}>See all</Link>
                </Button>
              </div>
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell>Comment content</Table.HeadCell>
                  <Table.HeadCell>Likes</Table.HeadCell>
                </Table.Head>
                {comments &&
                  comments.map((comment) => (
                    <Table.Body key={comment._id} className='divide-y'>
                      <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                        <Table.Cell className='w-96'>
                          <p className='line-clamp-2'>{comment.content}</p>
                        </Table.Cell>
                        <Table.Cell>{comment.numberOfLikes}</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  ))}
              </Table>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
          Notes
        </h1>

        <div className='flex flex-wrap gap-4 py-3 justify-center'>
          <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
            <div className='flex justify-between'>
              <div className=''>
                <h3 className='text-gray-500 mt-10 text-md uppercase'>
                  Total Notes
                </h3>
                <p className='text-2xl'>{totalNotes}</p>
              </div>
              <HiAnnotation className='bg-orange-400  text-white mt-10 rounded-full text-5xl p-3 shadow-lg' />
            </div>
            <div className='flex  gap-2 text-sm'>
              <span className='text-green-500 flex items-center'>
                <HiArrowNarrowUp />
                {lastMonthNotes}
              </span>
              <div className='text-gray-500'>Last month</div>
            </div>
          </div>

          <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
            <div className='flex flex-col w-full md:w-auto p-2 rounded-md dark:bg-gray-800'>
              <div className='flex justify-between  p-3 text-sm font-semibold'>
                <h1 className='text-center p-2'>Recent Notes</h1>
                <Button outline>
                  <Link to={'/dashboard?tab=notes'}>See all</Link>
                </Button>
              </div>
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell>Note Image</Table.HeadCell>
                  <Table.HeadCell>Note Title</Table.HeadCell>
                </Table.Head>
                {notes &&
                  notes.map((note) => (
                    <Table.Body key={note._id} className='divide-y'>
                      <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                        <Table.Cell>
                          <img
                            src={note.image}
                            alt='user'
                            className='w-14 h-10 rounded-md bg-gray-500'
                          />
                        </Table.Cell>
                        <Table.Cell className='w-96'>{note.title}</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  ))}
              </Table>
            </div>
          </div>

          <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
            <div className='flex flex-col w-full md:w-auto p-2 rounded-md dark:bg-gray-800'>
              <div className='flex justify-between  p-3 text-sm font-semibold'>
                <h1 className='text-center p-2'>Recent Comments</h1>
                <Button outline>
                  <Link to={'/dashboard?tab=notecomments'}>See all</Link>
                </Button>
              </div>
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell>Comment content</Table.HeadCell>
                  <Table.HeadCell>Likes</Table.HeadCell>
                </Table.Head>
                {notecomments &&
                  notecomments.map((notecomment) => (
                    <Table.Body key={notecomment._id} className='divide-y'>
                      <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                        <Table.Cell className='w-96'>
                          <p className='line-clamp-2'>{notecomment.content}</p>
                        </Table.Cell>
                        <Table.Cell>{notecomment.numberOfLikes}</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  ))}
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* end users section */}

      {/* <div className=''>Citations</div>
      <div className=''>Notes</div>
      <div className=''>Records</div> */}

      <section className='mb-5'>
        <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
          Records
        </h1>

        <div className='flex flex-wrap gap-4 py-3 justify-center'>
          <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
            <div className='flex justify-between'>
              <div className=''>
                <h3 className='text-gray-500 mt-10 text-md uppercase'>
                  Total Records
                </h3>
                <p className='text-2xl'>{totalRecords}</p>
              </div>
              <HiDocumentText className='bg-orange-400  text-white mt-10 rounded-full text-5xl p-3 shadow-lg' />
            </div>
            <div className='flex  gap-2 text-sm'>
              <span className='text-green-500 flex items-center'>
                <HiArrowNarrowUp />
                {lastMonthRecords}
              </span>
              <div className='text-gray-500'>Last month</div>
            </div>
          </div>

          <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
            <div className='flex flex-col w-full md:w-auto p-2 rounded-md dark:bg-gray-800'>
              <div className='flex justify-between  p-3 text-sm font-semibold'>
                <h1 className='text-center p-2'>Recent Records</h1>
                <Button outline>
                  <Link to={'/dashboard?tab=records'}>See all</Link>
                </Button>
              </div>
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell>note image</Table.HeadCell>
                  <Table.HeadCell>note Title</Table.HeadCell>
                </Table.Head>
                {records &&
                  records.map((record) => (
                    <Table.Body key={record._id} className='divide-y'>
                      <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                        <Table.Cell>
                          <img
                            src={record.image}
                            alt='user'
                            className='w-14 h-10 rounded-md bg-gray-500'
                          />
                        </Table.Cell>
                        <Table.Cell className='w-96'>{record.title}</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  ))}
              </Table>
            </div>
          </div>

          <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
            <div className='flex flex-col w-full md:w-auto p-2 rounded-md dark:bg-gray-800'>
              <div className='flex justify-between  p-3 text-sm font-semibold'>
                <h1 className='text-center p-2'>Recent Comments</h1>
                <Button outline>
                  <Link to={'/dashboard?tab=recordcomments'}>See all</Link>
                </Button>
              </div>
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell>Comment content</Table.HeadCell>
                  <Table.HeadCell>Likes</Table.HeadCell>
                </Table.Head>
                {recordcomments &&
                  recordcomments.map((recordcomment) => (
                    <Table.Body key={recordcomment._id} className='divide-y'>
                      <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                        <Table.Cell className='w-96'>
                          <p className='line-clamp-2'>
                            {recordcomment.content}
                          </p>
                        </Table.Cell>
                        <Table.Cell>{recordcomment.numberOfLikes}</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  ))}
              </Table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );

  //   <div className='flex-wrap p-3 md:mx-auto'>
  //     <div className='flex justify-between'>
  //       <div className='  p-2 text-sm font-semibold'>
  //         <div className='flex flex-col p-2 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
  //           <div className='flex justify-between'>
  //             <div className=''>
  //               <h3 className='text-gray-500 text-md uppercase'>Total Users</h3>
  //               <p className='text-2xl'>{totalUsers}</p>
  //             </div>
  //             <HiOutlineUserGroup className='bg-teal-600  text-white rounded-full text-5xl p-3 shadow-lg' />
  //           </div>
  //           <div className='flex  gap-2 text-sm'>
  //             <span className='text-green-500 flex items-center'>
  //               <HiArrowNarrowUp />
  //               {lastMonthUsers}
  //             </span>
  //             <div className='text-gray-500'>Last month</div>
  //           </div>
  //         </div>

  //         {/* ====================== */}
  //         <div className='flex justify-between  p-2 text-sm font-semibold'>
  //           <h1 className='text-center p-2'>Recent users</h1>
  //           <Button outline gradientDuoTone='purpleToPink'>
  //             <Link to={'/dashboard?tab=users'}>See all</Link>
  //           </Button>
  //         </div>
  //         <Table hoverable>
  //           <Table.Head>
  //             <Table.HeadCell>User image</Table.HeadCell>
  //             <Table.HeadCell>Username</Table.HeadCell>
  //           </Table.Head>
  //           {users &&
  //             users.map((user) => (
  //               <Table.Body key={user._id} className='divide-y'>
  //                 <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
  //                   <Table.Cell>
  //                     <img
  //                       src={user.profilePicture}
  //                       alt='user'
  //                       className='w-10 h-10 rounded-full bg-gray-500'
  //                     />
  //                   </Table.Cell>
  //                   <Table.Cell>{user.username}</Table.Cell>
  //                 </Table.Row>
  //               </Table.Body>
  //             ))}
  //         </Table>
  //       </div>
  //     </div>

  //     <div className='flex-wrap flex gap-4 justify-center'>
  //       <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
  //         <div className='flex justify-between'>
  //           <div className=''>
  //             <h3 className='text-gray-500 text-md uppercase'>Total Users</h3>
  //             <p className='text-2xl'>{totalUsers}</p>
  //           </div>
  //           <HiOutlineUserGroup className='bg-teal-600  text-white rounded-full text-5xl p-3 shadow-lg' />
  //         </div>
  //         <div className='flex  gap-2 text-sm'>
  //           <span className='text-green-500 flex items-center'>
  //             <HiArrowNarrowUp />
  //             {lastMonthUsers}
  //           </span>
  //           <div className='text-gray-500'>Last month</div>
  //         </div>
  //       </div>

  //       <div className='flex flex-wrap gap-4 py-3 mx-auto justify-center'>
  //         <div className='flex flex-col w-full md:w-auto shadow-md p-2 rounded-md dark:bg-gray-800'>
  //           <div className='flex justify-between  p-3 text-sm font-semibold'>
  //             <h1 className='text-center p-2'>Recent users</h1>
  //             <Button outline gradientDuoTone='purpleToPink'>
  //               <Link to={'/dashboard?tab=users'}>See all</Link>
  //             </Button>
  //           </div>
  //           <Table hoverable>
  //             <Table.Head>
  //               <Table.HeadCell>User image</Table.HeadCell>
  //               <Table.HeadCell>Username</Table.HeadCell>
  //             </Table.Head>
  //             {users &&
  //               users.map((user) => (
  //                 <Table.Body key={user._id} className='divide-y'>
  //                   <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
  //                     <Table.Cell>
  //                       <img
  //                         src={user.profilePicture}
  //                         alt='user'
  //                         className='w-10 h-10 rounded-full bg-gray-500'
  //                       />
  //                     </Table.Cell>
  //                     <Table.Cell>{user.username}</Table.Cell>
  //                   </Table.Row>
  //                 </Table.Body>
  //               ))}
  //           </Table>
  //         </div>

  //         {/* ++++++++++++++++++++++++++++++++++++++    end users section  +++++++++++++++++++++++++++++++ */}
  //       </div>

  //       <div className='flex-wrap flex gap-4 justify-center'>
  //         <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
  //           <div className='flex justify-between'>
  //             <div className=''>
  //               <h3 className='text-gray-500 text-md uppercase'>
  //                 Total citations
  //               </h3>
  //               <p className='text-2xl'>{totalCitations}</p>
  //             </div>
  //             <HiDocumentText className='bg-lime-600  text-white rounded-full text-5xl p-3 shadow-lg' />
  //           </div>
  //           <div className='flex  gap-2 text-sm'>
  //             <span className='text-green-500 flex items-center'>
  //               <HiArrowNarrowUp />
  //               {lastMonthCitations}
  //             </span>
  //             <div className='text-gray-500'>Last month</div>
  //           </div>
  //         </div>
  //         <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
  //           <div className='flex justify-between'>
  //             <div className=''>
  //               <h3 className='text-gray-500 text-md uppercase'>
  //                 Total Comments
  //               </h3>
  //               <p className='text-2xl'>{totalComments}</p>
  //             </div>
  //             <HiAnnotation className='bg-indigo-600  text-white rounded-full text-5xl p-3 shadow-lg' />
  //           </div>
  //           <div className='flex  gap-2 text-sm'>
  //             <span className='text-green-500 flex items-center'>
  //               <HiArrowNarrowUp />
  //               {lastMonthComments}
  //             </span>
  //             <div className='text-gray-500'>Last month</div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className='flex-wrap flex gap-4 justify-center'>
  //         <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
  //           <div className='flex justify-between'>
  //             <div className=''>
  //               <h3 className='text-gray-500 text-md uppercase'>
  //                 Total records
  //               </h3>
  //               <p className='text-2xl'>{totalRecords}</p>
  //             </div>
  //             <HiDocumentText className='bg-lime-600  text-white rounded-full text-5xl p-3 shadow-lg' />
  //           </div>
  //           <div className='flex  gap-2 text-sm'>
  //             <span className='text-green-500 flex items-center'>
  //               <HiArrowNarrowUp />
  //               {lastMonthRecords}
  //             </span>
  //             <div className='text-gray-500'>Last month</div>
  //           </div>
  //         </div>
  //         <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
  //           <div className='flex justify-between'>
  //             <div className=''>
  //               <h3 className='text-gray-500 text-md uppercase'>
  //                 Total Record Comments
  //               </h3>
  //               <p className='text-2xl'>{totalRecordComments}</p>
  //             </div>
  //             <HiAnnotation className='bg-indigo-600  text-white rounded-full text-5xl p-3 shadow-lg' />
  //           </div>
  //           <div className='flex  gap-2 text-sm'>
  //             <span className='text-green-500 flex items-center'>
  //               <HiArrowNarrowUp />
  //               {lastMonthRecordComments}
  //             </span>
  //             <div className='text-gray-500'>Last month</div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className='flex-wrap flex gap-4 justify-center'>
  //         <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
  //           <div className='flex justify-between'>
  //             <div className=''>
  //               <h3 className='text-gray-500 text-md uppercase'>Total Notes</h3>
  //               <p className='text-2xl'>{totalNotes}</p>
  //             </div>
  //             <HiDocumentText className='bg-lime-600  text-white rounded-full text-5xl p-3 shadow-lg' />
  //           </div>
  //           <div className='flex  gap-2 text-sm'>
  //             <span className='text-green-500 flex items-center'>
  //               <HiArrowNarrowUp />
  //               {lastMonthNotes}
  //             </span>
  //             <div className='text-gray-500'>Last month</div>
  //           </div>
  //         </div>
  //         <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
  //           <div className='flex justify-between'>
  //             <div className=''>
  //               <h3 className='text-gray-500 text-md uppercase'>
  //                 Total Comments
  //               </h3>
  //               <p className='text-2xl'>{totalNoteComments}</p>
  //             </div>
  //             <HiAnnotation className='bg-indigo-600  text-white rounded-full text-5xl p-3 shadow-lg' />
  //           </div>
  //           <div className='flex  gap-2 text-sm'>
  //             <span className='text-green-500 flex items-center'>
  //               <HiArrowNarrowUp />
  //               {lastMonthNoteComments}
  //             </span>
  //             <div className='text-gray-500'>Last month</div>
  //           </div>
  //         </div>
  //       </div>

  //       <div className='flex flex-col w-full md:w-auto shadow-md p-2 rounded-md dark:bg-gray-800'>
  //         <div className='flex justify-between  p-3 text-sm font-semibold'>
  //           <h1 className='text-center p-2'>Recent comments</h1>
  //           <Button outline gradientDuoTone='purpleToPink'>
  //             <Link to={'/dashboard?tab=comments'}>See all</Link>
  //           </Button>
  //         </div>
  //         <Table hoverable>
  //           <Table.Head>
  //             <Table.HeadCell>Comment content</Table.HeadCell>
  //             <Table.HeadCell>Likes</Table.HeadCell>
  //           </Table.Head>
  //           {comments &&
  //             comments.map((comment) => (
  //               <Table.Body key={comment._id} className='divide-y'>
  //                 <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
  //                   <Table.Cell className='w-96'>
  //                     <p className='line-clamp-2'>{comment.content}</p>
  //                   </Table.Cell>
  //                   <Table.Cell>{comment.numberOfLikes}</Table.Cell>
  //                 </Table.Row>
  //               </Table.Body>
  //             ))}
  //         </Table>
  //       </div>
  //       <div className='flex flex-col w-full md:w-auto shadow-md p-2 rounded-md dark:bg-gray-800'>
  //         <div className='flex justify-between  p-3 text-sm font-semibold'>
  //           <h1 className='text-center p-2'>Recent citations</h1>
  //           <Button outline gradientDuoTone='purpleToPink'>
  //             <Link to={'/dashboard?tab=citations'}>See all</Link>
  //           </Button>
  //         </div>
  //         <Table hoverable>
  //           <Table.Head>
  //             <Table.HeadCell>citation image</Table.HeadCell>
  //             <Table.HeadCell>citation Title</Table.HeadCell>
  //             <Table.HeadCell>Category</Table.HeadCell>
  //           </Table.Head>
  //           {citations &&
  //             citations.map((citation) => (
  //               <Table.Body key={citation._id} className='divide-y'>
  //                 <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
  //                   <Table.Cell>
  //                     <img
  //                       src={citation.image}
  //                       alt='user'
  //                       className='w-14 h-10 rounded-md bg-gray-500'
  //                     />
  //                   </Table.Cell>
  //                   <Table.Cell className='w-96'>{citation.title}</Table.Cell>
  //                   <Table.Cell className='w-5'>{citation.category}</Table.Cell>
  //                 </Table.Row>
  //               </Table.Body>
  //             ))}
  //         </Table>
  //       </div>
  //     </div>
  //   </div>
  // );
}
