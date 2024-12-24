import Propertycarousel from './parts/Propertycarousel';

function Propertybanner({ propertyDetails }) {
    return (
        <div className="flex flex-col space-y-[12px]">
            <p className="text-[#1d3a76] text-[26px] font-[600] font-sans">
                Property Description
            </p>
            <p className="text-[#6E6E6E] text-[13px] font-[500] leading-6 font-Montserrat">{propertyDetails?.description}</p>
            <div className='flex flex-row items-start justify-between pt-6'>
                <div className="">
                    <p className="text-[26px] font-[600] text-[#1d3a76] font-sans">{propertyDetails?.property_name?.toUpperCase()}</p>
                    <p className="text-[14px] font-[600] text-[#1d3a76] pt-2 font-sans">{propertyDetails?.google_address}</p>
                </div>
                <div className="">
                    <p className="text-[18px] font-semibold text-[#492828] font-sans">
                        {/* ₹ 2 Cr - ₹ 4 Cr - <span className="text-[#000000] font-[400] text-[18px]"> ₹ 10.k/sq.ft</span> */}
                        {propertyDetails?.property_for === "Sell" ? `₹ ${propertyDetails?.property_cost}` : ` ₹ ${propertyDetails?.monthly_rent} Rent`}
                    </p>
                    <p className="text-[14px] font-medium text-[#1D3A76] text-end">
                        EMI starts at <span className="text-[#000000]">₹</span> 60.24 K
                    </p>
                    <p className="text-[#6E6E6E] text-[12px] font-[400] text-end">All Inclusive Price</p>
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
