'use client';
import { Textinput } from '@nayeshdaggula/tailify';
import React, { useState } from 'react'
import Authapi from '../api/Authapi';
import { toast } from 'react-toastify'
import LoadingOverlay from '../shared/LoadingOverlay';
import Errorpanel from '../shared/Errorpanel';
import { useUserDetails } from '../zustand/useUserDetails';
import { useRouter } from 'next/navigation';
import { Modal } from '@nayeshdaggula/tailify';
import OtpModal from './OtpModal';
import Link from 'next/link';
 
function SignupForm({ usertypedata }) {
    const router = useRouter();
    const updateAuthDetails = useUserDetails(state => state.updateAuthDetails);
    const [userType, setUserType] = useState("Builder");
    const [isLoadingEffect, setIsLoadingEffect] = useState(false);
    const [errorMessages, setErrorMessages] = useState('');
 
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const updateName = (e) => {
        setName(e.target.value);
        setNameError('')
    }
 
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
    const handleSignupform = (e) => {
        setIsLoadingEffect(true);
        e.preventDefault();
        if (name === '') {
            setIsLoadingEffect(false);
            setNameError('Name is required');
            return false;
        }
        if (mobile === '') {
            setIsLoadingEffect(false);
            setMobileError('Mobile number is required');
            return false;
        }
        if (mobile.length < 10) {
            setIsLoadingEffect(false);
            setMobileError('Mobile number should be 10 digits');
            return false;
        }
 
        Authapi.post('register', {
            name: name,
            mobile: mobile,
            userType: userType
        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                let data = response.data;
                if (data.status === 'error') {
                    console.log('error', data.message)
                    let finalresponse = {
                        'message': data.message,
                        'server_res': data
                    }
                    setErrorMessages(finalresponse);
                    setErrorModalOpen(true);
                    setIsLoadingEffect(false);
                    return false;
                } else if (data.status === 'error_user_exists') {
                    let finalresponse = {
                        'message': 'User already exists, Please login to Access',
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
                    openOtpModal()
                    setUserDetails(data?.user_details);
                    setAccessToken(data?.accessToken);
                    setOtpNumber(data?.user_details?.otpNumber);
                    // updateAuthDetails(data.user_details, data.accessToken);
                    // router.push('/dashboard');
                    setTimeout(() => {
                        setIsLoadingEffect(false);
                    }, 3000);
                    return false;
                }
            })
            .catch((error) => {
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
            <div className="signupform flex flex-col w-[370px] h-fit gap-4">
                <div className="flex flex-col rounded-[20px] ">
                    <div className="flex">
                        {usertypedata.map((type, index) => (
                            <div
                                key={type.value}
                                onClick={() => setUserType(type.label)}
                                className={`cursor-pointer custom-shadow w-fit ${index !== 0 ? "ml-[-14px]" : ""}
          flex items-center justify-center text-sm text-[#ffffff] py-2 px-6 rounded-tr-[20px]
          ${userType === type.label ? 'bg-[#FBAF01] text-[#244385]' : 'bg-[#31539A]'}
          ${index === usertypedata.length - 1 ? "w-[100%] justify-end p-4" : ""}`}
                                style={{ zIndex: 50 - index * 10 }}
                            >
                                {type.label}
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSignupform}>
                        <div className='flex flex-col bg-white h-fit py-4 px-3 gap-2'>
                            <Textinput
                                value={name}
                                onChange={updateName}
                                error={nameError}
                                placeholder="Name"
                                inputClassName='text-sm border-0 border-b border-[#D9D9D9] rounded-none focus:outline-none'
                            />
                            <div className='flex flex-row items-center w-full'>
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
                                        placeholder="xxxxxxxxxx"
                                        inputClassName='text-sm border-0 border-b border-[#D9D9D9] rounded-none focus:outline-none'
                                        value={mobile}
                                        onChange={updateMobile}
                                        error={mobileError}
                                    />
                                </div>
                            </div>
                            <button
                                onClick={handleSignupform}
                                className=" text-sm rounded-md px-4 py-2  bg-[#ffd119] w-full">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
                <div className='flex flex-row items-center justify-center bg-[#1D3A76] rounded-full'>
                    <p className='text-sm text-[#ffffff]'>Existing user?</p>
                    <Link href="/"
                        className=" text-sm px-1 py-1 text-[#FBAF01] ">
                        Login
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
            {
                errorModalOpen &&
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
    );
}
 
export default SignupForm;