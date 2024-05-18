import React from 'react';
import { Sidebar } from 'flowbite-react';
import {
  HiArrowSmRight,
  HiDocumentText,
  HiOutlineDocumentText,
  HiOutlineUserGroup,
  HiUser,
} from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { signoutSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function DashSidebar() {
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
        <Sidebar.ItemGroup className='flex flex-col gap-1'>
          <Link
            to='/dashboard?tab=profile
          '
          >
            <Sidebar.Item
              active={tab === 'profile'}
              icon={HiUser}
              label={currentUser.isAdmin ? 'Admin' : 'User'}
              labelColor='dark'
              as='div'
            >
              Profile
            </Sidebar.Item>
          </Link>

          {currentUser.isAdmin && (
            <Link to='/dashboard?tab=citations'>
              <Sidebar.Item
                active={tab === 'citations'}
                icon={HiDocumentText}
                as='div'
              >
                Citations
              </Sidebar.Item>
            </Link>
          )}

          {currentUser.isAdmin && (
            <Link to='/dashboard?tab=users'>
              <Sidebar.Item
                active={tab === 'users'}
                icon={HiOutlineUserGroup}
                as='div'
              >
                Users
              </Sidebar.Item>
            </Link>
          )}

          {currentUser.isAdmin && (
            <Link to='/dashboard?tab=records'>
              <Sidebar.Item
                active={tab === 'records'}
                icon={HiOutlineDocumentText}
                as='div'
              >
                Records
              </Sidebar.Item>
            </Link>
          )}

          {currentUser.isAdmin && (
            <Link to='/dashboard?tab=notes'>
              <Sidebar.Item
                active={tab === 'notes'}
                icon={HiDocumentText}
                as='div'
              >
                Notes
              </Sidebar.Item>
            </Link>
          )}

          <Sidebar.Item
            icon={HiArrowSmRight}
            className='cursor-pointer'
            onClick={handleSignout}
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
