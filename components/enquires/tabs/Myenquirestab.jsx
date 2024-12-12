import React from 'react'

import { IconChevronLeft, IconChevronRight, IconDownload } from '@tabler/icons-react';
import enquiry_1 from '@/public/assets/enquiry_1.png';
import enquiry_2 from '@/public/assets/enquiry_2.png';
import enquiry_3 from '@/public/assets/enquiry_3.png';
import enquiry_4 from '@/public/assets/enquiry_4.png';
import guaranteed_enquiries from '@/public/assets/guaranteed_enquiries.png'
import Link from 'next/link';
import Image from 'next/image';
import Enquirycard from '../Enquirycard';
function Myenquirestab() {
    
    const property = [
        {
            id: 1,
            image: enquiry_1,
            lakescape: 'Lakescape',
            id_number: '(MD-240102165030)',
            date: 'August-12-2024',
            trade: 'Apartment for sell',
            location: 'Kokapet, Hyderabad, Telangana',
            area: '1250 yards',
        },
        {
            id: 2,
            image: enquiry_2,
            lakescape: 'Skyline Heights',
            id_number: '(MD-240102165031)',
            date: 'September-05-2024',
            trade: 'Independent Villa for rent',
            location: 'Gachibowli, Hyderabad, Telangana',
            area: '2500 sq. ft.',
        },
        {
            id: 3,
            image: enquiry_3,
            lakescape: 'Green Meadows',
            id_number: '(MD-240102165032)',
            date: 'July-20-2024',
            trade: 'Commercial Space for lease',
            location: 'Madhapur, Hyderabad, Telangana',
            area: '3500 sq. ft.',
        },
        {
            id: 4,
            image: enquiry_4,
            lakescape: 'Blue Horizon',
            id_number: '(MD-240102165033)',
            date: 'June-15-2024',
            trade: 'Residential Plot for sell',
            location: 'Manikonda, Hyderabad, Telangana',
            area: '2000 sq. yards',
        },
    ];
    return (
        <>
            <p className="flex items-center justify-start pl-3 py-3 text-[16px] text-[#ffffff] font-[500] bg-[#31539A] rounded-md">
                Enquiries for: 2 BHK Apartment in Kondapur (Rent)
            </p>
            <div className="flex items-center justify-between">
                <p className="text-[14px] text-[#252525] font-[400]">
                    Displaying 4 out of 25 Enquiries
                </p>
                <button
                    className="flex items-center text-[#252525] border border-[#B5B5B5] rounded-full h-7 px-4 text-[12px] font-[400] focus:outline-none bg-transparent hover:bg-[#1D3A76] hover:text-white"
                >
                    Download
                    <IconDownload className="ml-2 w-4 h-4" />
                </button>
            </div>
            {property.length !== 0 ? (
                property.map((item) => (
                    <Enquirycard
                        key={item.id}
                        image={item.image}
                        lakescape={item.lakescape}
                        id_number={item.id_number}
                        date={item.date}
                        trade={item.trade}
                        location={item.location}
                        area={item.area}
                    />
                ))
            ) : (
                <p>No properties available</p> // Fallback message
            )}
            <nav className='flex flex-row-reverse'>
                <ul className="flex items-center -space-x-px h-8 text-sm">
                    {/* Previous Button */}
                    <li>
                        <Link
                            href="#"
                            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            aria-label="Previous"
                        >
                            <IconChevronLeft />
                        </Link>
                    </li>

                    {/* Page Numbers */}
                    {[1, 2, 3, 4, 5].map((page, index) => (
                        <li key={index}>
                            <Link
                                href="#"
                                className={`flex items-center justify-center px-3 h-8 leading-tight border ${page === 3
                                    ? "z-10 text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                    : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    }`}
                                aria-current={page === 3 ? "page" : undefined}
                            >
                                {page}
                            </Link>
                        </li>
                    ))}

                    {/* Next Button */}
                    <li>
                        <Link
                            href="#"
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            aria-label="Next"
                        >
                            <IconChevronRight />
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className=' grid grid-cols-3 md:grid-cols-12 items-center justify-between  bg-[#F4EBD7] h-fit w-full rounded-[10px] px-6 py-3  '>
                <div className=' col-span-6 flex flex-col gap-2'>
                    <p className='text-[12px] font-[600] text-[#1D3A76]/70 '>
                        Get Guaranteed <span className=' text-[#1D3A76] text-[14px] font-[600]'>THIRTY ENQUIRIES  </span>
                    </p>
                    <p className='text-[10px] font-[600] text-[#727272] '>
                        With Owner Packages
                    </p>
                    <div className=' flex gap-4'>
                        <button
                            className=" bg-[#53c0ac] text-white px-6 py-1  text-[16px]  font-[600] rounded-lg 
                   focus:outline-none"
                        >
                            Upgrade Now
                        </button>
                        <button
                            className="  text-[#5E7796] px-6 py-1  text-[12px]  font-[400] 
                   focus:outline-none"
                        >
                            View more
                        </button>
                    </div>

                </div>

                <div className='col-span-6 h-full w-full '>
                    <Image src={guaranteed_enquiries} alt={"guaranteed_enquiries"} className=" ml-auto  object-cover w-[200px]" />
                </div>
            </div>
        </>
    )
}

export default Myenquirestab