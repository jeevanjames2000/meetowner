import React from 'react';
import Image from 'next/image';

function Propertycard({ propertytype, price, facing, possession, image }) {
    return (
        <div className="flex flex-col space-y-6 pt-6">
            {/* Property details */}
            <div className="flex space-x-2 w-fit">
                <p className="text-[14px] font-semibold text-[#00609E] py-[2px]">{propertytype}</p>
                <p className="text-[14px] font-semibold text-[#00609E] border-l-[1.8px] border-r-[1.8px] border-[#8787874F] px-2 py-[2px]">{price}</p>
                <p className="text-[14px] font-semibold text-[#00609E] border-r-[1.8px] border-[#8787874F] pr-2 py-[2px]">{facing}</p>
                <p className="text-[14px] font-semibold text-[#00609E] py-[2px]">{possession}</p>
            </div>
            {/* Property image */}
            <div className='h-[280px]'>
                <Image
                    src={image}
                    alt="Property Image"
                    className="h-full w-full object-cover rounded-3xl"
                />
            </div>
        </div>
    );
}

export default Propertycard;
