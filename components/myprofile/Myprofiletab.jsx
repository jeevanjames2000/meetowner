'use client'
import { Modal } from '@nayeshdaggula/tailify';
import { IconEdit } from '@tabler/icons-react';
import React, { useState } from 'react'
import Editmodal from './Editmodal';
function Myprofiletab() {
    const [errorModalOpen, setErrorModalOpen] = useState(false);

    const openErrorModal = () => setErrorModalOpen(true);
    const closeErrorModal = () => setErrorModalOpen(false);
    return (
        <div className='flex flex-col md:flex-row pb-6 w-full col-span-12 sm:col-span-9 h-full bg-[#FFF] rounded-[8px] pt-5 px-4 space-y-[6px]'>
            <div className='flex flex-col space-y-3'>
                <p className='text-[#1D3A76] font-[600] text-[12px] md:text-[14px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                    Name :<span className='pl-1 text-[#252525]/70 font-[600]' >Alex Carey</span>
                </p>
                <p className='text-[#1D3A76] font-[600] text-[12px] md:text-[14px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                    Phone Number :<span className='pl-1 text-[#252525]/70 font-[600]' >9876543210</span>
                </p>
                <p className='text-[#1D3A76] font-[600] text-[12px] md:text-[14px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                    Email Address :<span className='pl-1 text-[#252525]/70 font-[600]'>alexharey@gmail.com</span>
                </p>
                <p className=' text-[#1D3A76] font-[600] text-[12px] md:text-[14px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                    Address :<span className='inline-block pl-1 text-[#252525]/70 font-[600]'>Madhapur,Hyderabad,Telangana</span>
                </p>
                <p className='text-[#1D3A76] font-[600] text-[12px] md:text-[14px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                    District :<span className='pl-1 text-[#252525]/70 font-[600]'>Hyderabad</span>
                </p>
                <p className='text-[#1D3A76] font-[600] text-[12px] md:text-[14px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                    State :<span className='pl-1 text-[#252525]/70 font-[600]'>Telangana</span>
                </p>
                {errorModalOpen && (
                    <Modal
                        open={errorModalOpen}
                        onClose={closeErrorModal}
                        size="md"
                        zIndex={9999}
                    >
                        <Editmodal
                            errorMessages={["Example error message 1", "Example error message 2"]}
                            close={closeErrorModal}
                        />
                    </Modal>
                )}
            </div>
            <button
                onClick={openErrorModal}
                className="text-[#ffffff] text-[12px] md:text-[14px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text[20px] font-[400] cursor-pointer h-fit flex ml-auto px-3 py-1 items-center justify-center bg-[#1D3A76] rounded-md gap-1">
                Update profile <IconEdit size={18} color='#ffffff' stroke={1.5} />
            </button>
        </div>
    )
}

export default Myprofiletab


