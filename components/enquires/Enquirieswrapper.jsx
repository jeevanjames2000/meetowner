
import React from 'react';
import Enquirestabswrapper from './Enquirestabswrapper';
import Unlockpackages from './Unlockpackages';
import Getapp from './parts/Getapp';
import Agreement from './parts/Agreement';
import Uploadproperty from './parts/Uploadproperty';
import Propertyvaluecalculator from './parts/Propertyvaluecalculator';
import Verifykyc from './parts/Verifykyc';

function Enquirieswrapper() {

  return (
    <div className="grid grid-cols-8 px-4 md:px-[4vw] lg:px-[6vw] mt-5 md:mt-16 mb-5 sm:mb-10 md:mb-24 w-full gap-[10px]">
      <div className="col-span-12 md:col-span-6 space-y-8">
        <Enquirestabswrapper />
      </div>
      <div className="col-span-12 md:col-span-2 space-y-8">
        <Unlockpackages/>
        <Getapp />
        <Agreement />
        <Uploadproperty />
        <Propertyvaluecalculator />
        <Verifykyc />
      </div>
    </div>
  );
}

export default Enquirieswrapper;
