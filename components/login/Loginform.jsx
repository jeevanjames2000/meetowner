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
import axios from 'axios';

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
    const closeErrorModal = () => {
        setErrorModalOpen(false);
    }

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
                setTimeout(() => {
                    setIsLoadingEffect(false);
                }, 3000);
                setUserDetails(data?.user_details);
                setAccessToken(data?.accessToken);
                setOtpNumber(data?.user_details?.otpNumber);
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


    const sendSMS = async (req, res) => {
        const user_id = 'meetowner2023'; // Your Username
        const pwd = 'Meet@123'; // Your Password
        const sender_id = 'METOWR'; // 6-char Sender ID, e.g., HDFCBK
        const mobile_num = '7093608698'; // Recipient's mobile number
        const message = 'Dear customer, 123456 is the OTP for Login it will expire in 2 minutes. Don\'t share to anyone -MEET OWNER';
        const peid = '1101542890000073814'; // Principal Entity ID
        const tpid = '1107169859354543707'; // Template ID
        // Construct the URL with all parameters
        const url = `http://tra.bulksmshyderabad.co.in/websms/sendsms.aspx?userid=${user_id}&password=${pwd}&sender=${sender_id}&mobileno=${encodeURIComponent(mobile_num)}&msg=${encodeURIComponent(message)}&peid=${peid}&tpid=${tpid}`;
        try {
            // Make the API request
            const response = await axios.get(url);
            res.status(200).send({ success: true, data: response.data });
        } catch (error) {
            console.error('Error:', error.message);
            res.status(500).send({ success: false, error: error.message });
        }
    };

    return (
        <>
            <div className="flex flex-col w-[370px] xl:w-fit h-fit gap-4">
                <div className="flex flex-col rounded-[20px] ">
                    <form onSubmit={handleLoginform}>
                        <div className=' flex flex-col bg-white h-fit py-4 px-3 gap-2  md:gap-2 '>
                            <p className='text-[12px] md:text-[14px] font-semibold'>Mobile Number</p>
                            <div className='flex flex-row items-center'>
                                <div className='w-[20%]'>
                                    <Textinput
                                        value='+91'
                                        placeholder="+91"
                                        inputClassName='text-[12px] md:text-[14px] border-0 border-b border-[#D9D9D9] rounded-none focus:outline-none focus:ring-0 focus:border-b-[#D9D9D9]'
                                        inputProps={{ readOnly: true }}
                                    />
                                </div>
                                <div className='w-[80%]'>
                                    <Textinput
                                        type='number'
                                        placeholder="Enter Mobile Number"
                                        inputClassName='text-[12px] md:text-[14px] border-0 border-b border-[#D9D9D9] rounded-none focus:outline-none focus:ring-0 focus:border-b-[#D9D9D9]'
                                        value={mobile}
                                        onChange={updateMobile}
                                        error={mobileError}
                                    />
                                </div>
                            </div>
                            <button
                                onClick={handleLoginform}
                                className="text-[12px] md:text-[14px] rounded-md px-4 py-2  bg-[#ffd119] w-full">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
                <div className='flex flex-row items-center justify-center bg-[#1D3A76] rounded-full'>
                    <p className='text-[12px] md:text-[14px] text-[#ffffff]'>Don't have an Account?</p>
                    <Link href='/signup'
                        className=" text-[12px] md:text-[14px] px-1 py-1 text-[#FBAF01] ">
                        Signup
                    </Link>
                </div>
                {/* <div className='cursor-pointer' onClick={sendSMS}>
                    <p className='text-sm text-white'>Send SMS</p>
                </div> */}
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
                    onClose={closeErrorModal}
                    size="md"
                    zIndex={9999}
                >
                    <Errorpanel
                        errorMessages={errorMessages}
                        close={closeErrorModal}
                    />
                </Modal>
            }
        </>
    )
}
export default Loginform