import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';
import DashCitations from '../components/DashCitations';
import DashRecords from '../components/DashRecords';
import DashNotes from '../components/DashNotes';
import DashUsers from '../components/DashUsers';
import DashRecordComments from '../components/DashRecordComments';
import DashNoteComments from '../components/DashNoteComments';
import DashCitationComments from '../components/DashCitationComments';

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  // having access to dashboard?tab=(posts for example) allows us to render diffrnt components in dashboard page
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* profile */}
      {/* if the tab = profile show the dash profile */}
      {tab === 'profile' && <DashProfile />}
      {/* citations */}
      {tab === 'citations' && <DashCitations />}
      {/* records */}
      {tab === 'records' && <DashRecords />}
      {/* notes */}
      {tab === 'notes' && <DashNotes />}
      {/* users */}
      {tab === 'users' && <DashUsers />}
      {/* record comments */}
      {tab === 'recordcomments' && <DashRecordComments />}
      {/* note comments */}
      {tab === 'notecomments' && <DashNoteComments />}
      {/* citation comments */}
      {tab === 'citationcomments' && <DashCitationComments />}
    </div>
  );
}
