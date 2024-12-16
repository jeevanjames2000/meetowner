import React, { useState } from 'react'

function Forrenttab() {
  const [plan, setPlan] = useState("Prime");

  const updatePlan = (selectedPlan) => {
    setPlan(selectedPlan); // Update the plan when clicked
  };
  return (
    <div className=' flex flex-basis pt-5'>
      <div className=' basis-[28%] pt-14'>
        <div className="text-[#6D6C6C] text-[11px] font-[600] space-y-3 ">
          <p>Non-Commercial</p>
          <p>Number Of Listings</p>
          <p>Response Rate</p>
          <p>Position On Search</p>
          <p>Buyers Visibility</p>
          <p>Verified Tag</p>
          <p>Visibility on Best Details</p>
          <p>Visibility on Latest Details</p>
          <p>Land Page AD</p>
          <p>Land Page Banner</p>
          <p>Listings Page Small ADS</p>
          <p>Dedicated Agent Support</p>
          <p>Creatives</p>
          <p>Listing Support</p>
          <p>Meta ADS</p>
          <p>Prime Promotion</p>
          <p>CRM</p>
        </div>

      </div>
      <div className='flex basis-[72%] w-full gap-6'>
        <div
          onClick={() => updatePlan("freelisting")}
          className={`basis-[25%] border border-[#909090] rounded-[10px] px-4 py-3 cursor-pointer ${plan === "freelisting" ? "bg-[#1D3A76] text-[#ffffff]" : "bg-white text-[#6D6C6C]"
            }`}
        >
          <p
            className={`text-[14px] text-center font-[700] underline underline-offset-4 ${plan === "freelisting" ? "text-[#ffffff]" : "text-[#1D3A76]"
              }`}
          >
            Free Listing
          </p>
          <div className="text-center text-[11px] font-[600] space-y-3 pt-5">
            <p>[6px] Month</p>
            <p>25</p>
            <p>2x More</p>
            <p>Low</p>
            <p>Limited</p>
            <p>No</p>
            <p>No</p>
            <p>No</p>
            <p>No</p>
            <p>No</p>
            <p>No</p>
            <p>No</p>
            <p>No</p>
            <p>No</p>
            <p>No</p>
            <p>No</p>
            <p>No</p>
          </div>
          <button className="flex mx-auto mt-4 items-center justify-center bg-[#699BA0] text-[#ffffff] h-7 py-1 px-4 text-[12px] font-[700] rounded-md focus:outline-none">
            Get it Now
          </button>
        </div>
        <div
          onClick={() => updatePlan("basic")}
          className={`basis-[25%] border border-[#909090] rounded-[10px] px-4 py-3 cursor-pointer ${plan === "basic" ? "bg-[#1D3A76] text-[#ffffff]" : "bg-white text-[#6D6C6C]"
            }`}
        >
          <p
            className={`text-[14px] text-center font-[700] underline underline-offset-4 ${plan === "basic" ? "text-[#ffffff]" : "text-[#1D3A76]"
              }`}
          >
            Basic
          </p>
          <div className="text-center text-[11px] font-[600] space-y-3 pt-5">
            <p >120 days</p>
            <p >250</p>
            <p >10x More</p>
            <p >Low</p>
            <p >Limited</p>
            <p >No</p>
            <p >No</p>
            <p >yes</p>
            <p >yes</p>
            <p >yes</p>
            <p >yes</p>
            <p >No</p>
            <p >No</p>
            <p >yes</p>
            <p >No</p>
            <p >No</p>
            <p >No</p>
          </div>
          <button className=" flex mx-auto mt-4 items-center justify-center bg-[#699BA0]  text-[#ffffff]   h-7 py-1 px-4 text-[12px] font-[700] rounded-md focus:outline-none ">
            Get it Now
          </button>
        </div>
        <div
          onClick={() => updatePlan("Prime")}
          className={`relative basis-[25%] border border-[#909090] rounded-[10px] px-4 py-3 cursor-pointer ${plan === "Prime" ? "bg-[#1D3A76] text-[#ffffff]" : "bg-white text-[#6D6C6C]"
            }`}
        >  <button className=" absolute -top-11 left-2  flex mx-auto mt-4 bg-[#699BA0]  text-[#ffffff] font-[700] h-7 py-[6px] px-12 text-[14px] rounded-tl-md  rounded-tr-md focus:outline-none ">
            Popular
          </button>
          <p
            className={`text-[14px] text-center font-[700] underline underline-offset-4 ${plan === "Prime" ? "text-[#ffffff]" : "text-[#1D3A76]"
              }`}
          >
            Prime
          </p>
          <div className="text-center text-[11px] font-[600] space-y-3 pt-5">
            <p >120 days</p>
            <p >250</p>
            <p >10x More</p>
            <p >Low</p>
            <p >Limited</p>
            <p >No</p>
            <p >No</p>
            <p >yes</p>
            <p >yes</p>
            <p >yes</p>
            <p >yes</p>
            <p >No</p>
            <p >No</p>
            <p >yes</p>
            <p >No</p>
            <p >No</p>
            <p >No</p>
          </div>
          <button className=" flex mx-auto mt-4 items-center justify-center bg-[#699BA0]  text-[#ffffff]   h-7 py-1 px-4 text-[12px] font-[700] rounded-md focus:outline-none ">
            Get it Now
          </button>
        </div>
        <div
          onClick={() => updatePlan("primeplus")}
          className={`basis-[25%] border border-[#909090] rounded-[10px] px-4 py-3 cursor-pointer ${plan === "primeplus" ? "bg-[#1D3A76] text-[#ffffff]" : "bg-white text-[#6D6C6C]"
            }`}
        >
          <p
            className={`text-[14px] text-center font-[700] underline underline-offset-4 ${plan === "primeplus" ? "text-[#ffffff]" : "text-[#1D3A76]"
              }`}
          >
           Prime plus
          </p>
          <div className="text-center text-[11px] font-[600] space-y-3 pt-5">
            <p>[6px] Month</p>
            <p>25</p>
            <p>2x More</p>
            <p>Low</p>
            <p>Limited</p>
            <p>No</p>
            <p>No</p>
            <p>No</p>
            <p>No</p>
            <p>No</p>
            <p>No</p>
            <p>No</p>
            <p>No</p>
            <p>No</p>
            <p>No</p>
            <p>No</p>
            <p>No</p>
          </div>
          <button className="flex mx-auto mt-4 items-center justify-center bg-[#699BA0] text-[#ffffff] h-7 py-1 px-4 text-[12px] font-[700] rounded-md focus:outline-none">
            Get it Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Forrenttab