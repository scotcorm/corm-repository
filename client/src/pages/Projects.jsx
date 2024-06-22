import { Button, Select, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

import ProjectsMain from '../components/ProjectsMain';

export default function Search() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: '',
    sort: 'desc',
    category: 'uncategorized',
  });

  console.log(sidebarData);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const sortFromUrl = urlParams.get('sort');
    // const categoryFromUrl = urlParams.get('category');
    // if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
    if (searchTermFromUrl || sortFromUrl) {
      setSidebarData({
        ...sidebarData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        // category: categoryFromUrl,
      });
    }

    const fetchProjects = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/project/getprojects?${searchQuery}`);
      if (!res.ok) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setProjects(data.projects);
        setLoading(false);
        if (data.projects.length === 9) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
      }
    };
    fetchProjects();
  }, [location.search]);

  const handleChange = (e) => {
    if (e.target.id === 'searchTerm') {
      setSidebarData({ ...sidebarData, searchTerm: e.target.value });
    }
    if (e.target.id === 'sort') {
      const order = e.target.value || 'desc';
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
    // urlParams.set('category', sidebarData.category);
    const searchQuery = urlParams.toString();
    navigate(`/projects?${searchQuery}`);
  };

  const handleShowMore = async () => {
    const numberOfProjects = projects.length;
    const startIndex = numberOfProjects;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('startIndex', startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/project/getprojects?${searchQuery}`);
    if (!res.ok) {
      return;
    }
    if (res.ok) {
      const data = await res.json();
      setProjects([...projects, ...data.projects]);
      if (data.projects.length === 9) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
    }
  };

  return (
    <div className='flex flex-col md:flex-row'>
      {/* <div className='p-7 border-b md:border-r md:min-h-screen border-gray-500'>
        <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
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
            <Select onChange={handleChange} value={sidebarData.sort} id='sort'>
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
        </form>
      </div> */}
      <div className='w-full'>
        <div className='flex flex-col px-3 max-w-6xl gap-6 mx-auto'>
          <ProjectsMain />

          <h1 className='text-3xl font-semibold p-3 mt-5 '>
            Projects results:
          </h1>
          <div className='flex flex-wrap justify-center gap-6 mb-10'>
            {!loading && projects.length === 0 && (
              <p className='text-xl text-gray-500'>No projects found.</p>
            )}
            {loading && <p className='text-xl text-gray-500'>Loading...</p>}
            {!loading &&
              projects &&
              projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
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
        </div>
      </div>
    </div>
  );
}

// import React from 'react';
// import { useEffect, useState } from 'react';

// //import ProjectsSidebar from '../components/ProjectsSidebar';
// import ProjectsMain from '../components/ProjectsMain';
// import ProjectsSection from '../components/ProjectsSection';
// import { Link, useLocation } from 'react-router-dom';

// export default function Dashboard() {
//   const location = useLocation();
//   const [tab, setTab] = useState('');
//   // having access to dashboard?tab=(posts for example) allows us to render diffrnt components in dashboard page
//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const tabFromUrl = urlParams.get('tab');
//     if (tabFromUrl) {
//       setTab(tabFromUrl);
//     }
//   }, [location.search]);
//   return (
//     <div>
//       <div className='min-h-screen flex flex-col  '>
//         <div>
//           <ProjectsMain />
//         </div>
//         <div>
//           <ProjectsSection />
//         </div>
//       </div>
//     </div>
//   );
// }
