import Image from 'next/image'
import React from 'react'
import kyc_verification from '@/public/assets/kyc_verification.png';
import { IconChevronRight } from '@tabler/icons-react';

function Verifykyc() {
    return (
        <>
            <div className="bg-white p-4 rounded-[10px]">
                <div className="flex gap-2">
                    <div className="w-[30%] border-2 border-[#909090] rounded-[10px] py-3 px-1">
                        <Image src={kyc_verification} alt="Verify Identity" className="w-fit h-fit rounded-lg" />
                    </div>
                    <div className="w-[70%] space-y-1">
                        <p className="text-[12px] font-[600] text-[#6d6c6c]">Verify Your Identity</p>
                        <p className="text-[12px] font-[400] text-[#6d6c6c]">
                            Complete verification with Aadhar eKYC!
                        </p>
                    </div>
                </div>
                <button
                    className="flex items-center text-[#53C0AC] ml-auto h-7 px-4 text-[14px] font-[400] rounded-md bg-transparent hover:bg-[#e6f5f2] transition-all"
                >
                    Verify Now
                    <IconChevronRight className="ml-2 w-4 h-4 text-[#53C0AC]" />
                </button>
            </div>
        </>
    )
}

export default Verifykyc