import Propertycarousel from './parts/Propertycarousel';

function Propertybanner({ propertyDetails }) {
    return (
        <div className="flex flex-col space-y-[12px]">
            <p className="text-[#1D37A6] text-[25px] font-[700] tracking-small-wide">
                {propertyDetails?.property_name} PROPERTY DETAILS
            </p>
            <p className="text-[#1D37A6] text-[20px] font-[600]">
                Property Description
            </p>
            <p className="text-[#6E6E6E] text-[13px] font-[600] leading-6">{propertyDetails?.description}</p>
            <div className='flex flex-row items-start justify-between pt-6'>
                <div className="">
                    <p className="text-[26px] font-[600] text-[#1D37A6]">{propertyDetails?.property_name}</p>
                    <p className="text-[14px] font-[600] text-[#1D37A6] pt-2">{propertyDetails?.google_address}</p>
                </div>
                <div className="">
                    <p className="text-[20px] font-semibold text-[#492828]">
                        {/* ₹ 2 Cr - ₹ 4 Cr - <span className="text-[#000000] font-[400] text-[18px]"> ₹ 10.k/sq.ft</span> */}
                        {propertyDetails?.property_for === "Sell" ? `₹ ${propertyDetails?.property_cost}` : ` ₹ ${propertyDetails?.monthly_rent}`}
                    </p>
                    <p className="text-[17px] font-medium text-[#1D3A76] text-end">
                        EMI starts at <span className="text-[#000000]">₹</span> 60.24 K
                    </p>
                    <p className="text-[#6E6E6E] text-[13px] font-[400] text-end">All Inclusive Price</p>
                </div>
            </div>
            <div className='space-y-10'>
                <Propertycarousel
                    propertyDetails={propertyDetails}
                />
            </div>
        </div>
    );
}

export default Propertybanner;
