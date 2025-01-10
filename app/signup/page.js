import Header from '@/components/header/Header'
import React from 'react'
import signup_bg from '@/public/assets/approperties-bg.png'
import signup_list from '@/public/assets/signup_list.svg'
import person_with_laptop from '@/public/assets/person_with_laptop.png'
import Image from 'next/image'
import Signupform from '@/components/signup/Signupform'
import Userapi from '@/components/api/Userapi'
import Generalapi from '@/components/api/Generalapi'

async function page() {
  const getusertypesfetch = await getUsertypesfetch();

  //check error getusertypesfetch
  if (getusertypesfetch.status === 'error') {
    return (
      <div>
        <p>Error fetching order types</p>
      </div>
    )
  }

  const usertypedata = getusertypesfetch.usertypedata;

  const filteredusertypedata = usertypedata.filter(
    (type) => type.label !== "admin" && type.label !== "user"
  );

  const getcities = await getCities();
  if (getcities.status === 'error') {
    return (
      <div>
        <p>Error fetching cities</p>
      </div>
    )
  }
  const cities = getcities.cities;

  return (
    <div className='loginpage h-[100vh]' style={{
      backgroundImage: `url(${signup_bg.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <Header />
      <div className="overflow-hidden flex  justify-center items-center h-[calc(100vh-65px)] 3xl:h-[calc(100vh-120px)]">
        <div className=" grid grid-cols-12 w-full gap-[5%] md:px-10 xl:px-32 lg:px-32 3xl:px-60 items-center justify-between">
          {/* Left Column */}
          <div className="col-span-6 space-y-3 hidden md:block">
            <p className="heading1  text-[#ffffff] text-md font-[600] font-sans">
              Free Listings for Builders & Partners!
            </p>
            <div className='space-y-2'>
              <p className="heading2 text-[#ffffff] font-[400] font-sans text-[13px]"> 📢 Attention Builders & Channel Partners! </p>
              <p className="heading3 text-[#ffffff] font-[400] font-sans text-[13px]"> MeetOwner is offering FREE PROPERTY LISTINGS to help you showcase your projects to the right audience. </p>
            </div>
            <div className='space-y-1'>
              <p className="heading3 text-[#ffffff] font-[400] font-sans text-[13px]"> 🔑 Why Choose MeetOwner? </p>
              <p className="heading3 text-[#ffffff] text-[13px] font-[400] font-sans"> ✅ Direct connections with buyers & tenants</p>
              <p className="heading3 text-[#ffffff] text-[13px] font-[400] font-sans"> ✅ Showcase your properties with ease</p>
              <p className="heading3 text-[#ffffff] text-[13px] font-[400] font-sans"> 🏡 Don’t wait! Start listing your properties today!</p>
            </div>
            <div className='pt-0 2xl:pt-[4%]'>
              <Image
                src={person_with_laptop}
                alt="Person with Laptop"
                className="mt-6 md:w-[70%] 2xl:h-fit 2xl:w-[90%] 3xl:h-fit 3xl:w-[80%] object-cover"
                height={200}
                width={300}
              />
            </div>
          </div>
          <Signupform
            usertypedata={filteredusertypedata}
            cities={cities}
          />
        </div>
      </div>
    </div>
  )
}

export default page

async function getUsertypesfetch() {
  try {
    const response = await Userapi.get('/usertypes');
    const data = response.data;
    if (data.status === 'error') {
      let data = {
        status: 'error',
        message: 'Error fetching user types',
        usertypedata: [],
      }
      return data;
    }
    let finaldata = {
      status: 'success',
      message: 'user types fetched successfully',
      usertypedata: data.usertypes,
    }
    return finaldata;
  } catch (error) {
    console.error('Error fetching user types:', error);
    let finaldata = {
      status: 'error',
      message: 'Error fetching user types',
      usertypedata: [],
    }
    return finaldata;
  }
}

async function getCities() {
  try {
    const response = await Generalapi.get('/getcities');
    const data = response.data;
    if (data.status === 'error') {
      let data = {
        status: 'error',
        message: 'Error fetching cities',
        cities: [],
      }
      return data;
    }
    let finaldata = {
      status: 'success',
      message: 'cities fetched successfully',
      cities: data.cities,
    }
    return finaldata;
  } catch (error) {
    console.error('Error fetching cities:', error);
    let finaldata = {
      status: 'error',
      message: 'Error fetching cities',
      cities: [],
    }
    return finaldata;
  }
}