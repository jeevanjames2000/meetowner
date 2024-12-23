import { IconHeart } from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';
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
    const amenities = [
        { name: "Cricket Pitch", image: cricket_pitch },
        { name: "Swimming Pool", image: swimming_pool },
        { name: "Fire Sprinklers", image: fire_sprinklers },
        { name: "Fire Fighting System", image: fire_fighting_system },
        { name: "Footpaths", image: footpaths },
        { name: "Community Buildings", image: community_buildings },
        { name: "Internal Roads", image: internal_roads },
        { name: "Water Conservation", image: water_conservation },
        { name: "Gym", image: gym },
        { name: "Business Center", image: business_center },
        { name: "Club House", image: club_house },
        { name: "Multipurpose Hall", image: multipurpose_hall },
        { name: "Library", image: library },
        { name: "Indoor Games", image: indoor_games },
        { name: "Cycling & Jogging Track", image: cycling_jogging_track },
        { name: "Yoga / Meditation", image: yoga_meditation },
        { name: "Lift", image: lift },
        { name: "Street Light", image: street_light },
        { name: "Meter Room", image: meter_room },
        { name: "Recreation Facilities", image: recreation_facilities },
        { name: "CCTV", image: cctv },
        { name: "24/7 Security", image: security },
        { name: "Cafeteria", image: cafeteria },
        { name: "Pet Allowed", image: pet_allowed },
        { name: "Children's Play Area", image: children_play_area },
    ];


    return (
        <div className="propertyprice space-y-6">
            <p className="text-[#1D37A6] text-[25px] font-[600]">{propertyDetails?.property_name} Amenities</p>
            <div className="custom-shadow bg-[#F3F3F3] p-6 space-y-8">
                <div className="flex items-center justify-end gap-[14px]">
                    <IconHeart stroke={2} color="#E28B6D" className="h-6 w-6" />
                    <Image
                        src={amenitiesaskdetailslike}
                        alt="amenities-askdetails-like"
                        className="h-5 w-5 object-contain"
                    />
                    <button
                        className="bg-[#079E9E] text-[#ffffff] text-[12px] font-[600] py-1 px-3 rounded-[5px]"
                    >
                        Ask for Details
                    </button>
                </div>
                <div className="grid grid-cols-3 ">
                    {amenities.map((amenity, index) => (

                        <div key={index} className='flex gap-2 items-center justify-start py-4'>
                            <Image
                                src={amenity.image}
                                alt={amenity.name}
                                className="h-[30px] w-fit object-cover border-[1.9px] border-[#492828] rounded-lg p-[6px]"
                            />
                            <p className="text-[13px] text-[#6E6E6E] font-[600]">{amenity.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Propertyamenities;
