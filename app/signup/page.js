import Header from '@/components/header/Header'
import React from 'react'
import signup_bg from '@/public/assets/signup_bg.jpg'
import signup_list from '@/public/assets/signup_list.svg'
import person_with_laptop from '@/public/assets/person_with_laptop.png'
import Image from 'next/image'
import Signupform from '@/components/signup/Signupform'
import Userapi from '@/components/api/Userapi'

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


  return (
    <>
      <Header />
      <div className="overflow-hidden relative" style={{ height: 'calc(100vh - 65px)' }}>
        <Image
          src={signup_bg}
          className="h-full w-full object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 grid grid-cols-12 gap-20 pt-12 px-32">
          {/* Left Column */}
          <div className="col-span-6 space-y-4">
            <p className="text-[24px] text-[#ffffff] font-[600] font-sans">
              Lorem Ipsum is simply dummy text
            </p>
            <ul className="space-y-4">
              {/* First List Item */}
              <li className="flex items-center gap-2">
                <Image
                  src={signup_list}
                  alt="Image 1"
                  className="rounded-full h-4 w-4"
                />
                <span className="text-[16px] text-[#ffffff] font-[600] font-sans">
                  Lorem Ipsum1
                </span>
              </li>
              {/* Second List Item */}
              <li className="flex items-center gap-2">
                <Image
                  src={signup_list}
                  alt="Image 2"
                  className="rounded-full h-4 w-4"
                />
                <span className="text-[16px] text-[#ffffff] font-[600] font-sans">
                  Lorem Ipsum2
                </span>
              </li>
              {/* Third List Item */}
              <li className="flex items-center gap-2">
                <Image
                  src={signup_list}
                  alt="Image 3"
                  className="rounded-full h-4 w-4"
                />
                <span className="text-[16px] text-[#ffffff] font-[600] font-sans">
                  Lorem Ipsum3
                </span>
              </li>
            </ul>
            <Image
              src={person_with_laptop}
              alt="Person with Laptop"
              className="mt-4"
              height={400}
              width={400}
            />
          </div>
 
          {/* Right Column */}
          <div className="flex items-center justify-start col-span-6">
            <Signupform
              usertypedata={filteredusertypedata}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default page

async function getUsertypesfetch() {
  try {
    const response = await Userapi.get('/usertypes');
    const data = response.data;
    console.log('data:', data);
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