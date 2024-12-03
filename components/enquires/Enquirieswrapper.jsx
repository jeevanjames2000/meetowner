import dynamic from 'next/dynamic';
import React from 'react';
import Enquirestabswrapper from './Enquirestabswrapper';

// Dynamically import the Dashboardsidebarsection for better performance
const Dashboardsidebarsection = dynamic(() => import('../dashboard/Dasboradsidebar/Dashboardsidebarsection'), {
  ssr: false
});

function Enquirieswrapper() {

  return (
    <div className="grid grid-cols-8 px-[80px] mt-5 w-full gap-4">
      <div className="col-span-12 md:col-span-6 space-y-8 mb-8">
        <Enquirestabswrapper />
      </div>
      <div className="col-span-12 md:col-span-2 space-y-8">
        <Dashboardsidebarsection />
      </div>

    </div>
  );
}

export default Enquirieswrapper;
