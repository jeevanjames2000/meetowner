'use client'
import Getapp from '@/components/enquires/parts/Getapp'
import React, { useEffect, useState } from 'react'
import Listingcard from './Listingcard'
import Pagination from '@/components/tailifycomponents/Pagination'
import { Loadingoverlay } from '@/components/tailifycomponents/Loadingoverlay'
import Propertyapi from '@/components/api/Propertyapi'
import { useUserDetails } from '@/components/zustand/useUserDetails'

function Propertylists({ totalPages, allListings, totalProperties, limit, handlePageChange, isLoadingEffect, handleDeleteProperty, propertyIn }) {
    const user_info = useUserDetails((state) => state.userInfo)
    const user_id = user_info?.user_id || null
    const access_token = user_info?.access_token || null

    const [locality, setLocality] = useState('locality')
    const updateLocality = (e) => {
        setLocality(e.currentTarget.value)
    }
    const [propertytype, setPropertytype] = useState('propertytype')
    const updatePropertytype = (e) => {
        setPropertytype(e.currentTarget.value)
    }
    const [filters, setFilters] = useState(false)
    const updateFilters = () => {
        setFilters(!filters)
    }

    const [allPropertySubTypes, setAllPropertySubTypes] = useState([])
    const getPropertySubTypes = () => {
        Propertyapi.get('getpropertysubtypes', {
            params: {
                user_id: user_id,
                property_in: propertyIn
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
                        'server_res': data
                    }
                    console.log(finalResponse)
                }
                if (data.status === 'success') {
                    setAllPropertySubTypes(data?.property_sub_type || [])
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
                console.log(finalresponse)
                return false;
            })
    }

    useEffect(() => {
        getPropertySubTypes()
    }, [propertyIn])

    return (
        <>
            <div className="listingfilter w-[80%] flex flex-col space-y-4">
                <div className=' grid grid-cols-6 ms:grid-cols-6 rounded-sm gap-8'>
                    <div className='flex flex-wrap col-span-4 bg-[#31539A] rounded-md h-fit w-full p-4 space-y-3'>
                        <div className='flex flex-wrap gap-3'>
                            <input
                                type='text'
                                placeholder='Locality'
                                className='w-[25%] px-4 text-[#FEFDF8] text-[10px] font-[700] bg-transparent  h-7 border border-[#FEFDF8] rounded-sm focus:outline-none'
                                value={locality}
                                onChange={updateLocality}
                            />
                            <div className="w-[25%] flex items-center gap-2 pl-1 border border-[#FEFDF8] rounded-sm cursor-pointer">
                                <form className="w-fit mx-auto">
                                    <label className="flex items-center cursor-pointer">
                                        <select
                                            id="propertytrype"
                                            value={propertytype}
                                            onChange={updatePropertytype}
                                            className="text-[#FEFDF8] text-[10px] font-[700] bg-transparent outline-none h-7"
                                        >
                                            {
                                                allPropertySubTypes.length > 0 &&
                                                allPropertySubTypes.map((item, index) => (
                                                    <option className="text-black" key={index} value={item.value}>{item.name}</option>
                                                ))

                                            }
                                            {/* <option className="text-black" value="propertytype"> Property Type</option>
                                            <option className="text-black" value="apartment">Apartment</option>
                                            <option className="text-black" value="villa">villa</option>
                                            <option className="text-black" value="Independet house">Independet house</option>
                                            <option className="text-black" value="Independent floor">Independent floor</option> */}
                                        </select>
                                    </label>
                                </form>
                            </div>

                            {/* Verification Status Dropdown */}
                            <div className="w-[25%] flex items-center gap-2 pl-1 border border-[#FEFDF8] rounded-sm cursor-pointer">
                                <form className="w-fit mx-auto">
                                    <label className="flex items-center cursor-pointer">
                                        <select
                                            id="verificationStatus"
                                            className="text-[#FEFDF8] text-[10px] font-[700] outline-none h-7 bg-transparent"
                                        >
                                            <option value="verificationstatus" className="text-black">
                                                Verification Status
                                            </option>
                                            <option className="text-black" value="verified">Verified</option >
                                            <option className="text-black" value="unverified">Unverified</option  >
                                            <option className="text-black" value="pending">Pending</option>
                                        </select>
                                    </label>
                                </form>
                            </div>
                            {/* BHK Dropdown */}
                            <div className="w-fit flex items-center gap-2 px-1 border border-[#FEFDF8] rounded-sm cursor-pointer">
                                <form className="w-fit">
                                    <label className="cursor-pointer">
                                        <select
                                            id="verificationStatus"
                                            className="text-[#FEFDF8] text-[10px] font-[700] outline-none h-7 bg-transparent"
                                        >
                                            <option value="bhk" className="text-black">
                                                BHK
                                            </option>
                                            <option className="text-black" value="verified">Verified</option >
                                            <option className="text-black" value="unverified">Unverified</option  >
                                            <option className="text-black" value="pending">Pending</option>
                                        </select>
                                    </label>
                                </form>
                            </div>
                            <button onClick={updateFilters} className=' flex items-center justify-center  rounded-sm  h-7 bg-[#E2EAED] text-[10px] font-[700] text-[#37474F]  px-4  '>
                                {filters ? 'Close Filters' : 'More Filters'}
                            </button>
                        </div>
                        {filters && (
                            <div className='flex flex-wrap gap-3'>
                                <div className="flex items-center gap-4 px-2 w-fit border border-[#FEFDF8] rounded-sm cursor-pointer">
                                    <form className="w-fit mx-auto">
                                        <label className="flex items-center cursor-pointer">
                                            <select
                                                id="bhk"
                                                className="text-[#FEFDF8] text-[10px] font-[700]  outline-none h-7 bg-transparent"
                                            >
                                                <option className=" text-black" value="possessionstatus">
                                                    Possession Status
                                                </option>
                                                <option className="text-black" value="yes">Yes</option>
                                                <option className="text-black" value="no">No</option>
                                            </select>
                                        </label>
                                    </form>
                                </div>
                                <input type='text' placeholder='Property ID' className='px-4 text-[#FEFDF8] text-[10px] font-[700] bg-transparent  h-7 border border-[#FEFDF8] rounded-sm cursor-pointer focus:outline-none' />
                                <div className="w-fit flex items-center justify-center gap-2 px-1 border border-[#FEFDF8] rounded-sm cursor-pointer">

                                    <form action="/action_page.php" className=" flex items-center justify-center space-x-2">
                                        <label className="text-[#FEFDF8] text-[10px] font-[700] text-center outline-none bg-transparent">
                                            Price
                                        </label>

                                        <input type="range" id="vol" name="vol" min="0" max="50" />
                                        <p className="text-[#FEFDF8] text-[10px] font-[700] text-center outline-none">
                                            0
                                        </p>

                                    </form>

                                </div>
                                <div className="w-fit flex items-center gap-2 px-1 border border-[#FEFDF8] rounded-sm cursor-pointer">
                                    <form className="w-fit">
                                        <label className="cursor-pointer">
                                            <select
                                                id="verificationStatus"
                                                className="text-[#FEFDF8] text-[10px] font-[700] outline-none h-7 bg-transparent"
                                            >
                                                <option value="images" className="text-black">
                                                    Images
                                                </option>
                                                <option className="text-black" value="verified">Verified</option >
                                                <option className="text-black" value="unverified">Unverified</option  >
                                                <option className="text-black" value="pending">Pending</option>
                                            </select>
                                        </label>
                                    </form>
                                </div>

                                <div className="w-fit flex items-center gap-2 px-1 border border-[#FEFDF8] rounded-sm cursor-pointer">
                                    <form className="w-fit">
                                        <label className="cursor-pointer">
                                            <select
                                                id="verificationStatus"
                                                className="text-[#FEFDF8] text-[10px] font-[700] outline-none h-7 bg-transparent"
                                            >
                                                <option value="Digilite" className="text-black">
                                                    Digilite
                                                </option>
                                                <option className="text-black" value="verified">Verified</option >
                                                <option className="text-black" value="unverified">Unverified</option  >
                                                <option className="text-black" value="pending">Pending</option>
                                            </select>
                                        </label>
                                    </form>
                                </div>
                                <button className=' flex items-center justify-center  rounded-sm  h-7 bg-[#E2EAED] text-[10px] font-[700] text-[#37474F] px-4  '>
                                    Reset
                                </button>
                            </div>
                        )}
                    </div>
                    <div className='col-span-2'>
                        <Getapp />
                    </div>
                </div>
                <div className='w-full'>
                    <p className='flex items-center justify-start pl-3 h-9 bg-[#FEFDF8] text-[12px] text-[#1D3A76] font-[700] rounded-md'>
                        Showing {limit} out of {totalProperties} Properties
                    </p>
                </div>

                {allListings.length > 0 ?
                    allListings.map((item, index) => (
                        <Listingcard
                            key={index}
                            unique_property_id={item.unique_property_id}
                            image={item.image}
                            bedrooms="2 BHK"
                            property_cost="₹ 15000"
                            area="160 sq.ft"
                            interested_tenants="Two interested tenants"
                            last_added_date={item.last_added_date}
                            expiry_date="09-feb-2025"
                            facing={item.facing}
                            property_name={item.property_name}
                            property_subtype={item.property_subtype}
                            description={item.description}
                            handleDeleteProperty={handleDeleteProperty}
                        />
                    ))
                    :
                    <div className='flex items-center justify-center h-[200px] bg-white border border-[#D7D8D9] rounded-md'>
                        <p className='text-[#1D3A76] text-[14px] font-[700]'>No Properties Found</p>
                    </div>
                }
                {
                    allListings.length > 0 &&
                    <div className='flex items-center justify-end'>
                        <Pagination
                            total={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </div>
                }
            </div>
            <Loadingoverlay
                visible={isLoadingEffect}
                zIndex={9999}
                overlayBg="rgba(255, 255, 255, 0.6)"
            />
        </>
    )
}

export default Propertylists