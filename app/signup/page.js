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
        <div className=" grid grid-cols-12 w-full gap-[5%]   md:px-10 xl:px-32 lg:px-32 3xl:px-60 items-center justify-between">
          {/* Left Column */}
          <div className="col-span-6 space-y-4 hidden md:block">
            <p className="heading1  text-[#ffffff] font-[600] font-sans">
              Lorem Ipsum is simply dummy text
            </p>
            <ul className="space-y-[3%] ">
              {/* First List Item */}
              <li className="flex items-center gap-[1.5%]">
                <Image
                  src={signup_list}
                  alt="Image 1"
                  className="imageList rounded-full"
                />
                <span className="lists text-[#ffffff] font-[600] font-sans">
                  Lorem Ipsum1
                </span>
              </li>
              {/* Second List Item */}
              <li className="flex items-center gap-[1.5%]">
                <Image
                  src={signup_list}
                  alt="Image 1"
                  className="imageList rounded-full"
                />
                <span className="lists text-[#ffffff] font-[600] font-sans">
                  Lorem Ipsum2
                </span>
              </li>
              {/* Third List Item */}
              <li className="flex items-center gap-[1.5%]">
                <Image
                  src={signup_list}
                  alt="Image 1"
                  className="imageList rounded-full"
                />
                <span className="lists text-[#ffffff] font-[600] font-sans">
                  Lorem Ipsum3
                </span>
              </li>
            </ul>
            <div className='pt-0 2xl:pt-[4%]'>
              <Image
                src={person_with_laptop}
                alt="Person with Laptop"
                className="mt-4  2xl:h-fit 2xl:w-[90%] 3xl:h-fit 3xl:w-[80%] object-cover"
                height={400}
                width={400}
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