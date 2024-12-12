'use client';

import { Select, Textinput } from '@nayeshdaggula/tailify';
import React, { useState } from 'react';


function SignupForm() {
    const [selectedTab, setSelectedTab] = useState("builder"); // Correct state declaration
    const [text, setText] = useState('');
    const [error, setError] = useState('');
    return (
        <div className="signupform flex flex-col w-[370px] h-fit gap-4">
            {/* Tabs Section */}
            <div className="flex flex-col rounded-[20px] ">
                <div className="flex">
                    {/* First Tab */}
                    <div
                        onClick={() => setSelectedTab("builder")}
                        className={`custom-shadow w-fit z-50 flex items-center justify-center text-sm text-[#ffffff] py-1 px-6 rounded-tr-[20px] ${selectedTab === "builder" ? 'bg-[#FBAF01] text-[#244385]' : 'bg-[#31539A]'
                            }`}
                    >
                        Builder
                    </div>
                    {/* Second Tab */}
                    <div
                        onClick={() => setSelectedTab("agent")}
                        className={`custom-shadow w-fit z-40 ml-[-14px] flex items-center justify-center text-sm text-[#ffffff] py-3 px-6 rounded-tr-[20px] ${selectedTab === "agent" ? 'bg-[#FBAF01] text-[#244385]' : 'bg-[#31539A]'
                            }`}
                    >
                        Agent
                    </div>
                    {/* Third Tab */}
                    <div
                        onClick={() => setSelectedTab("owner")}
                        className={`custom-shadow w-fit z-[30] ml-[-14px] flex items-center justify-center text-sm text-[#ffffff] py-3 px-6 rounded-tr-[20px] ${selectedTab === "owner" ? 'bg-[#FBAF01] text-[#244385]' : 'bg-[#31539A]'
                            }`}
                    >
                        Owner
                    </div>
                    {/* Fourth Tab */}
                    <div
                        onClick={() => setSelectedTab("channel_partner")}
                        className={`custom-shadow w-[120%] ml-[-14px] flex items-center justify-end text-sm text-[#ffffff] py-3 p-4 rounded-tr-[20px] ${selectedTab === "channel_partner" ? 'bg-[#FBAF01] text-[#244385]' : 'bg-[#31539A]'
                            }`}
                    >
                        Channel Partner
                    </div>
                </div>
                <div className=' flex flex-col bg-white h-fit py-4 px-3 gap-2'>
                    <div className='flex flex-row items-center w-full  '>
                        <div className='w-[20%]'>
                            <Select
                                data={[
                                    { value: '1', label: '+91' },
                                    { value: '2', label: '+81' },
                                    { value: '3', label: '+12' },
                                ]}
                                inputClassName='text-sm border-0 border-b border-[#D9D9D9] rounded-none focus:outline-none'
                                placeholder="+91"

                            />
                        </div>
                        <div className='w-[50%]'>
                            <Textinput
                                placeholder="John Doe"
                                inputClassName='text-sm border-0 border-b border-[#D9D9D9] rounded-none focus:outline-none'
                            />
                        </div>
                        <div className='flex ml-auto'>
                            <button
                                className=" text-sm rounded-[10px] px-4 py-1 text-white bg-[#909090]">
                                Get otp
                            </button>
                        </div>
                    </div>
                    <Textinput
                        placeholder="Name"
                        inputClassName='text-sm border-0 border-b border-[#D9D9D9] rounded-none focus:outline-none'
                    />
                    <Select
                        data={[
                            { value: '1', label: 'Hyderabad' },
                            { value: '2', label: 'Ameerpet' },
                            { value: '3', label: 'Bowenpally' },
                        ]}
                        inputClassName='text-sm border-0 border-b border-[#D9D9D9] rounded-none focus:outline-none'
                        placeholder="Hyderabad"
                        dropdownClassName='hover:text-[#000]'
                       
                    />
                    <div className='flex flex-row-reverse pt-6'>
                        <button
                            className=" text-sm rounded-full px-4 py-1 text-white bg-[#1D3A76]">
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center bg-[#1D3A76] rounded-full'>
                <p className='text-sm text-[#ffffff]'>Existing user?</p>
                <button
                    className=" text-sm px-1 py-1 text-[#FBAF01] ">
                    Login
                </button>
            </div>
        </div>
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