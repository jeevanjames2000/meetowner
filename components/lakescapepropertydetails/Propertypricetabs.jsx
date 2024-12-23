'use client'
import React, { useState } from 'react'
import Floorplanone from './tabs/Floorplanone';
import Floorplantwo from './tabs/Floorplantwo';
import Floorplanfour from './tabs/Floorplanfour';
import Floorplanthree from './tabs/Floorplanthree';

function Propertyprice() {
    const [activetab, setactivetab] = useState("plan1");

    const updateSetactivetab = (value) => {
        setactivetab(value);
    }

    return (
        <div className='propertyprice space-y-6'>
            <p className="text-[#1D37A6] text-[30px] font-[600]">
                LAKESCAPE Price & Floor Plan
            </p>
            <div className='custom-shadow bg-[#F3F3F3] p-6 space-y-8'>
                <div className='flex space-x-6'>
                    <div className='custom-apartmentshadow px-8 py-2 flex flex-col items-center justify-center rounded-sm'>
                        <p className='text-[14px] text-[#434343] font-[700]'>3 BHK</p>
                        <p className='text-[14px] text-[#1D37A6] font-[600]'>
                            Apartment
                        </p>
                    </div>
                    <div className='custom-apartmentshadow px-8 py-2 flex flex-col items-center justify-center'>
                        <p className='text-[14px] text-[#434343] font-[700]'>EAST</p>
                        <p className='text-[14px] text-[#1D37A6] font-[600]'>
                            Facing
                        </p>
                    </div>
                    <div className='custom-apartmentshadow px-8 py-2 flex flex-col items-center justify-center rounded-sm'>
                        <p className='text-[14px] text-[#434343] font-[700]'>
                            Possession Starts
                        </p>
                        <p className='text-[14px] text-[#1D37A6] font-[600]'>
                            Dec, 2025
                        </p>
                    </div>
                </div>
                <div className='flex items-center justify-between border-b-[1.8px] border-[#E2E2E2] '>
                    <button
                        onClick={() => updateSetactivetab("plan1")}
                        className={`text-[12px] hover:text-[#0d6efd] font-[700] pb-[8px] ${activetab === 'plan1' ? 'text-[#1D37A6] border-b-[1.8px] border-[#1D37A6]' : 'text-[#434343]'}`}>
                        1890 sq.ft
                    </button>
                    <button
                        onClick={() => updateSetactivetab("plan2")}
                        className={`text-[12px] hover:text-[#0d6efd] font-[700] pb-[8px] ${activetab === 'plan2' ? 'text-[#1D37A6] border-b-[1.8px] border-[#1D37A6]' : 'text-[#434343]'}`}>
                        1920 sq.ft
                    </button>
                    <button
                        onClick={() => updateSetactivetab("plan3")}
                        className={`text-[12px] hover:text-[#0d6efd] font-[700] pb-[8px] ${activetab === 'plan3' ? 'text-[#1D37A6] border-b-[1.8px] border-[#1D37A6]' : 'text-[#434343]'}`}>
                        2290 sq.ft
                    </button>
                    <button
                        onClick={() => updateSetactivetab("plan4")}
                        className={`text-[12px] hover:text-[#0d6efd] font-[700] pb-[8px] ${activetab === 'plan4' ? 'text-[#1D37A6] border-b-[1.8px] border-[#1D37A6]' : 'text-[#434343]'}`}>
                        2890 sq.ft
                    </button>
                </div>
                <div>
                    {activetab === 'plan1' &&
                        <Floorplanone />}
                    {activetab === 'plan2' &&
                        <Floorplantwo />}
                    {activetab === 'plan3' &&
                        <Floorplanthree />}
                    {activetab === 'plan4' &&
                        <Floorplanfour />}
                </div>
            </div>
        </div>
    );
}

export default Propertyprice;
