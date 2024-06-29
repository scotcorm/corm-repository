import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
//import ProductionDataSidebar from '../components/ProductionDataSidebar';
import ProductionDashNavbar from '../components/ProductionDashNavbar';
import ProductionProfile from '../components/ProductionProfile';
import { HiOutlineArrowUp } from 'react-icons/hi';

export default function ProductionDashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');

    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      {/* <div className='md:w-56'>
        <ProductionDashNavbar />
      </div> */}
      <div className='w-full'>
        <ProductionProfile />
      </div>

      {/* if the tab = production show the production profile */}
      {/* {tab === 'section1' && <Section1 />} */}
    </div>
  );
}
