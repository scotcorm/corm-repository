import React from 'react';
import { BadgeDelta, Card, Flex, Metric, Text } from '@tremor/react';

export default function Production2023CardR() {
  return (
    <Card className='w-xs' decoration='top' decorationColor='cyan-800'>
      <Flex justifyContent='between' alignItems='center'>
        <Text>Average Files Completed Daily</Text>
        <BadgeDelta deltaType='moderateIncrease'>+18.4%</BadgeDelta>
      </Flex>
      <Metric>45</Metric>
    </Card>
  );
}
