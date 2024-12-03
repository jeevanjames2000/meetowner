import React from 'react';
import Getapp from './parts/Getapp';
import Agreement from './parts/Agreement';

import { IconChevronRight } from '@tabler/icons-react';
import Uploadproperty from './parts/Uploadproperty';
import Propertyvaluecalculator from './parts/Propertyvaluecalculator';
import Verifykyc from './parts/Verifykyc';

function Dashboardsidebarsection() {
  return (
    <>
      <Agreement />
      <Getapp />
      <Uploadproperty />
      <Propertyvaluecalculator />
      <Verifykyc />
    </>
  );
}

export default Dashboardsidebarsection;
