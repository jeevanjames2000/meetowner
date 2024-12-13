'use client';
import { Textinput } from '@nayeshdaggula/tailify';
import React, { useEffect, useState } from 'react'
import Authapi from '../api/Authapi';
import { toast } from 'react-toastify'
import LoadingOverlay from '../shared/LoadingOverlay';
import Errorpanel from '../shared/Errorpanel';
import Userapi from '../api/Userapi';
import { useUserDetails } from '../zustand/useUserDetails';
import { useRouter } from 'next/navigation';
import { Modal } from '@nayeshdaggula/tailify';
import OtpModal from './OtpModal';
import Link from 'next/link';

function SignupForm() {
    const router = useRouter();
    const updateAuthDetails = useUserDetails(state => state.updateAuthDetails);
    const [userType, setUserType] = useState("Builder");

    const [userTypes, setUserTypes] = useState([]);
    const [isLoadingEffect, setIsLoadingEffect] = useState(false);
    const [errorMessages, setErrorMessages] = useState('');
    const [countryCode, setCountryCode] = useState('+91');
    const getUserTypes = () => {
        Userapi.get('usertypes')
            .then((response) => {
                let data = response.data;
                if (data.status === 'error') {
                    console.log('error', data.message)
                    let finalresponse = {
                        'message': data.message,
                        'server_res': data
                    }
                    setErrorMessages(finalresponse);
                    // setIsLoadingEffect(false);
                    return false;
                } else {
                    setUserTypes(data?.usertypes || []);
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
                // setIsLoadingEffect(false);
                return false;
            })
    }
    const filteredUserTypes = userTypes.filter(
        (type) => type.label !== "admin" && type.label !== "user"
    );

    useEffect(() => {
        getUserTypes();
    }, []);

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
                        <div
                            onClick={() => setUserType("Builder")}
                            className={`cursor-pointer custom-shadow w-fit z-50 flex items-center justify-center text-[12px] md:text-sm text-[#ffffff] py-1 md:py-3 px-6 rounded-tr-[20px] ${userType === "Builder" ? 'bg-[#FBAF01] text-[#244385]' : 'bg-[#31539A]'
                                }`}
                        >
                            Builder
                        </div>
                        <div
                            onClick={() => setUserType("Agent")}
                            className={`cursor-pointer custom-shadow w-fit z-40 ml-[-14px] flex items-center justify-center text-[12px] md:text-sm text-[#ffffff] py-1 md:py-3 px-6 rounded-tr-[20px] ${userType === "Agent" ? 'bg-[#FBAF01] text-[#244385]' : 'bg-[#31539A]'
                                }`}
                        >
                            Agent
                        </div>
                        <div
                            onClick={() => setUserType("Owner")}
                            className={`cursor-pointer custom-shadow w-fit z-[30] ml-[-14px] flex items-center justify-center text-[12px] md:text-sm text-[#ffffff] py-1 md:py-3 px-6 rounded-tr-[20px] ${userType === "Owner" ? 'bg-[#FBAF01] text-[#244385]' : 'bg-[#31539A]'
                                }`}
                        >
                            Owner
                        </div>
                        <div
                            onClick={() => setUserType("Channel Partner")}
                            className={`cursor-pointer custom-shadow w-[100%] lg:w-[120%] ml-[-14px] flex items-center justify-center text-[12px] md:text-sm text-[#ffffff] py-1 md:py-3 pl-6 rounded-tr-[20px] ${userType === "Channel Partner" ? 'bg-[#FBAF01] text-[#244385]' : 'bg-[#31539A]'
                                }`}
                        >
                            Channel Partner
                        </div>
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




// 'use client'
// import Link from 'next/link'
// import React, { useEffect } from 'react'
// import { useState } from 'react';
// import { IconEye, IconEyeOff } from '@tabler/icons-react';
// import Authapi from '../api/Authapi';
// import { toast } from 'react-toastify'
// import LoadingOverlay from '../shared/LoadingOverlay';
// import Errorpanel from '../shared/Errorpanel';
// import Userapi from '../api/Userapi';
// import { useUserDetails } from '../zustand/useUserDetails';
// import { useRouter } from 'next/navigation';
// import { Modal } from '@nayeshdaggula/tailify';

// function Signupform() {
//     const router = useRouter();
//     const updateAuthDetails = useUserDetails(state => state.updateAuthDetails);
//     const [isLoadingEffect, setIsLoadingEffect] = useState(false);
//     const [errorMessages, setErrorMessages] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [hidePassword, setHidePassword] = useState(false);

//     const [userType, setUserType] = useState(3);
//     const updateUserType = (e) => {
//         setUserType(parseInt(e.target.value));
//     };
//     const [email, setEmail] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const updateEmail = (e) => {
//         setEmail(e.target.value);
//         setEmailError('');
//     };
//     const [password, setPassword] = useState('');
//     const [passwordError, setPasswordError] = useState('');
//     const updatePassword = (e) => {
//         setPassword(e.target.value);
//         setPasswordError('');
//     };
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [confirmPasswordError, setConfirmPasswordError] = useState('');
//     const updateConfirmPassword = (e) => {
//         setConfirmPassword(e.target.value);
//         setConfirmPasswordError('');
//     };
//     const [isModalOpen, setModalOpen] = useState(false);
//     const handleSignupform = (e) => {
//         setIsLoadingEffect(true);
//         e.preventDefault();
//         if (email === '') {
//             setIsLoadingEffect(false);
//             setEmailError('Email is required');
//             return false;
//         }
//         const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//         if (!emailPattern.test(email)) {
//             setEmailError('Invalid email address');
//             setIsLoadingEffect(false);
//             return false;
//         }

//         if (password === '') {
//             setIsLoadingEffect(false);
//             setPasswordError('Password is required');
//             return false;
//         }
//         if (confirmPassword === '') {
//             setIsLoadingEffect(false);
//             setConfirmPasswordError('Confirm password is required');
//             return false;
//         }
//         if (password !== confirmPassword) {
//             setIsLoadingEffect(false);
//             setConfirmPasswordError('Password does not match');
//             return false;
//         }

//         Authapi.post('register', {
//             email: email,
//             password: password,
//             userType: userType
//         }, {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             }
//         })
//             .then((response) => {
//                 let data = response.data;
//                 if (data.status === 'error') {
//                     console.log('error', data.message)
//                     let finalresponse = {
//                         'message': data.message,
//                         'server_res': data
//                     }
//                     setErrorMessages(finalresponse);
//                     setModalOpen(true);
//                     setIsLoadingEffect(false);
//                     return false;
//                 } else if (data.status === 'error_user_exists') {
//                     let finalresponse = {
//                         'message': data.message,
//                         'server_res': data
//                     }
//                     setErrorMessages(finalresponse);
//                     setModalOpen(true);
//                     setIsLoadingEffect(false);
//                     return false;
//                 } else {
//                     toast.success(data.message, {
//                         position: 'top-right',
//                         autoClose: 5000,
//                         hideProgressBar: false,
//                         closeOnClick: true,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                     });
//                     updateAuthDetails(data.user_details, data.accessToken);
//                     router.push('/dashboard');
//                     setTimeout(() => {
//                         setIsLoadingEffect(false);
//                     }, 3000);
//                     return false;
//                 }
//             })
//             .catch((error) => {
//                 console.log(error)
//                 let finalresponse;
//                 if (error.response !== undefined) {
//                     finalresponse = {
//                         'message': error.message,
//                         'server_res': error.response.data
//                     };
//                 } else {
//                     finalresponse = {
//                         'message': error.message,
//                         'server_res': null
//                     };
//                 }
//                 setErrorMessages(finalresponse);
//                 setModalOpen(true);
//                 setIsLoadingEffect(false);
//                 return false;
//             })
//     }

//     const [userTypes, setUserTypes] = useState([]);
//     const getUserTypes = () => {
//         Userapi.get('usertypes')
//             .then((response) => {
//                 let data = response.data;
//                 if (data.status === 'error') {
//                     console.log('error', data.message)
//                     let finalresponse = {
//                         'message': data.message,
//                         'server_res': data
//                     }
//                     setErrorMessages(finalresponse);
//                     // setIsLoadingEffect(false);
//                     return false;
//                 } else {
//                     setUserTypes(data?.usertypes || []);
//                     return false;
//                 }
//             })
//             .catch((error) => {
//                 console.log(error)
//                 let finalresponse;
//                 if (error.response !== undefined) {
//                     finalresponse = {
//                         'message': error.message,
//                         'server_res': error.response.data
//                     };
//                 } else {
//                     finalresponse = {
//                         'message': error.message,
//                         'server_res': null
//                     };
//                 }
//                 setErrorMessages(finalresponse);
//                 // setIsLoadingEffect(false);
//                 return false;
//             })
//     }

//     const filteredUserTypes = userTypes.filter(
//         (type) => type.label !== "admin" && type.label !== "user"
//     );

//     useEffect(() => {
//         getUserTypes();
//     }, []);

//     return (
//         <>
//             <form onSubmit={handleSignupform} className='relative space-y-4'>
//                 <ul className="flex flex-col sm:flex-row ">
//                     {filteredUserTypes.map((type) => {
//                         return (
//                             <li
//                                 key={type.value}
//                                 className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm text-[#ffffff] font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg"
//                             >
//                                 <div className="relative flex items-start w-fitfull">
//                                     <div className="flex items-center h-5">
//                                         <input
//                                             id={`radio-${type.value}`}
//                                             name="usertype"
//                                             type="radio"
//                                             className="custom-radio border-gray-200 rounded-full checked:bg-yellow-fit500 checked:border-yellow-fit500"
//                                             value={type.value}
//                                             checked={userType === type.value}
//                                             onChange={updateUserType}
//                                         />
//                                     </div>
//                                     <label
//                                         htmlFor={`radio-${type.value}`}
//                                         className="ms-3 block w-fitfull text-sm text-[#ffffff] text-gray-600 cursor-pointer"
//                                     >
//                                         {type.label}
//                                     </label>
//                                 </div>
//                             </li>
//                         )
//                     }
//                     )}
//                 </ul>
//                 <div className="flex flex-col space-y-1">
//                     <label className=" font-[500]  text-[14px]">Email*</label>
//                     <input
//                         type="text"
//                         id="email"
//                         placeholder="Enter email"
//                         className=" border rounded-sm h-9 pl-2 focus:outline focus:outline-black"
//                         value={email}
//                         onChange={updateEmail}
//                         autoComplete='off'
//                     />
//                     {emailError && <p className="text-red-500 text-[12px]">{emailError}</p>}
//                 </div>
//                 <div>
//                     <label className="font-[500]  text-[14px]">Password*</label>
//                     <div className="relative">
//                         <input
//                             type={showPassword ? 'text' : 'password'}
//                             id="password"
//                             placeholder=" Enter password"
//                             className="w-fitfull border border-gray-300 rounded-sm h-9 pl-2 text-gray-700 focus:outline focus:outline-black "
//                             value={password}
//                             onChange={updatePassword}
//                             autoComplete='off'
//                         />
//                         <button
//                             type="button"
//                             onClick={() => setShowPassword(!showPassword)}
//                             className="absolute inset-y-0 right-3 flex items-center font-thin "
//                         >
//                             {showPassword ? <IconEye color='#6B7280' size={18} /> : <IconEyeOff color='#6B7280' size={16} />}
//                         </button>
//                     </div>
//                     {passwordError && <p className="text-red-500 text-[12px]">{passwordError}</p>}
//                 </div>
//                 <div>
//                     <label className=" font-[500]  text-[14px]">Confirm Password*</label>
//                     <div className="relative">
//                         <input
//                             type={hidePassword ? 'text' : 'password'}
//                             id="conformpassword"
//                             placeholder=" Enter password"
//                             className="w-fitfull border border-gray-300 rounded-sm h-9 pl-2 text-gray-700 focus:outline focus:outline-black "
//                             value={confirmPassword}
//                             onChange={updateConfirmPassword}
//                             autoComplete='off'
//                         />
//                         <button
//                             type="button"
//                             onClick={() => setHidePassword(!hidePassword)}
//                             className="absolute inset-y-0 right-3 flex items-center font-thin "
//                         >
//                             {hidePassword ? <IconEye size={18} color='#6B7280' /> : <IconEyeOff size={16} color='#6B7280' />}
//                         </button>
//                     </div>
//                     {confirmPasswordError && <p className="text-red-500 text-[12px]">{confirmPasswordError}</p>}
//                 </div>
//                 <div className='flex flex-col space-y-2  pt-1'>
//                     <button onClick={handleSignupform} className=' h-9 w-fitfull font-medium border rounded-md bg-[#FBAF01] text-[#ffffff]'>
//                         Sign up
//                     </button>
//                     <p className=' text-[14px] text-[#898989] text-center '>
//                         Have an account? <Link href='/' className=' text-[#FBAF01]  font-medium'>Login</Link>
//                     </p>
//                 </div>
//                 <LoadingOverlay isLoading={isLoadingEffect} />
//             </form>

//             {isModalOpen &&
//                 <Modal
//                     open={isModalOpen}
//                     onClose={() => setModalOpen(false)}
//                     size="md"
//                     zIndex={9999}
//                 >
//                     <Errorpanel
//                         errorMessages={errorMessages}
//                     />
//                     <div className='flex flex-row justify-end'>
//                         <button
//                             onClick={() => setModalOpen(false)}
//                             className="mt-2 mx-4 px-4 py-2 text-[12px] bg-red-500 text-white rounded hover:bg-red-600"
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </Modal>
//             }
//         </>
//     )
// }

// export default Signupform