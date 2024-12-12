import Image from 'next/image';
import React from 'react';
import qr_code from '@/public/assets/qr_code.png';

function Getapp() {
    return (
        <div className="flex flex-col gap-6 bg-[#1D3A76] rounded-[10px] p-4">
            {/* Top Section */}
            <div className="grid grid-cols-4 gap-2">

                <div className="col-span-4 flex flex-col gap-1">
                    <p className="text-[12px] font-[500] text-[#ffffff]">
                        Get enquiry details & latest updates on the app
                    </p>
                </div>
                <div className=" flex col-span-4 w-full h-full gap-2 ">
                    <p className=" w-[70%] text-[12px] font-[300] text-[#ffffff]">
                        Scan the QR code or get the app link on your WhatsApp
                    </p>
                    <Image
                        src={qr_code}
                        alt="QR Code"
                        className="w-[25%]  h-full object-contain rounded-lg"
                    />
                </div>
            </div>
            {/* Bottom Section */}
            <div className="flex flex-row gap-2 w-full">
                <input
                    type="number"
                    placeholder="Mobile Number"
                    className="w-[70%] text-[12px] border rounded-sm h-7 pl-2 bg-[#1D3A76] text-white 
                    focus:outline focus:outline-[#ffffff] appearance-none 
                    [&::-webkit-inner-spin-button]:appearance-none 
                    [&::-webkit-outer-spin-button]:appearance-none"
                />
                <button
                    className="w-[30%] bg-[#53c0ac] text-white p-1 h-7 text-[12px] rounded-lg 
                    hover:bg-[#53c0ac]/70 focus:outline-none"
                >
                    Get App
                </button>
            </div>
        </div>
    );
}

export default Getapp;
