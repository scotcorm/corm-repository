import React from 'react';
import { BadgeDelta, Card, Flex, Metric, Text } from '@tremor/react';

export default function Production2024CardR() {
  return (
    <Card className='w-xs' decoration='top' decorationColor='cyan-800'>
      <Flex justifyContent='between' alignItems='center'>
        <Text>Average Files Completed Daily</Text>
        <BadgeDelta deltaType='unchanged'> 0%</BadgeDelta>
      </Flex>
      <Metric>45</Metric>
    </Card>
  );
}
