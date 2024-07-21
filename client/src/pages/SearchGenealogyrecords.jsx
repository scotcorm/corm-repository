import { Button, Select, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import GenealogyrecordCard from '../components/GenealogyrecordCard';
import GenealogyMain from '../components/GenealogyMain';
// create page then add to app.jsx

export default function Search() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: '',
    sort: 'desc',
    //category: 'uncategorized',
  });
  // console.log(sidebarData);

  const [genealogyrecords, setGenealogyrecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);
  //const [showMoreGenealogyrecords, setShowMoreGenealogyrecords] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const sortFromUrl = urlParams.get('sort');
    //const categoryFromUrl = urlParams.get('category');
    if (searchTermFromUrl || sortFromUrl) {
      // if (searchTermFromUrl || sortFromUrl) {
      setSidebarData({
        ...sidebarData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        //category: categoryFromUrl,
      });
    }

    const fetchGenealogyrecords = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(
        `/api/genealogyrecord/getgenealogyrecords?${searchQuery}`
      );
      if (!res.ok) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setGenealogyrecords(data.genealogyrecords);
        setLoading(false);
        // setShowMore(true);
        if (data.genealogyrecords.length >= 3) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
      }
    };
    fetchGenealogyrecords();

    // const fetchNotes = async () => {
    //   setLoading(true);
    //   const searchQuery = urlParams.toString();
    //   const res = await fetch(`/api/note/getnotes?${searchQuery}`);
    //   if (!res.ok) {
    //     setLoading(false);
    //     return;
    //   }
    //   if (res.ok) {
    //     const data = await res.json();
    //     setNotes(data.notes);
    //     setLoading(false);
    //     // setShowMoreNotes(true);
    //     if (data.notes.length >= 3) {
    //       setShowMoreNotes(true);
    //     } else {
    //       setShowMoreNotes(false);
    //     }
    //   }
    // };
    // fetchNotes();
  }, [location.search]);

  const handleChange = (e) => {
    if (e.target.id === 'searchTerm') {
      setSidebarData({ ...sidebarData, searchTerm: e.target.value });
    }
    if (e.target.id === 'sort') {
      const order = e.target.value;
      setSidebarData({ ...sidebarData, sort: order });
    }
    // if (e.target.id === 'category') {
    //   const category = e.target.value || 'uncategorized';
    //   setSidebarData({ ...sidebarData, category });
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', sidebarData.searchTerm);
    urlParams.set('sort', sidebarData.sort);
    //urlParams.set('category', sidebarData.category);
    const searchQuery = urlParams.toString();
    navigate(`/searchgenealogyrecords?${searchQuery}`);
  };

  const handleShowMore = async () => {
    const numberOfGenealogyrecords = genealogyrecords.length;
    const startIndex = numberOfGenealogyrecords;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('startIndex', startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(
      `/api/genealogyrecord/getgenealogyrecords?${searchQuery}`
    );
    if (!res.ok) {
      return;
    }
    if (res.ok) {
      const data = await res.json();
      setGenealogyrecords([...genealogyrecords, ...data.genealogyrecords]);
      if (data.genealogyrecords.length >= 3) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
    }
  };

  // const handleShowMoreNotes = async () => {
  //   const numberOfNotes = notes.length;
  //   const startIndex = numberOfNotes;
  //   const urlParams = new URLSearchParams(location.search);
  //   urlParams.set('startIndex', startIndex);
  //   const searchQuery = urlParams.toString();
  //   const res = await fetch(`/api/note/getnotes?${searchQuery}`);
  //   if (!res.ok) {
  //     return;
  //   }
  //   if (res.ok) {
  //     const data = await res.json();
  //     setNotes([...notes, ...data.notes]);
  //     if (data.notes.length >= 3) {
  //       setShowMoreNotes(true);
  //     } else {
  //       setShowMoreNotes(false);
  //     }
  //   }
  // };

  return (
    <div className='flex flex-col text-slate-500 dark:text-slate-200 px-3 max-w-6xl font-medium md:flex-row mx-auto '>
      {/* gap-6 p-28 px-3  mx-auto */}
      {/* <div className='p-7 border-b md:border-r md:min-h-screen border-gray-500'>
        <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
          <div className='flex   items-center gap-2'>
            <label className='whitespace-nowrap font-semibold'>Search:</label>
            <TextInput
              placeholder='Search...'
              id='searchTerm'
              type='text'
              value={sidebarData.searchTerm}
              onChange={handleChange}
            />
          </div>

          <div className='flex items-center gap-2'>
            <label className='font-semibold'>Sort By:</label>
            <Select onChange={handleChange} value={sidebarData.sort} id='sort'>
              <option value='desc'>Newest</option>
              <option value='asc'>Oldest</option>
            </Select>
          </div>
          <Button type='submit' outline>
            Apply Filters
          </Button>
        </form>
        <Button className='hover:underline w-full mt-10'>
          <Link
            to={'/searchgenealogyrecords'}
            // className='text-lg text-black  hover:underline text-center block'
          >
            Clear Filters
          </Link>
        </Button>
      </div> */}
      <div className='w-full'>
        <GenealogyMain />

        <h1 className='text-slate-500 dark:text-slate-200 text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5 '>
          Photo Album:
        </h1>
        <div className='p-7 flex flex-wrap gap-2'>
          {!loading && genealogyrecords.length === 0 && (
            <p className='text-xl text-gray-500'>No matches.</p>
          )}
          {loading && <p className='text-xl text-gray-500'>Loading...</p>}
          {!loading &&
            genealogyrecords &&
            genealogyrecords.map((genealogyrecord) => (
              <GenealogyrecordCard
                key={genealogyrecord._id}
                genealogyrecord={genealogyrecord}
              />
            ))}
          {showMore && (
            <button
              onClick={handleShowMore}
              className='text-cyan-800 dark:text-slate-200 text-lg hover:underline p-7 w-full'
            >
              Show More
            </button>
          )}
        </div>

        {/* <h1
          id='notes'
          className='text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5 '
        >
          Notes results:
        </h1>
        <div className='p-7 flex flex-wrap gap-4'>
          {!loading && notes.length === 0 && (
            <p className='text-xl text-gray-500'>No notes found.</p>
          )}
          {loading && <p className='text-xl text-gray-500'>Loading...</p>}
          {!loading &&
            notes &&
            notes.map((note) => <NoteCard key={note._id} note={note} />)}
          {showMoreNotes && (
            <button
              onClick={handleShowMoreNotes}
              className='text-cyan-800 text-lg hover:underline p-7 w-full'
            >
              Show More
            </button>
          )}
        </div> */}
      </div>
      {/* +++++++++++++++++++= notes +++++++++++++++++++ */}
      {/* <div className='flex flex-col'> */}
      {/* <div className='p-7 border-b md:border-r md:min-h-screen border-gray-500'> */}
      {/* <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
            <div className='flex   items-center gap-2'>
              <label className='whitespace-nowrap font-semibold'>
                Search Term:
              </label>
              <TextInput
                placeholder='Search...'
                id='searchTerm'
                type='text'
                value={sidebarData.searchTerm}
                onChange={handleChange}
              />
            </div>
            <div className='flex items-center gap-2'>
              <label className='font-semibold'>Sort:</label>
              <Select
                onChange={handleChange}
                value={sidebarData.sort}
                id='sort'
              >
                <option value='desc'>Latest</option>
                <option value='asc'>Oldest</option>
              </Select>
            </div> */}
      {/* <div className='flex items-center gap-2'>
            <label className='font-semibold'>Category:</label>
            <Select
              onChange={handleChange}
              value={sidebarData.category}
              id='category'
            >
              <option value='uncategorized'>Uncategorized</option>
              <option value='reactjs'>React.js</option>
              <option value='nextjs'>Next.js</option>
              <option value='javascript'>JavaScript</option>
            </Select>
          </div> */}
      {/* <Button type='submit' outline gradientDuoTone='purpleToPink'>
              Apply Filters
            </Button>
          </form> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}
