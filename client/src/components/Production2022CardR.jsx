import React from 'react';
import { Badge, BadgeDelta, Card, Flex, Metric, Text } from '@tremor/react';

export default function Production2022CardR() {
  return (
    <Card className='w-xs' decoration='top' decorationColor='cyan-800'>
      <Flex justifyContent='between' alignItems='center'>
        <Text>Average Files Completed Daily</Text>
        <Badge size='sm'>First Report</Badge>
      </Flex>
      <Metric>38</Metric>
    </Card>
  );
}
