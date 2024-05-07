import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductionDataSidebar from '../components/ProductionDataSidebar';
import ProductionProfile from '../components/ProdictionProfile';

export default function ProductionDashboard() {
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
      <div className=''>
        {/* Sidebar */}
        <ProductionDataSidebar />
      </div>
      {/* profile */}
      {/* if the tab = production show the production profile */}
      {tab === 'production' && <ProductionProfile />}
    </div>
  );
}