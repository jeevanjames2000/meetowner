'use client'
import { Modal } from '@nayeshdaggula/tailify';
import { IconEdit } from '@tabler/icons-react';
import React, { useState } from 'react'
import Editmodal from './Editmodal';
function Myprofilemodal() {
    const [errorModalOpen, setErrorModalOpen] = useState(false);

    const openErrorModal = () => setErrorModalOpen(true);
    const closeErrorModal = () => setErrorModalOpen(false);
    return (
        <>
            <button
                onClick={openErrorModal}
                className="text-[#ffffff] text-[12px] md:text-[14px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text[20px] font-[400] cursor-pointer h-fit flex ml-auto px-3 py-1 items-center justify-center bg-[#1D3A76] rounded-md gap-1">
                Update profile <IconEdit size={18} color='#ffffff' stroke={1.5} />
            </button>
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
        </>
    )
}

export default Myprofilemodal


