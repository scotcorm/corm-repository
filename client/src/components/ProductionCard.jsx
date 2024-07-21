import React from 'react';
import { BadgeDelta, Card, Flex, Metric, Text, Badge } from '@tremor/react';

// import AverageCohort from './AverageCohort';
// import { BsBullseye } from 'react-icons/bs';

export default function ProductionCard() {
  return (
    <Card className='w-xs' decoration='top' decorationColor='cyan-800'>
      <Flex justifyContent='between' alignItems='center'>
        <Text>Average Cohort</Text>
        {/* <Badge icon={BsBullseye}>live</Badge> */}
      </Flex>
      <Metric>
        <h1>1233</h1>
        {/* <AverageCohort /> */}
      </Metric>
    </Card>
  );
}
