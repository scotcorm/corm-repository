import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
//import ProductionDataSidebar from '../components/ProductionDataSidebar';
// import ProductionDashNavbar from '../components/ProductionDashNavbar';
// import ProductionProfile from '../components/ProductionProfile';
import { HiOutlineArrowUp } from 'react-icons/hi';
import Dash2022 from '../components/Dash2022';
import Dash2023 from '../components/Dash2023';
import Dash2024 from '../components/Dash2024';
import DashCumulative from '../components/DashCumulative';
import ProductionNavbar from '../components/ProductionNavbar';

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
      <div className='md:w-56'>
        <ProductionNavbar />
      </div>
      <div className='w-full'>
        {/* {tab === 'profile' && <ProductionProfile />} */}

        {tab === 'dash2022' && <Dash2022 />}

        {tab === 'dash2023' && <Dash2023 />}

        {tab === 'dash2024' && <Dash2024 />}

        {tab === 'dashCumulative' && <DashCumulative />}
      </div>

      {/* if the tab = production show the production profile */}
      {/* {tab === 'section1' && <Section1 />} */}
    </div>
  );
}
