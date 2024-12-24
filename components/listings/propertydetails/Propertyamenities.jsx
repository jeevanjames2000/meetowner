'use client'
import { IconCheckbox, IconHeart, IconShare } from '@tabler/icons-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import amenitiesaskdetailslike from '@/public/assets/amenities-askdetails-like.png';
import cricket_pitch from '@/public/assets/cricket_pitch.svg';
import swimming_pool from '@/public/assets/swimming_pool.svg';
import fire_sprinklers from '@/public/assets/fire_sprinklers.svg';
import fire_fighting_system from '@/public/assets/fire_fighting_system.svg';
import footpaths from '@/public/assets/footpaths.svg';
import community_buildings from '@/public/assets/community_buildings.svg';
import internal_roads from '@/public/assets/internal_roads.svg';
import water_conservation from '@/public/assets/water_conservation.svg';
import gym from '@/public/assets/gym.svg';
import business_center from '@/public/assets/business_center.svg';
import club_house from '@/public/assets/club_house.svg';
import multipurpose_hall from '@/public/assets/multipurpose_hall.svg';
import library from '@/public/assets/library.svg';
import indoor_games from '@/public/assets/indoor_games.svg';
import cycling_jogging_track from '@/public/assets/cycling_jogging_track.svg';
import yoga_meditation from '@/public/assets/yoga_meditation.svg';
import lift from '@/public/assets/lift.svg';
import street_light from '@/public/assets/street_light.svg';
import meter_room from '@/public/assets/meter_room.svg';
import recreation_facilities from '@/public/assets/recreation_facilities.svg';
import cctv from '@/public/assets/cctv.svg';
import security from '@/public/assets/security.svg';
import cafeteria from '@/public/assets/cafeteria.svg';
import pet_allowed from '@/public/assets/pet_allowed.svg';
import children_play_area from '@/public/assets/children_play_area.svg';

function Propertyamenities({ propertyDetails }) {

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
        Lawn_with_Stepping_Stones: false,
        None: false,
    });

    useEffect(() => {
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
    }, [propertyDetails]);

    // const facilityImages = {
    //     Lift: lift,
    //     CCTV: cctv,
    //     Gym: gym,
    //     Garden: null,
    //     Cricket_Pitch: cricket_pitch,
    //     Swimming_Pool: swimming_pool,
    //     Fire_Sprinklers: fire_sprinklers,
    //     Fire_Fighting_System: fire_fighting_system,
    //     Footpaths: footpaths,
    //     Community_Buildings: community_buildings,
    //     Internal_Roads: internal_roads,
    //     Water_Conservation: water_conservation,
    //     Business_Center: business_center,
    //     Club_House: club_house,
    //     Multipurpose_Hall: multipurpose_hall,
    //     Library: library,
    //     Indoor_Games: indoor_games,
    //     Cycling_Jogging_Track: cycling_jogging_track,
    //     Yoga_Meditation: yoga_meditation,
    //     Street_Light: street_light,
    //     Meter_Room: meter_room,
    //     Recreation_Facilities: recreation_facilities,
    //     Security: security,
    //     Cafeteria: cafeteria,
    //     Pet_Allowed: pet_allowed,
    //     Children_Play_Area: children_play_area,
    // }

    return (
        <div className="propertyprice space-y-6">
            <p className="text-[#1d3a76] text-[25px] font-[600]">{propertyDetails?.property_name?.toUpperCase()} FACILITIES</p>
            <div className="custom-shadow bg-[#F3F3F3] p-6 space-y-2">
                <div className="flex items-center justify-end gap-[14px]">
                    <IconHeart stroke={2} color="#E28B6D" className="h-5 w-5" />
                    <IconShare stroke={2} color="#1d3a76" className="h-5 w-5" />
                    <button
                        className="bg-[#079E9E] text-[#ffffff] text-[12px] font-[600] py-1 px-3 rounded-[5px]"
                    >
                        Ask for Details
                    </button>
                </div>
                <div className="grid grid-cols-6 ">
                    {
                        Object.keys(facilities).map((facility, index) => {
                            if (facilities[facility]) {
                                return (
                                    <div key={index} className="flex gap-2 items-center justify-start py-4">
                                        {/* <Image
                                            src={pet_allowed}
                                            alt={facility}
                                            className="h-[30px] w-fit object-cover border-[1.9px] border-[#492828] rounded-lg p-[6px]"
                                        /> */}
                                        <IconCheckbox stroke={2} color="#1d3a76" className="h-5 w-5" />
                                        <p className="text-[14px] text-[#6E6E6E] font-[500] font-Montserrat">{facility}</p>
                                    </div>
                                );
                            }
                            return null;
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Propertyamenities;
