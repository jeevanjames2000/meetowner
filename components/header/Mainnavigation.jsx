'use client'
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from 'next/navigation';
const Mainnavigation = () => {
    const pathname = usePathname();
    const isActive = (path) => pathname === path;
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="flex flex-row items-center justify-between  gap-10">
                <Link href="/dashboard" className={`font-semibold text-sm text-[#1D3A76] ${isActive('/dashboard') ? 'border-b-2 border-[#1D3A76]' : ''}`}> Dashboard</Link>
                <Link href="/enquiry" className={`font-semibold text-sm text-[#1D3A76] ${isActive('/enquiry') ? 'border-b-2 border-[#1D3A76]' : ''}`}> Enquires</Link>
                <Link href="#" className={`font-semibold text-sm text-[#1D3A76] ${isActive('/listings') ? 'border-b-2 border-[#1D3A76]' : ''}`}>Listings</Link>
                <Link href="/packages" className={`font-semibold text-sm text-[#1D3A76] ${isActive('/packages') ? 'border-b-2 border-[#1D3A76]' : ''}`}>Packages</Link>
                <div
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                    className="relative"
                >
                    <Link href="#" className=" font-semibold text-sm text-[#1D3A76]">
                        More
                    </Link>
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 15 }}
                                style={{ translateX: "-50%" }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="absolute left-20 top-8 bg-white text-black shadow-md rounded-sm z-50"
                            >
                                <div className="w-[170px] p-4 flex flex-col gap-2" >
                                    <Link href="#">
                                        <p className='text-[12px] text-[#909090] font-semibold'>My Profile</p>
                                    </Link>
                                    <Link href="#">
                                        <p className='text-[12px] text-[#909090] font-semibold'>Change Password</p>
                                    </Link>
                                    <Link href="#">
                                        <p className='text-[12px] text-[#909090] font-semibold'>Go to MeetOwner.com</p>
                                    </Link>
                                    <div>
                                        <div className="border-[1px] mb-2"></div>
                                        <Link href="#">
                                            <p className='text-[12px] text-[#D23F4F] font-semibold text-center '>Logout</p>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
};


export default Mainnavigation;