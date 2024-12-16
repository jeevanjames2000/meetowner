'use client '
import Image from 'next/image'
import React from 'react'
import housepackage from '@/public/assets/house_package.png'

function Housepackage() {
    return (
        <div className='flex flex-row bg-[#ffffff]  rounded-lg p-6'>
            <div className=" flex flex-col  w-[30%]">
                <p className="text[14px] text-[#1D3A76] font-[700]">
                    Boost your business with house packages
                </p>
                <Image src={housepackage} alt='logo' className='object-cover object-center' />
            </div>
            <div className="w-[70%] grid grid-cols-1 md:grid-cols-3 gap-2 mt-8 p-4  bg-[#F4EBD7] border-[1.5px] border-[#699BA0] rounded-[10px]">

                <div className="col-span-2 rounded-lg  bg-[#ffffff] " >

                    <table className="w-full    border-separate border-spacing-1 table-auto">
                        <tbody>
                            {/* Row 1 */}
                            <tr className="bg-[#f5f5f5]">
                                <th className="text-[#6d6c6c] text-[12px] font-medium  text-left pl-2 py-2"></th>
                                <td className="text-[#6d6c6c] text-[12px] font-semibold text-center py-2">Free</td>
                            </tr>

                            {/* Row 2 */}
                            <tr className="bg-[#f5f5f5]">
                                <th className="text-[#6d6c6c] text-[12px] font-medium  text-left pl-2 py-1">Assured Contacts</th>
                                <td className="text-[#6d6c6c] text-[12px] font-medium text-center">10</td>
                            </tr>

                            {/* Row 3 */}
                            <tr className="bg-[#f5f5f5]">
                                <th className="text-[#6d6c6c] text-[12px] font-medium  text-left pl-2 py-1">Enquiries</th>
                                <td className="text-[#6d6c6c] text-[12px] font-medium text-center">3</td>
                            </tr>

                            {/* Row 4 */}
                            <tr className="bg-[#f5f5f5]">
                                <th className="text-[#6d6c6c] text-[12px] font-medium  text-left pl-2 py-1">Visibility</th>
                                <td className="text-[#6d6c6c] text-[12px] font-medium text-center">Low</td>
                            </tr>

                            {/* Row 5 */}
                            <tr className="bg-[#f5f5f5]">
                                <th className="text-[#6d6c6c] text-[12px] font-medium pl-2 py-1 text-left">Listing Expiry</th>
                                <td className="text-[#6d6c6c] text-[12px] font-medium text-center">15 Days</td>
                            </tr>

                            {/* Row 6 */}
                            <tr className="bg-[#f5f5f5]">
                                <th className="text-[#6d6c6c] text-[12px] font-medium pl-2 py-1"></th>
                                <td className=' text-center'>
                                    <button
                                        className=" text-[#53C0AC] h-7 py-1 my-1 px-4 text-[12px] font-[700] rounded-md focus:outline-none "
                                    >
                                        Know more
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="col-span-1 border border-gray-300 rounded-lg  bg-white" >
                    <div className=" bg-[#699BA0] pb-3 text-[#ffffff]  text-[13px] font-semibold rounded-tr-lg rounded-tl-lg text-center py-2">
                        House Package
                    </div>
                    <table className="w-full border-separate border-spacing-y-1 table-auto  text-center px-1 pb-1">

                        <tbody>
                            <tr className="bg-[#f5f5f5]">

                                <td id="house-contacts" className="text-[#6d6c6c] bg-[#f5f5f5] text-[12px] font-medium pl-2 py-1">10</td>
                            </tr>
                            <tr className="bg-[#f5f5f5]">

                                <td className="text-[#6d6c6c] bg-[#f5f5f5] text-[12px] font-medium pl-2 py-1">Unlimited</td>
                            </tr>
                            <tr className="bg-[#f5f5f5]">

                                <td className="text-[#6d6c6c] bg-[#f5f5f5] text-[12px] font-medium pl-2 py-1">High</td>
                            </tr>
                            <tr className="bg-[#f5f5f5]">
                                <td className="text-[#6d6c6c] bg-[#f5f5f5] text-[12px] font-medium pl-2 py-1">60 Days</td>
                            </tr>
                            <tr className="bg-[#f5f5f5]">
                                <td>
                                    <button
                                        className="package-btn bg-[#53c0ac] text-[#ffffff]  font-[700] my-1 h-6 py-1 px-4 text-[10px] rounded-md focus:outline-none "
                                    >
                                        Try Now!
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    )
}

export default Housepackage