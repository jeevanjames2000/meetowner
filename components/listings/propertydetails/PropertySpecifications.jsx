import React from 'react';
import amenitiesaskdetailslike from '@/public/assets/amenities-askdetails-like.png';
import Image from 'next/image';
import { IconHeart } from '@tabler/icons-react';
import Accordion from '@/components/tailifycomponents/Accordian';
import floor from '@/public/assets/floorandceiling.svg'
function PropertySpecifications({ propertyDetails }) {
    const accordionItems = [
        { value: "Floor & Counter", emoji: "", description: "Apples are delicious fruits." },
        { value: "Fitting", emoji: "", description: "Bananas are high in potassium." },
        { value: "Wall & Ceiling", emoji: "", description: "Cherries are sweet and tart." },
    ]

    return (
        <div className="propertyprice space-y-6">
            <p className="text-[#1d3a76] text-[25px] font-[600]">{propertyDetails?.property_name?.toUpperCase()} Specifications</p>
            <div className="custom-shadow p-6 space-y-8 bg-[#F3F3F3] rounded-md">
                <div className="flex items-center justify-end gap-[14px]">
                    <IconHeart stroke={2} color="#E28B6D" className="h-6 w-6" />
                    <Image
                        src={amenitiesaskdetailslike}
                        alt="amenities-askdetails-like"
                        className="h-5 w-5 object-contain"
                    />
                    <button
                        className="bg-[#079E9E] text-[#ffffff] text-[12px] font-[600] py-1 px-3 rounded-[5px]"
                    >
                        Ask for Details
                    </button>
                </div>
                <Accordion items={accordionItems} />
            </div>
        </div>
    );
}

export default PropertySpecifications;
