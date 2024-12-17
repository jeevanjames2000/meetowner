import Generalapi from '@/components/api/Generalapi'
import Propertyapi from '@/components/api/Propertyapi'
import Errorpanel from '@/components/shared/Errorpanel'
import LoadingOverlay from '@/components/shared/LoadingOverlay'
import { usePropertyDetails } from '@/components/zustand/usePropertyDetails'
import { useUserDetails } from '@/components/zustand/useUserDetails'
import { Modal, Select } from '@nayeshdaggula/tailify'
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
  const unique_property_id = searchParams.get('unique_property_id')

  const [isLoadingEffect, setIsLoadingEffect] = useState(false)
  const [city, setCity] = useState('')
  const [cityError, setCityError] = useState(false)
  const updateCity = (value) => {
    setCity(value)
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

  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const closeErrorModal = () => {
    setErrorModalOpen(false);
  }
  const [errorMessages, setErrorMessages] = useState({});
  const updateAddress = () => {
    setIsLoadingEffect(true)
    if (city === '') {
      setIsLoadingEffect(false)
      toast.error('Please select city', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setCityError('please enter city')
      return false;
    }
    if (propertyName === '') {
      setIsLoadingEffect(false)
      toast.error('Please enter property name', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setPropertyNameError('please enter property name')
      return false;
    }
    if (locality === '') {
      setIsLoadingEffect(false)
      toast.error('Please Enter locality', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setLocalityError('please enter locality')
      return false;
    }
    if (flatNo === '') {
      setIsLoadingEffect(false)
      toast.error('Please enter flat no', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setFlatNoError('please enter flat no')
      return false;
    }
    if (getpropertyDetails?.property_in === "Commercial" && getpropertyDetails?.property_for === "Sell") {
      if (floorNo === '') {
        setIsLoadingEffect(false)
        toast.error('Please Enter flat no', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        setFloorNoError('please enter floor no')
        return false;
      }
      if (totalFloors === '') {
        setIsLoadingEffect(false)
        toast.error('Please enter total floors', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        setTotalFloorsError('please enter total floors')
        return false;
      }
    }

    Propertyapi.post('/addAddressdetails', {
      city_id: city,
      unit_flat_house_no: flatNo,
      property_name: propertyName,
      floors: floorNo,
      total_floors: totalFloors,
      location_id: locality,
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
          setErrorModalOpen(true);
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
        setErrorModalOpen(true);
        setIsLoadingEffect(false);
        return false;
      })
  }

  useEffect(() => {
    if (addressDetails !== null) {
      setCity(addressDetails?.city_id || '')
      setPropertyName(addressDetails?.property_name || '')
      setFlatNo(addressDetails?.unit_flat_house_no || '')
      setFloorNo(addressDetails?.floors || '')
      setTotalFloors(addressDetails?.total_floors || '')
      setLocality(addressDetails?.location_id || '')
    }
  }, [addressDetails])

  const [allCities, setAllCities] = useState([])
  const getAllCities = () => {
    Generalapi.get('getcities', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      }
    })
      .then((response) => {
        let data = response.data
        if (data.status === 'error') {
          let finalResponse = {
            'message': data.message,
            'server_res': data
          }
          setErrorMessages(finalResponse)
        }
        if (data.status === 'success') {
          setAllCities(data?.cities || [])
          return false;
        }
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
        return false;
      })
  }

  useEffect(() => {
    if (getpropertyDetails?.property_in !== "Commercial" && getpropertyDetails?.property_for !== "Sell") {
      setFloorNo('')
      setTotalFloors('')
    }
  }, [getpropertyDetails])

  useEffect(() => {
    getAllCities()
  }, [])

  return (
    <>
      <div className='relative'>
        <div className='py-2 bg-[#E2EAED]'>
          <p className='text-lg font-bold text-[#1D3A76] text-center font-sans'>Add Address</p>
        </div>
        <div className='w-full overflow-y-auto px-5 py-3 h-[calc(100vh-220px)]'>
          <div className='mb-5'>
            <div className='w-[100%]'>
              <Select
                label='City'
                labelClassName='!text-[#1D3A76] text-[13px] font-medium font-sans'
                data={allCities}
                searchable
                withAsterisk
                value={city}
                onChange={updateCity}
                inputClassName='focus:ring-blue-500 focus:border-blue-500'
                className='!m-0 !p-0'
                dropdownClassName='min-h-[100px] max-h-[200px] z-50 overflow-y-auto'                
              />
            </div>
            {cityError && <p className='text-[#FF0000] text-xs font-sans'>Please select one</p>}
          </div>
          <div className='my-4'>
            <div className='flex gap-1'>
              <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Property/project Name</p>
              <IconAsterisk size={8} color='#FF0000' />
            </div>
            <input
              type='text'
              placeholder='Building /Apartment/Society Name'
              className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans '
              autoComplete='off'
              value={propertyName}
              onChange={updatePropertyName}
            />
            {propertyNameError && <p className='text-[#FF0000] text-xs font-sans'>Please enter property name</p>}
          </div>
          <div className='my-4'>
            <div className='flex gap-1'>
              <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Locality</p>
              <IconAsterisk size={8} color='#FF0000' />
            </div>
            <input
              type='text'
              placeholder='Locality'
              className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans '
              autoComplete='off'
              value={locality}
              onChange={updateLocality}
            />
            {localityError && <p className='text-[#FF0000] text-xs font-sans'>Please enter locality</p>}
          </div>
          <div className='my-4'>
            <div className='flex gap-1'>
              <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Flat No.</p>
              <IconAsterisk size={8} color='#FF0000' />
            </div>
            <input
              type='number'
              placeholder='Flat No.'
              className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans '
              autoComplete='off'
              value={flatNo}
              onChange={updateFlatNo}
            />
            {flatNoError && <p className='text-[#FF0000] text-xs font-sans'>Please enter Flat No.</p>}
          </div>
          {
            getpropertyDetails?.property_for === "Sell" &&
            <>
              <div className='my-4'>
                <div className='flex gap-1'>
                  <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Floor No.</p>
                  <IconAsterisk size={8} color='#FF0000' />
                </div>
                <input
                  type='number'
                  placeholder='Floor No.'
                  className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans '
                  autoComplete='off'
                  value={floorNo}
                  onChange={updateFloorNo}
                />
                {floorNoError && <p className='text-[#FF0000] text-xs font-sans'>Please enter floor No.</p>}
              </div>
              <div className='my-4'>
                <div className='flex gap-1'>
                  <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Total Floors</p>
                  <IconAsterisk size={8} color='#FF0000' />
                </div>
                <input
                  type='number'
                  placeholder='Toatl Floors'
                  className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans '
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
        <LoadingOverlay isLoading={isLoadingEffect} />
      </div>
      {
        errorModalOpen &&
        <Modal
          open={errorModalOpen}
          onClose={closeErrorModal}
          size="md"
          zIndex={9999}
        >
          <Errorpanel
            errorMessages={errorMessages}
            close={closeErrorModal}
          />
        </Modal>
      }
    </>
  )
}

export default Addresswrapper