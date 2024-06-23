import React, { useEffect, useState } from 'react';
import { Sidebar } from 'flowbite-react';
import {
  HiArrowSmRight,
  HiOutlineArrowUp,
  HiOutlineBell,
  HiOutlineChartBar,
  HiOutlineChartPie,
  HiOutlineDocument,
  HiOutlineDocumentAdd,
  HiOutlineDocumentSearch,
  HiOutlineExternalLink,
  HiOutlineHome,
  HiUser,
} from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const ProductionDashNavbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  // const handleSignout = async () => {
  //   try {
  //     const res = await fetch('/api/user/signout', {
  //       method: 'POST',
  //     });
  //     const data = await res.json();
  //     if (!res.ok) {
  //       console.log(data.message);
  //     } else {
  //       dispatch(signoutSuccess());
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  return (
    <Sidebar className='w-full mb-14 md:w-56'>
      <div className='flex items-center justify-center mb-10'>
        <h1>Page Navigation</h1>
      </div>
      <Sidebar.Items>
        <Sidebar.ItemGroup className='flex flex-col gap-2 mt-10'>
          <Link to=''>
            <Sidebar.Item
              active={tab === 'dash' || !tab}
              icon={HiOutlineChartPie}
              as='div'
            >
              Dashboard
            </Sidebar.Item>
          </Link>

          <Link to='#top'>
            <Sidebar.Item
              active={tab === 'dash' || !tab}
              icon={HiOutlineChartPie}
              as='div'
            >
              Dashboard
            </Sidebar.Item>
          </Link>

          <div>
            <div className=' absolute bottom-0 left-3 h-16 w-16 '>
              <a href='#top'>
                <Sidebar.Item
                  active={tab === 'top'}
                  icon={HiOutlineArrowUp}
                  as='div'
                >
                  Top
                </Sidebar.Item>
              </a>
            </div>
          </div>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

// <Sidebar className='w-full md:w-56'>
//   <Sidebar.Items>
//     <Sidebar.ItemGroup className='flex flex-col gap-1'>
//       <Link to='/production-dashboard?tab=section1'>
//         <Sidebar.Item
//           active={tab === 'dash-section1'}
//           icon={HiOutlineHome}
//           as='div'
//           labelColor='dark'
//         >
//           section1
//         </Sidebar.Item>
//       </Link>

{
  /* <Sidebar.Item
            icon={HiArrowSmRight}
            className='cursor-pointer'
            onClick={handleSignout}
          >
            Sign Out
          </Sidebar.Item>

          // <div className='h-20 items-center flex '>
          //   <HiOutlineHome
          //     width={40}
          //     className='text-gray-300 left-3 sm:left-6 fixed'
          //   />
          // </div>
          // <div className='fixed left-3 sm:left-6 top-[150px]'>
          //   <HiOutlineChartBar className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300' />
          //   <HiOutlineDocumentSearch className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300' />
          //   <HiOutlineDocumentAdd className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300' />
          //   <HiOutlineDocument className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300' />
          //   <HiOutlineBell className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300' />
          // </div>
          // <div className='fixed overflow-auto mb-6 bottom-60 left-3 sm:left-6'>
          //   <HiOutlineArrowUp className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300' />
          //   <HiOutlineExternalLink className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300' />
          // </div>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    // <div>
    //   <h1>ProductionDashNavbar</h1>
    //   {/* <div>
    //     <input type='text' placeholder='Input' />
    //   </div> */
}

//   );
// };

export default ProductionDashNavbar;
