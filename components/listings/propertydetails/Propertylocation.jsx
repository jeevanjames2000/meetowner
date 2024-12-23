import React from 'react';
import international_schools from '@/public/assets/international_schools.svg';
import Image from 'next/image';
import hospitals from '@/public/assets/hospitals.svg';
import supermarkets_malls from '@/public/assets/supermarkets_malls.svg';
import sports_arena from '@/public/assets/sports_arena.svg';
import airport_travel from '@/public/assets/airport_travel.svg';
import parks_walkers_zone from '@/public/assets/parks_walkers_zone.svg';

function Propertylocation({propertyDetails}) {
    const nearbyAmenities = [
        { name: "International Schools", distance: "200m", image: international_schools },
        { name: "Best Hospital Services", distance: "300m", image: hospitals },
        { name: "Super Markets & Malls", distance: "400m", image: supermarkets_malls },
        { name: "Sports Arena For Children's", distance: "500m", image: sports_arena },
        { name: "Airport and Travel Agencies", distance: "600m", image: airport_travel },
        { name: "Walkers Zone & Parks", distance: "2km", image: parks_walkers_zone },
    ];

    return (
        <div className="propertyprice space-y-6">
            <div>
                <p className="text-[#1D37A6] text-[25px] font-[600]">Property Location</p>
                <p className="text-[#00609E] text-[18px] font-[400]">{propertyDetails?.google_address}</p>
            </div>
            <div className="custom-shadow bg-[#F3F3F3] p-6 space-y-8">
                <p className="text-[#00609E] text-[18px] font-[700] text-center">Around This Property</p>
                <div className="grid grid-cols-2 gap-8">
                    {nearbyAmenities.map((amenity, index) => (
                        <div
                            key={index}
                            className="custom-shadow flex bg-[#FFFFFF] rounded-md items-center justify-start  p-[10px] gap-2"
                        >
                            <Image
                                src={amenity.image}
                                alt={amenity.name}
                                className="w-fit h-fit object-cover"
                            />
                            <p className="text-[16px] text-[#00609E] font-[400]">{amenity.name}</p>
                            <p className="text-[#ffffff] text-center text-[14px] bg-[#1F3C88] font-[600] px-3 py-[6px] rounded-md ml-auto">
                                {amenity.distance}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Propertylocation;
