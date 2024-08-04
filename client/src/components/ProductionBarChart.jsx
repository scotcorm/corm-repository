import React from 'react';
import { BarChart, Title } from '@tremor/react';
import { Card } from 'flowbite-react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import BarData from './BarData';
// import production from './BarData';

export default function ProductionBarChart() {
  const { currentUser } = useSelector((state) => state.user);
  const [userRecords, setUserRecords] = useState([]);
  const [showMore, setShowMore] = useState(true);

  const chartdata = [
    {
      year: 2022,
      month: '01/22',
      'average completed': 35,
      'average cohort': 1318,
      'overlaps completed': 0,
    },
    {
      year: 2022,
      month: '02/22',
      'average completed': 39,
      'average cohort': 1344,
      'overlaps completed': 0,
    },
    {
      year: 2022,
      month: '03/22',
      'average completed': 37,
      'average cohort': 1250,
      'overlaps completed': 0,
    },
    {
      year: 2022,
      month: '04/22',
      'average completed': 35,
      'average cohort': 1148,
      'overlaps completed': 0,
    },
    {
      year: 2022,
      month: '05/22',
      'average completed': 35.3,
      'average cohort': 1225,
      'overlaps completed': 0,
    },
    {
      year: 2022,
      month: '06/22',
      'average completed': 38.65,
      'average cohort': 1243,
      'overlaps completed': 0,
    },
    {
      year: 2022,
      month: '07/22',
      'average completed': 41.95,
      'average cohort': 1283,
      'overlaps completed': 0,
    },
    {
      year: 2022,
      month: '08/22',
      'average completed': 37.64,
      'average cohort': 1382,
      'overlaps completed': 0,
    },
    {
      year: 2022,
      month: '09/22',
      'average completed': 40.26,
      'average cohort': 1314,
      'overlaps completed': 0,
    },
    {
      year: 2022,
      month: '10/22',
      'average completed': 40.4,
      'average cohort': 1311,
      'overlaps completed': 0,
    },
    {
      year: 2022,
      month: '11/22',
      'average completed': 40.5,
      'average cohort': 1239,
      'overlaps completed': 0,
    },
    {
      year: 2022,
      month: '12/22',
      'average completed': 38.81,
      'average cohort': 1161,
      'overlaps completed': 0,
    },
    {
      year: 2023,
      month: '01/23',
      'average completed': 35,
      'average cohort': 1097,
      'overlaps completed': 0,
    },
    {
      year: 2023,
      month: '02/23',
      'average completed': 37,
      'average cohort': 1110,
      'overlaps completed': 22,
    },
    {
      year: 2023,
      month: '03/23',
      'average completed': 37,
      'average cohort': 1188,
      'overlaps completed': 20,
    },
    {
      year: 2023,
      month: '04/23',
      'average completed': 36,
      'average cohort': 1222,
      'overlaps completed': 21,
    },
    {
      year: 2023,
      month: '05/23',
      'average completed': 42,
      'average cohort': 1240,
      'overlaps completed': 32,
    },
    {
      year: 2023,
      month: '06/23',
      'average completed': 43,
      'average cohort': 1218,
      'overlaps completed': 42,
    },
    {
      year: 2023,
      month: '07/23',
      'average completed': 39,
      'average cohort': 1232,
      'overlaps completed': 33,
    },
    {
      year: 2023,
      month: '08/23',
      'average completed': 45,
      'average cohort': 1224,
      'overlaps completed': 30,
    },
    {
      year: 2023,
      month: '09/23',
      'average completed': 45,
      'average cohort': 1226,
      'overlaps completed': 44,
    },
    {
      year: 2023,
      month: '10/23',
      'average completed': 41,
      'average cohort': 1252,
      'overlaps completed': 34,
    },
    {
      year: 2023,
      month: '11/23',
      'average completed': 43,
      'average cohort': 1198,
      'overlaps completed': 18,
    },
    {
      year: 2023,
      month: '12/23',
      'average completed': 35,
      'average cohort': 1177,
      'overlaps completed': 29,
    },

    {
      year: 2024,
      month: '01/24',
      'average completed': 45.9,
      'average cohort': 1202.7,
      'overlaps completed': 0,
      QA: 0,
    },
    {
      year: 2024,
      month: '02/24',
      'average completed': 49.4,
      'average cohort': 1225.3,
      'overlaps completed': 22,
      QA: 0,
    },
    {
      year: 2024,
      month: '03/24',
      'average completed': 42.7,
      'average cohort': 1223.3,
      'overlaps completed': 19,
      QA: 0,
    },
    {
      year: 2024,
      month: '04/24',
      'average completed': 47.8,
      'average cohort': 1261.6,
      'overlaps completed': 21,
      QA: 0,
    },
    {
      year: 2024,
      month: '05/24',
      'average completed': 36.625,
      'average cohort': 1238.2,
      'overlaps completed': 32,
      QA: 0,
    },
    {
      year: 2024,
      month: '06/24',
      'average completed': 45.9,
      'average cohort': 1242.4,
      'overlaps completed': 44,
      QA: 0,
    },
    {
      year: 2024,
      month: '07/24',
      'average completed': 0,
      'average cohort': 0,
      'overlaps completed': 0,
      QA: 0,
    },
    {
      year: 2024,
      month: '08/24',
      'average completed': 0,
      'average cohort': 0,
      'overlaps completed': 0,
      QA: 0,
    },
    {
      year: 2024,
      month: '09/24',
      'average completed': 0,
      'average cohort': 0,
      'overlaps completed': 0,
      QA: 0,
    },
    {
      year: 2024,
      month: '10/24',
      'average completed': 0,
      'average cohort': 0,
      'overlaps completed': 0,
      QA: 0,
    },
    {
      year: 2024,
      month: '11/24',
      'average completed': 0,
      'average cohort': 0,
      'overlaps completed': 0,
      QA: 0,
    },
    {
      year: 2024,
      month: '12/24',
      'average completed': 0,
      'average cohort': 0,
      'overlaps completed': 0,
      QA: 0,
    },
  ];
  // <BarData />;

  return (
    <Card className='mt-4 '>
      <Title className='text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold'>
        Monthly Production
      </Title>
      {/* <BarData /> */}
      <BarChart
        className='h-72 mt-4'
        data={chartdata}
        index='month'
        categories={['average completed']}
        colors={['blue-400']}
        // yAxisWidth={30}
      />
      <Title className='text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold'>
        Average Cohort
      </Title>
      <BarChart
        className='h-72 mt-4'
        data={chartdata}
        index='month'
        categories={['average cohort']}
        colors={['cyan-700']}
        // yAxisWidth={30}
      />
      <Title className='text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold'>
        Overlaps Completed
      </Title>
      <BarChart
        className='h-72 mt-4'
        data={chartdata}
        index='month'
        categories={['overlaps completed']}
        colors={['orange-400']}
        // yAxisWidth={30}
      />
    </Card>
  );
}
