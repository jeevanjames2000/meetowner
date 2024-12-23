import React from 'react';
import amenitiesaskdetailslike from '@/public/assets/amenities-askdetails-like.png';
import Image from 'next/image';
import { IconHeart } from '@tabler/icons-react';
import project_area from '@/public/assets/project_area.svg';
// import project_size from '@/public/assets/project_size.svg';
// import sizes from '@/public/assets/sizes.svg';
// import launch_date from '@/public/assets/launch_date.svg';
// import possession_starts from '@/public/assets/possession_starts.svg';
// import avg_price from '@/public/assets/avg_price.svg';
// import configuration from '@/public/assets/configuration.svg';

function Propertyoverview({ propertyDetails }) {
    const projectDetails = [
        { name: "Project Area", project_details: "10.5 Acres", image: project_area },
        // { name: "Project Size", project_details: "1 Building to 500 units", image: project_size },
        // { name: "Sizes", project_details: "1890 sq.ft - 2890 sq.ft", image: sizes },
        // { name: "Launch Date", project_details: "JAN 2000", image: launch_date },
        // { name: "Possession Starts", project_details: "JAN 2025", image: possession_starts },
        // { name: "Avg. Price", project_details: "10.45k/sq.ft", image: avg_price },
        // { name: "Configuration", project_details: "3 BHK Apartment", image: configuration },
    ];

    return (
        <div className="propertyprice space-y-6">
            <p className="text-[#1D37A6] text-[25px] font-[600]">{propertyDetails?.property_name} Overview</p>
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
                <div className="grid grid-cols-3">
                    <div className=" flex items-center justify-start  p-[10px] gap-4"
                    >
                        <Image
                            src={project_area}
                            alt={`project_area`}
                            className="w-6 h-6 object-cover"
                        />
                        <div>
                            <p className="text-[16px] text-[#212529] font-[600]">Project Area</p>
                            <p className="text-[14px] text-[#434343] font-[600]">10.5 Acres</p>
                        </div>
                    </div>
                    <div className=" flex items-center justify-start  p-[10px] gap-4"
                    >
                        <Image
                            src={project_area}
                            alt={`project_area`}
                            className="w-6 h-6 object-cover"
                        />
                        <div>
                            <p className="text-[16px] text-[#212529] font-[600]">Project Size</p>
                            <p className="text-[14px] text-[#434343] font-[600]">1 Building to 500 untis.</p>
                        </div>
                    </div>
                    <div className=" flex items-center justify-start  p-[10px] gap-4"
                    >
                        <Image
                            src={project_area}
                            alt={`project_area`}
                            className="w-6 h-6 object-cover"
                        />
                        <div>
                            <p className="text-[16px] text-[#212529] font-[600]">Sizes</p>
                            <p className="text-[14px] text-[#434343] font-[600]">1890 sq.ft - 2890 sqft.</p>
                        </div>
                    </div>
                    <div className=" flex items-center justify-start  p-[10px] gap-4"
                    >
                        <Image
                            src={project_area}
                            alt={`project_area`}
                            className="w-6 h-6 object-cover"
                        />
                        <div>
                            <p className="text-[16px] text-[#212529] font-[600]">Project Area</p>
                            <p className="text-[14px] text-[#434343] font-[600]">10.5 Acres</p>
                        </div>
                    </div>
                    <div className=" flex items-center justify-start  p-[10px] gap-4"
                    >
                        <Image
                            src={project_area}
                            alt={`project_area`}
                            className="w-6 h-6 object-cover"
                        />
                        <div>
                            <p className="text-[16px] text-[#212529] font-[600]">Project Size</p>
                            <p className="text-[14px] text-[#434343] font-[600]">1 Building to 500 untis.</p>
                        </div>
                    </div>
                    <div className=" flex items-center justify-start  p-[10px] gap-4"
                    >
                        <Image
                            src={project_area}
                            alt={`project_area`}
                            className="w-6 h-6 object-cover"
                        />
                        <div>
                            <p className="text-[16px] text-[#212529] font-[600]">Sizes</p>
                            <p className="text-[14px] text-[#434343] font-[600]">1890 sq.ft - 2890 sqft.</p>
                        </div>
                    </div>
                    <div className=" flex items-center justify-start  p-[10px] gap-4"
                    >
                        <Image
                            src={project_area}
                            alt={`project_area`}
                            className="w-6 h-6 object-cover"
                        />
                        <div>
                            <p className="text-[16px] text-[#212529] font-[600]">Sizes</p>
                            <p className="text-[14px] text-[#434343] font-[600]">1890 sq.ft - 2890 sqft.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Propertyoverview;
