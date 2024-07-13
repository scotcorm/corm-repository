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
    category: 2022,
    name: 'January 2022',
    value: 98,
    performance: '-2%',
    deltaType: 'increase',
  },
  {
    name: 'February 2022',
    value: 97,
    performance: '-3%',
    deltaType: 'moderateDecrease',
  },
  {
    name: 'March 2022',
    value: 97,
    performance: '-3%',
    deltaType: 'moderateDecrease',
  },
  {
    name: 'April 2022',
    value: 98,
    performance: '-2%',
    deltaType: 'increase',
  },
  {
    name: 'May 2022',
    value: 97,
    performance: '-3%',
    deltaType: 'moderateDecrease',
  },
  {
    name: 'June 2022',
    value: 98,
    performance: '-2%',
    deltaType: 'increase',
  },
  {
    name: 'July 2022',
    value: 97,
    performance: '-3%',
    deltaType: 'moderateDecrease',
  },
  {
    name: 'August 2022',
    value: 97,
    performance: '-3%',
    deltaType: 'unchanged',
  },
  {
    name: 'September 2022',
    value: 97,
    performance: '-3%',
    deltaType: 'unchanged',
  },
  {
    name: 'October 2022',
    value: 98,
    performance: '-2%',
    deltaType: 'increase',
  },
  {
    name: 'November 2022',
    value: 97,
    performance: '-3%',
    deltaType: 'moderateDecrease',
  },
  {
    name: 'December 2022',
    value: 98,
    performance: '-2%',
    deltaType: 'increase',
  },
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
  {
    name: 'January 2024',
    value: 98,
    performance: '-2%',
    deltaType: 'increase',
  },
  {
    name: 'February 2024',
    value: 97,
    performance: '-3%',
    deltaType: 'moderateDecrease',
  },
  {
    name: 'March 2024',
    value: 97,
    performance: '-3%',
    deltaType: 'unchanged',
  },
  {
    name: 'April 2024',
    value: 98,
    performance: '-2%',
    deltaType: 'increase',
  },
  {
    name: 'May 2024',
    value: 97,
    performance: '-3%',
    deltaType: 'moderateDecrease',
  },
  {
    name: 'June 2024',
    value: 98,
    performance: '-2%',
    deltaType: 'increase',
  },
  {
    name: 'July 2024',
    value: 97,
    performance: '-3%',
    deltaType: 'moderateDecrease',
  },
  {
    name: 'August 2024',
    value: 97,
    performance: '-3%',
    deltaType: 'unchanged',
  },
  {
    name: 'September 2024',
    value: 97,
    performance: '-3%',
    deltaType: 'unchanged',
  },
  {
    name: 'October 2024',
    value: 98,
    performance: '-2%',
    deltaType: 'increase',
  },
  {
    name: 'November 2024',
    value: 97,
    performance: '-3%',
    deltaType: 'moderateDecrease',
  },
  {
    name: 'December 2024',
    value: 98,
    performance: '-2%',
    deltaType: 'increase',
  },
];

const dataFormatter = (number) => {
  return Intl.NumberFormat('us').format(number).toString() + '%';
};

const ProductionQACard = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = React.useState('');

  return (
    <Card
      className='max-w-full mx-auto '
      decoration='top'
      decorationColor='cyan-800'
    >
      <Flex className='space-x-8 flex-col lg:flex-row'>
        <Title>QA Overview</Title>
        <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
          <TabList variant='solid'>
            <Tab icon={ChartPieIcon}>Chart</Tab>
            <Tab icon={ViewListIcon}>List</Tab>
          </TabList>
        </TabGroup>
      </Flex>
      <Text className='mt-8'>Cumulative QA</Text>
      <Metric>98 %</Metric>
      <Divider />
      <Text className='mt-8'>
        <Bold>QA Totals</Bold>
      </Text>
      <Text>Two Complete Years - 2024 in Progress</Text>
      {selectedIndex === 0 ? (
        <>
          <DonutChart
            data={datahero}
            variant='pie'
            valueFormatter={dataFormatter}
            showAnimation={true}
            category='value'
            index='name'
            className='mt-6'
            colors={[
              'emerald',
              'emerald',
              'emerald',
              'emerald',
              'emerald',
              'emerald',
              'emerald',
              'emerald',
              'emerald',
              'emerald',
              'emerald',
              'emerald',
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
              'rose',
              'rose',
              'rose',
              'rose',
              'rose',
              'rose',
              'rose',
              'rose',
            ]}
          />
          <Legend
            className='mt-3'
            categories={['2022', '2023', '2024']}
            colors={['emerald', 'indigo', 'rose']}
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
            <Text>Monthly Total</Text>
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

export default ProductionQACard;
