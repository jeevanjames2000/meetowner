'use client'
import LoadingOverlay from '@/components/shared/LoadingOverlay'
import { Modal, Select, Textarea } from '@nayeshdaggula/tailify'
import React, { useEffect, useState } from 'react'
import Addfurnishingswrapper from './Addfurnishingswrapper';
import { IconAsterisk } from '@tabler/icons-react';
import { useUserDetails } from '@/components/zustand/useUserDetails';
import Propertyapi from '@/components/api/Propertyapi';
import { useSearchParams } from 'next/navigation';
import Errorpanel from '@/components/shared/Errorpanel';
import { toast } from 'react-toastify';
import { usePropertyDetails } from '@/components/zustand/usePropertyDetails';
function Propertydetailswrapper({ updateActiveTab, propertyDetails, preferedTenantList, bacloniesList, bedroomtypesList, businesstypesList, facingList }) {
  const userInfo = useUserDetails((state) => state.userInfo)
  let user_id = userInfo?.user_id || null
  let access_token = userInfo?.access_token || null
  const getpropertyDetails = usePropertyDetails((state) => state.propertydetails)

  const searchParams = useSearchParams()
  const unique_property_id = searchParams.get('unique_property_id')

  const [isLoadingEffect, setIsLoadingEffect] = useState(false)
  const [propertySubType, setPropertySubType] = useState('')
  const [propertySubTypeError, setPropertySubTypeError] = useState('')
  const updatePropertySubType = (type) => {
    setPropertySubType(type)
    setPropertySubTypeError('')
  }
  const [constructionStatus, setConstructionStatus] = useState('')
  const [constructionStatusError, setConstructionStatusError] = useState('')
  const updateConstructionStatus = (status) => {
    setConstructionStatus(status)
    setConstructionStatusError('')
  }

  const [bhk, setBhk] = useState('')
  const [bhkError, setBhkError] = useState('')
  const updateBhk = (bhk) => {
    setBhk(bhk)
    setBhkError('')
    setCustomBhk('')
  }

  const [customBhk, setCustomBhk] = useState('')
  const [customBhkError, setCustomBhkError] = useState('')
  const updateCustomBhk = (e) => {
    setCustomBhk(e.target.value)
    setCustomBhkError('')
  }

  const [bathroom, setBathroom] = useState('')
  const [bathroomError, setBathroomError] = useState('')
  const updateBathroom = (bathroom) => {
    setBathroom(bathroom)
    setBathroomError('')
    setCustomBalcony('')
  }

  const [balcony, setBalcony] = useState('')
  const [balconyError, setBalconyError] = useState('')
  const updateBalcony = (balcony) => {
    setBalcony(balcony)
    setBalconyError('')
    setCustomBalcony('')
  }

  const [customBathroom, setCustomBathroom] = useState('')
  const [customBathroomError, setCustomBathroomError] = useState('')
  const updateCustomBathroom = (e) => {
    setCustomBathroom(e.target.value)
    setCustomBathroomError('')
  }

  const [customBalcony, setCustomBalcony] = useState('')
  const [customBalconyError, setCustomBalconyError] = useState('')
  const updateCustomBalcony = (e) => {
    setCustomBalcony(e.target.value)
    setCustomBalconyError('')
  }

  const [furnishType, setFurnishType] = useState('')
  const [furnishTypeError, setFurnishTypeError] = useState('')
  const updateFurnishType = (type) => {
    setFurnishType(type)
    setFurnishTypeError('')
  }

  const [availableFromDate, setAvailableFromDate] = useState('')
  const [availableFromDateError, setAvailableFromDateError] = useState('')
  const updateAvailableFromDate = (e) => {
    setAvailableFromDate(e.target.value)
    setAvailableFromDateError('')
  }

  const [possessionEndDate, setPossessionEndDate] = useState('')
  const [possessionEndDateError, setPossessionEndDateError] = useState('')
  const updatePossessionEndDate = (e) => {
    setPossessionEndDate(e.target.value)
    setPossessionEndDateError('')
  }

  const [ageofProperty, setAgeofProperty] = useState('')
  const [ageofPropertyError, setAgeofPropertyError] = useState('')
  const updateAgeofProperty = (value) => {
    setAgeofProperty(value)
    setAgeofPropertyError('')
  }

  const [carParking, setCarParking] = useState('')
  const [carParkingError, setCarParkingError] = useState('')
  const updateCarParking = (parking) => {
    setCarParking(parking)
    setCarParkingError('')
    setCustomCarParking('')
  }

  const [customCarParking, setCustomCarParking] = useState('')
  const [customCarParkingError, setCustomCarParkingError] = useState('')
  const updateCustomCarParking = (e) => {
    setCustomCarParking(e.target.value)
    setCustomCarParkingError('')
  }

  const [openParking, setOpenParking] = useState('')
  const [openParkingError, setOpenParkingError] = useState('')
  const updateOpenParking = (parking) => {
    setOpenParking(parking)
    setOpenParkingError('')
    setCustomOpenParking('')
  }
  const [customOpenParking, setCustomOpenParking] = useState('')
  const [customOpenParkingError, setCustomOpenParkingError] = useState('')
  const updateCustomOpenParking = (e) => {
    setCustomOpenParking(e.target.value)
    setCustomOpenParkingError('')
  }

  const [monthlyRent, setMonthlyRent] = useState('')
  const [monthlyRentError, setMonthlyRentError] = useState('')
  const updateMonthlyRent = (e) => {
    setMonthlyRent(e.target.value)
    setMonthlyRentError('')
  }

  const [maintenceCharges, setMaintenceCharges] = useState('')
  const [maintenceChargesError, setMaintenceChargesError] = useState('')
  const updateMaintenceCharges = (e) => {
    setMaintenceCharges(e.target.value)
    setMaintenceChargesError('')
  }

  const [securityDeposit, setSecurityDeposit] = useState('')
  const [securityDepositError, setSecurityDepositError] = useState('')
  const updateSecurityDeposit = (deposit) => {
    setSecurityDeposit(deposit)
    setSecurityDepositError('')
  }

  const [lockInPeriod, setLockInPeriod] = useState('')
  const [lockInPeriodError, setLockInPeriodError] = useState('')
  const updateLockInPeriod = (period) => {
    setLockInPeriod(period)
    setLockInPeriodError('')
  }

  const [preferredTenantType, setPreferredTenantType] = useState('')
  const [preferredTenantTypeError, setPreferredTenantTypeError] = useState('')
  const updatePreferredTenantType = (type) => {
    setPreferredTenantType(type)
    setPreferredTenantTypeError('')
  }

  const [builtupArea, setBuiltupArea] = useState('')
  const [builtupAreaError, setBuiltupAreaError] = useState('')
  const updateBuiltupArea = (e) => {
    setBuiltupArea(e.target.value)
    setBuiltupAreaError('')
  }
  const [carpetArea, setCarpetArea] = useState('')
  const [carpetAreaError, setCarpetAreaError] = useState('')
  const updateCarpetArea = (e) => {
    setCarpetArea(e.target.value)
    setCarpetAreaError('')
  }
  const [lengthArea, setLengthArea] = useState('')
  const [lengthAreaError, setLengthAreaError] = useState('')
  const updateLengthArea = (e) => {
    setLengthArea(e.target.value)
    setLengthAreaError('')
  }
  const [plotArea, setPlotArea] = useState('')
  const [plotAreaError, setPlotAreaError] = useState('')
  const updatePlotArea = (e) => {
    setPlotArea(e.target.value)
    setPlotAreaError('')
  }
  const [widthArea, setWidthArea] = useState('')
  const [widthAreaError, setWidthAreaError] = useState('')
  const updateWidthArea = (e) => {
    setWidthArea(e.target.value)
    setWidthAreaError('')
  }
  const [brokerage, setBrokerage] = useState('')
  const [brokerageError, setBrokerageError] = useState('')
  const updateBrokerage = (brokerage) => {
    setBrokerage(brokerage)
    setBrokerageError('')
  }

  const [facing, setFacing] = useState('')
  const [facingError, setFacingError] = useState('')
  const updateFacing = (facing) => {
    setFacing(facing)
    setFacingError('')
  }
  const [address, setAddress] = useState('')
  const [addressError, setAddressError] = useState('')
  const updateAddress = (e) => {
    setAddress(e.target.value)
    setAddressError('')
  }
  const [servantRoom, setServantRoom] = useState('')
  const [servantRoomError, setServantRoomError] = useState('')
  const updateServantRoom = (room) => {
    setServantRoom(room)
    setServantRoomError('')
  }

  const [reraApproved, setReraApproved] = useState('')
  const [reraApprovedError, setReraApprovedError] = useState('')
  const updateReraApproved = (rera) => {
    setReraApproved(rera)
    setReraApprovedError('')
  }

  const [propertyDescription, setPropertyDescription] = useState('')
  const [propertyDescriptionError, setPropertyDescriptionError] = useState('')
  const updatePropertyDescription = (e) => {
    setPropertyDescription(e.target.value)
    setPropertyDescriptionError('')
  }

  const [unitCost, setUnitCost] = useState('')
  const [unitCostError, setUnitCostError] = useState('')
  const updateUnitCost = (e) => {
    setUnitCost(e.target.value)
    setUnitCostError('')
  }

  const [propertyCost, setPropertyCost] = useState('')
  const [propertyCostError, setPropertyCostError] = useState('')
  const updatePropertyCost = (e) => {
    setPropertyCost(e.target.value)
    setPropertyCostError('')
  }

  const [ownerShip, setOwnerShip] = useState('')
  const [ownerShipError, setOwnerShipError] = useState('')
  const updateOwnerShip = (value) => {
    setOwnerShip(value)
    setOwnerShipError('')
  }

  const [areaUnits, setAreaUnits] = useState('sq.ft')
  const [areaUnitsError, setAreaUnitsError] = useState('')
  const updateAreaUnits = (value) => {
    setAreaUnits(value)
    setAreaUnitsError('')
  }

  const [pentHouse, setPentHouse] = useState('')
  const [pentHouseError, setPentHouseError] = useState('')
  const updatePentHouse = (value) => {
    setPentHouse(value)
    setPentHouseError('')
  }

  const [bikeParking, setBikeParking] = useState('')
  const [bikeParkingError, setBikeParkingError] = useState('')
  const updateBikeParking = (value) => {
    setBikeParking(value)
    setBikeParkingError('')
    setCustomBikeParking('')
  }

  const [customBikeParking, setCustomBikeParking] = useState('')
  const [customBikeParkingError, setCustomBikeParkingError] = useState('')
  const updateCustomBikeParking = (e) => {
    setCustomBikeParking(e.target.value)
    setCustomBikeParkingError('')
  }

  const [otherInfo, setOtherInfo] = useState('')
  const [otherInfoError, setOtherInfoError] = useState('')
  const updateOtherInfo = (e) => {
    setOtherInfo(e.target.value)
    setOtherInfoError('')
  }

  const [facilities, setFacilities] = useState({
    Lift: false,
    CCTV: false,
    Gym: false,
    Garden: false,
    Club_House: false,
    Sports: false,
    Swimming_Pool: false,
    Intercom: false,
    Power_Backup: false,
    Gated_Community: false,
    EntryorExit: false,
    Regular_Water: false,
    Community_Hall: false,
    Pet_Allowed: false,
    Outdoor_Fitness_Station: false,
    Half_Basket_Ball_Court: false,
    Gazebo: false,
    Badmenton_Court: false,
    Children_Play_area: false,
    Ample_Greenery: false,
    Water_Harvesting_Pit: false,
    Water_Softner: false,
    Solar_Fencing: false,
    Security_Cabin: false,
    Lawn: false,
    Transformer_Yard: false,
    Amphitheatre: false,
    Lawn_with_Stepping_Stones: false

  });

  // Handler function to toggle checkboxes
  const updateFacilties = (event) => {
    const { id, checked } = event.target;
    setFacilities((prevState) => ({
      ...prevState,
      [id]: checked, // Update the selected facility
    }));
  };

  const [passengerLifts, setPassengerLifts] = useState('')
  const [passengerLiftsError, setPassengerLiftsError] = useState('')
  const updatePassengerLifts = (e) => {
    setPassengerLifts(e.target.value)
    setPassengerLiftsError('')
  }

  const [serviceLifts, setServiceLifts] = useState('')
  const [serviceLiftsError, setServiceLiftsError] = useState('')
  const updateServiceLifts = (e) => {
    setServiceLifts(e.target.value)
    setServiceLiftsError('')
  }

  const [stairCases, setStairCases] = useState('')
  const [stairCasesError, setStairCasesError] = useState('')
  const updateStairCases = (e) => {
    setStairCases(e.target.value)
    setStairCasesError('')
  }

  const [privateParking, setPrivateParking] = useState('')
  const [privateParkingError, setPrivateParkingError] = useState('')
  const updatePrivateParking = (e) => {
    setPrivateParking(e.target.value)
    setPrivateParkingError('')
  }

  const [publicParking, setPublicParking] = useState('')
  const [publicParkingError, setPublicParkingError] = useState('')
  const updatePublicParking = (e) => {
    setPublicParking(e.target.value)
    setPublicParkingError('')
  }

  const [privateWashrooms, setPrivateWashrooms] = useState('')
  const [privateWashroomsError, setPrivateWashroomsError] = useState('')
  const updatePrivateWashrooms = (e) => {
    setPrivateWashrooms(e.target.value)
    setPrivateWashroomsError('')
  }

  const [publicWashrooms, setPublicWashrooms] = useState('')
  const [publicWashroomsError, setPublicWashroomsError] = useState('')
  const updatePublicWashrooms = (e) => {
    setPublicWashrooms(e.target.value)
    setPublicWashroomsError('')
  }


  const [plotNumber, setPlotNumber] = useState('')
  const [plotNumberError, setPlotNumberError] = useState('')
  const updatePlotNumber = (e) => {
    setPlotNumber(e.target.value)
    setPlotNumberError('')
  }

  const [flatNumber, setFlatNumber] = useState('')
  const [flatNumberError, setFlatNumberError] = useState('')
  const updateFlatNumber = (e) => {
    setFlatNumber(e.target.value)
    setFlatNumberError('')
  }

  const [suitableFor, setSuitableFor] = useState('')
  const [suitableForError, setSuitableForError] = useState('')
  const updateSuitableFor = (value) => {
    setSuitableFor(value)
    setSuitableForError('')
  }

  const [zoneType, setZoneType] = useState('')
  const [zoneTypeError, setZoneTypeError] = useState('')
  const updateZoneType = (value) => {
    setZoneType(value)
    setZoneTypeError('')
  }

  const [processionStatus, setProcessionStatus] = useState('')
  const [processionStatusError, setProcessionStatusError] = useState('')
  const updateProcessionStatus = (value) => {
    setProcessionStatus(value)
    setProcessionStatusError('')
  }

  const [furnishingModal, setFurnishingModal] = useState(false)
  const openFurnishingModal = () => {
    setFurnishingModal(true)
  }

  const closeFurnishingModal = () => {
    setFurnishingModal(false)
  }
  const [isModalOpen, setModalOpen] = useState(false)
  const [errorMessages, setErrorMessages] = useState('')

  const updatePropertyDetails = () => {
    setIsLoadingEffect(true)
    // if (property_in === "Residencial" && property_for === "Sell") {
    //   if (propertySubType === 'Apartment' || propertySubType === 'Flat' || propertySubType === 'Land' || propertySubType === "Independent House") {
    //     if (bhk === '') {
    //       setIsLoadingEffect(false)
    //       setBhkError('Please select BHK')
    //       return false;
    //     }
    //     if (bathroom === '') {
    //       setIsLoadingEffect(false)
    //       setBathroomError('Please select bathroom')
    //       return false;
    //     }
    //     if (balcony === '') {
    //       setIsLoadingEffect(false)
    //       setBalconyError('Please select balcony')
    //       return false;
    //     }
    //     if (furnishType === '') {
    //       setIsLoadingEffect(false)
    //       setFurnishTypeError('Please select furnish type')
    //       return false;
    //     }
    //     if (builtupArea === '') {
    //       setIsLoadingEffect(false)
    //       setBuiltupAreaError('Please enter builtup area')
    //       return false;
    //     }
    //     if (carpetArea === '') {
    //       setIsLoadingEffect(false)
    //       setCarpetAreaError('Please enter carpet area')
    //       return false;
    //     }
    //     if (unitCost === '') {
    //       setIsLoadingEffect(false)
    //       setUnitCostError('Please enter unit cost')
    //       return false;
    //     }
    //     if (propertyCost === '') {
    //       setIsLoadingEffect(false)
    //       setPropertyCostError('Please enter property cost')
    //       return false;
    //     }
    //   } else {
    //     if (constructionStatus === 1) {
    //       if (availableFromDate === '') {
    //         setIsLoadingEffect(false)
    //         setAvailableFromDateError('Please select available from date')
    //         return false;
    //       }
    //       if (ageofProperty === '') {
    //         setIsLoadingEffect(false)
    //         setAgeofPropertyError('Please enter age of property')
    //         return false;
    //       }
    //       if (plotArea === '') {
    //         setIsLoadingEffect(false)
    //         setPlotAreaError('Please enter plot area')
    //         return false;
    //       }
    //       if (lengthArea === '') {
    //         setIsLoadingEffect(false)
    //         setLengthAreaError('Please enter length area')
    //         return false;
    //       }
    //       if (widthArea === '') {
    //         setIsLoadingEffect(false)
    //         setWidthAreaError('Please enter width area')
    //         return false;
    //       }
    //       if (unitCost === '') {
    //         setIsLoadingEffect(false)
    //         setUnitCostError('Please enter unit cost')
    //         return false;
    //       }
    //       if (propertyCost === '') {
    //         setIsLoadingEffect(false)
    //         setPropertyCostError('Please enter property cost')
    //         return false;
    //       }
    //     }
    //   }
    //   if (constructionStatus === 1 || propertySubType === "Warehouse") {
    //     if (availableFromDate === '') {
    //       setIsLoadingEffect(false)
    //       setAvailableFromDateError('Please select available from date')
    //       return false;
    //     }
    //     if (ageofProperty === '') {
    //       setIsLoadingEffect(false)
    //       setAgeofPropertyError('Please enter age of property')
    //       return false;
    //     }
    //   }
    //   if (constructionStatus !== 1) {
    //     if (possessionEndDate === '') {
    //       setIsLoadingEffect(false)
    //       setPossessionEndDateError('Please select possession end date')
    //       return false;
    //     }
    //   }

    //   if (propertySubType === "Independent House" || propertySubType === "Independent Villa") {
    //     if (pentHouse === '') {
    //       setIsLoadingEffect(false)
    //       setPentHouseError('Please select pent house')
    //       return false;
    //     }
    //   }
    // }

    const selectedFacilities = Object.keys(facilities)
      .filter((key) => facilities[key]) // Filter only `true` values
      .join(", ");

    const getFormattedDateTime = (date) => {
      if (!date) return null;
      return `${date}T00:00:00Z`;
    };

    let unit_flat_house_no;
    if (propertySubType === "Warehouse" || propertySubType === "Plot" || propertySubType === "Others") {
      unit_flat_house_no = plotNumber
    } else {
      unit_flat_house_no = flatNumber
    }

    const new_available_from_date = getFormattedDateTime(availableFromDate)
    const new_possession_end_date = getFormattedDateTime(possessionEndDate)

    let new_bhk;
    if (bhk === '4+') {
      new_bhk = customBhk
    } else {
      new_bhk = bhk
    }

    let new_bathroom;
    if (bathroom === '4+') {
      new_bathroom = customBathroom
    } else {
      new_bathroom = bathroom
    }

    let new_balcony;
    if (balcony === '4+') {
      new_balcony = customBalcony
    } else {
      new_balcony = balcony
    }

    let new_car_parking;
    if (carParking === '4+') {
      new_car_parking = customCarParking
    } else {
      new_car_parking = carParking
    }

    let new_bike_parking;
    if (bikeParking === '4+') {
      new_bike_parking = customBikeParking
    } else {
      new_bike_parking = bikeParking
    }

    let new_open_parking;
    if (openParking === '4+') {
      new_open_parking = customOpenParking
    } else {
      new_open_parking = openParking
    }


    Propertyapi.post('/addproertydetails', {
      sub_type: propertySubType,
      rera_approved: reraApproved,
      occupancy: constructionStatus,
      bedrooms: new_bhk,
      bathroom: new_bathroom,
      balconies: new_balcony,
      furnished_status: furnishType,
      property_age: ageofProperty || null,

      monthly_rent: monthlyRent || null,
      maintenance: maintenceCharges || null,
      security_deposit: securityDeposit || null,
      lock_in: lockInPeriod || null,
      brokerage_charge: brokerage || null,

      area_units: areaUnits || null,
      builtup_area: builtupArea || null,
      carpet_area: carpetArea || null,
      unitCost: unitCost || null,
      property_cost: propertyCost || null,
      facilities: selectedFacilities || null,
      other_info: otherInfo || null,
      // additional
      facing: facing || null,
      car_parking: new_car_parking || null,
      bike_parking: new_bike_parking || null,
      open_parking: new_open_parking || null,
      description: propertyDescription || null,

      lock_in: lockInPeriod || null,
      length_area: parseFloat(lengthArea) || null,
      width_area: parseFloat(widthArea) || null,
      google_address: address || null,

      passenger_lifts: passengerLifts || null,
      service_lifts: serviceLifts || null,
      stair_cases: stairCases || null,
      private_parking: privateParking || null,
      public_parking: publicParking || null,
      private_washrooms: privateWashrooms || null,
      public_washrooms: publicWashrooms || null,
      // 
      available_from: new_available_from_date || null,
      under_construction: new_possession_end_date || null,
      ownership_type: ownerShip || null,
      plot_area: plotArea || null,
      zone_types: zoneType || null,
      pent_house: pentHouse || null,

      builtup_unit: unitCost || null,

      business_types: suitableFor || null,
      unit_flat_house_no: unit_flat_house_no || null,
      user_id: parseInt(user_id),
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
        toast.success('property details added successfully', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        let property_id = data?.property?.unique_property_id
        updateActiveTab('address', 'inprogress', property_id)

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
    if (propertyDetails) {
      setPropertySubType(propertyDetails?.sub_type || '')
      setReraApproved(propertyDetails?.rera_approved || '')
      setConstructionStatus(propertyDetails?.occupancy || '')
      if (parseInt(propertyDetails?.bedrooms) > 4) {
        setBhk('4plus')
        setCustomBhk(propertyDetails?.bedrooms || '')
      } else {
        setBhk(propertyDetails?.bedrooms || '')
        setCustomBhk('')
      }
      if (parseInt(propertyDetails?.bathroom) > 4) {
        setBathroom('4plus')
        setCustomBathroom(propertyDetails?.bathroom || '')
      } else {
        setBathroom(propertyDetails?.bathroom || '')
        setCustomBathroom('')
      }
      if (parseInt(propertyDetails?.balconies) > 4) {
        setBalcony('4plus')
        setCustomBalcony(propertyDetails?.balconies || '')
      } else {
        setBalcony(propertyDetails?.balconies || '')
        setCustomBalcony('')
      }
      setFurnishType(propertyDetails?.furnished_status || '')
      setAgeofProperty(propertyDetails?.property_age || '')
      setAreaUnits(propertyDetails?.area_units || 'sq.ft')
      setBuiltupArea(propertyDetails?.builtup_area || '')
      setCarpetArea(propertyDetails?.carpet_area || '')
      setPropertyCost(propertyDetails?.property_cost || '')
      const facilitiesString = propertyDetails?.facilities || "";
      const selectedFacilities = facilitiesString.split(", ").map((item) => item.trim());
      setFacilities((prevState) => {
        const updatedFacilities = { ...prevState };
        selectedFacilities.forEach((facility) => {
          if (updatedFacilities.hasOwnProperty(facility)) {
            updatedFacilities[facility] = true;
          }
        });
        return updatedFacilities;
      });
      setOtherInfo(propertyDetails?.other_info || '')
      setFacing(propertyDetails?.facing || '')
      if (parseInt(propertyDetails?.car_parking) > 4) {
        setCarParking('4plus')
        setCustomCarParking(propertyDetails?.car_parking || '')
      } else {
        setCarParking(propertyDetails?.car_parking || '')
        setCustomCarParking('')
      }
      if (parseInt(propertyDetails?.bike_parking) > 4) {
        setBikeParking('4plus')
        setCustomBikeParking(propertyDetails?.bike_parking || '')
      } else {
        setBikeParking(propertyDetails?.bike_parking || '')
        setCustomBikeParking('')
      }
      if (parseInt(propertyDetails?.open_parking) > 4) {
        setOpenParking('4plus')
        setCustomOpenParking(propertyDetails?.open_parking || '')
      } else {
        setOpenParking(propertyDetails?.open_parking || '')
        setCustomOpenParking('')
      }

      setMaintenceCharges(propertyDetails?.maintenance || '')
      setBrokerage(propertyDetails?.brokerage_charge || '')
      setLockInPeriod(propertyDetails?.lock_in || '')
      setMonthlyRent(propertyDetails?.monthly_rent || '')
      setSecurityDeposit(propertyDetails?.security_deposit || '')

      setPassengerLifts(propertyDetails?.passenger_lifts || '')
      setServiceLifts(propertyDetails?.service_lifts || '')
      setStairCases(propertyDetails?.stair_cases || '')
      setPrivateParking(propertyDetails?.private_parking || '')
      setPublicParking(propertyDetails?.public_parking || '')
      setPrivateWashrooms(propertyDetails?.private_washrooms || '')
      setPublicWashrooms(propertyDetails?.public_washrooms || '')
      if (propertyDetails?.available_from) {
        let available_from = new Date(propertyDetails?.available_from)
        let available_from_date = available_from?.toISOString().split('T')[0]
        setAvailableFromDate(available_from_date)
      }
      if (propertyDetails?.under_construction) {
        let under_construction = new Date(propertyDetails?.under_construction)
        let under_construction_date = under_construction?.toISOString().split('T')[0]
        setPossessionEndDate(under_construction_date)
      }
      if (propertyDetails?.unit_flat_house_no) {
        if (propertyDetails?.sub_type === "Warehouse" || propertyDetails?.sub_type === "Plot" || propertyDetails?.sub_type === "Others") {
          setPlotNumber(propertyDetails?.unit_flat_house_no || '')
        } else {
          setFlatNumber(propertyDetails?.unit_flat_house_no || '')
        }
      }
      setOwnerShip(propertyDetails?.ownership_type || '')
      setZoneType(propertyDetails?.zone_types || '')
      setUnitCost(propertyDetails?.builtup_unit || '')
      setPlotArea(propertyDetails?.plot_area?.toString() || '')
      setPropertyDescription(propertyDetails?.description || '')
      setAddress(propertyDetails?.google_address || '')
      setLengthArea(propertyDetails?.length_area?.toString() || '')
      setWidthArea(propertyDetails?.width_area?.toString() || '')
      setSuitableFor(propertyDetails?.business_types || '')
      setPentHouse(propertyDetails?.pent_house || '')
    }
  }, [propertyDetails])

  const [allPropertySubTypes, setAllPropertySubTypes] = useState([])
  const getPropertySubTypes = () => {
    Propertyapi.get('getpropertysubtypes', {
      params: {
        user_id: user_id,
        property_in: getpropertyDetails?.property_in
      },
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
          setAllPropertySubTypes(data?.property_sub_type || [])
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



  const [allFloors, setAllFloors] = useState([])
  const getAllFloors = () => {
    Propertyapi.get('getfloors', {
      params: {
        user_id: user_id
      },
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
          }
          setErrorMessages(finalResponse)
        }
        if (data.status === 'success') {
          setAllFloors(data?.floors || [])
          return false;
        }
      }
      )
      .catch((error) => {
        console.log(error)
        let finalresponse;
        if (error.response !== undefined) {
          finalresponse = {
            'message': error.message,
          };
        } else {
          finalresponse = {
            'message': error.message,
          };
        }
        setErrorMessages(finalresponse);
        return false;
      })
  }

  const [allFurnishedTypes, setAllFurnishedTypes] = useState([])
  const getFurnishedTypes = () => {
    Propertyapi.get('getFurnishedStatus', {
      params: {
        user_id: user_id
      },
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
          }
          setErrorMessages(finalResponse)
        }
        if (data.status === 'success') {
          setAllFurnishedTypes(data?.furnished_status || [])
          return false;
        }
      }

      )
      .catch((error) => {
        console.log(error)
        let finalresponse;
        if (error.response !== undefined) {
          finalresponse = {
            'message': error.message,
          };
        }
        else {
          finalresponse = {
            'message': error.message,
          };
        }
        setErrorMessages(finalresponse);
        return false;
      })
  }

  const [allOccupancyTypes, setAllOccupancyTypes] = useState([])
  const getOccupancyTypes = () => {
    Propertyapi.get('getOccupancy', {
      params: {
        user_id: user_id
      },
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
          }
          setErrorMessages(finalResponse)
        }
        if (data.status === 'success') {
          setAllOccupancyTypes(data?.occupancy || [])
          return false;
        }
      }
      )
      .catch((error) => {
        console.log(error)
        let finalresponse;
        if (error.response !== undefined) {
          finalresponse = {
            'message': error.message,
          };
        }
        else {
          finalresponse = {
            'message': error.message,
          };
        }
        setErrorMessages(finalresponse);
        return false;
      })
  }

  const [allOwnerShipTypes, setAllOwnerShipTypes] = useState([])
  const getOwnerShipTypes = () => {
    Propertyapi.get('getOwnerShipType', {
      params: {
        user_id: user_id
      },
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
          }
          setErrorMessages(finalResponse)
        }
        if (data.status === 'success') {
          setAllOwnerShipTypes(data?.ownership_type || [])
          return false;
        }
      }
      )
      .catch((error) => {
        console.log(error)
        let finalresponse;
        if (error.response !== undefined) {
          finalresponse = {
            'message': error.message,
          };
        }
        else {
          finalresponse = {
            'message': error.message,
          };
        }
        setErrorMessages(finalresponse);
        return false;
      })
  }

  const [allZoneTypes, setAllZoneTypes] = useState([])
  const getZoneTypes = () => {
    Propertyapi.get('getZoneTypes', {
      params: {
        user_id: user_id
      },
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
          }
          setErrorMessages(finalResponse)
        }
        if (data.status === 'success') {
          setAllZoneTypes(data?.zone_types || [])
          return false;
        }
      }
      )
      .catch((error) => {
        console.log(error)
        let finalresponse;
        if (error.response !== undefined) {
          finalresponse = {
            'message': error.message,
          };
        }
        else {
          finalresponse = {
            'message': error.message,
          };
        }
        setErrorMessages(finalresponse);
        return false;
      })
  }

  const getAllFacilities = () => {
    Propertyapi.get('getfaclities', {
      params: {
        user_id: user_id
      },
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
          }
          setErrorMessages(finalResponse)
        }
        if (data.status === 'success') {
          setFacilities(data?.facilities)
          return false;
        }
      }
      )
      .catch((error) => {
        console.log(error)
        let finalresponse;
        if (error.response !== undefined) {
          finalresponse = {
            'message': error.message,
          };
        }
        else {
          finalresponse = {
            'message': error.message,
          };
        }
        setErrorMessages(finalresponse);
        return false;
      })
  }

  useEffect(() => {
    if (getpropertyDetails?.property_for === 'Rent') {
      setConstructionStatus('')
      setLengthArea('')
      setPlotArea('')
      setWidthArea('')
      setPentHouse('')
    }
    if (getpropertyDetails?.property_for === 'Sell') {
      setMonthlyRent('')
      setMaintenceCharges('')
      setSecurityDeposit('')
      setLockInPeriod('')
      setPreferredTenantType('')
      setBrokerage('')
    }
    if (getpropertyDetails?.property_in === 'Residencial') {
      setPassengerLifts('')
      setServiceLifts('')
      setStairCases('')
      setPrivateParking('')
      setPublicParking('')
      setPrivateWashrooms('')
      setPublicWashrooms('')
    }
    if (getpropertyDetails?.property_in === 'Commercial') {
      setMonthlyRent('')
      setSecurityDeposit('')
      setBrokerage('')
      setPreferredTenantType('')
    }
  }, [getpropertyDetails])


  useEffect(() => {
    getPropertySubTypes()

    // getAllFloors()
    getFurnishedTypes()
    getOccupancyTypes()
    getOwnerShipTypes()
    getZoneTypes()
    getAllFacilities()
  }, [])

  // const [isFocused, setIsFocused] = useState(false);

  const propertySubTypeIcon = {
    'default': (
      <svg width="40" height="30" viewBox="0 0 53 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M51.2333 38.8667H49.4667V8.83333C49.4667 8.36478 49.2805 7.91543 48.9492 7.58411C48.6179 7.2528 48.1685 7.06667 47.7 7.06667H38.8667V1.76667C38.8667 1.29812 38.6805 0.848759 38.3492 0.517445C38.0179 0.186131 37.5686 0 37.1 0H15.9C15.4315 0 14.9821 0.186131 14.6508 0.517445C14.3195 0.848759 14.1333 1.29812 14.1333 1.76667V14.1333H5.3C4.83145 14.1333 4.38209 14.3195 4.05078 14.6508C3.71946 14.9821 3.53333 15.4315 3.53333 15.9V38.8667H1.76667C1.29812 38.8667 0.848759 39.0528 0.517445 39.3841C0.18613 39.7154 0 40.1648 0 40.6333C0 41.1019 0.18613 41.5512 0.517445 41.8826C0.848759 42.2139 1.29812 42.4 1.76667 42.4H51.2333C51.7019 42.4 52.1512 42.2139 52.4826 41.8826C52.8139 41.5512 53 41.1019 53 40.6333C53 40.1648 52.8139 39.7154 52.4826 39.3841C52.1512 39.0528 51.7019 38.8667 51.2333 38.8667ZM7.06667 17.6667H15.9C16.3685 17.6667 16.8179 17.4805 17.1492 17.1492C17.4805 16.8179 17.6667 16.3685 17.6667 15.9V3.53333H35.3333V8.83333C35.3333 9.30188 35.5195 9.75124 35.8508 10.0826C36.1821 10.4139 36.6315 10.6 37.1 10.6H45.9333V38.8667H31.8V30.0333C31.8 29.5648 31.6139 29.1154 31.2826 28.7841C30.9512 28.4528 30.5019 28.2667 30.0333 28.2667H22.9667C22.4981 28.2667 22.0488 28.4528 21.7174 28.7841C21.3861 29.1154 21.2 29.5648 21.2 30.0333V38.8667H7.06667V17.6667ZM28.2667 38.8667H24.7333V31.8H28.2667V38.8667ZM22.9667 8.83333C22.9667 8.36478 23.1528 7.91543 23.4841 7.58411C23.8154 7.2528 24.2648 7.06667 24.7333 7.06667H28.2667C28.7352 7.06667 29.1846 7.2528 29.5159 7.58411C29.8472 7.91543 30.0333 8.36478 30.0333 8.83333C30.0333 9.30188 29.8472 9.75124 29.5159 10.0826C29.1846 10.4139 28.7352 10.6 28.2667 10.6H24.7333C24.2648 10.6 23.8154 10.4139 23.4841 10.0826C23.1528 9.75124 22.9667 9.30188 22.9667 8.83333ZM22.9667 15.9C22.9667 15.4315 23.1528 14.9821 23.4841 14.6508C23.8154 14.3195 24.2648 14.1333 24.7333 14.1333H28.2667C28.7352 14.1333 29.1846 14.3195 29.5159 14.6508C29.8472 14.9821 30.0333 15.4315 30.0333 15.9C30.0333 16.3685 29.8472 16.8179 29.5159 17.1492C29.1846 17.4805 28.7352 17.6667 28.2667 17.6667H24.7333C24.2648 17.6667 23.8154 17.4805 23.4841 17.1492C23.1528 16.8179 22.9667 16.3685 22.9667 15.9ZM35.3333 15.9C35.3333 15.4315 35.5195 14.9821 35.8508 14.6508C36.1821 14.3195 36.6315 14.1333 37.1 14.1333H40.6333C41.1019 14.1333 41.5512 14.3195 41.8826 14.6508C42.2139 14.9821 42.4 15.4315 42.4 15.9C42.4 16.3685 42.2139 16.8179 41.8826 17.1492C41.5512 17.4805 41.1019 17.6667 40.6333 17.6667H37.1C36.6315 17.6667 36.1821 17.4805 35.8508 17.1492C35.5195 16.8179 35.3333 16.3685 35.3333 15.9ZM17.6667 22.9667C17.6667 23.4352 17.4805 23.8846 17.1492 24.2159C16.8179 24.5472 16.3685 24.7333 15.9 24.7333H12.3667C11.8981 24.7333 11.4488 24.5472 11.1174 24.2159C10.7861 23.8846 10.6 23.4352 10.6 22.9667C10.6 22.4981 10.7861 22.0488 11.1174 21.7174C11.4488 21.3861 11.8981 21.2 12.3667 21.2H15.9C16.3685 21.2 16.8179 21.3861 17.1492 21.7174C17.4805 22.0488 17.6667 22.4981 17.6667 22.9667ZM17.6667 30.0333C17.6667 30.5019 17.4805 30.9512 17.1492 31.2826C16.8179 31.6139 16.3685 31.8 15.9 31.8H12.3667C11.8981 31.8 11.4488 31.6139 11.1174 31.2826C10.7861 30.9512 10.6 30.5019 10.6 30.0333C10.6 29.5648 10.7861 29.1154 11.1174 28.7841C11.4488 28.4528 11.8981 28.2667 12.3667 28.2667H15.9C16.3685 28.2667 16.8179 28.4528 17.1492 28.7841C17.4805 29.1154 17.6667 29.5648 17.6667 30.0333ZM22.9667 22.9667C22.9667 22.4981 23.1528 22.0488 23.4841 21.7174C23.8154 21.3861 24.2648 21.2 24.7333 21.2H28.2667C28.7352 21.2 29.1846 21.3861 29.5159 21.7174C29.8472 22.0488 30.0333 22.4981 30.0333 22.9667C30.0333 23.4352 29.8472 23.8846 29.5159 24.2159C29.1846 24.5472 28.7352 24.7333 28.2667 24.7333H24.7333C24.2648 24.7333 23.8154 24.5472 23.4841 24.2159C23.1528 23.8846 22.9667 23.4352 22.9667 22.9667ZM35.3333 22.9667C35.3333 22.4981 35.5195 22.0488 35.8508 21.7174C36.1821 21.3861 36.6315 21.2 37.1 21.2H40.6333C41.1019 21.2 41.5512 21.3861 41.8826 21.7174C42.2139 22.0488 42.4 22.4981 42.4 22.9667C42.4 23.4352 42.2139 23.8846 41.8826 24.2159C41.5512 24.5472 41.1019 24.7333 40.6333 24.7333H37.1C36.6315 24.7333 36.1821 24.5472 35.8508 24.2159C35.5195 23.8846 35.3333 23.4352 35.3333 22.9667ZM35.3333 30.0333C35.3333 29.5648 35.5195 29.1154 35.8508 28.7841C36.1821 28.4528 36.6315 28.2667 37.1 28.2667H40.6333C41.1019 28.2667 41.5512 28.4528 41.8826 28.7841C42.2139 29.1154 42.4 29.5648 42.4 30.0333C42.4 30.5019 42.2139 30.9512 41.8826 31.2826C41.5512 31.6139 41.1019 31.8 40.6333 31.8H37.1C36.6315 31.8 36.1821 31.6139 35.8508 31.2826C35.5195 30.9512 35.3333 30.5019 35.3333 30.0333Z" fill='#909090' />
      </svg>
    ),
    'Apartment': (
      <svg width="40" height="30" viewBox="0 0 53 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M51.2333 38.8667H49.4667V8.83333C49.4667 8.36478 49.2805 7.91543 48.9492 7.58411C48.6179 7.2528 48.1685 7.06667 47.7 7.06667H38.8667V1.76667C38.8667 1.29812 38.6805 0.848759 38.3492 0.517445C38.0179 0.186131 37.5686 0 37.1 0H15.9C15.4315 0 14.9821 0.186131 14.6508 0.517445C14.3195 0.848759 14.1333 1.29812 14.1333 1.76667V14.1333H5.3C4.83145 14.1333 4.38209 14.3195 4.05078 14.6508C3.71946 14.9821 3.53333 15.4315 3.53333 15.9V38.8667H1.76667C1.29812 38.8667 0.848759 39.0528 0.517445 39.3841C0.18613 39.7154 0 40.1648 0 40.6333C0 41.1019 0.18613 41.5512 0.517445 41.8826C0.848759 42.2139 1.29812 42.4 1.76667 42.4H51.2333C51.7019 42.4 52.1512 42.2139 52.4826 41.8826C52.8139 41.5512 53 41.1019 53 40.6333C53 40.1648 52.8139 39.7154 52.4826 39.3841C52.1512 39.0528 51.7019 38.8667 51.2333 38.8667ZM7.06667 17.6667H15.9C16.3685 17.6667 16.8179 17.4805 17.1492 17.1492C17.4805 16.8179 17.6667 16.3685 17.6667 15.9V3.53333H35.3333V8.83333C35.3333 9.30188 35.5195 9.75124 35.8508 10.0826C36.1821 10.4139 36.6315 10.6 37.1 10.6H45.9333V38.8667H31.8V30.0333C31.8 29.5648 31.6139 29.1154 31.2826 28.7841C30.9512 28.4528 30.5019 28.2667 30.0333 28.2667H22.9667C22.4981 28.2667 22.0488 28.4528 21.7174 28.7841C21.3861 29.1154 21.2 29.5648 21.2 30.0333V38.8667H7.06667V17.6667ZM28.2667 38.8667H24.7333V31.8H28.2667V38.8667ZM22.9667 8.83333C22.9667 8.36478 23.1528 7.91543 23.4841 7.58411C23.8154 7.2528 24.2648 7.06667 24.7333 7.06667H28.2667C28.7352 7.06667 29.1846 7.2528 29.5159 7.58411C29.8472 7.91543 30.0333 8.36478 30.0333 8.83333C30.0333 9.30188 29.8472 9.75124 29.5159 10.0826C29.1846 10.4139 28.7352 10.6 28.2667 10.6H24.7333C24.2648 10.6 23.8154 10.4139 23.4841 10.0826C23.1528 9.75124 22.9667 9.30188 22.9667 8.83333ZM22.9667 15.9C22.9667 15.4315 23.1528 14.9821 23.4841 14.6508C23.8154 14.3195 24.2648 14.1333 24.7333 14.1333H28.2667C28.7352 14.1333 29.1846 14.3195 29.5159 14.6508C29.8472 14.9821 30.0333 15.4315 30.0333 15.9C30.0333 16.3685 29.8472 16.8179 29.5159 17.1492C29.1846 17.4805 28.7352 17.6667 28.2667 17.6667H24.7333C24.2648 17.6667 23.8154 17.4805 23.4841 17.1492C23.1528 16.8179 22.9667 16.3685 22.9667 15.9ZM35.3333 15.9C35.3333 15.4315 35.5195 14.9821 35.8508 14.6508C36.1821 14.3195 36.6315 14.1333 37.1 14.1333H40.6333C41.1019 14.1333 41.5512 14.3195 41.8826 14.6508C42.2139 14.9821 42.4 15.4315 42.4 15.9C42.4 16.3685 42.2139 16.8179 41.8826 17.1492C41.5512 17.4805 41.1019 17.6667 40.6333 17.6667H37.1C36.6315 17.6667 36.1821 17.4805 35.8508 17.1492C35.5195 16.8179 35.3333 16.3685 35.3333 15.9ZM17.6667 22.9667C17.6667 23.4352 17.4805 23.8846 17.1492 24.2159C16.8179 24.5472 16.3685 24.7333 15.9 24.7333H12.3667C11.8981 24.7333 11.4488 24.5472 11.1174 24.2159C10.7861 23.8846 10.6 23.4352 10.6 22.9667C10.6 22.4981 10.7861 22.0488 11.1174 21.7174C11.4488 21.3861 11.8981 21.2 12.3667 21.2H15.9C16.3685 21.2 16.8179 21.3861 17.1492 21.7174C17.4805 22.0488 17.6667 22.4981 17.6667 22.9667ZM17.6667 30.0333C17.6667 30.5019 17.4805 30.9512 17.1492 31.2826C16.8179 31.6139 16.3685 31.8 15.9 31.8H12.3667C11.8981 31.8 11.4488 31.6139 11.1174 31.2826C10.7861 30.9512 10.6 30.5019 10.6 30.0333C10.6 29.5648 10.7861 29.1154 11.1174 28.7841C11.4488 28.4528 11.8981 28.2667 12.3667 28.2667H15.9C16.3685 28.2667 16.8179 28.4528 17.1492 28.7841C17.4805 29.1154 17.6667 29.5648 17.6667 30.0333ZM22.9667 22.9667C22.9667 22.4981 23.1528 22.0488 23.4841 21.7174C23.8154 21.3861 24.2648 21.2 24.7333 21.2H28.2667C28.7352 21.2 29.1846 21.3861 29.5159 21.7174C29.8472 22.0488 30.0333 22.4981 30.0333 22.9667C30.0333 23.4352 29.8472 23.8846 29.5159 24.2159C29.1846 24.5472 28.7352 24.7333 28.2667 24.7333H24.7333C24.2648 24.7333 23.8154 24.5472 23.4841 24.2159C23.1528 23.8846 22.9667 23.4352 22.9667 22.9667ZM35.3333 22.9667C35.3333 22.4981 35.5195 22.0488 35.8508 21.7174C36.1821 21.3861 36.6315 21.2 37.1 21.2H40.6333C41.1019 21.2 41.5512 21.3861 41.8826 21.7174C42.2139 22.0488 42.4 22.4981 42.4 22.9667C42.4 23.4352 42.2139 23.8846 41.8826 24.2159C41.5512 24.5472 41.1019 24.7333 40.6333 24.7333H37.1C36.6315 24.7333 36.1821 24.5472 35.8508 24.2159C35.5195 23.8846 35.3333 23.4352 35.3333 22.9667ZM35.3333 30.0333C35.3333 29.5648 35.5195 29.1154 35.8508 28.7841C36.1821 28.4528 36.6315 28.2667 37.1 28.2667H40.6333C41.1019 28.2667 41.5512 28.4528 41.8826 28.7841C42.2139 29.1154 42.4 29.5648 42.4 30.0333C42.4 30.5019 42.2139 30.9512 41.8826 31.2826C41.5512 31.6139 41.1019 31.8 40.6333 31.8H37.1C36.6315 31.8 36.1821 31.6139 35.8508 31.2826C35.5195 30.9512 35.3333 30.5019 35.3333 30.0333Z" fill='#909090' />
      </svg>
    ),
    'Flat': (
      <svg width="40" height="30" viewBox="0 0 36 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.0625 3.375C4.61495 3.375 4.18572 3.55279 3.86926 3.86926C3.55279 4.18572 3.375 4.61495 3.375 5.0625V41.625H7.875V35.4375C7.875 33.885 9.135 32.625 10.6875 32.625H25.3125C26.865 32.625 28.125 33.885 28.125 35.4375V41.625H32.625V21.9375C32.625 21.4899 32.4472 21.0607 32.1307 20.7443C31.8143 20.4278 31.3851 20.25 30.9375 20.25H26.4375C25.9899 20.25 25.5607 20.0722 25.2443 19.7557C24.9278 19.4393 24.75 19.0101 24.75 18.5625V5.0625C24.75 4.61495 24.5722 4.18572 24.2557 3.86926C23.9393 3.55279 23.5101 3.375 23.0625 3.375H5.0625ZM11.25 36V41.625H16.3125V36H11.25ZM19.6875 36V41.625H24.75V36H19.6875ZM34.3125 45H1.6875C1.23995 45 0.810725 44.8222 0.494257 44.5057C0.177789 44.1893 0 43.7601 0 43.3125V5.0625C0 3.71984 0.533369 2.43217 1.48277 1.48277C2.43218 0.533369 3.71984 0 5.0625 0H23.0625C24.4052 0 25.6928 0.533369 26.6422 1.48277C27.5916 2.43217 28.125 3.71984 28.125 5.0625V16.875H30.9375C31.6023 16.875 32.2606 17.0059 32.8748 17.2604C33.489 17.5148 34.0471 17.8877 34.5172 18.3578C34.9873 18.8279 35.3602 19.386 35.6146 20.0002C35.8691 20.6144 36 21.2727 36 21.9375V43.3125C36 43.7601 35.8222 44.1893 35.5057 44.5057C35.1893 44.8222 34.7601 45 34.3125 45ZM7.875 10.125C7.875 9.52826 8.11205 8.95597 8.53401 8.53401C8.95597 8.11205 9.52826 7.875 10.125 7.875C10.7217 7.875 11.294 8.11205 11.716 8.53401C12.1379 8.95597 12.375 9.52826 12.375 10.125C12.375 10.7217 12.1379 11.294 11.716 11.716C11.294 12.1379 10.7217 12.375 10.125 12.375C9.52826 12.375 8.95597 12.1379 8.53401 11.716C8.11205 11.294 7.875 10.7217 7.875 10.125ZM10.125 23.625C9.52826 23.625 8.95597 23.8621 8.53401 24.284C8.11205 24.706 7.875 25.2783 7.875 25.875C7.875 26.4717 8.11205 27.044 8.53401 27.466C8.95597 27.8879 9.52826 28.125 10.125 28.125C10.7217 28.125 11.294 27.8879 11.716 27.466C12.1379 27.044 12.375 26.4717 12.375 25.875C12.375 25.2783 12.1379 24.706 11.716 24.284C11.294 23.8621 10.7217 23.625 10.125 23.625ZM10.125 15.75C9.52826 15.75 8.95597 15.9871 8.53401 16.409C8.11205 16.831 7.875 17.4033 7.875 18C7.875 18.5967 8.11205 19.169 8.53401 19.591C8.95597 20.0129 9.52826 20.25 10.125 20.25C10.7217 20.25 11.294 20.0129 11.716 19.591C12.1379 19.169 12.375 18.5967 12.375 18C12.375 17.4033 12.1379 16.831 11.716 16.409C11.294 15.9871 10.7217 15.75 10.125 15.75ZM18 7.875C17.4033 7.875 16.831 8.11205 16.409 8.53401C15.9871 8.95597 15.75 9.52826 15.75 10.125C15.75 10.7217 15.9871 11.294 16.409 11.716C16.831 12.1379 17.4033 12.375 18 12.375C18.5967 12.375 19.169 12.1379 19.591 11.716C20.0129 11.294 20.25 10.7217 20.25 10.125C20.25 9.52826 20.0129 8.95597 19.591 8.53401C19.169 8.11205 18.5967 7.875 18 7.875ZM18 23.625C17.4033 23.625 16.831 23.8621 16.409 24.284C15.9871 24.706 15.75 25.2783 15.75 25.875C15.75 26.4717 15.9871 27.044 16.409 27.466C16.831 27.8879 17.4033 28.125 18 28.125C18.5967 28.125 19.169 27.8879 19.591 27.466C20.0129 27.044 20.25 26.4717 20.25 25.875C20.25 25.2783 20.0129 24.706 19.591 24.284C19.169 23.8621 18.5967 23.625 18 23.625ZM25.875 23.625C25.2783 23.625 24.706 23.8621 24.284 24.284C23.8621 24.706 23.625 25.2783 23.625 25.875C23.625 26.4717 23.8621 27.044 24.284 27.466C24.706 27.8879 25.2783 28.125 25.875 28.125C26.4717 28.125 27.044 27.8879 27.466 27.466C27.8879 27.044 28.125 26.4717 28.125 25.875C28.125 25.2783 27.8879 24.706 27.466 24.284C27.044 23.8621 26.4717 23.625 25.875 23.625ZM18 15.75C17.4033 15.75 16.831 15.9871 16.409 16.409C15.9871 16.831 15.75 17.4033 15.75 18C15.75 18.5967 15.9871 19.169 16.409 19.591C16.831 20.0129 17.4033 20.25 18 20.25C18.5967 20.25 19.169 20.0129 19.591 19.591C20.0129 19.169 20.25 18.5967 20.25 18C20.25 17.4033 20.0129 16.831 19.591 16.409C19.169 15.9871 18.5967 15.75 18 15.75Z" fill='#909090' />
      </svg>
    ),
    'Independent House': (
      <svg width="40" height="30" viewBox="0 0 54 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M52.1993 41.4H48.5994V25.2003L49.1259 25.7267C49.4642 26.0645 49.9229 26.254 50.4009 26.2536C50.879 26.2532 51.3373 26.0628 51.6751 25.7245C52.0128 25.3862 52.2023 24.9275 52.2019 24.4494C52.2015 23.9714 52.0112 23.513 51.6728 23.1753L29.5444 1.05357C28.8693 0.378956 27.954 0 26.9997 0C26.0453 0 25.13 0.378956 24.4549 1.05357L2.32647 23.1753C1.98902 23.513 1.79956 23.971 1.79977 24.4484C1.79998 24.9259 1.98985 25.3837 2.32759 25.7211C2.66534 26.0586 3.12331 26.248 3.60075 26.2478C4.07819 26.2476 4.53599 26.0577 4.87344 25.72L5.39993 25.2003V41.4H1.79998C1.32259 41.4 0.864762 41.5897 0.527201 41.9272C0.18964 42.2648 0 42.7226 0 43.2C0 43.6774 0.18964 44.1352 0.527201 44.4728C0.864762 44.8104 1.32259 45 1.79998 45H52.1993C52.6767 45 53.1345 44.8104 53.4721 44.4728C53.8097 44.1352 53.9993 43.6774 53.9993 43.2C53.9993 42.7226 53.8097 42.2648 53.4721 41.9272C53.1345 41.5897 52.6767 41.4 52.1993 41.4ZM8.99988 21.6003L26.9997 3.60054L44.9994 21.6003V41.4H34.1996V28.8002C34.1996 28.3228 34.0099 27.865 33.6724 27.5274C33.3348 27.1899 32.877 27.0002 32.3996 27.0002H21.5997C21.1223 27.0002 20.6645 27.1899 20.3269 27.5274C19.9894 27.865 19.7997 28.3228 19.7997 28.8002V41.4H8.99988V21.6003ZM30.5996 41.4H23.3997V30.6002H30.5996V41.4Z" fill='#909090' />
      </svg>
    ),
    'Independent Villa': (
      <svg width="40" height="30" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M43.5556 19.0556C40.5611 19.0556 38.1111 21.5056 38.1111 24.5H35.3889V0L0 13.6111V49H49V24.5C49 21.5056 46.55 19.0556 43.5556 19.0556ZM5.44444 17.3406L29.9444 7.92167V24.5H16.3333V43.5556H5.44444V17.3406ZM43.5556 43.5556H35.3889V35.3889H29.9444V43.5556H21.7778V29.9444H43.5556V43.5556Z" fill='#909090' />
      </svg>
    ),
    'Plot': (
      <svg width="40" height="30" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M45.9375 0H3.0625C2.25027 0 1.47132 0.397114 0.896985 1.10398C0.322655 1.81085 0 2.76957 0 3.76923V45.2308C0 46.2304 0.322655 47.1892 0.896985 47.896C1.47132 48.6029 2.25027 49 3.0625 49H45.9375C46.7497 49 47.5287 48.6029 48.103 47.896C48.6773 47.1892 49 46.2304 49 45.2308V3.76923C49 2.76957 48.6773 1.81085 48.103 1.10398C47.5287 0.397114 46.7497 0 45.9375 0ZM3.0625 45.2308V3.76923H45.9375V45.2308H3.0625Z" fill='#909090' />
        <path d="M7.65625 13.1914H22.9687V39.576H7.65625V13.1914ZM10.1063 36.5606H20.5187V26.0068H10.1063V36.5606ZM20.5187 16.2068H10.1063V22.9914H20.5187V16.2068Z" fill='#909090' />
        <path d="M26.0312 35.8065H41.3437V9.42188H26.0312V35.8065ZM28.4813 12.4373H38.8937V22.9911H28.4813V12.4373ZM38.8937 32.7911H28.4813V26.0065H38.8937V32.7911Z" fill='#909090' />
      </svg>
    ),
    'Land': (
      <svg width="40" height="30" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44.1 0H4.9C2.205 0 0 2.205 0 4.9V44.1C0 46.795 2.205 49 4.9 49H44.1C46.795 49 49 46.795 49 44.1V4.9C49 2.205 46.795 0 44.1 0ZM32.585 4.9C30.625 7.595 29.4 11.025 29.4 14.7H19.6C19.6 10.78 21.56 7.105 24.5 4.9H32.585ZM29.4 29.4H19.6C19.6 25.725 18.375 22.295 16.415 19.6H24.5C27.44 21.805 29.4 25.48 29.4 29.4ZM4.9 4.9H17.885C15.925 7.595 14.7 11.025 14.7 14.7H4.9V4.9ZM4.9 19.6H9.8C12.74 21.805 14.7 25.235 14.7 29.4H4.9V19.6ZM4.9 44.1V34.3H17.885C15.925 36.995 14.7 40.425 14.7 44.1H4.9ZM19.6 44.1C19.6 40.18 21.56 36.505 24.5 34.3H32.585C30.625 36.995 29.4 40.425 29.4 44.1H19.6ZM44.1 44.1H34.3C34.3 40.18 36.26 36.505 39.2 34.3H44.1V44.1ZM44.1 29.4H34.3C34.3 25.725 33.075 22.295 31.115 19.6H44.1V29.4ZM44.1 14.7H34.3C34.3 10.78 36.26 7.105 39.2 4.9H44.1V14.7Z" fill='#909090' />
      </svg>
    )
  }

  return (
    <div className='relative'>
      <div className='py-2 bg-[#E2EAED]'>
        <p className='text-lg font-bold text-[#1D3A76] text-center font-sans'>Add Property Details</p>
      </div>
      <div className='w-full overflow-y-auto px-5 py-3 h-[calc(100vh-220px)]'>
        <div className='mb-5'>
          <div className='flex gap-1 mb-4'>
            <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Property Sub Type</p>
            <IconAsterisk size={8} color='#FF0000' />
          </div>
          <div className='grid grid-cols-6 gap-2'>
            {
              allPropertySubTypes.length > 0 && allPropertySubTypes.map((item, index) => {
                const icon = propertySubTypeIcon[item.name] || propertySubTypeIcon['default'];
                return (
                  <div key={index} onClick={() => updatePropertySubType(item.name)} className={`flex flex-col justify-center items-center gap-2 border-2 rounded-md px-4 py-2 w-[100%] cursor-pointer ${propertySubType === item.name ? 'bg-[#1D3A76] border-[#1D3A76] ' : 'border-[#d7d5d5ba] '} `}>
                    {icon}
                    <p className={`text-xs text-center font-medium ${propertySubType === item.name ? 'text-white' : 'text-[#1D3A76]'} `}>{item.name}</p>
                  </div>
                )
              }
              )}
          </div>
          {propertySubTypeError && <p className='text-[#FF0000] text-xs font-sans'>Please select property type</p>}
        </div>
        <div className='mb-5'>
          <div className='flex gap-1 mb-4'>
            <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Rera Approved</p>
            <IconAsterisk size={8} color='#FF0000' />
          </div>
          <div className='flex flex-row items-center gap-6'>
            <div onClick={() => updateReraApproved('Yes')} className={`group cursor-pointer px-8 py-2 rounded-md  ${reraApproved === 'Yes' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
              <p className={`text-[10px] font-sans ${reraApproved === 'Yes' ? 'text-white ' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>Yes</p>
            </div>
            <div onClick={() => updateReraApproved('No')} className={`group cursor-pointer px-8 py-2 rounded-md  ${reraApproved === 'No' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
              <p className={`text-[10px] font-sans ${reraApproved === 'No' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>No</p>
            </div>
          </div>
          {reraApprovedError && <p className='text-[#FF0000] text-xs font-sans'>Please select one option</p>}
        </div>
        {
          getpropertyDetails?.property_for === "Sell" &&
          <div className='mb-5'>
            <div className='flex gap-1 mb-4'>
              <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Construction Status</p>
              <IconAsterisk size={8} color='#FF0000' />
            </div>
            <div className='flex flex-row items-center gap-6'>
              {
                allOccupancyTypes.length > 0 && allOccupancyTypes.map((item, index) => {
                  return (
                    <div key={index} onClick={() => updateConstructionStatus(item.value)} className={`group cursor-pointer px-8 py-2 rounded-md  ${constructionStatus === item.value ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                      <p className={`text-[10px] font-sans ${constructionStatus === item.value ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>{item.name}</p>
                    </div>
                  )
                }
                )
              }
            </div>
            {constructionStatusError && <p className='text-[#FF0000] text-xs font-sans'>Please select construction status</p>}
          </div>
        }
        {
          (propertySubType === 'Apartment' || propertySubType === "Flat" || propertySubType === "Land" || propertySubType === "Independent House" || propertySubType === "Independent Villa") &&
          <div className='mb-5'>
            <div className='flex gap-1 mb-4'>
              <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>BHK</p>
              <IconAsterisk size={8} color='#FF0000' />
            </div>
            <div className='flex flex-row items-center gap-6'>
              {
                bedroomtypesList.length > 0 &&
                bedroomtypesList.map((item, index) => {
                  return (
                    <div key={index} onClick={() => updateBhk(item.value)} className={`group cursor-pointer px-8 py-2 rounded-md  ${bhk === item.value ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                      <p className={`text-[10px] font-sans ${bhk === item.value ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>{item.name} BHK</p>
                    </div>
                  )
                })
              }
            </div>
            {
              bhk === 5 &&
              <div className='my-5'>
                <div className='flex gap-1'>
                  <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Custom BHK</p>
                  <IconAsterisk size={8} color='#FF0000' />
                </div>
                <input
                  type='text'
                  placeholder='Enter Custom BHK'
                  className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans'
                  autoComplete='off'
                  value={customBhk}
                  onChange={updateCustomBhk}
                />
              </div>
              // <div className="relative my-5">
              //   {(isFocused || customBhk) &&
              //     <div className='flex items-center gap-1'>
              //       <label
              //         className={`absolute left-0 text-[13px] font-medium font-sans text-[#1D3A76] transition-all duration-200 -top-4`}
              //       >
              //         Custom BHK
              //       </label>
              //       <IconAsterisk size={8} color='#FF0000' />
              //     </div>
              //   }
              //   <input
              //     type="text"
              //     placeholder="Enter Custom BHK"
              //     className="border-b border-[#c3c3c3] font-semibold w-full py-2 text-[13px] font-sans focus:outline-none"
              //     autoComplete="off"
              //     value={customBhk}
              //     onChange={updateCustomBhk}
              //     onFocus={() => setIsFocused(true)}
              //     onBlur={() => setIsFocused(false)}
              //   />
              // </div>
            }
            {bhkError && <p className='text-[#FF0000] text-xs font-sans'>Please select BHK</p>}
          </div>
        }
        {
          (propertySubType === 'Apartment' || propertySubType === "Flat" || propertySubType === "Land") &&
          <>
            <div className='mb-5'>
              <div className='flex gap-1 mb-4'>
                <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Bathroom</p>
                <IconAsterisk size={8} color='#FF0000' />
              </div>
              <div className='flex flex-row items-center gap-6'>
                <div onClick={() => updateBathroom('1')} className={`group cursor-pointer px-8 py-2 rounded-md  ${bathroom === '1' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                  <p className={` text-[10px] font-sans ${bathroom === '1' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>1 </p>
                </div>
                <div onClick={() => updateBathroom('2')} className={`group cursor-pointer px-8 py-2 rounded-md  ${bathroom === '2' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                  <p className={`text-[10px] font-sans ${bathroom === '2' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>2 </p>
                </div>
                <div onClick={() => updateBathroom('3')} className={`group cursor-pointer px-8 py-2 rounded-md  ${bathroom === '3' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                  <p className={`text-[10px] font-sans ${bathroom === '3' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>3 </p>
                </div>
                <div onClick={() => updateBathroom('4')} className={`group cursor-pointer px-8 py-2 rounded-md  ${bathroom === '4' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                  <p className={`text-[10px] font-sans ${bathroom === '4' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>4 </p>
                </div>
                <div onClick={() => updateBathroom('4plus')} className={`group cursor-pointer px-8 py-2 rounded-md  ${bathroom === '4plus' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                  <p className={`text-[10px] font-sans ${bathroom === '4plus' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>4+ </p>
                </div>
              </div>
              {
                bathroom === '4plus' &&
                <div className='my-5'>
                  <div className='flex gap-1'>
                    <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Custom Bathroom</p>
                    <IconAsterisk size={8} color='#FF0000' />
                  </div>
                  <input
                    type='text'
                    placeholder='Enter Custom Bathrooms'
                    className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans'
                    autoComplete='off'
                    value={customBathroom}
                    onChange={updateCustomBathroom}
                  />
                </div>
              }
              {bathroomError && <p className='text-[#FF0000] text-xs font-sans'>Please select bathroom</p>}
            </div>
            <div className='mb-5'>
              <div className='flex gap-1 mb-4'>
                <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Balcony</p>
                <IconAsterisk size={8} color='#FF0000' />
              </div>
              <div className='flex flex-row items-center gap-6'>
                {
                  bacloniesList.length > 0 &&
                  bacloniesList.map((item, index) => {
                    return (
                      <div key={index} onClick={() => updateBalcony(item.value)} className={`group cursor-pointer px-8 py-2 rounded-md  ${balcony === item.value ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                        <p className={`text-[10px] font-sans ${balcony === item.value ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>{item.name} </p>
                      </div>
                    )
                  }
                  )
                }
              </div>
              {
                balcony === 5 &&
                <div className='my-5'>
                  <div className='flex gap-1'>
                    <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Custom Balcony</p>
                    <IconAsterisk size={8} color='#FF0000' />
                  </div>
                  <input
                    type='text'
                    placeholder='Enter Custom Balcony'
                    className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans'
                    autoComplete='off'
                    value={customBalcony}
                    onChange={updateCustomBalcony}
                  />
                </div>
              }
              {balconyError && <p className='text-[#FF0000] text-xs font-sans'>Please select balcony</p>}
            </div>
            <div className='mb-5'>
              <div className='flex gap-1 mb-4'>
                <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Furnish Type</p>
                <IconAsterisk size={8} color='#FF0000' />
              </div>
              <div className='grid grid-cols-3 gap-2'>
                {
                  allFurnishedTypes.map((item, index) => {
                    return (
                      <div key={index} onClick={() => updateFurnishType(item.value)} className={`flex flex-col justify-center items-center gap-2 border-2 rounded-md px-4 py-2 w-[100%] cursor-pointer ${furnishType === item.value ? 'bg-[#1D3A76] border-[#1D3A76] ' : 'border-[#d7d5d5ba] '}`}>
                        <p className={`text-xs text-center font-medium ${furnishType === item.value ? 'text-white' : 'text-[#1D3A76]'} `}>{item.name}</p>
                      </div>
                    )
                  }
                  )
                }
                {/* <div onClick={() => updateFurnishType('fullyfurnished')} className={`flex flex-row items-center gap-4 border-2 rounded-md px-4 py-2 w-[80%] cursor-pointer ${furnishType === "fullyfurnished" ? 'bg-[#1D3A76] border-[#1D3A76] ' : 'border-[#d7d5d5ba] '}`}>
                  <svg width="20" height="20" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 27C5.575 27 5.219 26.856 4.932 26.568C4.645 26.28 4.501 25.924 4.5 25.5V24C3.25 24 2.1875 23.5625 1.3125 22.6875C0.4375 21.8125 0 20.75 0 19.5V12C0 10.75 0.4375 9.6875 1.3125 8.8125C2.1875 7.9375 3.25 7.5 4.5 7.5V4.5C4.5 3.25 4.9375 2.1875 5.8125 1.3125C6.6875 0.4375 7.75 0 9 0H24C25.25 0 26.3125 0.4375 27.1875 1.3125C28.0625 2.1875 28.5 3.25 28.5 4.5V7.5C29.75 7.5 30.8125 7.9375 31.6875 8.8125C32.5625 9.6875 33 10.75 33 12V19.5C33 20.75 32.5625 21.8125 31.6875 22.6875C30.8125 23.5625 29.75 24 28.5 24V25.5C28.5 25.925 28.356 26.2815 28.068 26.5695C27.78 26.8575 27.424 27.001 27 27C26.576 26.999 26.22 26.855 25.932 26.568C25.644 26.281 25.5 25.925 25.5 25.5V24H7.5V25.5C7.5 25.925 7.356 26.2815 7.068 26.5695C6.78 26.8575 6.424 27.001 6 27ZM4.5 21H28.5C28.925 21 29.2815 20.856 29.5695 20.568C29.8575 20.28 30.001 19.924 30 19.5V12C30 11.575 29.856 11.219 29.568 10.932C29.28 10.645 28.924 10.501 28.5 10.5C28.076 10.499 27.72 10.643 27.432 10.932C27.144 11.221 27 11.577 27 12V18H6V12C6 11.575 5.856 11.219 5.568 10.932C5.28 10.645 4.924 10.501 4.5 10.5C4.076 10.499 3.72 10.643 3.432 10.932C3.144 11.221 3 11.577 3 12V19.5C3 19.925 3.144 20.2815 3.432 20.5695C3.72 20.8575 4.076 21.001 4.5 21ZM9 15H24V12C24 11.325 24.1375 10.7125 24.4125 10.1625C24.6875 9.6125 25.05 9.125 25.5 8.7V4.5C25.5 4.075 25.356 3.719 25.068 3.432C24.78 3.145 24.424 3.001 24 3H9C8.575 3 8.219 3.144 7.932 3.432C7.645 3.72 7.501 4.076 7.5 4.5V8.7C7.95 9.125 8.3125 9.6125 8.5875 10.1625C8.8625 10.7125 9 11.325 9 12V15Z" fill={furnishType === 'fullyfurnished' ? '#fff' : '#909090'} />
                  </svg>
                  <p className={` text-[10px] text-center font-sans ${furnishType === "fullyfurnished" ? 'text-white' : 'text-[#909090]'}`}>Fully Furnished</p>
                </div>
                <div onClick={() => updateFurnishType('semifurnished')} className={`flex flex-row items-center gap-4 border-2 rounded-md px-4 py-2 w-[80%] cursor-pointer ${furnishType === "semifurnished" ? 'bg-[#1D3A76] border-[#1D3A76] ' : 'border-[#d7d5d5ba] '}`}>
                  <svg width="20" height="20" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 27C5.575 27 5.219 26.856 4.932 26.568C4.645 26.28 4.501 25.924 4.5 25.5V24C3.25 24 2.1875 23.5625 1.3125 22.6875C0.4375 21.8125 0 20.75 0 19.5V12C0 10.75 0.4375 9.6875 1.3125 8.8125C2.1875 7.9375 3.25 7.5 4.5 7.5V4.5C4.5 3.25 4.9375 2.1875 5.8125 1.3125C6.6875 0.4375 7.75 0 9 0H24C25.25 0 26.3125 0.4375 27.1875 1.3125C28.0625 2.1875 28.5 3.25 28.5 4.5V7.5C29.75 7.5 30.8125 7.9375 31.6875 8.8125C32.5625 9.6875 33 10.75 33 12V19.5C33 20.75 32.5625 21.8125 31.6875 22.6875C30.8125 23.5625 29.75 24 28.5 24V25.5C28.5 25.925 28.356 26.2815 28.068 26.5695C27.78 26.8575 27.424 27.001 27 27C26.576 26.999 26.22 26.855 25.932 26.568C25.644 26.281 25.5 25.925 25.5 25.5V24H7.5V25.5C7.5 25.925 7.356 26.2815 7.068 26.5695C6.78 26.8575 6.424 27.001 6 27ZM4.5 21H28.5C28.925 21 29.2815 20.856 29.5695 20.568C29.8575 20.28 30.001 19.924 30 19.5V12C30 11.575 29.856 11.219 29.568 10.932C29.28 10.645 28.924 10.501 28.5 10.5C28.076 10.499 27.72 10.643 27.432 10.932C27.144 11.221 27 11.577 27 12V18H6V12C6 11.575 5.856 11.219 5.568 10.932C5.28 10.645 4.924 10.501 4.5 10.5C4.076 10.499 3.72 10.643 3.432 10.932C3.144 11.221 3 11.577 3 12V19.5C3 19.925 3.144 20.2815 3.432 20.5695C3.72 20.8575 4.076 21.001 4.5 21ZM9 15H24V12C24 11.325 24.1375 10.7125 24.4125 10.1625C24.6875 9.6125 25.05 9.125 25.5 8.7V4.5C25.5 4.075 25.356 3.719 25.068 3.432C24.78 3.145 24.424 3.001 24 3H9C8.575 3 8.219 3.144 7.932 3.432C7.645 3.72 7.501 4.076 7.5 4.5V8.7C7.95 9.125 8.3125 9.6125 8.5875 10.1625C8.8625 10.7125 9 11.325 9 12V15Z" fill={furnishType === 'semifurnished' ? '#fff' : '#909090'} />
                  </svg>
                  <p className={` text-[10px] text-center font-sans ${furnishType === "semifurnished" ? 'text-white' : 'text-[#909090]'}`}>Semi Furnished</p>
                </div>
                <div onClick={() => updateFurnishType('unfurnished')} className={`flex flex-row items-center gap-4 border-2 rounded-md px-4 py-2 w-[80%] cursor-pointer ${furnishType === "unfurnished" ? 'bg-[#1D3A76] border-[#1D3A76] ' : 'border-[#d7d5d5ba] '}`}>
                  <svg width="20" height="20" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.69574 15.826H6.78268V10.1739H3.9566C3.50689 10.1739 3.0756 9.99523 2.7576 9.67723C2.43961 9.35924 2.26096 8.92794 2.26096 8.47823V1.69565C2.26096 1.24593 2.43961 0.814638 2.7576 0.496643C3.0756 0.178648 3.50689 0 3.9566 0H22.0435C22.4932 0 22.9245 0.178648 23.2425 0.496643C23.5605 0.814638 23.7391 1.24593 23.7391 1.69565V8.47823C23.7391 8.92794 23.5605 9.35924 23.2425 9.67723C22.9245 9.99523 22.4932 10.1739 22.0435 10.1739H19.2174V15.826H24.3044C24.7541 15.826 25.1854 16.0047 25.5034 16.3227C25.8214 16.6407 26 17.072 26 17.5217V19.7825C26 20.2322 25.8214 20.6635 25.5034 20.9815C25.1854 21.2995 24.7541 21.4782 24.3044 21.4782H22.6087V27.6955C22.6087 27.8455 22.5492 27.9892 22.4432 28.0952C22.3372 28.2012 22.1934 28.2608 22.0435 28.2608C21.8936 28.2608 21.7498 28.2012 21.6438 28.0952C21.5378 27.9892 21.4783 27.8455 21.4783 27.6955V21.4782H4.52182V27.6955C4.52182 27.8455 4.46227 27.9892 4.35627 28.0952C4.25027 28.2012 4.10651 28.2608 3.9566 28.2608C3.8067 28.2608 3.66293 28.2012 3.55694 28.0952C3.45094 27.9892 3.39139 27.8455 3.39139 27.6955V21.4782H1.69574C1.24603 21.4782 0.814735 21.2995 0.49674 20.9815C0.178745 20.6635 9.72748e-05 20.2322 9.72748e-05 19.7825V17.5217C9.72748e-05 17.072 0.178745 16.6407 0.49674 16.3227C0.814735 16.0047 1.24603 15.826 1.69574 15.826ZM22.6087 8.47823V1.69565C22.6087 1.54574 22.5492 1.40198 22.4432 1.29598C22.3372 1.18998 22.1934 1.13043 22.0435 1.13043H3.9566C3.8067 1.13043 3.66293 1.18998 3.55694 1.29598C3.45094 1.40198 3.39139 1.54574 3.39139 1.69565V8.47823C3.39139 8.62813 3.45094 8.7719 3.55694 8.8779C3.66293 8.9839 3.8067 9.04344 3.9566 9.04344H22.0435C22.1934 9.04344 22.3372 8.9839 22.4432 8.8779C22.5492 8.7719 22.6087 8.62813 22.6087 8.47823ZM18.087 10.1739H7.91311V15.826H18.087V10.1739ZM1.13053 19.7825C1.13053 19.9324 1.19008 20.0762 1.29607 20.1822C1.40207 20.2882 1.54584 20.3477 1.69574 20.3477H24.3044C24.4543 20.3477 24.598 20.2882 24.704 20.1822C24.81 20.0762 24.8696 19.9324 24.8696 19.7825V17.5217C24.8696 17.3718 24.81 17.228 24.704 17.122C24.598 17.016 24.4543 16.9565 24.3044 16.9565H1.69574C1.54584 16.9565 1.40207 17.016 1.29607 17.122C1.19008 17.228 1.13053 17.3718 1.13053 17.5217V19.7825Z" fill={furnishType === 'unfurnished' ? '#fff' : '#909090'} />
                  </svg>
                  <p className={` text-[10px] text-center font-sans ${furnishType === "unfurnished" ? 'text-white' : 'text-[#909090]'}`}>Unfurnished</p>
                </div> */}
              </div>
              {furnishTypeError && <p className='text-[#FF0000] text-xs font-sans'>Please select furnish type</p>}
            </div>
            <div onClick={openFurnishingModal} className='cursor-pointer'>
              <p className='text-[#1D3A76] text-[13px] mb-4 font-medium font-sans'>+ Add Furnishings/ Amenties</p>
            </div>
          </>
        }
        {
          (propertySubType === 'Office' || propertySubType === "Retail Shop" || propertySubType === "Show Room") &&
          <>
            <p className='text-[#1D3A76] text-[13px] font-medium font-sans mt-6'>Lift & Stair Cases </p>
            <div className='grid grid-cols-3 gap-2 mt-3'>
              <div className='mb-6 '>
                <div className='flex gap-1'>
                  <p className='text-[#1D3A76] text-[13px] font-medium font-sans'> Passenger Lifts</p>
                  <IconAsterisk size={8} color='#FF0000' />
                </div>
                <input
                  type='text'
                  placeholder='Enter Passenger Lifts'
                  className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans'
                  autoComplete='off'
                  value={passengerLifts}
                  onChange={updatePassengerLifts}
                />
                {passengerLiftsError && <p className='text-[#FF0000] text-xs font-sans'>Please enter passenger lifts</p>}
              </div>
              <div className='mb-6 '>
                <div className='flex gap-1'>
                  <p className='text-[#1D3A76] text-[13px] font-medium font-sans'> Service Lifts</p>
                  <IconAsterisk size={8} color='#FF0000' />
                </div>
                <input
                  type='text'
                  placeholder='Enter Service Lifts'
                  className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans'
                  autoComplete='off'
                  value={serviceLifts}
                  onChange={updateServiceLifts}
                />
                {serviceLiftsError && <p className='text-[#FF0000] text-xs font-sans'>Please Enter service lifts</p>}
              </div>
              <div className='mb-6 '>
                <div className='flex gap-1'>
                  <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Stair Cases</p>
                  <IconAsterisk size={8} color='#FF0000' />
                </div>
                <input
                  type='text'
                  placeholder='Enter Stair Cases'
                  className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans'
                  autoComplete='off'
                  value={stairCases}
                  onChange={updateStairCases}
                />
                {stairCasesError && <p className='text-[#FF0000] text-xs font-sans'>Please enter stair cases </p>}
              </div>
            </div>

            <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Parking</p>
            <div className='grid grid-cols-3 gap-2 mt-3'>
              <div className='mb-6 '>
                <div className='flex gap-1'>
                  <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Private Parking</p>
                  <IconAsterisk size={8} color='#FF0000' />
                </div>
                <input
                  type='text'
                  placeholder='Enter Private Parking'
                  className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans'
                  autoComplete='off'
                  value={privateParking}
                  onChange={updatePrivateParking}
                />
                {privateParkingError && <p className='text-[#FF0000] text-xs font-sans'>Please enter private parking</p>}
              </div>
              <div className='mb-6 '>
                <div className='flex gap-1'>
                  <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Public Parking</p>
                  <IconAsterisk size={8} color='#FF0000' />
                </div>
                <input
                  type='text'
                  placeholder='Enter Public Parking'
                  className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans'
                  autoComplete='off'
                  value={publicParking}
                  onChange={updatePublicParking}
                />
                {publicParkingError && <p className='text-[#FF0000] text-xs font-sans'>Please Enter Public Parking</p>}
              </div>
            </div>

            <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Washrooms</p>
            <div className='grid grid-cols-3 gap-2 mt-3'>
              <div className='mb-6 '>
                <div className='flex gap-1'>
                  <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Private Washrooms</p>
                  <IconAsterisk size={8} color='#FF0000' />
                </div>
                <input
                  type='text'
                  placeholder='Enter Private Washrooms'
                  className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans'
                  autoComplete='off'
                  value={privateWashrooms}
                  onChange={updatePrivateWashrooms}
                />
                {privateWashroomsError && <p className='text-[#FF0000] text-xs font-sans'>Please enter private washrooms</p>}
              </div>
              <div className='mb-6 '>
                <div className='flex gap-1'>
                  <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Public Washrooms</p>
                  <IconAsterisk size={8} color='#FF0000' />
                </div>
                <input
                  type='text'
                  placeholder='Enter Public Washrooms'
                  className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans'
                  autoComplete='off'
                  value={publicWashrooms}
                  onChange={updatePublicWashrooms}
                />
                {publicWashroomsError && <p className='text-[#FF0000] text-xs font-sans'>Please Enter Public Washrooms</p>}
              </div>
            </div>
          </>
        }
        <div className='mb-5'>
          <div className='flex gap-1 mb-4'>
            <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Available From </p>
            <IconAsterisk size={8} color='#FF0000' />
          </div>
          <div className='border border-[#909090] rounded-md w-[20%] px-3'>
            <input
              type="date"
              id="date"
              className='text-[14px] w-full py-1 outline-none'
              autoComplete='off'
              value={availableFromDate}
              onChange={updateAvailableFromDate}
            />
          </div>
          {availableFromDateError && <p className='text-[#FF0000] text-xs font-sans'>Please select Available From date</p>}
        </div>
        {
          (constructionStatus === 1 || propertySubType === "Warehouse" || getpropertyDetails?.property_for === "Rent") &&
          <div className='mb-5 w-[40%]'>
            <Select
              label='Age of Property'
              labelClassName='!text-[#1D3A76] text-[13px] font-medium font-sans'
              data={[
                { value: '5', label: '0-5' },
                { value: '10', label: '5-10' },
                { value: '11', label: 'Above 10' },
              ]}
              searchable
              withAsterisk
              value={ageofProperty}
              onChange={updateAgeofProperty}
              inputClassName='focus:ring-blue-500 focus:border-blue-500'
              className='!m-0 !p-0'
            />
            {ageofPropertyError && <p className='text-[#FF0000] text-xs font-sans'>Please select one</p>}
          </div>
        }
        {
          (constructionStatus === 2 || propertySubType === "Warehouse") &&
          <div className='mb-5'>
            <div className='flex gap-1 mb-4'>
              <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Possesion End</p>
              <IconAsterisk size={8} color='#FF0000' />
            </div>
            <div className='border border-[#909090] rounded-md w-[20%] px-3'>
              <input
                type="date"
                id="date"
                className='text-[14px] w-full py-1 outline-none'
                autoComplete='off'
                value={possessionEndDate}
                onChange={updatePossessionEndDate}
              />
            </div>
            {possessionEndDateError && <p className='text-[#FF0000] text-xs font-sans'>Please select possession end date</p>}
          </div>
        }
        {
          getpropertyDetails.property_for === "Rent" &&
          <>
            <div className='my-6'>
              <div className='flex gap-1'>
                <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Monthly Rent</p>
                <IconAsterisk size={8} color='#FF0000' />
              </div>
              <input
                type='text'
                placeholder='Cost(per month)'
                className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans '
                autoComplete='off'
                value={monthlyRent}
                onChange={updateMonthlyRent}
              />
              {monthlyRentError && <p className='text-[#FF0000] text-xs font-sans'>Please enter monthlyRent</p>}
            </div>
            <div className='my-6'>
              <div className='flex gap-1'>
                <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Maintence Charge(per Month)</p>
                <IconAsterisk size={8} color='#FF0000' />
              </div>
              <input
                type='text'
                placeholder='Maintence Charges(per month)'
                className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans'
                autoComplete='off'
                value={maintenceCharges}
                onChange={updateMaintenceCharges}
              />
              {maintenceChargesError && <p className='text-[#FF0000] text-xs font-sans'>Please enter maintence charges</p>}
            </div>
            <div className='mb-5'>
              <div className='flex gap-1 mb-4'>
                <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Security Deposit</p>
                <IconAsterisk size={8} color='#FF0000' />
              </div>
              <div className='flex flex-row items-center gap-6'>
                <div onClick={() => updateSecurityDeposit('1')} className={`group cursor-pointer px-8 py-2 rounded-md  ${securityDeposit === '1' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                  <p className={`text-[10px] font-sans ${securityDeposit === '1' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>1 Month</p>
                </div>
                <div onClick={() => updateSecurityDeposit('2')} className={`group cursor-pointer px-8 py-2 rounded-md  ${securityDeposit === '2' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                  <p className={`text-[10px] font-sans ${securityDeposit === '2' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>2 Months</p>
                </div>
                <div onClick={() => updateSecurityDeposit('3')} className={`group cursor-pointer px-8 py-2 rounded-md  ${securityDeposit === '3' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                  <p className={`text-[10px] font-sans ${securityDeposit === '3' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>3 Months</p>
                </div>
              </div>
              {securityDepositError && <p className='text-[#FF0000] text-xs font-sans'>Please select security deposit</p>}
            </div>
            <div className='mb-5'>
              <div className='flex gap-1 mb-4'>
                <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Lock In Period</p>
                <IconAsterisk size={8} color='#FF0000' />
              </div>
              <div className='flex flex-row items-center gap-6'>
                <div onClick={() => updateLockInPeriod('1')} className={`group cursor-pointer px-8 py-2 rounded-md  ${lockInPeriod === '1' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                  <p className={`text-[10px] font-sans ${lockInPeriod === '1' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>1 Month</p>
                </div>
                <div onClick={() => updateLockInPeriod('2')} className={`group cursor-pointer px-8 py-2 rounded-md  ${lockInPeriod === '2' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                  <p className={`text-[10px] font-sans ${lockInPeriod === '2' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>2 Months</p>
                </div>
                <div onClick={() => updateLockInPeriod('3')} className={`group cursor-pointer px-8 py-2 rounded-md  ${lockInPeriod === '3' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                  <p className={`text-[10px] font-sans ${lockInPeriod === '3' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>3 Months</p>
                </div>
              </div>
              {lockInPeriodError && <p className='text-[#FF0000] text-xs font-sans'>Please select lock in period</p>}
            </div>
            <div className='mb-5'>
              <div className='flex gap-1 mb-4'>
                <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Do You Charge Brokerage?</p>
                <IconAsterisk size={8} color='#FF0000' />
              </div>
              <div className='flex flex-row items-center gap-6'>
                <div onClick={() => updateBrokerage('0')} className={`group cursor-pointer px-8 py-2 rounded-md  ${brokerage === '0' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                  <p className={`text-[10px] font-sans ${brokerage === '0' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>None</p>
                </div>
                <div onClick={() => updateBrokerage('15')} className={`group cursor-pointer px-8 py-2 rounded-md  ${brokerage === '15' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                  <p className={`text-[10px] font-sans ${brokerage === '15' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>15 Days</p>
                </div>
                <div onClick={() => updateBrokerage('30')} className={`group cursor-pointer px-8 py-2 rounded-md  ${brokerage === '30' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                  <p className={`text-[10px] font-sans ${brokerage === '30' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>30 Days</p>
                </div>
              </div>
              {brokerageError && <p className='text-[#FF0000] text-xs font-sans'>Please select brokerage</p>}
            </div>
            {
              getpropertyDetails.property_for === "Rent" &&
              <div className='mb-5'>
                <div className='flex gap-1 mb-4'>
                  <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Prefered Tenant Type</p>
                  <IconAsterisk size={8} color='#FF0000' />
                </div>
                {
                  preferedTenantList?.length > 0 &&
                  <div className='flex flex-row items-center gap-6'>
                    {
                      preferedTenantList.map((item, index) => (
                        <div key={index} onClick={() => updatePreferredTenantType(item.name)} className={`group cursor-pointer px-8 py-2 rounded-md  ${preferredTenantType === item.name ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                          <p className={`text-[10px] font-sans ${preferredTenantType === item.name ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>{item.name}</p>
                        </div>
                      ))
                    }
                  </div>
                }
                {preferredTenantTypeError && <p className='text-[#FF0000] text-xs font-sans'>Please select preferred tenant type</p>}
              </div>
            }
          </>
        }
        <div className='mb-5 w-[40%]'>
          <Select
            label='Area units'
            labelClassName='!text-[#1D3A76] text-[13px] font-medium font-sans'
            data={[
              { value: 'sq.ft', label: 'sq.ft' },
              { value: 'sq.yd', label: 'sq.yd' },
            ]}
            searchable
            withAsterisk
            value={areaUnits}
            onChange={updateAreaUnits}
            inputClassName='focus:ring-blue-500 focus:border-blue-500'
            className='!m-0 !p-0'
          />
          {areaUnitsError && <p className='text-[#FF0000] text-xs font-sans'>Please select one</p>}
        </div>
        <div className='grid grid-cols-1 gap-2 mt-2'>
          {
            (propertySubType === "Apartment" || propertySubType === "Flat" || propertySubType === "Land" || propertySubType === "Office" || propertySubType === "Retail Shop" || propertySubType === "Show Room" || propertySubType === "Independent House" || propertySubType === "Independent Villa") &&
            <>
              <div className='mt-3'>
                <div className='flex gap-1'>
                  <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Built-up Area({areaUnits})</p>
                  <IconAsterisk size={8} color='#FF0000' />
                </div>
                <input
                  type='number'
                  placeholder='Built-up Area'
                  className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans'
                  autoComplete='off'
                  value={builtupArea}
                  onChange={updateBuiltupArea}
                />
                {builtupAreaError && <p className='text-[#FF0000] text-xs font-sans'>Please enter built-up area</p>}
              </div>
              <div className='mt-3'>
                <div className='flex gap-1'>
                  <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Carpet Area({areaUnits})</p>
                  <IconAsterisk size={8} color='#FF0000' />
                </div>
                <input
                  type='number'
                  placeholder='Carpet Area'
                  className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans'
                  autoComplete='off'
                  value={carpetArea}
                  onChange={updateCarpetArea}
                />
                {carpetAreaError && <p className='text-[#FF0000] text-xs font-sans'>Please enter carpet area</p>}
              </div>
            </>
          }
          {
            (!(propertySubType === "Independent House" || propertySubType === "Independent Villa") || (propertySubType === "Plot" || propertySubType === "Warehouse" || propertySubType === "Others")) &&
            <>
              <div className='mt-3 '>
                <div className='flex gap-1'>
                  <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Length Area({areaUnits})</p>
                  <IconAsterisk size={8} color='#FF0000' />
                </div>
                <input
                  type='text'
                  placeholder='length Area'
                  className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans'
                  autoComplete='off'
                  value={lengthArea}
                  onChange={updateLengthArea}
                />
                {lengthAreaError && <p className='text-[#FF0000] text-xs font-sans'>Please enter length area</p>}
              </div>
              <div className='my-3'>
                <div className='flex gap-1'>
                  <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Width Area({areaUnits})</p>
                  <IconAsterisk size={8} color='#FF0000' />
                </div>
                <input
                  type='text'
                  placeholder='Width Area'
                  className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans'
                  autoComplete='off'
                  value={widthArea}
                  onChange={updateWidthArea}
                />
                {widthAreaError && <p className='text-[#FF0000] text-xs font-sans'>Please enter width area</p>}
              </div>
            </>
          }
          {
            ((propertySubType === "Independent House" || propertySubType === "Independent Villa") || propertySubType === "Plot" || propertySubType === "Warehouse" || propertySubType === "Others") &&
            <div className='my-3'>
              <div className='flex gap-1'>
                <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Plot Area({areaUnits})</p>
                <IconAsterisk size={8} color='#FF0000' />
              </div>
              <input
                type='text'
                placeholder='Plot Area'
                className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans'
                autoComplete='off'
                value={plotArea}
                onChange={updatePlotArea}
              />
              {plotAreaError && <p className='text-[#FF0000] text-xs font-sans'>Please enter plot area</p>}
            </div>
          }
          {
            (propertySubType === "Independent House" || propertySubType === "Independent Villa") &&
            <div className='mb-3'>
              <div className='flex gap-1 mb-4'>
                <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Pent House</p>
                <IconAsterisk size={8} color='#FF0000' />
              </div>
              <div className='flex flex-row items-center gap-6'>
                <div onClick={() => updatePentHouse('Yes')} className={`group cursor-pointer px-8 py-2 rounded-md  ${pentHouse === 'Yes' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                  <p className={`text-[10px] font-sans ${pentHouse === 'Yes' ? 'text-white ' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>Yes</p>
                </div>
                <div onClick={() => updatePentHouse('No')} className={`group cursor-pointer px-8 py-2 rounded-md  ${pentHouse === 'No' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                  <p className={`text-[10px] font-sans ${pentHouse === 'No' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>No</p>
                </div>
              </div>
              {pentHouseError && <p className='text-[#FF0000] text-xs font-sans'>Please select one option</p>}
            </div>
          }
          {
            getpropertyDetails.property_for === "Sell" &&
            <>
              {!(propertySubType === "Independent House" || propertySubType === "Independent House") &&
                <div className='mt-2'>
                  <div className='flex gap-1'>
                    <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Unit Cost</p>
                    <IconAsterisk size={8} color='#FF0000' />
                  </div>
                  <input
                    type='number'
                    placeholder='unit cost'
                    className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans'
                    autoComplete='off'
                    value={unitCost}
                    onChange={updateUnitCost}
                  />
                  {unitCostError && <p className='text-[#FF0000] text-xs font-sans'>Please enter unit cost</p>}
                </div>
              }
              <div className='my-3'>
                <div className='flex gap-1'>
                  <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Property Cost</p>
                  <IconAsterisk size={8} color='#FF0000' />
                </div>
                <input
                  type='number'
                  placeholder='property cost'
                  className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans'
                  autoComplete='off'
                  value={propertyCost}
                  onChange={updatePropertyCost}
                />
                {propertyCostError && <p className='text-[#FF0000] text-xs font-sans'>Please enter property cost</p>}
              </div>
            </>
          }
        </div>
        {
          propertySubType === "Plot" &&
          <div className='mb-5 mt-3'>
            <div className='flex gap-1 mb-4'>
              <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Procession Status</p>
              <IconAsterisk size={8} color='#FF0000' />
            </div>
            <div className='flex flex-row items-center gap-6'>
              <div onClick={() => updateProcessionStatus('Immediate')} className={`group cursor-pointer px-8 py-2 rounded-md  ${processionStatus === 'Immediate' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                <p className={`text-[10px] font-sans ${processionStatus === 'Immediate' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>Immediate</p>
              </div>
              <div onClick={() => updateProcessionStatus('Future')} className={`group cursor-pointer px-8 py-2 rounded-md  ${processionStatus === 'Future' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                <p className={`text-[10px] font-sans ${processionStatus === 'Future' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>Future</p>
              </div>
            </div>
            {processionStatusError && <p className='text-[#FF0000] text-xs font-sans'>Please select one</p>}
          </div>
        }
        {/* ownership */}
        {
          (getpropertyDetails?.property_in === 'Commercial' && getpropertyDetails?.property_for === 'Sell') &&
          <div className='mb-5 mt-2'>
            <div className='flex gap-1'>
              <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Ownership</p>
              <IconAsterisk size={8} color='#FF0000' />
            </div>
            <div className='grid grid-cols-4 gap-3 mt-2'>
              {
                allOwnerShipTypes?.length > 0 &&
                allOwnerShipTypes.map((item, index) => (
                  <div key={index} onClick={() => updateOwnerShip(item.value)} className={`group cursor-pointer px-8 py-2 rounded-md  ${ownerShip === item.value ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                    <p className={`text-[10px] font-sans ${ownerShip === item.value ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>{item.name}</p>
                  </div>
                ))
              }
            </div>
            {ownerShipError && <p className='text-[#FF0000] text-xs font-sans'>Please select Ownership</p>}
          </div>
        }
        {/* facilities */}
        {
          (propertySubType === "Apartment" || propertySubType === "Flat" || propertySubType === "Land" || propertySubType === "Office" || propertySubType === "Retail Shop" || propertySubType === "Show Room") &&
          <div>
            <p className='text-[#1D3A76] text-[13px] mb-3 mt-6 font-sans font-medium'>Facilities</p>
            <ul className="grid grid-cols-3 text-[13px] font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
              {Object.keys(facilities).map((facility) => (
                <li key={facility} className="w-full border-b border-gray-200 sm:border-b-0 border-r">
                  <div className="flex items-center ps-3">
                    <input
                      id={facility}
                      type="checkbox"
                      checked={facilities[facility]}
                      onChange={updateFacilties}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                      htmlFor={facility}
                      className="w-full py-3 ms-2 text-[13px] font-medium text-gray-900"
                    >
                      {facility.charAt(0).toUpperCase() + facility.slice(1)}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        }
        <Textarea
          label="Enter other attractive offers (Max 100 characters)"
          placeholder="your details of property"
          withAsterisk
          textareaClassName='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans'
          labelClassName='text-[#1D3A76] text-[12px] font-medium font-sans mt-3'
          value={otherInfo}
          onChange={updateOtherInfo}
          error={otherInfoError}
        />
        {
          getpropertyDetails?.property_in === "Commercial" &&
          <>
            {
              (propertySubType === "Warehouse" || propertySubType === "Plot" || propertySubType === "Others") ?
                <div className='mb-5'>
                  <div className='flex gap-1 mb-4'>
                    <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Plot No.</p>
                    <IconAsterisk size={8} color='#FF0000' />
                  </div>
                  <div className='border border-[#909090] rounded-md w-[20%] px-3'>
                    <input
                      type="number"
                      id="plotno"
                      className='text-[14px] w-full py-1 outline-none'
                      autoComplete='off'
                      placeholder='Plot Number'
                      value={plotNumber}
                      onChange={updatePlotNumber}
                    />
                  </div>
                  {plotNumberError && <p className='text-[#FF0000] text-xs font-sans'>Please Enter Plot Number</p>}
                </div>
                :
                <div className='mb-5'>
                  <div className='flex gap-1 mb-4'>
                    <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Flat No.</p>
                    <IconAsterisk size={8} color='#FF0000' />
                  </div>
                  <div className='border border-[#909090] rounded-md w-[20%] px-3'>
                    <input
                      type="number"
                      id="flatno"
                      className='text-[14px] w-full py-1 outline-none'
                      autoComplete='off'
                      placeholder='Flat Number'
                      value={flatNumber}
                      onChange={updateFlatNumber}
                    />
                  </div>
                  {flatNumberError && <p className='text-[#FF0000] text-xs font-sans'>Please Enter Flat Number</p>}
                </div>
            }
            {
              (propertySubType === "Retail Shop" || propertySubType === "Show Room" || propertySubType === "Plot" || propertySubType === "Others") ?
                <div className='mb-5 w-[40%]'>
                  <Select
                    label='Suitable'
                    labelClassName='!text-[#1D3A76] text-[13px] font-medium font-sans'
                    data={businesstypesList}
                    searchable
                    withAsterisk
                    value={suitableFor}
                    onChange={updateSuitableFor}
                    inputClassName='focus:ring-blue-500 focus:border-blue-500'
                    className='!m-0 !p-0'
                  />
                  {suitableForError && <p className='text-[#FF0000] text-xs font-sans'>Please select one</p>}
                </div>
                :
                <div className='mb-5 w-[40%]'>
                  <Select
                    label='Zone Type'
                    labelClassName='!text-[#1D3A76] text-[13px] font-medium font-sans'
                    data={allZoneTypes}
                    searchable
                    withAsterisk
                    value={zoneType}
                    onChange={updateZoneType}
                    inputClassName='focus:ring-blue-500 focus:border-blue-500'
                    className='!m-0 !p-0'
                  />
                  {zoneTypeError && <p className='text-[#FF0000] text-xs font-sans'>Please select one</p>}
                </div>
            }
          </>
        }

        <div className='mt-3'>
          <p className='text-[#1D3A76] text-md mb-3 font-medium font-sans'>Add Additional Details</p>
          <p className='text-[#1D3A76] text-[13px] font-sans font-medium mb-2'>Facing</p>
          <div className='grid grid-cols-4 gap-3'>
            {
              facingList.length > 0 &&
              facingList.map((item, index) => (
                <div key={index} onClick={() => updateFacing(item.value)} className={`group cursor-pointer px-8 py-2 rounded-md  ${facing === item.value ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
                  <p className={`text-[10px] font-sans ${facing === item.value ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>{item.name}</p>
                </div>
              ))
            }
          </div>
          {facingError && <p className='text-[#FF0000] text-xs font-sans'>Please select facing</p>}
        </div>
        <div className='my-4'>
          <div className='flex gap-1 mb-2'>
            <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Car Parking</p>
            <IconAsterisk size={8} color='#FF0000' />
          </div>
          <div className='flex flex-row items-center gap-6'>
            <div onClick={() => updateCarParking('0')} className={`group cursor-pointer px-8 py-2 rounded-md  ${carParking === '0' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
              <p className={`text-[10px] font-sans ${carParking === '0' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>0</p>
            </div>
            <div onClick={() => updateCarParking('1')} className={`group cursor-pointer px-8 py-2 rounded-md  ${carParking === '1' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
              <p className={`text-[10px] font-sans ${carParking === '1' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>1 </p>
            </div>
            <div onClick={() => updateCarParking('2')} className={`group cursor-pointer px-8 py-2 rounded-md  ${carParking === '2' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
              <p className={`text-[10px] font-sans ${carParking === '2' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>2 </p>
            </div>
            <div onClick={() => updateCarParking('3')} className={`group cursor-pointer px-8 py-2 rounded-md  ${carParking === '3' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
              <p className={`text-[10px] font-sans ${carParking === '3' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>3 </p>
            </div>
            <div onClick={() => updateCarParking('4plus')} className={`group cursor-pointer px-8 py-2 rounded-md  ${carParking === '4plus' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
              <p className={`text-[10px] font-sans ${carParking === '4plus' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>4+ </p>
            </div>
          </div>
          {
            carParking === '4plus' &&
            <div className='my-5'>
              <div className='flex gap-1'>
                <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Custom Car Parking</p>
                <IconAsterisk size={8} color='#FF0000' />
              </div>
              <input
                type='text'
                placeholder='Enter Custom Car Parking'
                className='border-b border-[#c3c3c3] w-full py-1 focus:outline-none text-[13px] font-sans'
                autoComplete='off'
                value={customCarParking}
                onChange={updateCustomCarParking}
              />
            </div>
          }
          {carParkingError && <p className='text-[#FF0000] text-xs font-sans'>Please select car parking</p>}
        </div>
        <div className=''>
          <div className='flex gap-1 mb-2'>
            <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Bike Parking</p>
            <IconAsterisk size={8} color='#FF0000' />
          </div>
          <div className='flex flex-row items-center gap-6'>
            <div onClick={() => updateBikeParking('0')} className={`group cursor-pointer px-8 py-2 rounded-md  ${bikeParking === '0' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
              <p className={`text-[10px] font-sans ${bikeParking === '0' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>0</p>
            </div>
            <div onClick={() => updateBikeParking('1')} className={`group cursor-pointer px-8 py-2 rounded-md  ${bikeParking === '1' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
              <p className={`text-[10px] font-sans ${bikeParking === '1' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>1 </p>
            </div>
            <div onClick={() => updateBikeParking('2')} className={`group cursor-pointer px-8 py-2 rounded-md  ${bikeParking === '2' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
              <p className={`text-[10px] font-sans ${bikeParking === '2' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>2 </p>
            </div>
            <div onClick={() => updateBikeParking('3')} className={`group cursor-pointer px-8 py-2 rounded-md  ${bikeParking === '3' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
              <p className={`text-[10px] font-sans ${bikeParking === '3' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>3 </p>
            </div>
            <div onClick={() => updateBikeParking('4plus')} className={`group cursor-pointer px-8 py-2 rounded-md  ${bikeParking === '4plus' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
              <p className={`text-[10px] font-sans ${bikeParking === '4plus' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>4+ </p>
            </div>
          </div>
          {
            bikeParking === '4plus' &&
            <div className='my-5'>
              <div className='flex gap-1'>
                <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Custom Bike Parking</p>
                <IconAsterisk size={8} color='#FF0000' />
              </div>
              <input
                type='text'
                placeholder='Enter Custom Bike Parking'
                className='border-b border-[#c3c3c3] w-full py-1 focus:outline-none text-[13px] font-sans'
                autoComplete='off'
                value={customBikeParking}
                onChange={updateCustomBikeParking}
              />
            </div>
          }
          {bikeParkingError && <p className='text-[#FF0000] text-xs font-sans'>Please select bike parking</p>}
        </div>
        <div className='my-3'>
          <div className='flex gap-1 mb-2'>
            <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Open Parking</p>
            <IconAsterisk size={8} color='#FF0000' />
          </div>
          <div className='flex flex-row items-center gap-6'>
            <div onClick={() => updateOpenParking('0')} className={`group cursor-pointer px-8 py-2 rounded-md  ${openParking === '0' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
              <p className={`text-[10px] font-sans ${openParking === '0' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>0</p>
            </div>
            <div onClick={() => updateOpenParking('1')} className={`group cursor-pointer px-8 py-2 rounded-md  ${openParking === '1' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
              <p className={`text-[10px] font-sans ${openParking === '1' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>1 </p>
            </div>
            <div onClick={() => updateOpenParking('2')} className={`group cursor-pointer px-8 py-2 rounded-md  ${openParking === '2' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
              <p className={`text-[10px] font-sans ${openParking === '2' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>2 </p>
            </div>
            <div onClick={() => updateOpenParking('3')} className={`group cursor-pointer px-8 py-2 rounded-md  ${openParking === '3' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
              <p className={`text-[10px] font-sans ${openParking === '3' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>3 </p>
            </div>
            <div onClick={() => updateOpenParking('4plus')} className={`group cursor-pointer px-8 py-2 rounded-md  ${openParking === '4plus' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
              <p className={`text-[10px] font-sans ${openParking === '4plus' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>4+ </p>
            </div>
          </div>
          {
            openParking === '4plus' &&
            <div className='my-5'>
              <div className='flex gap-1'>
                <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Custom Open Parking</p>
                <IconAsterisk size={8} color='#FF0000' />
              </div>
              <input
                type='text'
                placeholder='Enter Custom Open Parking'
                className='border-b border-[#c3c3c3] w-full py-1 focus:outline-none text-[13px] font-sans '
                autoComplete='off'
                value={customOpenParking}
                onChange={updateCustomOpenParking}
              />
            </div>
          }
          {openParkingError && <p className='text-[#FF0000] text-xs font-sans'>Please select open parking</p>}
        </div>
        {/* <div className='my-6'>
          <div className='flex gap-1'>
            <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Address</p>
            <IconAsterisk size={8} color='#FF0000' />
          </div>
          <input  
            type='text'
            placeholder='Address'
            className='border-b border-[#c3c3c3] w-full py-2 focus:outline-none text-[13px] font-sans'
            autoComplete='off'
            value={address}
            onChange={updateAddress}
          />
          {addressError && <p className='text-[#FF0000] text-xs font-sans'>Please enter address</p>}
        </div> */}
        <div className='mb-5'>
          <div className='flex gap-1 mb-4'>
            <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Servant Room?</p>
            <IconAsterisk size={8} color='#FF0000' />
          </div>
          <div className='flex flex-row items-center gap-6'>
            <div onClick={() => updateServantRoom('yes')} className={`group cursor-pointer px-8 py-2 rounded-md  ${servantRoom === 'yes' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
              <p className={`text-[10px] font-sans ${servantRoom === 'yes' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>Yes</p>
            </div>
            <div onClick={() => updateServantRoom('no')} className={`group cursor-pointer px-8 py-2 rounded-md  ${servantRoom === 'no' ? 'border border-[#1D3A76] bg-[#1D3A76]' : 'border border-[#909090]  hover:bg-[#1D3A76]'}`}>
              <p className={`text-[10px] font-sans ${servantRoom === 'no' ? 'text-white' : 'text-[#1D3A76] font-semibold group-hover:text-white'}`}>No</p>
            </div>
          </div>
          {servantRoomError && <p className='text-[#FF0000] text-xs font-sans'>Please select servant room</p>}
        </div>
        <div className='mt-6'>
          <div className='flex gap-1'>
            <p className='text-[#1D3A76] text-[13px] font-medium font-sans'>Property Description</p>
            <IconAsterisk size={8} color='#FF0000' />
          </div>
          <input
            type='text'
            placeholder='Property Description'
            className='border-b border-[#c3c3c3] w-full py-1 text-[12px] focus:outline-none font-sans'
            autoComplete='off'
            value={propertyDescription}
            onChange={updatePropertyDescription}
          />
          {propertyDescriptionError && <p className='text-[#FF0000] text-xs font-sans'>Please enter property description</p>}
        </div>
      </div>
      <div className='flex flex-row justify-between items-center px-6 pt-3'>
        <div onClick={() => updateActiveTab('basicdetails', 'completed', unique_property_id)} className='bg-[#000] px-8 py-2 rounded-md cursor-pointer'>
          <p className='text-white text-[10px]'>Back</p>
        </div>
        <div onClick={updatePropertyDetails} className='border border-[#1D3A76] bg-[#1D3A76] px-8 py-2 rounded-md cursor-pointer'>
          <p className='text-white text-[10px]'>Next, add property details</p>
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
      {
        furnishingModal &&
        <Modal
          open={furnishingModal}
          onClose={closeFurnishingModal}
          size="md"
          zIndex={9999}
        >
          <Addfurnishingswrapper
            closeFurnishingModal={closeFurnishingModal}
          />
        </Modal>
      }
    </div>
  )
}

export default Propertydetailswrapper