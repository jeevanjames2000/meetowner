import { IconDownload } from '@tabler/icons-react'
import dynamic from 'next/dynamic'
import React from 'react'
import Enquirycard from './Enquirycard'
import enquiry_1 from '@/public/assets/enquiry_1.png'
const Dashboardsidebarsection = dynamic(() => import('../dashboard/Dasboradsidebar/Dashboardsidebarsection'))


function Enquirieswrapper() {
    const property = [
        {
            id: 1,
            image: enquiry_1,
            lakescape:"Lakescape",
            id_number:"(MD-240102165030)"

        },]
    return (
        <div className="grid grid-cols-12 gap-2 px-[80px] mt-5 w-full">
            {/* First Child: Spanning 2 Columns */}
            <div className="col-span-12 md:col-span-2 space-y-8 mb-8  ">
                <div className='w-full bg-[#ffffff] h-96 rounded-lg'>
                    <div className='  flex items-center justify-start pl-3 h-9 text-[12px] font-[600] bg-[#E2EAED] text-[#1D3A76]'>
                        My Enquiries
                    </div>
                    <div className='  flex items-center justify-start pl-3 h-9 text-[12px] font-[600] text-[#1D3A76]'>
                        Matching Tenants
                    </div>
                </div>
            </div>
            {/* second Child: Spanning 6 Columns */}
            <div className="col-span-12 md:col-span-7 space-y-8 mb-8 ">
                <p className='  flex items-center justify-start pl-3 py-3 text-[16px] text-[#ffffff] font-[500] bg-[#31539A] rounded-md'>
                    Enquiries for : 2 BHK Apartment in Kondapur (Rent)
                </p>
                <div className=' flex items-center justify-between'>
                    <p className='  text-[14px] text-[#252525] font-[400]'>
                        Displaying 4 out of 25 Enquiries
                    </p>
                    <button
                        className="flex items-center text-[##252525] border border-[#B5B5B5] rounded-full  h-7  px-4 text-[12px] font-[400]  focus:outline-none bg-transparent hover:bg-[#1D3A76] hover:text-white"
                    >
                        Download
                        <IconDownload className="ml-2 w-4 h-4  " />
                    </button>
                </div>
                {property.length !== 0 ? (
                    property.map((item, index) => (
                        <Enquirycard
                            key={index}
                            image={item.image}
                            lakescape={item.lakescape}
                            id_number={item.id_number}
                        />
                    ))
                ) : (
                    <p>No properties available</p> // Fallback message
                )}
            </div>

            {/* third Child: Spanning 4 Columns */}
            <div className="col-span-12 md:col-span-3 space-y-8">
                <Dashboardsidebarsection />

            </div>
        </div>
    )
}

export default Enquirieswrapper