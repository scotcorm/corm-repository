import React from 'react';
import { BadgeDelta, Card, Flex, Metric, Text } from '@tremor/react';

export default function Production2023Card() {
  return (
    <Card className='w-xs' decoration='top' decorationColor='cyan-800'>
      <Flex justifyContent='between' alignItems='center'>
        <Text>Average Cohort</Text>
        <BadgeDelta deltaType='moderateDecrease'>-5.52%</BadgeDelta>
      </Flex>
      <Metric>1198</Metric>
    </Card>
  );
}
