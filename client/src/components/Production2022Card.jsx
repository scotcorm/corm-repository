import React from 'react';
import { Badge, BadgeDelta, Card, Flex, Metric, Text } from '@tremor/react';

export default function Production2022Card() {
  return (
    <Card className='w-xs' decoration='top' decorationColor='cyan-800'>
      <Flex justifyContent='between' alignItems='center'>
        <Text>Average Cohort</Text>
        <Badge size='sm'>First Report - 2022</Badge>
      </Flex>
      <Metric>1268</Metric>
    </Card>
  );
}
