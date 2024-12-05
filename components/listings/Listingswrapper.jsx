'use client'
import { IconChevronLeft, IconChevronRight, IconCircle } from '@tabler/icons-react';
import Link from 'next/link';
import React, { useState } from 'react';
import Getapp from '../dashboard/Dasboradsidebar/parts/Getapp';
import Listingcard from './Listingcard';
import apartment from '@/public/assets/apartment.jpg';
import apartment1 from '@/public/assets/apartment1.jpg';
import apartment2 from '@/public/assets/apartment2.jpg';
import apartment3 from '@/public/assets/apartment3.jpg';
import apartment4 from '@/public/assets/apartment4.jpg';

function Listingswrapper() {
    const [selectedRole, setSelectedRole] = useState("residential_properties"); // Default role value corrected
    const [isOpen, setIsOpen] = useState(""); // Default accordion value corrected
    const [filters, setFilters] = useState(false)
    const updateFilters = () => {
             setFilters(!filters)
    }

    const toggleAccordion = (value) => {
        setIsOpen((prev) => (prev === value ? "" : value)); // Toggles accordion open/close
    };
    const listingdata = [
        {
            id: 1,
            id_number: "12345678",
            image: apartment,
            land: '1 BHK',
            cost: '₹2000k',
            area: '1200 sq.yards  ',
            interested_tenants: 'Two interested tenants',
            added_date: '27-june-2024',
            expiry_date: '09-feb-2025',

        },
        {
            id: 2,
            id_number: "12345678",
            image: apartment1,
            land: '1 BHK',
            cost: '₹2000k',
            area: '1200 sq.yards  ',
            interested_tenants: 'Two interested tenants',
            added_date: '27-june-2024',
            expiry_date: '09-feb-2025',
        },
        {
            id: 3,
            id_number: "12345678",
            image: apartment2,
            land: '1 BHK',
            cost: '₹2000k',
            area: '1200 sq.yards  ',
            interested_tenants: 'Two interested tenants',
            added_date: '27-june-2024',
            expiry_date: '09-feb-2025',
        },
        {
            id: 4,
            id_number: "12345678",
            image: apartment3,
            land: '1 BHK',
            cost: '₹2000k',
            area: '1200 sq.yards  ',
            interested_tenants: 'Two interested tenants',
            added_date: '27-june-2024',
            expiry_date: '09-feb-2025',
        },
        {
            id: 5,
            id_number: "12345678",
            image: apartment4,
            land: '1 BHK',
            cost: '₹2000k',
            area: '1200 sq.yards  ',
            interested_tenants: 'Two interested tenants',
            added_date: '27-june-2024',
            expiry_date: '09-feb-2025',
        }
    ]
    return (
        <div className="px-[80px] mt-10 w-full mb-16">
            <div className="flex w-full gap-6">
                {/* 20% Width Div */}
                <div className="w-[18%] h-fit bg-[#FFFFFF] pl-4  py-4 flex flex-col space-y-2 rounded-md">
                    <p className="text-[#240000] text-[16px] font-[500]">Show</p>
                    <div className="flex flex-col mx-auto w-full max-w-md border-b border-[#D7D8D9] pb-3">
                        {/* residential_properties Radio Button */}
                        <label className="w-full group relative flex cursor-pointer rounded-sm py-2 text-[#1b1b1b] transition focus:outline-none">
                            <input
                                type="radio"
                                name="role"
                                value="residential_properties"
                                checked={selectedRole === "residential_properties"}
                                onChange={() => setSelectedRole("residential_properties")}
                                className="hidden"
                            />
                            <div className="flex w-full items-center gap-2">
                                {selectedRole === "residential_properties" ? (
                                    <IconCircle size={16} className="bg-[#1D3A76] text-white rounded-full" />
                                ) : (
                                    <IconCircle size={16} color="#b9b9b9" />
                                )}
                                <p
                                    className={`text-[14px] font-[400] ${selectedRole === "residential_properties"
                                        ? "text-[#1D3A76]"
                                        : "text-[#969595]"
                                        }`}
                                >
                                    Residential  Properties
                                </p>
                            </div>
                        </label>

                        {/* commercial_properties Radio Button */}
                        <label className="w-full group relative flex cursor-pointer rounded-sm text-[#1b1b1b] transition focus:outline-none">
                            <input
                                type="radio"
                                name="role"
                                value="commercial_properties"
                                checked={selectedRole === "commercial_properties"}
                                onChange={() => setSelectedRole("commercial_properties")}
                                className="hidden"
                            />
                            <div className="flex w-full items-center gap-2">
                                {selectedRole === "commercial_properties" ? (
                                    <IconCircle size={16} className="bg-[#1D3A76] text-white rounded-full" />
                                ) : (
                                    <IconCircle size={16} color="#b9b9b9" />
                                )}
                                <p
                                    className={`text-[14px] font-[400] ${selectedRole === "commercial_properties"
                                        ? "text-[#1D3A76]"
                                        : "text-[#969595]"
                                        }`}
                                >
                                    Commercial properties
                                </p>
                            </div>
                        </label>
                    </div>
                    <p className="text-[#240000] text-[16px] font-[500]">Sub-Category</p>
                    <div className=''>


                        {/* Buy Accordion */}
                        <div
                            className={`flex items-center cursor-pointer gap-2 h-7 pl-3 ${isOpen === "buy" ? " bg-[#E2EAED] text-[#1D3A76]" : " text-[#969595]"
                                }`}
                            onClick={() => toggleAccordion("buy")}
                        >
                            <p className="font-[200] text-[14px] ">Buy(0)</p>
                            <IconChevronRight
                                stroke={1.5}
                                size={18}
                                className={`transform transition-transform ${isOpen === "buy" ? " text-[#1D3A76] rotate-90" : " text-[#969595]  rotate-0"
                                    }`}
                            />
                        </div>
                        {isOpen === "buy" && (
                            <div className="mt-2 flex flex-col gap-2 pl-6">
                                <Link href="/profile" className="text-gray-400 text-[14px] hover:text-[#1D3A76]">
                                    Apartment
                                </Link>
                                <Link href="/profile" className="text-gray-400 text-[14px] hover:text-[#1D3A76]">
                                    Independent Floor
                                </Link>
                                <Link href="/profile" className="text-gray-400 text-[14px] hover:text-[#1D3A76]">
                                    Villa
                                </Link>
                            </div>
                        )}
                        {/* Rent Accordion */}

                        <div
                            className={`flex items-center cursor-pointer gap-2 h-7 pl-3 ${isOpen === "rent" ? " bg-[#E2EAED] text-[#1D3A76]" : " text-[#969595]"
                                }`}
                            onClick={() => toggleAccordion("rent")}
                        >
                            <p className="font-[200] text-[14px]">Rent(0)</p>
                            <IconChevronRight
                                stroke={1.5}
                                size={18}
                                className={`transform transition-transform ${isOpen === "rent" ? " text-[#1D3A76] rotate-90" : " text-[#969595] rotate-0"
                                    }`}
                            />
                        </div>
                        {isOpen === "rent" && (
                            <div className="mt-2 flex flex-col gap-2 pl-6">
                                <Link href="/profile" className="text-gray-400 text-[14px] hover:text-[#1D3A76]">
                                    Apartment
                                </Link>
                                <Link href="/profile" className="text-gray-400 text-[14px] hover:text-[#1D3A76]">
                                    Independent Floor
                                </Link>
                                <Link href="/profile" className="text-gray-400 text-[14px] hover:text-[#1D3A76]">
                                    Villa
                                </Link>
                            </div>
                        )}
                        <div
                            className={`flex items-center cursor-pointer gap-2 h-7 pl-3 ${isOpen === "pg" ? " bg-[#E2EAED] text-[#1D3A76]" : " text-[#969595]"
                                }`}
                            onClick={() => toggleAccordion("pg")}
                        >
                            <p className="font-[200] text-[14px]">PG(0)</p>
                            <IconChevronRight
                                stroke={1.5}
                                size={18}
                                className={`transform transition-transform ${isOpen === "pg" ? " text-[#1D3A76] rotate-90" : " text-[#969595] rotate-0"
                                    }`}
                            />
                        </div>
                        {isOpen === "pg" && (
                            <div className="mt-2 flex flex-col gap-2 pl-6">
                                <Link href="/profile" className="text-gray-400 text-[14px] hover:text-[#1D3A76]">
                                    Single Room
                                </Link>
                                <Link href="/profile" className="text-gray-400 text-[14px] hover:text-[#1D3A76]">
                                    Shared Room
                                </Link>
                                <Link href="/profile" className="text-gray-400 text-[14px] hover:text-[#1D3A76]">
                                    Hostel
                                </Link>
                            </div>
                        )}


                    </div>

                </div>

                {/* 80% Width Div */}
                <div className="w-[80%]  flex flex-col space-y-4">
                    <div className=' grid grid-cols-6 ms:grid-cols-6 rounded-sm gap-6'>
                        <div className=' flex  flex-wrap col-span-4 bg-[#31539A] h-fit w-full p-4 gap-3'>
                            <input type='text' placeholder='Locality' className='px-4 text-[#FEFDF8] text-[12px] bg-transparent  h-7 border border-[#FEFDF8] rounded-sm cursor-pointer focus:outline-none' />
                            <div className="flex items-center gap-2 px-4 w-fit border border-[#FEFDF8] rounded-sm cursor-pointer">
                                <form className="w-fit mx-auto">
                                    <label className="flex items-center cursor-pointer">
                                        <select
                                            id="class"
                                            className="text-[#FEFDF8] text-[12px] bg-transparent outline-none h-7"
                                        >
                                            <option selected className="text-black ">
                                                Property type
                                            </option>
                                            <option className="text-black" value="first class">Property 1</option>
                                            <option className="text-black" value="second class">Property 2</option>
                                            <option className="text-black" value="third class">Property 3</option>
                                            <option className="text-black" value="fourth class">Property 5</option>
                                            <option className="text-black" value="fourth class">Property 6</option>
                                        </select>
                                    </label>
                                </form>
                            </div>
                            {/* Property Type Dropdown */}
                            <div className="flex items-center gap-2 px-4 w-fit border border-[#FEFDF8] rounded-sm cursor-pointer">
                                <form className="w-fit mx-auto">
                                    <label className="flex items-center cursor-pointer">
                                        <select
                                            id="propertyType"
                                            className="text-[#FEFDF8] text-[12px] outline-none h-7 bg-transparent"
                                        >
                                            <option selected className="text-[#FEFDF8]">
                                                Property Type
                                            </option>
                                            <option className="text-black" value="apartment">Apartment</option>
                                            <option className="text-black" value="villa">Villa</option>
                                            <option className="text-black" value="independent-floor">Independent Floor</option>
                                            <option className="text-black" value="land">Land</option>
                                            <option className="text-black" value="commercial">Commercial</option>
                                        </select>
                                    </label>
                                </form>
                            </div>
                            {/* Verification Status Dropdown */}
                            <div className="flex items-center gap-2 px-4 w-fit border border-[#FEFDF8] rounded-sm cursor-pointer">
                                <form className="w-fit mx-auto">
                                    <label className="flex items-center cursor-pointer">
                                        <select
                                            id="verificationStatus"
                                            className="text-[#FEFDF8] text-[12px] outline-none h-7 bg-transparent"
                                        >
                                            <option selected className="text-black">
                                                Verification Status
                                            </option>
                                            <option className="text-black" value="verified">Verified</option >
                                            <option className="text-black" value="unverified">Unverified</option  >
                                            <option className="text-black" value="pending">Pending</option>
                                        </select>
                                    </label>
                                </form>
                            </div>
                            {/* BHK Dropdown */}
                            <div className="flex items-center gap-2 px-4 w-fit border border-[#FEFDF8] rounded-sm cursor-pointer">
                                <form className="w-fit mx-auto">
                                    <label className="flex items-center cursor-pointer">
                                        <select
                                            id="bhk"
                                            className="text-[#FEFDF8] text-[12px]  outline-none h-7 bg-transparent"
                                        >
                                            <option selected className=" text-black">
                                                BHK Status
                                            </option>
                                            <option className="text-black" value="yes">Yes</option>
                                            <option className="text-black" value="no">No</option>
                                        </select>
                                    </label>
                                </form>
                            </div>
                            <button onClick={updateFilters} className=' flex items-center justify-center  rounded-sm  h-7 bg-[#E2EAED] text-[12px] text-[#37474F] px-4  '>
                                More Filters
                            </button>
                            {filters && (
                                <div className="mt-4 p-4 bg-gray-100 rounded-sm">
                                    <p>This is the filter content. Add your filters here.</p>
                                </div>
                            )}
                        </div>
                        <div className=' col-span-2 '>
                            <Getapp />
                        </div>

                    </div>
                    <p className=' flex items-center justify-start pl-3 h-9 bg-[#FEFDF8] text-[16px] text-[#1D3A76] font-[600] rounded-md'>
                        Show 10 out of 15 Properties
                    </p>
                    {listingdata.length > 0 ? (
                        listingdata.map((item, index) => (
                            <Listingcard
                                key={index}
                                id_number={item.id_number}
                                image={item.image}
                                land={item.land}
                                cost={item.cost}
                                area={item.area}
                                interested_tenants={item.interested_tenants}
                                added_date={item.added_date}
                                expiry_date={item.expiry_date}

                            />
                        ))
                    ) : (
                        <p>No data</p>
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
                </div>
            </div>
        </div >
    );
}

export default Listingswrapper;
