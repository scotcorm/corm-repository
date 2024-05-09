import React from 'react';
import { Sidebar } from 'flowbite-react';
import {
  HiArrowSmRight,
  HiOutlineBadgeCheck,
  HiOutlineBriefcase,
  // HiOutlineCollection,
  HiUser,
} from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { signoutSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function CcSidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState('');
  // having access to dashboard?tab=(posts for example) allows us to render diffrnt components in dashboard page
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  // 1. add the function, 2. import signoutsuccess and usedispatch 3.initialize dispatch
  // 4. Add onclick listener to button
  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item icon={HiUser} label={'User'} labelColor='dark' as='div'>
            Profile
          </Sidebar.Item>
          <Sidebar.Item
            icon={HiArrowSmRight}
            className='cursor-pointer'
            onClick={handleSignout}
          >
            Sign Out
          </Sidebar.Item>
          <Link
            to='/about?tab=main
          '
          >
            <Sidebar.Item active={tab === 'main'} icon={HiOutlineBadgeCheck}>
              My CC Certification
            </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
