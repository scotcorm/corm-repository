import React from 'react';
import { BadgeDelta, Card, Flex, Metric, Text } from '@tremor/react';

export default function Production2024Card() {
  return (
    <Card className='w-xs' decoration='top' decorationColor='cyan-800'>
      <Flex justifyContent='between' alignItems='center'>
        <Text>Average Cohort</Text>
        <BadgeDelta deltaType='moderateIncrease'>+2.9%</BadgeDelta>
      </Flex>
      <Metric>1232</Metric>
    </Card>
  );
}
