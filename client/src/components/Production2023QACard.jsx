import React, { useState } from 'react';
import {
  BadgeDelta,
  Button,
  Card,
  DonutChart,
  Flex,
  TabGroup,
  Tab,
  TabList,
  Bold,
  Divider,
  List,
  ListItem,
  Metric,
  Text,
  Title,
  Legend,
} from '@tremor/react';
import {
  ArrowRightIcon,
  ChartPieIcon,
  ViewListIcon,
} from '@heroicons/react/outline';
import { red } from 'tailwindcss/colors';

const datahero = [
  {
    name: 'January 2023',
    value: 98,
    performance: '-2%',
    deltaType: 'unchanged',
  },
  {
    name: 'February 2023',
    value: 97,
    performance: '-3%',
    deltaType: 'moderateDecrease',
  },
  {
    name: 'March 2023',
    value: 97,
    performance: '-3%',
    deltaType: 'unchanged',
  },
  {
    name: 'April 2023',
    value: 98,
    performance: '-2%',
    deltaType: 'increase',
  },
  {
    name: 'May 2023',
    value: 97,
    performance: '-3%',
    deltaType: 'moderateDecrease',
  },
  {
    name: 'June 2023',
    value: 98,
    performance: '-2%',
    deltaType: 'increase',
  },
  {
    name: 'July 2023',
    value: 97,
    performance: '-3%',
    deltaType: 'moderateDecrease',
  },
  {
    name: 'August 2023',
    value: 97,
    performance: '-3%',
    deltaType: 'unchanged',
  },
  {
    name: 'September 2023',
    value: 97,
    performance: '-3%',
    deltaType: 'unchanged',
  },
  {
    name: 'October 2023',
    value: 98,
    performance: '-2%',
    deltaType: 'increase',
  },
  {
    name: 'November 2023',
    value: 97,
    performance: '-3%',
    deltaType: 'moderateDecrease',
  },
  {
    name: 'December 2023',
    value: 98,
    performance: '-2%',
    deltaType: 'increase',
  },
];

const dataFormatter = (number) => {
  return Intl.NumberFormat('us').format(number).toString() + '%';
};

const Production2023QACard = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = React.useState('');

  return (
    <Card
      className='max-w-full mx-auto '
      decoration='top'
      decorationColor='cyan-800'
    >
      <Flex className='space-x-8 flex-col lg:flex-row bg'>
        <Title>QA Overview</Title>
        <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
          <TabList variant='solid'>
            <Tab icon={ChartPieIcon}>Chart</Tab>
            <Tab icon={ViewListIcon}>List</Tab>
          </TabList>
        </TabGroup>
      </Flex>
      <Text className='mt-8'>Cumulative QA</Text>
      <Metric>97.417 %</Metric>
      <Divider />
      <Text className='mt-8'>
        <Bold>QA Totals</Bold>
      </Text>
      <Text>2023</Text>

      {selectedIndex === 0 ? (
        <>
          <DonutChart
            border-spacing-0
            data={datahero}
            variant='pie'
            valueFormatter={dataFormatter}
            showAnimation={true}
            category='value'
            index='name'
            className='mt-6 '
            colors={[
              'indigo',
              'indigo',
              'indigo',
              'indigo',
              'indigo',
              'indigo',
              'indigo',
              'indigo',
              'indigo',
              'indigo',
              'indigo',
              'indigo',
            ]}
          />
          <Legend
            className='mt-3'
            categories={['2023']}
            colors={['indigo']}
            // onClickLegendItem={(e) => {
            //   value === e ? setValue('') : setValue(e);
            // }}
            // activeLegend={value}
          />
        </>
      ) : (
        <>
          <Flex className='mt-8' justifyContent='between'>
            <Text className='truncate'>
              <Bold>QAs</Bold>
            </Text>
            <Text>2023 Total</Text>
          </Flex>
          <List className='mt-4'>
            {datahero.map((datahero) => (
              <ListItem key={datahero.name}>
                <Text>{datahero.name}</Text>
                <Flex className='space-x-2' justifyContent='end'>
                  <Text>
                    {Intl.NumberFormat('us').format(datahero.value).toString()}{' '}
                    %
                  </Text>
                </Flex>
              </ListItem>
            ))}
          </List>
        </>
      )}
      {/* <Flex className='mt-6 pt-4 border-t'>
        <Button
          size='xs'
          variant='light'
          icon={ArrowRightIcon}
          iconPosition='right'
        >
          View more
        </Button>
      </Flex> */}
    </Card>
  );
};

export default Production2023QACard;
