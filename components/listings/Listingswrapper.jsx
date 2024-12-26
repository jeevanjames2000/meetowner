'use client'
import { IconChevronDown, IconCircle } from '@tabler/icons-react';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import listingApi from '../api/listingApi';
import { useUserDetails } from '../zustand/useUserDetails';
import { Modal } from '@nayeshdaggula/tailify';
import Propertylists from './parts/Propertylists';
import Propertyapi from '../api/Propertyapi';
import Errorpanel from '../shared/Errorpanel';

function Listingswrapper({ occupancyList }) {
    const userInfo = useUserDetails((state) => state.userInfo)
    const user_id = userInfo?.user_id;
    const access_token = useUserDetails(state => state.access_token);

    const [propertyIn, setPropertyIn] = useState("Residential");
    const updatePropertyIn = (value) => {
        setPropertyIn(value)
        setPropertySubtype('')
        setLocality('')
        if (value === "Commercial") {
            setBhkhide(false)
            setBhk('')
        } else {
            setBhkhide(true)
            setBhk('')
        }
    }
    const [bhkhide, setBhkhide] = useState(true)
    const [propertySubtype, setPropertySubtype] = useState('')
    const updatePropertySubtype = (e) => {
        let value = e.currentTarget.value
        setPropertySubtype(value)
        if (value === 4 || value === 5) {
            setBhkhide(false)
            setBhk('')
        } else {
            setBhkhide(true)
            setBhk('')
        }
    }

    const [locality, setLocality] = useState('')
    const updateLocality = (e) => {
        setLocality(e.currentTarget.value)
    }

    const [propertyFor, setPropertyFor] = useState('')
    const updatePropertyFor = (e) => {
        setPropertyFor(e.currentTarget.value)
    }

    const [bhk, setBhk] = useState('')
    const updateBhk = (e) => {
        setBhk(e.currentTarget.value)
    }

    const [occupancy, setOccupancy] = useState('')
    const updateOccupancy = (e) => {
        setOccupancy(e.currentTarget.value)
    }

    const [propertyId, setPropertyId] = useState('')
    const updatePropertyId = (e) => {
        setPropertyId(e.currentTarget.value)
    }


    const [isOpen, setIsOpen] = useState({
        buy: false,
        rent: false,
        pg: false,
    });

    const toggleAccordion = (key) => {
        setIsOpen((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const [isLoadingEffect, setIsLoadingEffect] = useState(false);
    const [errorMessages, setErrorMessages] = useState('');
    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const closeErrorModal = () => {
        setErrorModalOpen(false);
    }

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const [totalProperties, setTotalProperties] = useState(0);
    const [allListings, setAllListings] = useState([]);
    async function getAllListingsData(newPage, newLimit, newSearchQuery, newPropertyIn, newPropertySubtype, newPropertyFor, newBhk, newOccupancy, newPropertyId) {
        listingApi.get('/getalllistings', {
            params: {
                page: newPage,
                limit: newLimit,
                searchQuery: newSearchQuery,
                property_in: newPropertyIn,
                property_subtype: newPropertySubtype,
                property_for: newPropertyFor,
                bedrooms: newBhk,
                occupancy: newOccupancy
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            },
        })
            .then((response) => {
                setIsLoadingEffect(false);
                let data = response.data
                if (data.status === 'error') {
                    let finalresponse = {
                        'message': data.message,
                        'server_res': data
                    }
                    setErrorMessages(finalresponse);
                    setErrorModalOpen(true);
                    return false;
                }
                setAllListings(data?.propertyLists || []);
                setTotalProperties(data?.total_property_lists_count || 0);
                setTotalPages(data?.totalpages || 0);
            }
            )
            .catch((error) => {
                setIsLoadingEffect(false);
                let finalresponse = {
                    'message': error.message,
                }
                setErrorMessages(finalresponse);
                setErrorModalOpen(true);
            });
    }

    useEffect(() => {
        setIsLoadingEffect(true);
        getAllListingsData(page, limit, locality, propertyIn, propertySubtype, propertyFor, bhk, occupancy);
    }, [propertyIn, locality, propertySubtype, propertyFor, bhk, occupancy])

    const handlePageChange = (page) => {
        setPage(page);
        setIsLoadingEffect(true);
        getAllListingsData(page, limit, locality, propertyIn, propertySubtype, propertyFor, bhk, occupancy);
    };

    const refreshListings = () => {
        setIsLoadingEffect(true);
        getAllListingsData(page, limit, locality, propertyIn, propertySubtype, propertyFor, bhk, occupancy);
    }

    const handleDeleteProperty = useCallback((unique_property_id) => {
        setIsLoadingEffect(true);
        Propertyapi.post(`/deleteProperty`, {
            user_id,
            unique_property_id
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access_token}`
                },
            })
            .then((response) => {
                setIsLoadingEffect(false);
                let data = response.data
                if (data.status === 'error') {
                    let finalresponse = {
                        'message': data.message,
                        'server_res': data
                    }
                    setErrorMessages(finalresponse);
                    setErrorModalOpen(true);
                    return false;
                }
                refreshListings()
            }
            )
            .catch((error) => {
                setIsLoadingEffect(false);
                let finalresponse = {
                    'message': error.message,
                }
                setErrorMessages(finalresponse);
                setErrorModalOpen(true);
            });
    }, [])

    return (
        <>
            <div className="px-[80px] w-full my-16">
                <div className="flex w-full gap-8">
                    {/* 20% Width Div */}
                    <div className="w-[18%] h-fit bg-[#FFFFFF] p-3 flex flex-col space-y-2 rounded-md">
                        <p className="text-[#240000] text-[13px] font-[600]">Show</p>
                        <div className="flex flex-col mx-auto w-full max-w-md border-b border-[#D7D8D9] pb-4">
                            <label className="w-full group relative flex cursor-pointer rounded-sm py-2 text-[#1b1b1b] transition focus:outline-none">
                                <input
                                    type="radio"
                                    name="role"
                                    value="Residential"
                                    checked={propertyIn === "Residential"}
                                    onChange={() => updatePropertyIn("Residential")}
                                    className="hidden"
                                />
                                <div className="flex w-full items-center gap-2">
                                    {propertyIn === "Residential" ? (
                                        <IconCircle size={16} className="bg-[#1D3A76] text-white rounded-full" />
                                    ) : (
                                        <IconCircle size={16} color="#b9b9b9" />
                                    )}
                                    <p
                                        className={`text-[12px] font-[400] ${propertyIn === "Residential"
                                            ? "text-[#1D3A76]"
                                            : "text-[#969595]"
                                            }`}
                                    >
                                        Residential  Properties
                                    </p>
                                </div>
                            </label>
                            <label className="w-full group relative flex cursor-pointer rounded-sm text-[#1b1b1b] transition focus:outline-none">
                                <input
                                    type="radio"
                                    name="role"
                                    value="Commercial"
                                    checked={propertyIn === "Commercial"}
                                    onChange={() => updatePropertyIn("Commercial")}
                                    className="hidden"
                                />
                                <div className="flex w-full items-center gap-2">
                                    {propertyIn === "Commercial" ? (
                                        <IconCircle size={16} className="bg-[#1D3A76] text-white rounded-full " />
                                    ) : (
                                        <IconCircle size={16} color="#b9b9b9" />
                                    )}
                                    <p
                                        className={`text-[12px] font-[400] ${propertyIn === "Commercial"
                                            ? "text-[#1D3A76]"
                                            : "text-[#969595]"
                                            }`}
                                    >
                                        Commercial properties
                                    </p>
                                </div>
                            </label>
                        </div>
                        <p className="text-[#240000] text-[13px] font-[500] pt-2">Sub - Category</p>
                        <div>
                            <div
                                className={`flex items-center justify-between cursor-pointer h-7 px-1 ${isOpen.buy
                                    ? "bg-[#E2EAED] text-[#1D3A76] border-b-0"
                                    : "text-[#969595] border-b border-[#D7D8D9]"
                                    }`}
                                onClick={() => toggleAccordion("buy")}
                            >
                                <p className="text-[12px] font-bold">Buy</p>
                                <div className="flex flex-row gap-14">
                                    <p className="font-bold text-[12px]">(0)</p>
                                    <IconChevronDown
                                        stroke={1.5}
                                        size={16}
                                        color='#1D3A76'
                                    />
                                </div>
                            </div>
                            {isOpen.buy && (
                                <div className="mt-2 flex flex-col gap-2 pl-3 pb-2">
                                    <Link href="/profile" className="text-gray-400 text-[12px] hover:text-[#1D3A76]">
                                        Apartment(0)
                                    </Link>
                                    <Link href="/profile" className="text-gray-400 text-[12px] hover:text-[#1D3A76]">
                                        Independent Floor(0)
                                    </Link>
                                    <Link href="/profile" className="text-gray-400 text-[12px] hover:text-[#1D3A76]">
                                        Villa(0)
                                    </Link>
                                </div>
                            )}

                            <div
                                className={`flex items-center justify-between cursor-pointer h-7 px-1 mt-1 ${isOpen.rent
                                    ? "bg-[#E2EAED] text-[#1D3A76] border-b-0"
                                    : "text-[#969595] border-b border-[#D7D8D9]"
                                    }`}
                                onClick={() => toggleAccordion("rent")}
                            >
                                <p className="text-[12px] font-bold">Rent</p>
                                <div className="flex flex-row gap-14">
                                    <p className="font-bold text-[12px]">(0)</p>
                                    <IconChevronDown
                                        stroke={1.5}
                                        size={16}
                                        color='#1D3A76'
                                    />
                                </div>
                            </div>
                            {isOpen.rent && (
                                <div className="mt-2 flex flex-col gap-2 pl-3 pb-2">
                                    <Link href="/profile" className="text-gray-400 text-[12px] hover:text-[#1D3A76]">
                                        All(2)
                                    </Link>
                                    <Link href="/profile" className="text-gray-400 text-[12px] hover:text-[#1D3A76]">
                                        Reported (0)
                                    </Link>
                                    <Link href="/profile" className="text-gray-400 text-[12px] hover:text-[#1D3A76]">
                                        Active (0)
                                    </Link>
                                    <Link href="/profile" className="text-gray-400 text-[12px] hover:text-[#1D3A76]">
                                        Expired (0)
                                    </Link>
                                    <Link href="/profile" className="text-gray-400 text-[12px] hover:text-[#1D3A76]">
                                        Rejected (0)
                                    </Link>
                                    <Link href="/profile" className="text-gray-400 text-[12px] hover:text-[#1D3A76]">
                                        Deleted (0)
                                    </Link>
                                    <Link href="/profile" className="text-gray-400 text-[12px] hover:text-[#1D3A76]">
                                        Expiring Soon (0)
                                    </Link>
                                </div>
                            )}

                            <div
                                className={`flex items-center justify-between cursor-pointer h-7 px-1 mt-1 ${isOpen.pg
                                    ? "bg-[#E2EAED] text-[#1D3A76] border-b-0"
                                    : "text-[#969595] border-b border-[#D7D8D9]"
                                    }`}
                                onClick={() => toggleAccordion("pg")}
                            >
                                <p className="text-[12px] font-bold">PG</p>
                                <div className="flex flex-row gap-14">
                                    <p className="font-bold text-[12px]">(0)</p>
                                    <IconChevronDown
                                        stroke={1.5}
                                        size={16}
                                        color='#1D3A76'
                                    />
                                </div>
                            </div>
                            {isOpen.pg && (
                                <div className="mt-2 flex flex-col gap-2 pl-3 pb-3">
                                    <Link href="/profile" className="text-gray-400 text-[12px] hover:text-[#1D3A76]">
                                        All(2)
                                    </Link>
                                    <Link href="/profile" className="text-gray-400 text-[12px] hover:text-[#1D3A76]">
                                        Reported (0)
                                    </Link>
                                    <Link href="/profile" className="text-gray-400 text-[12px] hover:text-[#1D3A76]">
                                        Active (0)
                                    </Link>
                                    <Link href="/profile" className="text-gray-400 text-[12px] hover:text-[#1D3A76]">
                                        Expired (0)
                                    </Link>
                                    <Link href="/profile" className="text-gray-400 text-[12px] hover:text-[#1D3A76]">
                                        Rejected (0)
                                    </Link>
                                    <Link href="/profile" className="text-gray-400 text-[12px] hover:text-[#1D3A76]">
                                        Deleted (0)
                                    </Link>
                                    <Link href="/profile" className="text-gray-400 text-[12px] hover:text-[#1D3A76]">
                                        Under Review (0)
                                    </Link>
                                </div>
                            )}
                        </div>

                    </div>
                    {/* 80% Width Div */}
                    <Propertylists
                        totalPages={totalPages}
                        totalProperties={totalProperties}
                        allListings={allListings}
                        handlePageChange={handlePageChange}
                        limit={limit}
                        isLoadingEffect={isLoadingEffect}
                        handleDeleteProperty={handleDeleteProperty}
                        propertyIn={propertyIn}
                        propertySubtype={propertySubtype}
                        updatePropertySubtype={updatePropertySubtype}
                        locality={locality}
                        updateLocality={updateLocality}
                        bhkhide={bhkhide}
                        bhk={bhk}
                        updateBhk={updateBhk}
                        propertyFor={propertyFor}
                        updatePropertyFor={updatePropertyFor}
                        occupancyList={occupancyList}
                        occupancy={occupancy}
                        updateOccupancy={updateOccupancy}
                        propertyId={propertyId}
                        updatePropertyId={updatePropertyId}
                    />
                </div>
            </div >
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
    );
}

export default Listingswrapper;
