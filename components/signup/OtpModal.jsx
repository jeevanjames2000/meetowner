import { Pininput } from '@nayeshdaggula/tailify';
import React from 'react'

function OtpModal({ otpNumber, updateOtpNumber, handleVerifyOtp }) {
    return (
        <>
            <div className='space-y-3 py-3'>
                <p className=''>Temparay Otp: {otpNumber}</p>
                <Pininput
                    numberOfInputs={6}
                    value={otpNumber}
                    onChange={updateOtpNumber}
                    label="OTP Pin"
                    description="Please enter your pin"
                    placeholder="*"
                />
                <button
                    onClick={handleVerifyOtp}
                    className=" text-sm rounded-md px-4 py-2 bg-[#ffd119] w-full">
                    Verify OTP
                </button>
            </div>
        </>
    )
}

export default OtpModal