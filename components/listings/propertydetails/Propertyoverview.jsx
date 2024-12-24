import React from 'react';
import amenitiesaskdetailslike from '@/public/assets/amenities-askdetails-like.png';
import Image from 'next/image';
import { IconHeart } from '@tabler/icons-react';
import project_area from '@/public/assets/project_area.svg';
import Accordion from '@/components/tailifycomponents/Accordian';
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

    const accordionItems = [
        { value: "Apples", emoji: "🍎", description: "Apples are delicious fruits." },
        { value: "Bananas", emoji: "🍌", description: "Bananas are high in potassium." },
        { value: "Cherries", emoji: "🍒", description: "Cherries are sweet and tart." },
    ];

    let available_from_date = 'N/A'; // Default value if no valid date is provided

    if (propertyDetails?.available_from) {
        const available_from = new Date(propertyDetails.available_from);
        if (!isNaN(available_from)) {
            available_from_date = available_from.toISOString().split('T')[0];
        }
    }

    let possession_end_date = 'N/A'; // Default value if no valid date is provided

    if (propertyDetails?.possession_end_date) {
        const possession_end = new Date(propertyDetails?.possession_end_date);
        if (!isNaN(possession_end)) {
            possession_end_date = possession_end.toISOString().split('T')[0];
        }
    }

    return (
        <div className="propertyprice space-y-6">
            <p className="text-[#1d3a76] text-[25px] font-[600]">{propertyDetails?.property_name} Overview</p>
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
                    {
                        (propertyDetails?.sub_type === "Apartment" || propertyDetails?.sub_type === "Flat") &&
                        <>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600]">Bathroom</p>
                                    <p className="text-[12px] text-[#434343] font-[600]">{propertyDetails?.bathroom}</p>
                                </div>
                            </div>

                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600]">Balcony</p>
                                    <p className="text-[12px] text-[#434343] font-[600]">{propertyDetails?.balconies}</p>
                                </div>
                            </div>
                        </>
                    }
                    {
                        (propertyDetails?.sub_type === "Office" || propertyDetails?.sub_type === "Retail Shop" || propertyDetails?.sub_type === "Show Room") &&
                        <>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600]">Passenger Lifts</p>
                                    <p className="text-[12px] text-[#434343] font-[600]">{propertyDetails?.passenger_lifts || ''}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600]">Service Lifts</p>
                                    <p className="text-[12px] text-[#434343] font-[600]">{propertyDetails?.service_lifts || ''}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600]">Stair Cases</p>
                                    <p className="text-[12px] text-[#434343] font-[600]">{propertyDetails?.stair_cases || ''}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600]">Private Parking</p>
                                    <p className="text-[12px] text-[#434343] font-[600]">{propertyDetails?.private_parking || ''}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600]">Public Parking</p>
                                    <p className="text-[12px] text-[#434343] font-[600]">{propertyDetails?.public_parking || ''}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600]">Private Washrooms</p>
                                    <p className="text-[12px] text-[#434343] font-[600]">{propertyDetails?.private_washrooms || ''}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600]">Public Washrooms</p>
                                    <p className="text-[12px] text-[#434343] font-[600]">{propertyDetails?.public_washrooms || ''}</p>
                                </div>
                            </div>
                        </>
                    }
                    {
                        propertyDetails?.property_for === "Rent" &&
                        <div className="flex items-center p-[10px] gap-4" >
                            <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                            <div>
                                <p className="text-[14px] text-[#212529] font-[600]">Available From</p>
                                <p className="text-[12px] text-[#434343] font-[600]">{available_from_date || ''}</p>
                            </div>
                        </div>
                    }
                    {
                        propertyDetails?.occupancy === "Ready to move" &&
                        <div className="flex items-center p-[10px] gap-4" >
                            <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                            <div>
                                <p className="text-[14px] text-[#212529] font-[600]">Age of Property</p>
                                <p className="text-[12px] text-[#434343] font-[600]">{propertyDetails?.age_of_property || ''}</p>
                            </div>
                        </div>
                    }
                    {
                        propertyDetails?.occupancy === "Under Construction" &&
                        <div className="flex items-center p-[10px] gap-4" >
                            <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                            <div>
                                <p className="text-[14px] text-[#212529] font-[600]">Possession End</p>
                                <p className="text-[12px] text-[#434343] font-[600]">{possession_end_date || ''}</p>
                            </div>
                        </div>
                    }
                    {
                        propertyDetails?.property_for === "Rent" &&
                        <>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600]">Maintenance Charge</p>
                                    <p className="text-[12px] text-[#434343] font-[600]">{propertyDetails?.maintenance ? `₹ ${propertyDetails?.maintenance}` : ''}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600]">Security Deposit</p>
                                    <p className="text-[12px] text-[#434343] font-[600]">{propertyDetails?.security_deposit ? `${propertyDetails?.security_deposit} Months` : ''}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600]">Lock-in Period</p>
                                    <p className="text-[12px] text-[#434343] font-[600]">{propertyDetails?.lock_in ? `${propertyDetails?.lock_in} Months` : ''}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600]">Brokarage Charge</p>
                                    <p className="text-[12px] text-[#434343] font-[600]">{propertyDetails?.brokerage_charge ? `${propertyDetails?.brokerage_charge} Days` : ''}</p>
                                </div>
                            </div>
                            {
                                (propertyDetails?.property_in !== "Commercial" || propertyDetails?.sub_type === "Plot" || propertyDetails?.sub_type === "Land") &&
                                <div className="flex items-center p-[10px] gap-4" >
                                    <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                    <div>
                                        <p className="text-[14px] text-[#212529] font-[600]">Prefered Tenant Type</p>
                                        <p className="text-[12px] text-[#434343] font-[600]">{propertyDetails?.prefered_tenant_types || ''}</p>
                                    </div>
                                </div>
                            }
                        </>
                    }
                    {
                        (propertyDetails?.sub_type === "Independent House" || propertyDetails?.sub_type === "Independent Villa") &&
                        <div className="flex items-center p-[10px] gap-4" >
                            <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                            <div>
                                <p className="text-[14px] text-[#212529] font-[600]">Pent House</p>
                                <p className="text-[12px] text-[#434343] font-[600]">{propertyDetails?.pent_house || ''}</p>
                            </div>
                        </div>
                    }
                    {
                        propertyDetails?.property_for === "Sell" &&
                        <div className="flex items-center p-[10px] gap-4" >
                            <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                            <div>
                                <p className="text-[14px] text-[#212529] font-[600]">Possession Status</p>
                                <p className="text-[12px] text-[#434343] font-[600]">{propertyDetails?.possession_status || ''}</p>
                            </div>
                        </div>
                    }
                    <div className=" flex items-center p-[10px] gap-4"
                    >
                        <Image
                            src={project_area}
                            alt={`project_area`}
                            className="w-5 h-5 object-cover"
                        />
                        <div>
                            <p className="text-[14px] text-[#212529] font-[600]">Project Area</p>
                            <p className="text-[12px] text-[#434343] font-[600]">10.5 Acres</p>
                        </div>
                    </div>
                    <div className=" flex items-center p-[10px] gap-4"
                    >
                        <Image
                            src={project_area}
                            alt={`project_area`}
                            className="w-5 h-5 object-cover"
                        />
                        <div>
                            <p className="text-[14px] text-[#212529] font-[600]">Project Size</p>
                            <p className="text-[12px] text-[#434343] font-[600]">1 Building to 500 untis.</p>
                        </div>
                    </div>
                    <div className=" flex items-center justify-start  p-[10px] gap-4"
                    >
                        <Image
                            src={project_area}
                            alt={`project_area`}
                            className="w-5 h-5 object-cover"
                        />
                        <div>
                            <p className="text-[14px] text-[#212529] font-[600]">Sizes</p>
                            <p className="text-[12px] text-[#434343] font-[600]">1890 sq.ft - 2890 sqft.</p>
                        </div>
                    </div>
                    <div className=" flex items-center justify-start  p-[10px] gap-4"
                    >
                        <Image
                            src={project_area}
                            alt={`project_area`}
                            className="w-5 h-5 object-cover"
                        />
                        <div>
                            <p className="text-[14px] text-[#212529] font-[600]">Launch Date</p>
                            <p className="text-[12px] text-[#434343] font-[600]">JAN 2000.</p>
                        </div>
                    </div>
                    <div className=" flex items-center justify-start  p-[10px] gap-4"
                    >
                        <Image
                            src={project_area}
                            alt={`project_area`}
                            className="w-5 h-5 object-cover"
                        />
                        <div>
                            <p className="text-[14px] text-[#212529] font-[600]">Possession Starts</p>
                            <p className="text-[12px] text-[#434343] font-[600]">JAN 2025.</p>
                        </div>
                    </div>
                    <div className=" flex items-center justify-start  p-[10px] gap-4"
                    >
                        <Image
                            src={project_area}
                            alt={`project_area`}
                            className="w-5 h-5 object-cover"
                        />
                        <div>
                            <p className="text-[14px] text-[#212529] font-[600]">Avg. Price</p>
                            <p className="text-[12px] text-[#434343] font-[600]">10.45k/sq.ft</p>
                        </div>
                    </div>
                    <div className=" flex items-center justify-start  p-[10px] gap-4"
                    >
                        <Image
                            src={project_area}
                            alt={`project_area`}
                            className="w-5 h-5 object-cover"
                        />
                        <div>
                            <p className="text-[14px] text-[#212529] font-[600]">Configuration</p>
                            <p className="text-[12px] text-[#434343] font-[600]">3 BHK Apartment.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Accordion items={accordionItems} /> */}
        </div>
    );
}

export default Propertyoverview;
