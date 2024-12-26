import React from 'react';
import amenitiesaskdetailslike from '@/public/assets/amenities-askdetails-like.png';
import Image from 'next/image';
import { IconCheck, IconCheckbox, IconHeart } from '@tabler/icons-react';
import project_area from '@/public/assets/project_area.svg';

function Propertyoverview({ propertyDetails }) {
    let available_from_date = 'N/A';

    if (propertyDetails?.available_from) {
        const available_from = new Date(propertyDetails.available_from);
        if (!isNaN(available_from)) {
            available_from_date = available_from.toISOString().split('T')[0];
        }
    }

    let possession_end_date = 'N/A';

    if (propertyDetails?.possession_end_date) {
        const possession_end = new Date(propertyDetails?.possession_end_date);
        if (!isNaN(possession_end)) {
            possession_end_date = possession_end.toISOString().split('T')[0];
        }
    }


    return (
        <div className="propertyprice space-y-6">
            <p className="text-[#1d3a76] text-[25px] font-[600]">{propertyDetails?.property_name?.toUpperCase()} Overview</p>
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
                                    <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Bathroom</p>
                                    <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.bathroom || '----'}</p>
                                </div>
                            </div>

                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Balcony</p>
                                    <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.balconies || '----'}</p>
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
                                    <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Passenger Lifts</p>
                                    <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.passenger_lifts || '----'}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Service Lifts</p>
                                    <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.service_lifts || '----'}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Stair Cases</p>
                                    <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.stair_cases || '----'}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Private Parking</p>
                                    <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.private_parking || '----'}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Public Parking</p>
                                    <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.public_parking || '----'}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Private Washrooms</p>
                                    <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.private_washrooms || '----'}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Public Washrooms</p>
                                    <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.public_washrooms || '-----'}</p>
                                </div>
                            </div>
                        </>
                    }
                    {
                        propertyDetails?.property_for === "Rent" &&
                        <div className="flex items-center p-[10px] gap-4" >
                            <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                            <div>
                                <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Available From</p>
                                <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{available_from_date || '----'}</p>
                            </div>
                        </div>
                    }
                    {
                        propertyDetails?.occupancy === "Ready to move" &&
                        <div className="flex items-center p-[10px] gap-4" >
                            <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                            <div>
                                <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Age of Property</p>
                                <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.age_of_property || '----'}</p>
                            </div>
                        </div>
                    }
                    {
                        propertyDetails?.occupancy === "Under Construction" &&
                        <div className="flex items-center p-[10px] gap-4" >
                            <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                            <div>
                                <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Possession End</p>
                                <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{possession_end_date || '----'}</p>
                            </div>
                        </div>
                    }
                    {
                        propertyDetails?.property_for === "Rent" &&
                        <>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Maintenance Charge</p>
                                    <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.maintenance ? `₹ ${propertyDetails?.maintenance}` : '----'}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Security Deposit</p>
                                    <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.security_deposit ? `${propertyDetails?.security_deposit} Months` : '----'}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Lock-in Period</p>
                                    <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.lock_in ? `${propertyDetails?.lock_in} Months` : '----'}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Brokarage Charge</p>
                                    <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.brokerage_charge ? `${propertyDetails?.brokerage_charge} Days` : '----'}</p>
                                </div>
                            </div>
                            {
                                (propertyDetails?.property_in !== "Commercial" || propertyDetails?.sub_type === "Plot" || propertyDetails?.sub_type === "Land") &&
                                <div className="flex items-center p-[10px] gap-4" >
                                    <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                    <div>
                                        <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Prefered Tenant Type</p>
                                        <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.prefered_tenant_types || '----'}</p>
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
                                <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Pent House</p>
                                <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.pent_house || '----'}</p>
                            </div>
                        </div>
                    }
                    {
                        propertyDetails?.property_for === "Sell" &&
                        <div className="flex items-center p-[10px] gap-4" >
                            <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                            <div>
                                <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Possession Status</p>
                                <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.possession_status || '----'}</p>
                            </div>
                        </div>
                    }
                    {
                        (propertyDetails?.property_in === "Commercial" && propertyDetails?.property_for === "Sell") &&
                        <div className="flex items-center p-[10px] gap-4" >
                            <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                            <div>
                                <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Ownership</p>
                                <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.ownership_type || '----'}</p>
                            </div>
                        </div>
                    }
                    {
                        propertyDetails?.property_in === "Commercial" &&
                            (propertyDetails?.sub_type === "Warehouse" || propertyDetails?.sub_type === "Plot" || propertyDetails?.sub_type === "Others") ?
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Plot No</p>
                                    <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.plot_number || '----'}</p>
                                </div>
                            </div>
                            :
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Flat No</p>
                                    <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.unit_flat_house_no || '----'}</p>
                                </div>
                            </div>
                    }
                    {
                        (propertyDetails?.sub_type === "Retail Shop" || propertyDetails?.sub_type === "Show Room" || propertyDetails?.sub_type === "Plot" || propertyDetails?.sub_type === "Others") ?
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Suitable For</p>
                                    <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.business_types || '----'}</p>
                                </div>
                            </div>
                            :
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Zone Type</p>
                                    <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.zone_types || '----'}</p>
                                </div>
                            </div>
                    }
                    {
                        propertyDetails?.property_for === "Sell" &&
                        (propertyDetails?.sub_type === "Apartment" || propertyDetails?.sub_type === "Independent Villa" || propertyDetails?.sub_type === "Plot") &&
                        <div className="flex items-center p-[10px] gap-4" >
                            <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                            <div>
                                <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Investor Property</p>
                                <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.investor_property || '----'}</p>
                            </div>
                        </div>
                    }
                    {
                        propertyDetails?.property_for !== "Rent" &&
                        <div className="flex items-center p-[10px] gap-4" >
                            <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                            <div>
                                <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Loan Facility</p>
                                <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.loan_facility || '----'}</p>
                            </div>
                        </div>
                    }
                    {
                        propertyDetails?.sub_type !== "Plot" &&
                        <>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                {/* <IconCheckbox stroke={2} color="#434343" className="h-6 w-6" /> */}
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Car Parking</p>
                                    <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.car_parking || '----'}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Bike Parking</p>
                                    <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.bike_parking || '----'}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Open Parking</p>
                                    <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.open_parking || '----'}</p>
                                </div>
                            </div>
                        </>
                    }
                    {
                        propertyDetails?.property_in === "Commercial" ?
                            (propertyDetails?.sub_type === "Office" || propertyDetails?.sub_type === "Show Room" || !(propertyDetails?.sub_type === "Retail Shop" || propertyDetails?.sub_type === "Warehouse" || propertyDetails?.sub_type === "Plot")) &&
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Pantry Room</p>
                                    <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.pantry_room || '----'}</p>
                                </div>
                            </div>
                            :
                            (!(propertyDetails?.sub_type === "Plot" || propertyDetails?.sub_type === "Land")) &&
                            <div className="flex items-center p-[10px] gap-4" >
                                <Image src={project_area} alt={`project_area`} className="w-5 h-5" />
                                <div>
                                    <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Servant Room</p>
                                    <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">{propertyDetails?.servant_room || '----'}</p>
                                </div>
                            </div>
                    }
                    <div className=" flex items-center p-[10px] gap-4"
                    >
                        <Image src={project_area} alt={`project_area`} className="w-5 h-5 object-cover" />
                        <div>
                            <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Project Area</p>
                            <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">10.5 Acres</p>
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
                            <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Project Size</p>
                            <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">1 Building to 500 untis.</p>
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
                            <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Sizes</p>
                            <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">1890 sq.ft - 2890 sqft.</p>
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
                            <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Launch Date</p>
                            <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">JAN 2000.</p>
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
                            <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Possession Starts</p>
                            <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">JAN 2025.</p>
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
                            <p className="text-[14px] text-[#212529] font-[600] font-Montserrat">Avg. Price</p>
                            <p className="text-[12px] text-[#434343] font-[600] font-Montserrat">10.45k/sq.ft</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Propertyoverview;
