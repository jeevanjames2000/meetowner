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
import { Modal } from '@nayeshdaggula/tailify';

function Loginform() {
    const router = useRouter();
    const updateAuthDetails = useUserDetails((state) => state.updateAuthDetails);
    const [isLoadingEffect, setIsLoadingEffect] = useState(false);
    const [errorMessages, setErrorMessages] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const updateEmail = (e) => {
        setEmail(e.target.value);
        setEmailError('');
    }

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const updatePassword = (e) => {
        setPassword(e.target.value);
        setPasswordError('');
    }

    const [isModalOpen, setModalOpen] = useState(false);

    const handleLogin = (e) => {
        setIsLoadingEffect(true);
        e.preventDefault();
        if (email === '') {
            setIsLoadingEffect(false);
            setEmailError('Email is required');
            return false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            setEmailError('Invalid email address');
            setIsLoadingEffect(false);
            return false;
        }

        if (password === '') {
            setIsLoadingEffect(false);
            setPasswordError('Password is required');
            return false;
        }

        Authapi.post('/login', {
            email: email,
            password: password
        }).then((response) => {
            const data = response.data
            if (data.status === 'error') {
                let finalresponse = {
                    'message': data.message,
                    'server_res': data
                }
                setErrorMessages(finalresponse);
                setModalOpen(true);
                setIsLoadingEffect(false);
                return false;
            } else if (data.status === 'error_user_not_found') {
                let finalresponse = {
                    'message': data.message,
                    'server_res': data
                }
                setErrorMessages(finalresponse);
                setModalOpen(true);
                setIsLoadingEffect(false);
                return false;
            } else if (data.status === 'error_invalid_password') {
                let finalresponse = {
                    'message': data.message,
                    'server_res': data
                }
                setErrorMessages(finalresponse);
                setModalOpen(true);
                setIsLoadingEffect(false);
                return false;
            } else {
                toast.success(data.message, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                updateAuthDetails(data.user_details, data.accessToken);
                router.push('/dashboard');
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
            setModalOpen(true);
            setIsLoadingEffect(false);
            return false;
        })
    }

    return (
        <>
            <form onSubmit={handleLogin} className='space-y-4'>
                <div className="flex flex-col space-y-1">
                    <label className=" font-[500]  text-[16px]">Email*</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Enter email"
                        className="border rounded-sm h-9 pl-2 focus:outline focus:outline-black"
                        value={email}
                        onChange={updateEmail}
                    />
                    {emailError && <p className="text-red-500 text-[14px]">{emailError}</p>}
                </div>
                <div>
                    <label className="text-gray-700 font-[500]">Password*</label>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            placeholder="Enter password"
                            className="w-full border border-gray-300 rounded-sm h-9 pl-2 text-gray-700 focus:outline focus:outline-black "
                            value={password}
                            onChange={updatePassword}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-3 flex items-center font-thin "
                        >
                            {showPassword ? <IconEye size={18} color='#6B7280' /> : <IconEyeOff size={16} color='#6B7280' />}
                        </button>
                    </div>
                    {passwordError && <p className="text-red-500 text-[14px]">{passwordError}</p>}
                </div>
                <div className='flex flex-col space-y-4 pt-4'>
                    <div className=' flex flex-row justify-between'>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className=" h-3 w-3  mr-2 border  border-[#FBAF01]"
                            />
                            <p className=" text-[14px] font-[200]">Remember me</p>
                        </div>
                        <Link href="/forgotpassword" className=' text-[#FBAF01] text-[14px] font-[200] '>Forgot Password?</Link>
                    </div>
                    <div className=' space-y-2'>
                        <button onClick={handleLogin} className=' h-9 w-full font-medium border rounded-sm bg-[#FBAF01] text-[#ffffff]'>
                            Log In
                        </button>
                        <p className=' text-[14px] text-[#898989] text-center '>
                            Don't have an account? <Link href='/signup' className=' text-black   font-medium'>Sign up</Link>
                        </p>
                    </div>
                </div>
                <LoadingOverlay isLoading={isLoadingEffect} />
            </form>

            {isModalOpen &&
                <Modal
                    open={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    size="md"
                    zIndex={9999}
                >
                    <Errorpanel
                        errorMessages={errorMessages}
                    />
                    <div className='flex flex-row justify-end'>
                        <button
                            onClick={() => setModalOpen(false)}
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