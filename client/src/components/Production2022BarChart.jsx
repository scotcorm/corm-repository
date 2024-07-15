import React from 'react';
import { BarChart, Title } from '@tremor/react';
import { Card } from 'flowbite-react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Production2022BarChart() {
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
  ];

  return (
    <Card className='mt-4 '>
      <Title className='text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold'>
        Monthly Production
      </Title>
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
