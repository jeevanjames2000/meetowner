import Propertyapi from '@/components/api/Propertyapi'
import Errorpanel from '@/components/shared/Errorpanel'
import LoadingOverlay from '@/components/shared/LoadingOverlay'
import { usePropertyDetails } from '@/components/zustand/usePropertyDetails'
import { useUserDetails } from '@/components/zustand/useUserDetails'
import { Modal } from '@nayeshdaggula/tailify'
import { IconAsterisk } from '@tabler/icons-react'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function Addresswrapper({ updateActiveTab, addressDetails }) {

  const userInfo = useUserDetails((state) => state.userInfo)
  let user_id = userInfo?.user_id || null
  let access_token = userInfo?.access_token || null
  const getpropertyDetails = usePropertyDetails((state) => state.propertydetails)

  const searchParams = useSearchParams()
  const active_step = searchParams.get('active_step')
  const status = searchParams.get('status')
  const unique_property_id = searchParams.get('unique_property_id')

  const [isLoadingEffect, setIsLoadingEffect] = useState(false)
  const [city, setCity] = useState('')
  const [cityError, setCityError] = useState(false)
  const updateCity = (e) => {
    setCity(e.target.value)
    setCityError(false)
  }

  const [propertyName, setPropertyName] = useState('')
  const [propertyNameError, setPropertyNameError] = useState('')
  const updatePropertyName = (e) => {
    setPropertyName(e.target.value)
    setPropertyNameError('')
  }

  const [locality, setLocality] = useState('')
  const [localityError, setLocalityError] = useState('')
  const updateLocality = (e) => {
    setLocality(e.target.value)
    setLocalityError('')
  }

  const [flatNo, setFlatNo] = useState('')
  const [flatNoError, setFlatNoError] = useState('')
  const updateFlatNo = (e) => {
    setFlatNo(e.target.value)
    setFlatNoError('')
  }

  const [floorNo, setFloorNo] = useState('')
  const [floorNoError, setFloorNoError] = useState('')
  const updateFloorNo = (e) => {
    setFloorNo(e.target.value)
    setFloorNoError('')
  }

  const [totalFloors, setTotalFloors] = useState('')
  const [totalFloorsError, setTotalFloorsError] = useState('')
  const updateTotalFloors = (e) => {
    setTotalFloors(e.target.value)
    setTotalFloorsError('')
  }

  const [isModalOpen, setModalOpen] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const updateAddress = () => {
    setIsLoadingEffect(true)
    if (city === '') {
      setIsLoadingEffect(false)
      setCityError('please enter city')
      return false;
    }
    if (propertyName === '') {
      setIsLoadingEffect(false)
      setPropertyNameError('please enter property name')
      return false;
    }
    if (locality === '') {
      setIsLoadingEffect(false)
      setLocalityError('please enter locality')
      return false;
    }
    if (flatNo === '') {
      setIsLoadingEffect(false)
      setFlatNoError('please enter flat no')
      return false;
    }
    if (floorNo === '') {
      setIsLoadingEffect(false)
      setFloorNoError('please enter floor no')
      return false;
    }
    if (totalFloors === '') {
      setIsLoadingEffect(false)
      setTotalFloorsError('please enter total floors')
      return false;
    }

    Propertyapi.post('/addAddressdetails', {
      city_id: city,
      unit_flat_house_no: flatNo,
      floors: floorNo,
      total_floors: totalFloors,
      unique_property_id: unique_property_id,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      }
    })
      .then((response) => {
        let data = response.data
        if (data.status === 'error') {
          let finalresponse = {
            'message': data.message,
            'server_res': data
          }
          setErrorMessages(finalresponse);
          setModalOpen(true);
          setIsLoadingEffect(false);
          return false;
        }
        toast.success('address details added successfully', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        let property_id = data?.property?.unique_property_id
        updateActiveTab('photos', 'inprogress', property_id)

      })
      .catch((error) => {
        console.log(error)
        let finalresponse;
        if (error.response !== undefined) {
          finalresponse = {
            'message': error.message,
            'server_res': error.response.data
          };
        } else {
          finalresponse = {
            'message': error.message,
            'server_res': null
          };
        }
        setErrorMessages(finalresponse);
        setModalOpen(true);
        setIsLoadingEffect(false);
        return false;
      })

  }

  useEffect(() => {
    if (addressDetails !== null) {
      setCity(addressDetails?.city_id)
      setPropertyName(addressDetails?.unit_flat_house_no)
      setLocality(addressDetails?.locality)
      setFlatNo(addressDetails?.unit_flat_house_no)
      setFloorNo(addressDetails?.floors)
      setTotalFloors(addressDetails?.total_floors)
    }
  }, [addressDetails])
  return (
    <>
      <div className='relative'>
        <div className='py-2 bg-[#E2EAED]'>
          <p className='text-lg font-bold text-[#1D3A76] text-center font-sans'>Add Address</p>
        </div>
        <div className='w-full overflow-y-auto px-5 py-3' style={{ height: 'calc(100vh - 220px)' }}>
          <div className='my-4'>
            <div className='flex gap-1'>
              <p className='text-[#1D3A76] text-sm font-medium font-sans'>City</p>
              <IconAsterisk size={8} color='#FF0000' />
            </div>
            <input
              type='text'
              placeholder='Search city'
              className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-sm font-sans '
              autoComplete='off'
              value={city}
              onChange={updateCity}
            />
            {cityError && <p className='text-[#FF0000] text-xs font-sans'>Please enter city</p>}
          </div>
          <div className='my-4'>
            <div className='flex gap-1'>
              <p className='text-[#1D3A76] text-sm font-medium font-sans'>Property/project Name</p>
              <IconAsterisk size={8} color='#FF0000' />
            </div>
            <input
              type='text'
              placeholder='Building /Apartment/Society Name'
              className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-sm font-sans '
              autoComplete='off'
              value={propertyName}
              onChange={updatePropertyName}
            />
            {propertyNameError && <p className='text-[#FF0000] text-xs font-sans'>Please enter property name</p>}
          </div>
          <div className='my-4'>
            <div className='flex gap-1'>
              <p className='text-[#1D3A76] text-sm font-medium font-sans'>Locality</p>
              <IconAsterisk size={8} color='#FF0000' />
            </div>
            <input
              type='text'
              placeholder='Locality'
              className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-sm font-sans '
              autoComplete='off'
              value={locality}
              onChange={updateLocality}
            />
            {localityError && <p className='text-[#FF0000] text-xs font-sans'>Please enter locality</p>}
          </div>
          <div className='my-4'>
            <div className='flex gap-1'>
              <p className='text-[#1D3A76] text-sm font-medium font-sans'>Flat No.</p>
              <IconAsterisk size={8} color='#FF0000' />
            </div>
            <input
              type='number'
              placeholder='Flat No.'
              className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-sm font-sans '
              autoComplete='off'
              value={flatNo}
              onChange={updateFlatNo}
            />
            {flatNoError && <p className='text-[#FF0000] text-xs font-sans'>Please enter Flat No.</p>}
          </div>
          {
            (getpropertyDetails?.property_in === "Commercial" && getpropertyDetails?.property_for === "Sell") &&
            <>
              <div className='my-4'>
                <div className='flex gap-1'>
                  <p className='text-[#1D3A76] text-sm font-medium font-sans'>Floor No.</p>
                  <IconAsterisk size={8} color='#FF0000' />
                </div>
                <input
                  type='number'
                  placeholder='Floor No.'
                  className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-sm font-sans '
                  autoComplete='off'
                  value={floorNo}
                  onChange={updateFloorNo}
                />
                {floorNoError && <p className='text-[#FF0000] text-xs font-sans'>Please enter floor No.</p>}
              </div>
              <div className='my-4'>
                <div className='flex gap-1'>
                  <p className='text-[#1D3A76] text-sm font-medium font-sans'>Total Floors</p>
                  <IconAsterisk size={8} color='#FF0000' />
                </div>
                <input
                  type='number'
                  placeholder='Toatl Floors'
                  className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-sm font-sans '
                  autoComplete='off'
                  value={totalFloors}
                  onChange={updateTotalFloors}
                />
                {totalFloorsError && <p className='text-[#FF0000] text-xs font-sans'>Please enter total floors</p>}
              </div>
            </>
          }

        </div>

        <div className='flex flex-row justify-between items-center  px-6 pt-3'>
          <div onClick={() => updateActiveTab('propertydetails', 'completed', unique_property_id)} className='bg-[#000] px-8 py-2 rounded-md cursor-pointer'>
            <p className='text-white text-[10px]'>Back</p>
          </div>
          <div onClick={updateAddress} className='border border-[#1D3A76] bg-[#1D3A76] px-8 py-2 rounded-md cursor-pointer'>
            <p className='text-white text-[10px]'>Post property</p>
          </div>
        </div>
      </div>

      <LoadingOverlay isLoading={isLoadingEffect} />

      {isModalOpen &&
        <Modal
          open={isModalOpen}
          onClose={() => setModalOpen(false)}
          size="md"
          zIndex={9999}
        >
          <Errorpanel
            errorMessages={errorMessages}
          />
          <div className='flex flex-row justify-end'>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-2 mx-4 px-4 py-2 text-[12px] bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </Modal>
      }
    </>
  )
}

export default Addresswrapper