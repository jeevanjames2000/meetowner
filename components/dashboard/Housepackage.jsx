import Image from 'next/image'
import React from 'react'
import housepackage from '@/public/assets/house_package.png'

function Housepackage() {
    return (
        <div className='flex flex-row bg-[#ffffff]  rounded-lg p-6'>
            <div className=" flex flex-col  w-[30%]">
                <p className="text-xl text-[#1D3A76] font-semibold   ">
                    Boost your business with house packages
                </p>
                <Image src={housepackage} alt='logo' className='object-cover object-center' />
            </div>
            <div className="w-[70%] grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 p-4  bg-[#F4EBD7] border rounded-[10px] border-[#699BA0]">

                <div className="col-span-1 rounded-lg  bg-[#ffffff] items-center justify-center" >
                    <div className="grid grid-cols-2 gap-y-1 gap-x-1 w-full">
                        {/* Row 1 */}
                        <div className="text-[#6d6c6c] bg-[#f5f5f5] text-sm font-medium pl-2 py-2"></div>
                        <div className="text-[16px] font-semibold bg-[#f5f5f5] text-center py-2">Free</div>

                        {/* Row 2 */}
                        <div  className="text-[#6d6c6c] bg-[#f5f5f5] text-[12px] font-medium pl-2 py-1">Assured Contacts</div>
                        <div className="text-[#6d6c6c] bg-[#f5f5f5] text-sm font-medium  text-center">10</div>

                        {/* Row 3 */}
                        <div className="text-[#6d6c6c] bg-[#f5f5f5] text-sm font-medium pl-2 py-1">Enquiries</div>
                        <div className="text-[#6d6c6c] bg-[#f5f5f5] text-sm font-medium  text-center">3</div>

                        {/* Row 4 */}
                        <div className="text-[#6d6c6c] bg-[#f5f5f5] text-sm font-medium pl-2 py-1">Visibility</div>
                        <div className="text-[#6d6c6c] bg-[#f5f5f5] text-sm font-medium  text-center">Low</div>

                        {/* Row 5 */}
                        <div className="text-[#6d6c6c] bg-[#f5f5f5] text-sm font-medium pl-2 py-1">Listing Expiry</div>
                        <div className="text-[#6d6c6c] bg-[#f5f5f5] text-sm font-medium  text-center">15 Days</div>

                        {/* Row 6 */}
                        <div></div>
                        <div>
                            <div
                                className="text-[#53C0AC] font-[600] text-sm cursor-pointer mt-2"
                             
                            >
                                Know More
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-span-1 border border-gray-300 rounded-lg  bg-white" >
                    <table className="w-full text-center">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="housepackage-table text-lg font-semibold text-gray-800">
                                        House Package
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td id="house-contacts" className="text-[#6d6c6c] bg-[#f5f5f5] text-sm font-medium pl-2 py-1">10</td>
                            </tr>
                            <tr>
                                <td className="text-[#6d6c6c] bg-[#f5f5f5] text-sm font-medium pl-2 py-1">Unlimited</td>
                            </tr>
                            <tr>
                                <td className="text-[#6d6c6c] bg-[#f5f5f5] text-sm font-medium pl-2 py-1">High</td>
                            </tr>
                            <tr>
                                <td className="text-[#6d6c6c] bg-[#f5f5f5] text-sm font-medium pl-2 py-1">60 Days</td>
                            </tr>
                            <tr>
                                <td>
                                    <button
                                        className="package-btn bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none mt-4"
                                        onclick="redirectToPackages()"
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