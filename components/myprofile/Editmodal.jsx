import { Textinput } from '@nayeshdaggula/tailify'
import React, { useState } from 'react'

function Editmodal() {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const updateName = (e) => {
        setName(e.target.value);
        setNameError('');
    }

    return (
        <div className='flex flex-col space-y-2 bg-[#edf3f8] h-full w-full p-3 mt-4 rounded-sm'>
            <div className='flex flex-row items-center w-full gap-[2%]'>
                <p className=' w-[30%] text-[#1D37A6] px-2 font-[600] text-[12px] md:text-[12px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                    Name
                </p>
                <div className='w-full'>
                    <Textinput
                        type='text'
                        value={name}
                        onChange={updateName}
                        error={nameError}
                        placeholder="Enter Name"
                        inputClassName='bg-[#ffffff] rounded-[10px] text-[#AEAEAE] font-[600] text-[12px]  md:text-[12px] xl:text-[12px] lg:text-[12px] 2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px] border-0 border-b border-[#D9D9D9] rounded-[4px] focus:outline-none focus:ring-0 focus:border-b-[#D9D9D9]'
                    />
                </div>
            </div>
            <div className='flex flex-row items-center w-full gap-[2%]'>
                <p className=' w-[30%] text-[#1D37A6] px-2 font-[600] text-[12px] md:text-[12px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                    Phone Number
                </p>
                <div className='w-full'>
                    <Textinput
                        type='number'
                        placeholder="Enter Phone Number"
                        inputClassName='bg-[#ffffff] rounded-[10px] text-[#AEAEAE] font-[600] text-[12px]  md:text-[12px] xl:text-[12px] lg:text-[12px] 2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px] border-0 border-b border-[#D9D9D9] rounded-[4px] focus:outline-none focus:ring-0 focus:border-b-[#D9D9D9]'
                    />
                </div>
            </div>
            <div className='flex flex-row items-center w-full gap-[2%]'>
                <p className=' w-[30%] text-[#1D37A6] px-2 font-[600] text-[12px] md:text-[12px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                    Email
                </p>
                <div className='w-full'>
                    <Textinput
                        type='email'
                        placeholder="Enter Email"
                        inputClassName='bg-[#ffffff] rounded-[10px] text-[#AEAEAE] font-[600] text-[12px]  md:text-[12px] xl:text-[12px] lg:text-[12px] 2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px] border-0 border-b border-[#D9D9D9] rounded-[4px] focus:outline-none focus:ring-0 focus:border-b-[#D9D9D9]'
                    />
                </div>
            </div>
            <div className='flex flex-row items-center w-full gap-[2%]'>
                <p className=' w-[30%] text-[#1D37A6] px-2 font-[600] text-[12px] md:text-[12px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                    Password
                </p>
                <div className='w-full'>
                    <Textinput
                        type='email'
                        placeholder="Enter Password"
                        inputClassName='bg-[#ffffff] rounded-[10px] text-[#AEAEAE] font-[600] text-[12px]  md:text-[12px] xl:text-[12px] lg:text-[12px] 2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px] border-0 border-b border-[#D9D9D9] rounded-[4px] focus:outline-none focus:ring-0 focus:border-b-[#D9D9D9]'
                    />
                </div>
            </div>
            <div className='flex flex-row items-center w-full gap-[2%]'>
                <p className=' w-[30%] text-[#1D37A6] px-2 font-[600] text-[12px] md:text-[12px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                    Address
                </p>
                <div className='w-full'>
                    <Textinput
                        type='email'
                        placeholder="Enter Address"
                        inputClassName='bg-[#ffffff] rounded-[10px] text-[#AEAEAE] font-[600] text-[12px]  md:text-[12px] xl:text-[12px] lg:text-[12px] 2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px] border-0 border-b border-[#D9D9D9] rounded-[4px] focus:outline-none focus:ring-0 focus:border-b-[#D9D9D9]'
                    />
                </div>
            </div>
            <div className='flex flex-row items-center w-full gap-[2%]'>
                <p className=' w-[30%] text-[#1D37A6] px-2 font-[600] text-[12px] md:text-[12px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                    City
                </p>
                <div className='w-full'>
                    <Textinput
                        type='email'
                        placeholder="Enter City"
                        inputClassName='bg-[#ffffff] rounded-[10px] text-[#AEAEAE] font-[600] text-[12px]  md:text-[12px] xl:text-[12px] lg:text-[12px] 2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px] border-0 border-b border-[#D9D9D9] rounded-[4px] focus:outline-none focus:ring-0 focus:border-b-[#D9D9D9]'
                    />
                </div>
            </div>
            <div className='flex flex-row items-center w-full gap-[2%]'>
                <p className=' w-[30%] text-[#1D37A6] px-2 font-[600] text-[12px] md:text-[12px]  2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px]'>
                    State
                </p>
                <div className='w-full'>
                    <Textinput
                        type='email'
                        placeholder="Enter State"
                        inputClassName='bg-[#ffffff] rounded-[10px] text-[#AEAEAE] font-[600] text-[12px]  md:text-[12px] xl:text-[12px] lg:text-[12px] 2xl:text-[16px] 3xl:text-[24px] 4xl:text-[24px] 5xl:text-[24px] border-0 border-b border-[#D9D9D9] rounded-[4px] focus:outline-none focus:ring-0 focus:border-b-[#D9D9D9]'
                    />
                </div>
            </div>
            <button
                className="bg-[#1D37A6] text-[#ffffff] px-4 py-1 text-[12px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text[20px] font-[400] rounded-[6px] ml-auto">
               Submit
            </button>
        </div>
    )
}

export default Editmodal