import React from 'react';
import Loginwrapper from '../login/Loginwrapper';

function Checkoutpropertywrapper() {
    return (
        <>
            <div className='bg-white rounded-sm mt-4 p-4'>
                <div className='flex flex-row justify-between items-center'>
                    <p className='text-[#1D3A76] text-sm font-semibold'>Checkout your property</p>
                    <button
                        className='text-[#287DB0] border-[2px] border-[#287DB0] px-4 py-1 rounded-md text-[12px] font-semibold'
                        aria-label="View all properties"
                    >
                        View All
                    </button>
                </div>
            </div>
        </>
    );
}

export default Checkoutpropertywrapper;
