import React from 'react';
import { BarChart, Title } from '@tremor/react';
import { Card } from 'flowbite-react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function ProductionBarChart() {
  const { currentUser } = useSelector((state) => state.user);
  const [userRecords, setUserRecords] = useState([]);
  const [showMore, setShowMore] = useState(true);

  const chartdata = [
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
