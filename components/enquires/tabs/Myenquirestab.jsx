import React from 'react'
import { IconDownload } from '@tabler/icons-react';
import Enquirycard from '../Enquirycard';
import { Loadingoverlay } from '@nayeshdaggula/tailify';
import Pagination from '@/components/tailifycomponents/Pagination';
function Myenquirestab({ allEnquires, handlePageChange, isLoadingEffect, totalPages, totalEnquires }) {

    return (
        <>
            <div className="flex items-center justify-between sm:px-5">
                <p className="text-[10px] xs:text-[12px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text[20px] text-[#252525] font-[600]">
                    Displaying {allEnquires?.length} out of {totalEnquires} Enquiries
                </p>
                <button
                    className="flex items-center text-[#252525] border-[0.09rem] border-[#B5B5B5] rounded-full py-[3px] px-2 text-[10px] xs:text-[11px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text[20px] font-semibold focus:outline-none bg-transparent hover:bg-[#1D3A76] hover:text-white"
                >
                    Download
                    <IconDownload stroke={2} className="ml-2 w-3 h-3 2xl:h-4 2xl:w-4 3xl:h-5 3xl:w-5 4xl:w-6 4xl:h-6" />
                </button>
            </div>
            {allEnquires.length !== 0 ?
                allEnquires.map((item, index) => (
                    <Enquirycard
                        key={`enquiry-${index}${item.id}`}
                        image={item?.property_details?.image}
                        property_name={item?.property_details?.property_name}
                        unique_property_id={item?.property_details?.unique_property_id}
                        property_in={item?.property_details?.property_in}
                        property_for={item?.property_details?.property_for}
                        sub_type={item?.property_details?.sub_type}
                        google_address={item?.property_details?.google_address}
                        builtup_area={item?.property_details?.builtup_area}
                        length_area={item?.property_details?.length_area}
                        widt_area={item?.property_details?.widt_area}
                        property_cost={item?.property_details?.property_cost}
                        monthly_rent={item?.property_details?.monthly_rent}
                        area_units={item?.property_details?.area_units}
                        user_name={item?.user_details?.name}
                        user_email={item?.user_details?.email}
                        user_mobile={item?.user_details?.mobile}
                    />
                ))
                :
                <div className='flex items-center justify-center h-[200px] bg-white border border-[#D7D8D9] rounded-md'>
                    <p className='text-[#1D3A76] text-[12px] xs:text-[14px] 2xl:text-[18px] 3xl:text-[20px] 4xl:text-[22px] font-[700]'>No Properties Found</p>
                </div>
            }

            {
                allEnquires.length > 0 &&
                <div className='flex items-center justify-end'>
                    <Pagination
                        total={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            }
            <Loadingoverlay
                visible={isLoadingEffect}
                zIndex={9999}
                overlayBg="rgba(255, 255, 255, 0.6)"
            />

        </>
    )
}

export default Myenquirestab