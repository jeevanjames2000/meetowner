import { IconAsterisk } from '@tabler/icons-react'
import React, { useState } from 'react'

function Addresswrapper({ updateActiveTab }) {
  const [isLoadingEffect, setIsLoadingEffect] = useState(false)
  const [city, setCity] = useState('')
  const [cityError, setCityError] = useState(false)
  const updateCity = (e) => {
    setCity(e.target.value)
    setCityError(false)
  }

  const [buildingName, setBuildingName] = useState('')
  const [buildingNameError, setBuildingNameError] = useState('')
  const updateBuildingName = (e) => {
    setBuildingName(e.target.value)
    setBuildingNameError('')
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

  const updateAddress = () => {
    setIsLoadingEffect(true)
    if (city === '') {
      setIsLoadingEffect(false)
      setCityError('please enter city')
      return false;
    }
    if (buildingName === '') {
      setIsLoadingEffect(false)
      setBuildingNameError('please enter building name')
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
    updateActiveTab('photos', 'inprogress')

  }
  return (
    <div className='relative'>
      <div className='py-2 bg-[#E2EAED]'>
        <p className='text-lg font-bold text-[#1D3A76] text-center font-sans'>Add Address</p>
      </div>
      <div className='w-full overflow-y-auto px-5 py-3' style={{ height: 'calc(100vh - 220px)' }}>
        <div className='my-4'>
          <div className='flex gap-1'>
            <p className='text-[#1D3A76] text-sm font-medium font-sans'>Search City</p>
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
            <p className='text-[#1D3A76] text-sm font-medium font-sans'>Building /Apartment/Society Name</p>
            <IconAsterisk size={8} color='#FF0000' />
          </div>
          <input
            type='text'
            placeholder='Building /Apartment/Society Name'
            className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-sm font-sans '
            autoComplete='off'
            value={buildingName}
            onChange={updateBuildingName}
          />
          {buildingNameError && <p className='text-[#FF0000] text-xs font-sans'>Please enter building name</p>}
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
            type='text'
            placeholder='Flat No.'
            className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-sm font-sans '
            autoComplete='off'
            value={flatNo}
            onChange={updateFlatNo}
          />
          {flatNoError && <p className='text-[#FF0000] text-xs font-sans'>Please enter Flat No.</p>}
        </div>
        <div className='my-4'>
          <div className='flex gap-1'>
            <p className='text-[#1D3A76] text-sm font-medium font-sans'>Floor No.</p>
            <IconAsterisk size={8} color='#FF0000' />
          </div>
          <input
            type='text'
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
            type='text'
            placeholder='Toatl Floors'
            className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-sm font-sans '
            autoComplete='off'
            value={totalFloors}
            onChange={updateTotalFloors}
          />
          {totalFloorsError && <p className='text-[#FF0000] text-xs font-sans'>Please enter total floors</p>}
        </div>
      </div>

      <div className='flex flex-row justify-between items-center  px-6 pt-3'>
        <div onClick={() => { updateActiveTab('propertydetails', 'completed') }} className='bg-[#000] px-8 py-2 rounded-md cursor-pointer'>
          <p className='text-white text-[10px]'>Back</p>
        </div>
        <div onClick={updateAddress} className='border border-[#1D3A76] bg-[#1D3A76] px-8 py-2 rounded-md cursor-pointer'>
          <p className='text-white text-[10px]'>Post property</p>
        </div>
      </div>
    </div>
  )
}

export default Addresswrapper