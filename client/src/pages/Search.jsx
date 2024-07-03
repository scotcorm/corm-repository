import { Button, Select, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CitationCard from '../components/CitationCard';
// import NoteCard from '../components/NoteCard';
// create page then add to app.jsx

export default function Search() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: '',
    sort: 'desc',
    license: '',
  });
  console.log(sidebarData);
  const [citations, setCitations] = useState([]);
  // const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);
  //const [showMoreNotes, setShowMoreNotes] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const sortFromUrl = urlParams.get('sort');
    const licenseFromUrl = urlParams.get('license');
    if (searchTermFromUrl || sortFromUrl || licenseFromUrl) {
      //if (searchTermFromUrl || sortFromUrl) {
      setSidebarData({
        ...sidebarData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        license: licenseFromUrl,
      });
    }

    const fetchCitations = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/citation/getcitations?${searchQuery}`);
      if (!res.ok) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setCitations(data.citations);
        setLoading(false);
        // setShowMore(true);
        if (data.citations.length >= 3) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
      }
    };
    fetchCitations();

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
    if (e.target.id === 'license') {
      const license = e.target.value || 'uncategorized';
      setSidebarData({ ...sidebarData, license });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', sidebarData.searchTerm);
    urlParams.set('sort', sidebarData.sort);
    urlParams.set('license', sidebarData.license);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const handleShowMore = async () => {
    const numberOfCitations = citations.length;
    const startIndex = numberOfCitations;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('startIndex', startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/citation/getcitations?${searchQuery}`);
    if (!res.ok) {
      return;
    }
    if (res.ok) {
      const data = await res.json();
      setCitations([...citations, ...data.citations]);
      if (data.citations.length >= 3) {
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
    <div className='flex flex-col md:flex-row'>
      <div className='p-7 border-b md:border-r md:min-h-screen border-gray-500'>
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
            <label className='font-semibold'>License:</label>
            <Select
              onChange={handleChange}
              value={sidebarData.license}
              id='license'
            >
              <option value='uncategorized'>Uncategorized</option>
              <option value='by'>CC-BY</option>
              <option value='by-nc'>CC-BY-NC</option>
              <option value='by-nd'>CC-BY-ND</option>
              <option value='by-sa'>CC-BY-SA</option>
              <option value='by-nc-sa'>CC-BY-NC-SA</option>
              <option value='by-nc-nd'>CC-BY-NC-ND</option>
              <option value='other'>Other</option>
            </Select>
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
            to={'/search'}
            // className='text-lg text-black  hover:underline text-center block'
          >
            Clear Filters
          </Link>
        </Button>
      </div>

      <div className='w-full'>
        <h1 className='text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5 '>
          Citations results:
        </h1>
        <div className='p-7 flex flex-wrap gap-4'>
          {!loading && citations.length === 0 && (
            <p className='text-xl text-gray-500'>No matches.</p>
          )}
          {loading && <p className='text-xl text-gray-500'>Loading...</p>}
          {!loading &&
            citations &&
            citations.map((citation) => (
              <CitationCard key={citation._id} citation={citation} />
            ))}
          {showMore && (
            <button
              onClick={handleShowMore}
              className='text-cyan-800 text-lg hover:underline p-7 w-full'
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
