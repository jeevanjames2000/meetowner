'use client'
import { Modal } from '@nayeshdaggula/tailify';
import { IconEdit } from '@tabler/icons-react';
import React, { useState } from 'react'
import Editmodal from '../Editmodal';
function Myprofiletab() {
    const [errorModalOpen, setErrorModalOpen] = useState(false);

    const openErrorModal = () => setErrorModalOpen(true);
    const closeErrorModal = () => setErrorModalOpen(false);
    return (
        <div className='flex flex-row h-fit pb-6 px-3  rounded-[8px]'>
            <div className='flex flex-col space-y-3'>
                <p className='text-[#1D3A76] font-[600] text-[12px] md:text-[14px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                    Name :<span className='pl-2 text-[#252525]/70 font-[600]' >Alex Carey</span>
                </p>
                <p className='text-[#1D3A76] font-[600] text-[12px] md:text-[14px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                    Phone Number :<span className='pl-2 text-[#252525]/70 font-[600]' >9876543210</span>
                </p>
                <p className='text-[#1D3A76] font-[600] text-[12px] md:text-[14px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                    Email Address :<span className='pl-2 text-[#252525]/70 font-[600]'>alexharey@gmail.com</span>
                </p>
                <p className='text-[#1D3A76] font-[600] text-[12px] md:text-[14px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                    Address :<span className='pl-2 text-[#252525]/70 font-[600]'>Madhapur,Hyderabad,Telangana</span>
                </p>
                <p className='text-[#1D3A76] font-[600] text-[12px] md:text-[14px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                    District :<span className='pl-2 text-[#252525]/70 font-[600]'>Hyderabad</span>
                </p>
                <p className='text-[#1D3A76] font-[600] text-[12px] md:text-[14px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                    State :<span className='pl-2 text-[#252525]/70 font-[600]'>Telangana</span>
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
            <div onClick={openErrorModal} className='cursor-pointer h-fit flex ml-auto px-3 py-1 items-center justify-center bg-[#1D3A76] rounded-md gap-1'>
                <button
                    className="text-[#ffffff] text-[14px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text[20px] font-[400] rounded-[6px]">
                    Update profile
                </button>
                <IconEdit size={18} color='#ffffff' stroke={1.5}/>
            </div>
        </div>
    )
}

export default Myprofiletab


