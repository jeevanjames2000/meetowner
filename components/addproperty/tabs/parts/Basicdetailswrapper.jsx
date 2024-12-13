'use client'
import { IconAsterisk, IconSearch } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation.js';
import Propertyapi from '@/components/api/Propertyapi';
import { useUserDetails } from '@/components/zustand/useUserDetails';
import { toast } from 'react-toastify';
import Errorpanel from '@/components/shared/Errorpanel';
import { Loadingoverlay, Modal, Select } from '@nayeshdaggula/tailify';
import { usePropertyDetails } from '@/components/zustand/usePropertyDetails';
import Generalapi from '@/components/api/Generalapi';

function Basicdetailswrapper({ updateActiveTab, unique_property_id, basicDetails }) {
    const userInfo = useUserDetails((state) => state.userInfo)
    const access_token = useUserDetails(state => state.access_token);
    let user_id = userInfo?.user_id || null
    const updatePropertyDetails = usePropertyDetails(state => state.updatePropertyDetails)
    const searchParams = useSearchParams()
    const router = useRouter()
    const [isLoadingEffect, setIsLoadingEffect] = useState(false)
    const [errorMessages, setErrorMessages] = useState('')
    const [propertyType, setPropertyType] = useState('')
    const [propertyTypeError, setPropertyTypeError] = useState('')
    const updatePropertyType = (type) => {
        setPropertyType(type)
        setPropertyTypeError('')
    }
    const [lookingTo, setLookingTo] = useState('')
    const [lookingToError, setLookingToError] = useState('')
    const updateLookingTo = (type) => {
        setTransactionType('')
        setLookingTo(type)
        if (type !== 'Sell') {
            setTransactionType('')
        }
        setLookingToError('')
    }

    const [transactionType, setTransactionType] = useState('')
    const [transactionTypeError, setTransactionTypeError] = useState('')
    const updateTransactionType = (value) => {
        setTransactionType(value)
        setTransactionTypeError('')
    }
    const [location, setLocation] = useState('')
    const updateLocation = (value) => {
        if (value.length > 2) {
            getPlacesFromGoogle({ input: value })
        } else {
            setAllLocations([])
        }
        setLocation(value)
    }

    const [isModalOpen, setModalOpen] = useState(false);
    const updateBasicdetails = () => {
        setIsLoadingEffect(true)
        if (propertyType === '') {
            setPropertyTypeError('Please select property type')
            setIsLoadingEffect(false)
            return
        }
        if (lookingTo === '') {
            setLookingToError('Please select looking to')
            setIsLoadingEffect(false)
            return
        }
        if (lookingTo === 1 && transactionType === '') {
            setTransactionTypeError('Please select transaction type')
            setIsLoadingEffect(false)
            return
        }

        Propertyapi.post('/addbasicdetails', {
            property_in: propertyType,
            property_for: lookingTo,
            transaction_type: transactionType,
            user_id: parseInt(user_id),
            unique_property_id: unique_property_id,
            location_id: location
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            }
        })
            .then((response) => {
                let data = response.data
                if (data.status === 'error') {
                    let finalresponse = {
                        'message': data.message,
                        'server_res': data
                    }
                    setErrorMessages(finalresponse);
                    setModalOpen(true);
                    setIsLoadingEffect(false);
                    return false;
                }
                toast.success('basic details added successfully', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                let property_id = data?.property?.unique_property_id
                updateActiveTab('propertydetails', 'inprogress', property_id)
                updatePropertyDetails({
                    property_in: data?.property?.property_in,
                    property_for: data?.property?.property_for,
                })
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
                setModalOpen(true);
                setIsLoadingEffect(false);
                return false;
            })
    }

    useEffect(() => {
        if (basicDetails) {
            setPropertyType(basicDetails?.property_in || '')
            setLookingTo(basicDetails?.property_for || '')
            setTransactionType(basicDetails?.transaction_type || '')
            setLocation(basicDetails?.location_id || '')
        }
    }, [basicDetails])

    const [allLocations, setAllLocations] = useState([])
    function getPlacesFromGoogle({ input }) {
        Generalapi.get('/getgoogleplaces', {
            params: {
                input: input
            }
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            }
        })
            .then(response => {
                let data = response.data;
                if (data.status === 'error') {
                    let finalresponse = {
                        'message': data.message,
                        'server_res': data
                    }
                    setErrorMessages(finalresponse);
                    return false;
                }
                setAllLocations(data.places);
                return false;
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
                return false;
            })
    }

    const [allPropertyFor, setAllPropertyFor] = useState([])
    const getAllPropertyFor = () => {
        Propertyapi.get('getPropertyFor', {
            params: {
                user_id: user_id
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            }
        })

            .then((response) => {
                let data = response.data
                if (data.status === 'error') {
                    let finalResponse = {
                        'message': data.message,
                    }
                    setErrorMessages(finalResponse)
                }
                if (data.status === 'success') {
                    setAllPropertyFor(data?.property_for || [])
                    return false;
                }
            }
            )
            .catch((error) => {
                console.log(error)
                let finalresponse;
                if (error.response !== undefined) {
                    finalresponse = {
                        'message': error.message,
                    };
                }
                else {
                    finalresponse = {
                        'message': error.message,
                    };
                }
                setErrorMessages(finalresponse);
                return false;
            })
    }

    const [allPropertyIn, setAllPropertyIn] = useState([])
    const getAllPropertyIn = () => {
        Propertyapi.get('getPropertyIn', {
            params: {
                user_id: user_id
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            }
        })

            .then((response) => {
                let data = response.data
                if (data.status === 'error') {
                    let finalResponse = {
                        'message': data.message,
                    }
                    setErrorMessages(finalResponse)
                }
                if (data.status === 'success') {
                    setAllPropertyIn(data?.property_in || [])
                    return false;
                }
            }
            )
            .catch((error) => {
                console.log(error)
                let finalresponse;
                if (error.response !== undefined) {
                    finalresponse = {
                        'message': error.message,
                    };
                }
                else {
                    finalresponse = {
                        'message': error.message,
                    };
                }
                setErrorMessages(finalresponse);
                return false;
            })
    }

    const [allTransactionType, setAllTransactionType] = useState([])
    const getAllTransactionType = () => {
        Propertyapi.get('getTransactionType', {
            params: {
                user_id: user_id
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            }
        })

            .then((response) => {
                let data = response.data
                if (data.status === 'error') {
                    let finalResponse = {
                        'message': data.message,
                    }
                    setErrorMessages(finalResponse)
                }

                if (data.status === 'success') {
                    setAllTransactionType(data?.transaction_type || [])
                    return false;
                }
            }
            )
            .catch((error) => {
                console.log(error)
                let finalresponse;
                if (error.response !== undefined) {
                    finalresponse = {
                        'message': error.message,
                    };
                }
                else {
                    finalresponse = {
                        'message': error.message,
                    };
                }
                setErrorMessages(finalresponse);
                return false;
            })
    }

    useEffect(() => {
        getAllPropertyFor()
        getAllPropertyIn()
        getAllTransactionType()
    }, [])
    return (
        <>
            <div className='py-2 bg-[#E2EAED]'>
                <p className='text-lg font-bold text-[#1D3A76] text-center'>Add Basic Details</p>
            </div>
            <div className='p-10'>
                <>
                    <div className='flex gap-1 mb-4'>
                        <p className='text-[#1D3A76] text-sm  font-sans font-medium'>Property Type</p>
                        <IconAsterisk size={8} color='#FF0000' />
                    </div>
                    <div className='flex flex-row items-center gap-6'>
                        {
                            allPropertyIn.length > 0 && allPropertyIn.map((property, index) => {
                                return (
                                    <div key={index} onClick={() => updatePropertyType(property.value)} className={`group cursor-pointer px-8 py-2 rounded-md  ${propertyType === property.value ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                                        <p className={`${propertyType === property.value ? 'text-white text-[10px]' : 'text-[#1D3A76] text-[10px] font-semibold group-hover:text-white'}`}>{property.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {propertyTypeError && <p className='text-red-500 text-[10px] mt-2'>{propertyTypeError}</p>}
                </>
                <>
                    <div className='flex gap-1 my-4'>
                        <p className='text-[#1D3A76] text-sm font-sans font-medium'>Looking to</p>
                        <IconAsterisk size={8} color='#FF0000' />
                    </div>
                    <div className='flex flex-row items-center gap-6'>
                        {
                            allPropertyFor.length > 0 && allPropertyFor.map((property, index) => {
                                return (
                                    <div key={index} onClick={() => updateLookingTo(property.value)} className={`group cursor-pointer px-8 py-2 rounded-md  ${lookingTo === property.value ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                                        <p className={`${lookingTo === property.value ? 'text-white text-[10px]' : 'text-[#1D3A76] text-[10px] font-semibold group-hover:text-white'}`}>{property.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {lookingToError && <p className='text-red-500 text-[10px] mt-2'>{lookingToError}</p>}
                    {
                        lookingTo === 1 && (
                            <div className='my-5 w-[40%]'>
                                <Select
                                    label=' Transaction Type'
                                    labelClassName='!text-[#1D3A76] text-sm font-medium font-sans'
                                    data={allTransactionType}
                                    searchable
                                    withAsterisk
                                    value={transactionType}
                                    onChange={updateTransactionType}
                                    inputClassName='focus:ring-blue-500 focus:border-blue-500'
                                    className='!m-0 !p-0'
                                />
                                {transactionTypeError && <p className='text-red-500 text-[10px] mt-2'>{transactionTypeError}</p>}
                            </div>
                        )
                    }
                </>

                <div className='flex flex-row items-center my-4 '>
                    <div className='bg-[#1D3A76] flex items-center justify-center px-3 rounded-s-lg py-2 mt-1'>
                        <IconSearch size={20} color='#fff' />
                    </div>
                    <Select
                        placeholder='Search location'
                        labelClassName='!text-[#1D3A76] text-sm font-medium font-sans'
                        searchable
                        data={allLocations}
                        withAsterisk
                        value={location}
                        onChange={updateLocation}
                        inputClassName='focus:ring-blue-500 focus:border-blue-500'
                        className='w-full focus:outline-none !rounded-0'
                        padding='p-0'
                        margin='m-0'
                    />
                </div>

                <div className='flex flex-row justify-end items-center mt-6'>
                    <div onClick={updateBasicdetails} className='border border-[#1D3A76] bg-[#1D3A76] px-8 py-3 rounded-md cursor-pointer'>
                        <p className='text-white text-[12px]'>Next, add property details</p>
                    </div>
                </div>
                <Loadingoverlay
                    visible={isLoadingEffect}
                    zIndex={9999}
                    overlayBg="rgba(255, 255, 255, 0.6)"
                />
            </div>

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

export default Basicdetailswrapper