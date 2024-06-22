import React from 'react';
import { Sidebar } from 'flowbite-react';
import {
  HiAnnotation,
  HiArrowSmRight,
  HiDocumentText,
  HiOutlineChartPie,
  HiOutlineCollection,
  HiOutlineDocument,
  HiOutlineDocumentDuplicate,
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
          {currentUser && currentUser.isAdmin && (
            <Link to='/dashboard?tab=dash'>
              <Sidebar.Item
                active={tab === 'dash' || !tab}
                icon={HiOutlineChartPie}
                as='div'
              >
                Dashboard
              </Sidebar.Item>
            </Link>
          )}

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
            <>
              <Link to='/dashboard?tab=users'>
                <Sidebar.Item
                  active={tab === 'users'}
                  icon={HiOutlineUserGroup}
                  as='div'
                >
                  Users
                </Sidebar.Item>
              </Link>

              <Link to='/dashboard?tab=citations'>
                <Sidebar.Item
                  active={tab === 'citations'}
                  icon={HiOutlineCollection}
                  as='div'
                >
                  Citations
                </Sidebar.Item>
              </Link>

              <Link to='/dashboard?tab=citationcomments'>
                <Sidebar.Item
                  active={tab === 'citationcomments'}
                  icon={HiAnnotation}
                  as='div'
                >
                  Citation Comments
                </Sidebar.Item>
              </Link>

              <Link to='/dashboard?tab=records'>
                <Sidebar.Item
                  active={tab === 'users'}
                  icon={HiOutlineDocumentDuplicate}
                  as='div'
                >
                  Records
                </Sidebar.Item>
              </Link>
              <Link to='/dashboard?tab=recordcomments'>
                <Sidebar.Item
                  active={tab === 'recordcomments'}
                  icon={HiAnnotation}
                  as='div'
                >
                  Record Comments
                </Sidebar.Item>
              </Link>

              <Link to='/dashboard?tab=notes'>
                <Sidebar.Item
                  active={tab === 'notes'}
                  icon={HiOutlineDocumentText}
                  as='div'
                >
                  Notes
                </Sidebar.Item>
              </Link>
              <Link to='/dashboard?tab=notecomments'>
                <Sidebar.Item
                  active={tab === 'notecomments'}
                  icon={HiAnnotation}
                  as='div'
                >
                  Note Comments
                </Sidebar.Item>
              </Link>

              <Link to='/dashboard?tab=projects'>
                <Sidebar.Item
                  active={tab === 'projects'}
                  icon={HiOutlineDocumentText}
                  as='div'
                >
                  Projects
                </Sidebar.Item>
              </Link>
              <Link to='/dashboard?tab=projectcomments'>
                <Sidebar.Item
                  active={tab === 'projectcomments'}
                  icon={HiAnnotation}
                  as='div'
                >
                  Project Comments
                </Sidebar.Item>
              </Link>

              <Link to='/dashboard?tab=genealogyrecords'>
                <Sidebar.Item
                  active={tab === 'genealogyrecords'}
                  icon={HiOutlineDocumentText}
                  as='div'
                >
                  Genealogy records
                </Sidebar.Item>
              </Link>
              <Link to='/dashboard?tab=genealogyrecordcomments'>
                <Sidebar.Item
                  active={tab === 'genealogyrecordcomments'}
                  icon={HiAnnotation}
                  as='div'
                >
                  Genealogy Comments
                </Sidebar.Item>
              </Link>
            </>
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
