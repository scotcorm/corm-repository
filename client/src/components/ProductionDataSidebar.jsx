import React from 'react';
// import { Sidebar } from 'flowbite-react';
// import { HiArrowSmRight, HiUser } from 'react-icons/hi';
// import { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import {
  ArrowUpIcon,
  BellIcon,
  ChartBarIcon,
  CreditCardIcon,
  DocumentSearchIcon,
  ExternalLinkIcon,
  HomeIcon,
  MailIcon,
} from '@heroicons/react/solid';

export default function ProductionDataSidebar() {
  // const location = useLocation();
  // const dispatch = useDispatch();
  // const { currentUser } = useSelector((state) => state.user);
  // const [tab, setTab] = useState('');
  // ProductionDataSidebar component and ProductionDashboard page
  // having access to dashboard?tab=(posts for example) allows us to render different components in dashboard page
  // useEffect(() => {
  //   const urlParams = new URLSearchParams(location.search);
  //   const tabFromUrl = urlParams.get('tab');
  //   if (tabFromUrl) {
  //     setTab(tabFromUrl);
  //   }
  // }, [location.search]);

  return (
    <div className='bg-slate-800 flex-none w-14 sm:w-20 h-screen'>
      <div className='h-20 items-center flex '>
        <HomeIcon width={40} className='text-gray-300 left-3 sm:left-6 fixed' />
      </div>
      <div className='fixed left-3 sm:left-6 top-[150px]'>
        <ChartBarIcon
          width={40}
          className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300'
        />
        <DocumentSearchIcon
          width={40}
          className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300'
        />
        <MailIcon
          width={40}
          className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300'
        />
        <CreditCardIcon
          width={40}
          className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300'
        />
        <BellIcon
          width={40}
          className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300'
        />
      </div>
      <div className='fixed overflow-auto mb-6 bottom-60 left-3 sm:left-6'>
        <ArrowUpIcon
          width={40}
          className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300'
        />
        <ExternalLinkIcon
          width={40}
          className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300'
        />
      </div>
    </div>
    // <Sidebar className='w-full md:w-56'>Sidebar

    // </Sidebar>

    // <Sidebar className='w-full md:w-56'>
    //   <Sidebar.Items>
    //     <Sidebar.ItemGroup>
    //       <Link
    //         to='/production-dashboard?tab=profile
    //       '
    //       >
    //         <Sidebar.Item
    //           active={tab === 'profile'}
    //           icon={HiUser}
    //           label={'User'}
    //           labelColor='dark'
    //           as='div'
    //         >
    //           Profile
    //         </Sidebar.Item>
    //       </Link>
    //       <Sidebar.Item icon={HiArrowSmRight} className='cursor-pointer'>
    //         Sign Out
    //       </Sidebar.Item>
    //     </Sidebar.ItemGroup>
    //   </Sidebar.Items>
    // </Sidebar>
  );
}
