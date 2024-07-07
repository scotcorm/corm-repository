import React from 'react';
import { BadgeDelta, Card, Flex, Metric, Text } from '@tremor/react';

export default function Production2024Card() {
  return (
    <Card className='w-xs' decoration='top' decorationColor='cyan-800'>
      <Flex justifyContent='between' alignItems='center'>
        <Text>Average Files Completed Dailyyy</Text>
        <BadgeDelta deltaType='moderateIncrease'>+.78%</BadgeDelta>
      </Flex>
      <Metric>45</Metric>
    </Card>
  );
}
