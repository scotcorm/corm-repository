import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CitationSidebar from '../components/CitationSidebar';
import CitationMain from '../components/CitationMain';

export default function CitationRepo() {
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
        <CitationSidebar />
      </div>
      {/* profile */}
      {/* if the tab = profile show the dash profile */}
      {/* {tab === 'main' && <CitationMain />} */}
      <CitationMain />
    </div>
  );
}
