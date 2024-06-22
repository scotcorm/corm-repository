import React from 'react';
import { useEffect, useState } from 'react';

//import ProjectsSidebar from '../components/ProjectsSidebar';
import ProjectsMain from '../components/ProjectsMain';
import ProjectsSection from '../components/ProjectsSection';
import { Link, useLocation } from 'react-router-dom';

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
    <div>
      <div className='min-h-screen flex flex-col  '>
        <div>
          <ProjectsMain />
        </div>
        <div>
          <ProjectsSection />
        </div>
      </div>
    </div>
  );
}
