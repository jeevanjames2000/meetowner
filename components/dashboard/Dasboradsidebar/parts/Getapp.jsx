import Image from 'next/image'
import React from 'react'
import qr_code from '@/public/assets/qr_code.png'
function Getapp() {
    return (
        <div className=" flex flex-col gap-6 bg-[#1D3A76] rounded-[10px] p-6">
            <div className=" grid grid-cols-3 space-x-2">
                {/* Left Section */}
                <div className="  col-span-2 flex flex-col gap-3 ">
                    <p className="text-[16px] font-[500] text-[#ffffff]">Get enquiry details  latest updates on the app</p>
                    <p className="text-[12px] font-[300] text-[#ffffff]">Scan the QR code or get app link on your Whatsapp</p>
                </div>

                {/* Right Section */}

                <div className=" col-span-1 w-full h-full ">
                    <Image
                        src={qr_code}
                        alt={"qr_code"}
                        className="w-[120px] h-fit  rounded-lg"
                    />
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <input
                    type="number"
                    placeholder="Mobile Number"
                    className="border rounded-sm h-9 pl-2 bg-[#1D3A76] text-white focus:outline focus:outline-[#ffffff] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none "
                />
                <button
                    className=" bg-[#53c0ac] text-white py-1 px-3 rounded-lg text-sm hover:bg-[#53c0ac]/70 focus:outline-none "
                >
                    Get App
                </button>
            </div>
        </div>
    )
}

export default Getapp