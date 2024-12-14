
import React from 'react';
import Enquirestabswrapper from './Enquirestabswrapper';
import Agreement from '../dashboard/Dasboradsidebar/parts/Agreement';
import Getapp from '../dashboard/Dasboradsidebar/parts/Getapp';
import Uploadproperty from '../dashboard/Dasboradsidebar/parts/Uploadproperty';
import Propertyvaluecalculator from '../dashboard/Dasboradsidebar/parts/Propertyvaluecalculator';
import Verifykyc from '../dashboard/Dasboradsidebar/parts/Verifykyc';
import Unlockpackages from './Unlockpackages';



function Enquirieswrapper() {

  return (
    <div className="grid grid-cols-8 px-4 md:px-[80px] mt-5 w-full gap-4">
      <div className="col-span-12 md:col-span-6 space-y-8 mb-8">
        <Enquirestabswrapper />
      </div>
      <div className="col-span-12 md:col-span-2 space-y-8">
        <Unlockpackages />
        <Agreement />
        <Getapp />
        <Uploadproperty />
        <Propertyvaluecalculator />
        <Verifykyc />
      </div>

    </div>
  );
}

export default Enquirieswrapper;
