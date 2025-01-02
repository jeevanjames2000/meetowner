import Image from 'next/image';
import React from 'react';
import qr_code from '@/public/assets/qr_code.png';

function Getapp() {
    return (
        <div className="flex flex-col bg-[#1D3A76] rounded-md px-3 pb-3 gap-2">
            {/* Top Section */}
            <div className="flex gap-3 pt-3">
                <div className="w-[83%] flex flex-col">
                    <p className="text-[10px] xs:text-[12px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text[20px] font-[600] text-[#ffffff]">
                        Get enquiry details & latest updates on the app
                    </p>
                </div>
                <Image
                    src={qr_code}
                    alt="QR Code"
                    className="w-[17%] h-[34px] object-contain"
                />
            </div>
            <p className="text-[8px] xs:text-[10px] 2xl:text-[14px] 3xl:text-[16px] 4xl:text[18px] font-[400] text-[#ffffff] py-1">
                Scan the QR code or get the app link on your WhatsApp
            </p>
            {/* Bottom Section */}
            <div className="flex gap-2 w-full">
                <input
                    type="number"
                    placeholder=" Enter your mobile number"
                    className="w-[70%] text-[8px] xs:text-[10px] 2xl:text-[14px] 3xl:text-[16px] 4xl:text[18px] border border-[#878787] rounded-[2px] h-6 2xl:h-7 3xl:h-8 4xl:h-9 pl-2 bg-[#1D3A76] text-[#FFFFFF] font-[600] 
                focus:outline focus:outline-[#ffffff] appearance-none 
                [&::-webkit-inner-spin-button]:appearance-none 
                [&::-webkit-outer-spin-button]:appearance-none"
                />
                <button
                    className="w-[30%] bg-[#53c0ac] text-[#FFFFFF] font-[600] p-1 h-6 2xl:h-7 3xl:h-8 4xl:h-9 text-[8px] xs:text-[10px] 2xl:text-[14px] 3xl:text-[16px] 4xl:text[18px] rounded-[2px] 
                hover:bg-[#53c0ac]/70 focus:outline-none"
                >
                    Get App
                </button>
            </div>
        </div>

    );
}

export default Getapp;
