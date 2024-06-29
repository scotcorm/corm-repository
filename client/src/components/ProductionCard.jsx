import React from 'react';
import { BadgeDelta, Card, Flex, Metric, Text } from '@tremor/react';

export default function ProductionCard() {
  return (
    <Card className='w-xs' decoration='top' decorationColor='cyan-800'>
      <Flex justifyContent='between' alignItems='center'>
        <Text>Sales</Text>
        <BadgeDelta deltaType='moderateIncrease'>+1.5%</BadgeDelta>
      </Flex>
      <Metric>$34,743</Metric>
    </Card>
  );
}
