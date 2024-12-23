import Propertycarousel from './parts/Propertycarousel';

function Propertybanner() {
    return (
        <div className="flex flex-col space-y-[12px]">
            <p className="text-[#1D37A6] text-[38px] font-[700] tracking-small-wide">
                LAKESCAPE PROPERTY DETAILS
            </p>
            <p className="text-[#1D37A6] text-[26px] font-[600] pt-3">
                Property Description
            </p>
            <p className="text-[#6E6E6E] text-[13px] font-[600] leading-6">
                Lakescape by Candeur offers dream homes with unrivaled lake views in 2BHK to 3.5BHK options. Experience abundant natural light, a spacious clubhouse,
                and a private outdoor working area. Elevate your lifestyle with this perfect blend of comfort and scenic beauty.
            </p>
            <div className='flex flex-row items-start justify-between pt-6'>
                <div className="">
                    <p className="text-[26px] font-[600] text-[#1D37A6]">LAKESCAPE</p>
                    <p className="text-[11px] font-[400] text-[#6E6E6E]">CONSTRUCTION PVT LTD...</p>
                    <p className="text-[14px] font-[600] text-[#1D37A6] pt-2">Kondapur, Hyderabad..</p>
                </div>
                <div className="">
                    <p className="text-[20px] font-semibold text-[#492828]">
                        ₹ 2 Cr - ₹ 4 Cr - <span className="text-[#000000] font-[400] text-[18px]"> ₹ 10.k/sq.ft</span>
                    </p>
                    <p className="text-[17px] font-medium text-[#1D3A76] text-end">
                        EMI starts at <span className="text-[#000000]">₹</span> 60.24 K
                    </p>
                    <p className="text-[#6E6E6E] text-[13px] font-[400] text-end">All Inclusive Price</p>
                </div>
            </div>
            <div className='space-y-10'>
                <Propertycarousel />
            </div>
        </div>
    );
}

export default Propertybanner;
