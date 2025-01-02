import React from 'react'

import { IconChevronLeft, IconChevronRight, IconDownload } from '@tabler/icons-react';
import enquiry_1 from '@/public/assets/enquiry_1.png';
import enquiry_2 from '@/public/assets/enquiry_2.png';
import enquiry_3 from '@/public/assets/enquiry_3.png';
import enquiry_4 from '@/public/assets/enquiry_4.png';
import Link from 'next/link';

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
            location: 'Lakescape, Kondapur, Telangana, India',
            area: '1250 yards',
            price: '2 cr'
        },
        {
            id: 2,
            image: enquiry_2,
            lakescape: 'Skyline Heights',
            id_number: '(MD-240102165031)',
            date: 'September-05-2024',
            trade: 'Independent Villa for rent',
            location: 'Lakescape, Kondapur, Telangana, India',
            area: '2500 sq. ft.',
            price: '2 cr'
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
            price: '2 cr'
        },
        {
            id: 4,
            image: enquiry_4,
            lakescape: 'Blue Horizon',
            id_number: '(MD-240102165033)',
            date: 'June-15-2024',
            trade: 'Residential Plot for sell',
            location: 'Manikonda, Hyderabad, Telangana',
            area: '2000 sq.yds',
            price: '2 cr'
        },
    ];
    return (
        <>
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
                        price={item.price}
                    />
                ))
            ) : (
                <p className="text-[16px] 2xl:text-[20px] 3xl:text[22px] 4xl:text-[24px]">No properties available</p> // Fallback message
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
                            <IconChevronLeft size={16} />
                        </Link>
                    </li>
                    {/* Page Numbers */}
                    {[1, 2, 3, 4, 5].map((page, index) => (
                        <li key={index}>
                            <Link
                                href="#"
                                className={`flex items-center justify-center px-3 h-8 leading-tight border ${page === 3
                                    ? "z-10 text-[#ffffff] border-blue-300 bg-[#1D3A76] hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
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
                            <IconChevronRight size={16} />
                        </Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Myenquirestab