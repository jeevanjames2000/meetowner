'use client'
import Image from 'next/image'
import React from 'react'
import downloadapp_bg from '@/public/assets/downloadapp_bg.png'
import qrcode_1 from '@/public/assets/qrcode_1.png'
import qrcode_2 from '@/public/assets/qrcode_2.png'
import google_play from '@/public/assets/google_play.png'
import app_store from '@/public/assets/app_store.png'
import { Button, Text, Textinput } from '@nayeshdaggula/tailify'
import downloadap_bg from '@/public/assets/downloadapp-pg.png'
import Header from '@/components/header/Header'


function page() {
    return (
        <>
            <Header />
            <div className="downloadapp overflow-hidden relative flex bg-[#ffffff]" style={{ height: 'calc(100vh - 65px)' }}>
                <Image
                    src={downloadapp_bg}
                    className="h-full w-full object-cover absolute inset-0  bg-[#ffffff]"
                    alt="downloadapp_bg"
                />
                <div className="absolute inset-0 pl-[140px] py-12 flex ">
                    <div className='basis-[50%] space-y-5'>
                        <p className='text-[#1D3A76] font-[700] text-[32px]'>Meet Owner on the Go!</p>
                        <p className='text-[#5C5C5C] font-[400] text-[16px] w-[65%]'>Download our top-rated app, made just for you! It’s free, easy and smart.</p>
                        <div className='custom-shadow bg-[#FFFFFF] p-4 rounded-[24px] w-fit space-y-4'>
                            <div className='flex space-x-10'>
                                <Image
                                    src={qrcode_1}
                                    className="h-[120px] w-[120px] object-cover"
                                    alt="qrcode_1"
                                />
                                <Image
                                    src={qrcode_2}
                                    className="h-[120px] w-[120px] object-cover"
                                    alt="qrcode_2"
                                />
                            </div>
                            <div className='flex space-x-4'>
                                <Image
                                    src={google_play}
                                    className="h-full w-full object-cover cursor-pointer"
                                    alt="google_play"
                                />
                                <Image
                                    src={app_store}
                                    className="h-full w-full object-cover cursor-pointer"
                                    alt="app_store"
                                />
                            </div>
                            <div className='flex border-[0.82px] border-[#000000] rounded-[8px]'>
                                <Textinput
                                    placeholder="Enter your mobile number"
                                    inputClassName='text-[10px] border-none focus:outline-none focus:ring-0  shadow-none border-0  bg-[#fffffff] rounded-[8px]'
                                />
                                <button
                                    className="bg-[#1D3A76]  text-[#ffffff] ml-auto px-4 rounded-[8px] rounded-tl-none rounded-bl-none"
                                >
                                    send link
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='basis-[50%] pl-10'>
                        <Image
                            src={downloadap_bg}
                            className="h-[505px] w-[275px] object-contain "
                            alt="downloadap_bg"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default page