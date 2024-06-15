import { Button, Select, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CitationCard from '../components/CitationCard';
// create page then add to app.jsx

export default function Search() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: '',
    sort: 'desc',
    license: '',
  });

  const [citations, setCitations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const sortFromUrl = urlParams.get('sort');
    const licenseFromUrl = urlParams.get('license');
    if (searchTermFromUrl || sortFromUrl || licenseFromUrl) {
      // if (sortFromUrl || licenseFromUrl) {
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
        if (data.citations.length === 9) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
      }
    };
    fetchCitations();
  }, [location.search]);

  const handleChange = (e) => {
    if (e.target.id === 'searchTerm') {
      setSidebarData({ ...sidebarData, searchTerm: e.target.value });
    }
    if (e.target.id === 'sort') {
      const order = e.target.value || 'desc';
      setSidebarData({ ...sidebarData, sort: order });
    }
    if (e.target.id === 'license') {
      const license = e.target.value || 'by';
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
      if (data.citations.length === 9) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
    }
  };

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='p-7 border-b md:border-r md:min-h-screen border-gray-500'>
        <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
          <div className='flex   items-center gap-2'>
            <label className='whitespace-nowrap font-semibold'>
              Title Includes:
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
            <label className='font-semibold'>License:</label>
            <Select
              onChange={handleChange}
              value={sidebarData.license}
              id='license'
            >
              <option value=' '>Select license</option>
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
      </div>
      <div className='w-full'>
        <h1 className='text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5 '>
          Citations results:
        </h1>
        <div className='p-7 flex flex-wrap gap-4'>
          {!loading && citations.length === 0 && (
            <p className='text-xl text-gray-500'>
              No citations found with that license.
            </p>
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
              className='text-teal-500 text-lg hover:underline p-7 w-full'
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
