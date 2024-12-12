'use client'
import React, { useState } from 'react'
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import Link from 'next/link';
import Errorpanel from '../shared/Errorpanel';
import LoadingOverlay from '../shared/LoadingOverlay';
import { toast } from 'react-toastify';
import Authapi from '../api/Authapi';
import { useRouter } from 'next/navigation';
import { useUserDetails } from '../zustand/useUserDetails';
import { Modal, Textinput } from '@nayeshdaggula/tailify';
import OtpModal from '../signup/OtpModal';

function Loginform() {
    const router = useRouter();
    const updateAuthDetails = useUserDetails((state) => state.updateAuthDetails);
    const [isLoadingEffect, setIsLoadingEffect] = useState(false);
    const [errorMessages, setErrorMessages] = useState('');

    const [mobile, setMobile] = useState('')
    const [mobileError, setMobileError] = useState('')
    const updateMobile = (e) => {
        let value = e.target.value;
        //allow only numbers
        if (isNaN(value)) {
            return false;
        }

        //allow only 10 digits
        if (value.length > 10) {
            return false;
        }

        setMobile(value);
        setMobileError('')
    }


    const [otpModal, setOtpModal] = useState(false);
    const openOtpModal = () => {
        setOtpModal(true);
    }
    const closeOtpModal = () => {
        setOtpModal(false);
    }

    const [otpNumber, setOtpNumber] = useState('');
    const updateOtpNumber = (value) => {
        setOtpNumber(value);
    }
    const [userDetails, setUserDetails] = useState({});
    const [accessToken, setAccessToken] = useState('');

    const [errorModalOpen, setErrorModalOpen] = useState(false);

    const handleLoginform = (e) => {
        setIsLoadingEffect(true);
        e.preventDefault();
        if (mobile === '') {
            setMobileError('Mobile number is required');
            setIsLoadingEffect(false);
            return false;
        } else if (mobile.length < 10) {
            setMobileError('Mobile number should be 10 digits');
            setIsLoadingEffect(false);
            return false;
        }

        Authapi.post('/login', {
            mobile: mobile
        }).then((response) => {
            const data = response.data
            if (data.status === 'error') {
                let finalresponse = {
                    'message': data.message,
                }
                setErrorMessages(finalresponse);
                setErrorModalOpen(true);
                setIsLoadingEffect(false);
                return false;
            } else if (data.status === 'error_user_not_found') {
                let finalresponse = {
                    'message': data.message,
                }
                setErrorMessages(finalresponse);
                setErrorModalOpen(true);
                setIsLoadingEffect(false);
                return false;
            } else {
                // toast.success(data.message, {
                //     position: 'top-right',
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                // });
                // updateAuthDetails(data.user_details, data.accessToken);
                // router.push('/dashboard');
                // setTimeout(() => {
                //     setIsLoadingEffect(false);
                // }, 3000);
                // return false;
                openOtpModal()
                setUserDetails(data?.user_details);
                setAccessToken(data?.accessToken);
                setOtpNumber(data?.user_details?.otpNumber);
                setTimeout(() => {
                    setIsLoadingEffect(false);
                }, 3000);
                return false;
            }
        }).catch((error) => {
            console.log(error)
            let finalresponse;
            if (error.response !== undefined) {
                finalresponse = {
                    'message': error.message,
                    'server_res': error.response.data
                };
            } else {
                finalresponse = {
                    'message': error.message,
                    'server_res': null
                };
            }
            setErrorMessages(finalresponse);
            setErrorModalOpen(true);
            setIsLoadingEffect(false);
            return false;
        })
    }

    const handleVerifyOtp = () => {
        if (otpNumber === '') {
            alert('Please enter OTP number')
            return false;
        }
        closeOtpModal()
        updateAuthDetails(userDetails, accessToken);
        toast.success('otp Verified Successfully', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        router.push('/dashboard');
    }

    return (
        <>
            <div className="flex flex-col w-[370px] h-fit gap-4">
                <div className="flex flex-col rounded-[20px] ">
                    <form onSubmit={handleLoginform}>
                        <div className=' flex flex-col bg-white h-fit py-4 px-3 gap-2'>
                            <p className='text-sm font-semibold'>Mobile Number</p>
                            <div className='flex flex-row items-center w-full  '>
                                <div className='w-[20%]'>
                                    <Textinput
                                        value='+91'
                                        placeholder="+91"
                                        inputClassName='text-sm border-0 border-b border-[#D9D9D9] rounded-none focus:outline-none'
                                        inputProps={{ readOnly: true }}
                                    />
                                </div>
                                <div className='w-[80%]'>
                                    <Textinput
                                        type='number'
                                        placeholder="Enter Mobile Number"
                                        inputClassName='text-sm border-0 border-b border-[#D9D9D9] rounded-none focus:outline-none'
                                        value={mobile}
                                        onChange={updateMobile}
                                        error={mobileError}
                                    />
                                </div>
                            </div>
                            <button
                                onClick={handleLoginform}
                                className=" text-sm rounded-md px-4 py-2  bg-[#ffd119] w-full">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
                <div className='flex flex-row items-center justify-center bg-[#1D3A76] rounded-full'>
                    <p className='text-sm text-[#ffffff]'>Don't have an Account?</p>
                    <Link href='/signup'
                        className=" text-sm px-1 py-1 text-[#FBAF01] ">
                        Signup
                    </Link>
                </div>
            </div>
            <LoadingOverlay isLoading={isLoadingEffect} />
            {
                otpModal &&
                <Modal
                    open={otpModal}
                    onClose={closeOtpModal}
                    size="sm"
                    zIndex={9999}
                    withCloseButton={false}
                >
                    <OtpModal
                        otpNumber={otpNumber}
                        updateOtpNumber={updateOtpNumber}
                        handleVerifyOtp={handleVerifyOtp}
                    />
                </Modal>
            }
            {errorModalOpen &&
                <Modal
                    open={errorModalOpen}
                    onClose={() => setErrorModalOpen(false)}
                    size="md"
                    zIndex={9999}
                >
                    <Errorpanel
                        errorMessages={errorMessages}
                    />
                    <div className='flex flex-row justify-end'>
                        <button
                            onClick={() => setErrorModalOpen(false)}
                            className="mt-2 mx-4 px-4 py-2 text-[12px] bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            }
        </>
    )
}
export default Loginform