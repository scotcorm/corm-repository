import React from 'react';
import { Badge, Card, Flex, Metric, Text } from '@tremor/react';
import AverageCompleted from './AverageCompleted';
import { BsBullseye } from 'react-icons/bs';

export default function ProductionCard() {
  return (
    <Card className='w-xs' decoration='top' decorationColor='cyan-800'>
      <Flex justifyContent='between' alignItems='center'>
        <Text>Average Completed</Text>
        <Badge icon={BsBullseye}>live</Badge>
      </Flex>
      <Metric>
        <AverageCompleted />
      </Metric>
    </Card>
  );
}
