'use client'
import React, { useState } from 'react'
import Floorplan from './tabs/Floorplan';

function Propertyprice({ propertyDetails }) {
    const [activetab, setactivetab] = useState("plan1");

    const updateSetactivetab = (value) => {
        setactivetab(value);
    }

    let available_from_date = 'N/A';

    if (propertyDetails?.available_from) {
        const available_from = new Date(propertyDetails.available_from);
        if (!isNaN(available_from)) {
            available_from_date = available_from.toISOString().split('T')[0];
        }
    }

    return (
        <div className='propertyprice space-y-6'>
            <p className="text-[#1d3a76] text-[25px] font-[600]">
                {propertyDetails?.property_name} Price & Floor Plan
            </p>
            <div className='custom-shadow bg-[#F3F3F3] p-6 space-y-8'>
                <div className='flex items-center gap-6'>
                    <div className='w-[20%] custom-apartmentshadow py-2 flex flex-col items-center justify-center rounded-sm'>
                        <p className='text-[14px] text-[#434343] font-[700]'>
                            {
                                (propertyDetails?.sub_type !== "Plot" || propertyDetails?.sub_type !== "Land" || propertyDetails?.property_in !== "Commercial") ?
                                    `${propertyDetails?.bedrooms} BHK`
                                    :
                                    ''
                            }
                        </p>
                        <p className='text-[14px] text-[#1d3a76] font-[600]'>
                            {propertyDetails?.sub_type}
                        </p>
                    </div>
                    <div className='w-[20%] custom-apartmentshadow py-2 flex flex-col items-center justify-center rounded-sm'>
                        <p className='text-[14px] text-[#434343] font-[700]'>{propertyDetails?.facing}</p>
                        <p className='text-[14px] text-[#1d3a76] font-[600]'>
                            Facing
                        </p>
                    </div>
                    <div className='w-[20%] custom-apartmentshadow py-2 flex flex-col items-center justify-center rounded-sm'>
                        <p className='text-[14px] text-[#434343] font-[700]'>
                            Possession Starts
                        </p>
                        <p className='text-[14px] text-[#1d3a76] font-[600]'>
                            {available_from_date}
                        </p>
                    </div>
                </div>
                <div className='flex items-center justify-between border-b-[1.8px] border-[#E2E2E2] '>
                    {
                        (propertyDetails?.sub_type === "Apartment" || propertyDetails?.sub_type === "Flat" || propertyDetails?.sub_type === "Land" || propertyDetails?.sub_type === "Office" || propertyDetails?.sub_type === "Retail Shop" || propertyDetails?.sub_type === "Show Room" || propertyDetails?.sub_type === "Independent House" || propertyDetails?.sub_type === "Independent Villa") &&
                        <>
                            <button
                                onClick={() => updateSetactivetab("plan1")}
                                className={`text-[12px] hover:text-[#0d6efd] font-[700] pb-[8px] ${activetab === 'plan1' ? 'text-[#1d3a76] border-b-[1.8px] border-[#1d3a76]' : 'text-[#434343]'}`}>
                                {propertyDetails?.builtup_area ? `${propertyDetails?.builtup_area} sq.ft(builtup_area)` : ''}
                            </button>
                            <button
                                onClick={() => updateSetactivetab("plan2")}
                                className={`text-[12px] hover:text-[#0d6efd] font-[700] pb-[8px] ${activetab === 'plan2' ? 'text-[#1d3a76] border-b-[1.8px] border-[#1d3a76]' : 'text-[#434343]'}`}>
                                {propertyDetails?.carpet_area ? `${propertyDetails?.carpet_area} sq.ft(carpet_area)` : ''}
                            </button>
                        </>
                    }
                    {
                        (propertyDetails?.sub_type === "Plot" || propertyDetails?.sub_type === "Land") &&
                        <>
                            <button
                                onClick={() => updateSetactivetab("plan3")}
                                className={`text-[12px] hover:text-[#0d6efd] font-[700] pb-[8px] ${activetab === 'plan3' ? 'text-[#1d3a76] border-b-[1.8px] border-[#1d3a76]' : 'text-[#434343]'}`}>
                                {propertyDetails?.length_area ? `${propertyDetails?.length_area} sq.ft(length_area)` : ''}
                            </button>
                            <button
                                onClick={() => updateSetactivetab("plan4")}
                                className={`text-[12px] hover:text-[#0d6efd] font-[700] pb-[8px] ${activetab === 'plan4' ? 'text-[#1d3a76] border-b-[1.8px] border-[#1d3a76]' : 'text-[#434343]'}`}>
                                {propertyDetails?.width_area ? `${propertyDetails?.width_area} sq.ft(width_area)` : ''}
                            </button>
                        </>
                    }
                    {
                        // (propertySubType === "Independent House" || propertySubType === "Independent Villa" || propertySubType === "Plot" || propertySubType === "Warehouse" || propertySubType === "Others")
                        (propertyDetails?.sub_type === "Independent House" || propertyDetails?.sub_type === "Independent Villa" || propertyDetails?.sub_type === "Plot" || propertyDetails?.sub_type === "Warehouse" || propertyDetails?.sub_type === "Others") &&
                        <button
                            onClick={() => updateSetactivetab("plan5")}
                            className={`text-[12px] hover:text-[#0d6efd] font-[700] pb-[8px] ${activetab === 'plan5' ? 'text-[#1d3a76] border-b-[1.8px] border-[#1d3a76]' : 'text-[#434343]'}`}>
                            {propertyDetails?.plot_area ? `${propertyDetails?.plot_area} sq.ft(plot_area)` : ''}
                        </button>
                    }
                </div>
                <div>
                    {activetab === 'plan1' &&
                        <Floorplan
                            price="₹ 2 Cr - ₹ 4 Cr"
                            type="1"
                        />
                    }
                    {activetab === 'plan2' &&
                        <Floorplan
                            price="₹ 2 Cr - ₹ 4 Cr"
                            type="1"
                        />
                    }
                    {activetab === 'plan3' &&
                        <Floorplan
                            price="₹ 2 Cr - ₹ 4 Cr"
                            type="1"
                        />
                    }
                    {activetab === 'plan4' &&
                        <Floorplan
                            price="₹ 2 Cr - ₹ 4 Cr"
                            type="1"
                        />
                    }
                    {activetab === 'plan5' &&
                        <Floorplan
                            price="₹ 2 Cr - ₹ 4 Cr"
                            type="1"
                        />
                    }
                </div>
            </div>
        </div>
    );
}

export default Propertyprice;
