import React from 'react';
import { BarChart, Title } from '@tremor/react';
import { Card } from 'flowbite-react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Production2024BarChart() {
  const { currentUser } = useSelector((state) => state.user);
  const [userRecords, setUserRecords] = useState([]);
  const [showMore, setShowMore] = useState(true);

  const chartdata = [
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
