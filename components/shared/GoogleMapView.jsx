'use client';
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';

const GoogleMapView = ({ propertiesData }) => {
    const [location, setLocation] = useState(null);
    const [mapCenter, setMapCenter] = useState(null);

    const fetchCoordinates = async () => {
        try {
            const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
                params: {
                    address: propertiesData.google_address,
                    key: 'AIzaSyBmei9lRUUfJI-kLIPNBoc2SxEkwhKHyvU',
                },
            });

            if (response.data.results.length > 0) {
                const { lat, lng } = response.data.results[0].geometry.location;
                setLocation({ lat, lng });
                setMapCenter({ lat, lng });
            } else {
                console.log('Unable to fetch location.');
            }
        } catch (error) {
            console.error('Error fetching location. Check your API key or address.', error);
        }
    };

    const handleZoom = (delta) => {
        if (mapCenter) {
            setMapCenter((prevCenter) => ({
                ...prevCenter,
                zoom: (prevCenter?.zoom || 14) + delta,
            }));
        }
    };

    const handleViewInMaps = () => {
        if (location) {
            const url = `https://www.google.com/maps?q=${location.lat},${location.lng}`;
            window.open(url, '_blank');
        }
    };

    useEffect(() => {
        fetchCoordinates();
    }, [propertiesData?.google_address]);

    return (
        <div className="p-4 bg-white">
            {mapCenter ? (
                <LoadScript googleMapsApiKey="AIzaSyBmei9lRUUfJI-kLIPNBoc2SxEkwhKHyvU">
                    <GoogleMap
                        mapContainerClassName="w-full h-64 rounded-md"
                        center={mapCenter}
                        zoom={14}
                    >
                        <Marker position={location} />
                    </GoogleMap>
                </LoadScript>
            ) : (
                <p className="text-center text-gray-500">Loading map...</p>
            )}

            {/* <div className="flex justify-end gap-2 mt-2">
                <button
                    onClick={() => handleZoom(1)}
                    className="px-3 py-2 bg-blue-600 text-white rounded-full"
                >
                    +
                </button>
                <button
                    onClick={() => handleZoom(-1)}
                    className="px-3 py-2 bg-blue-600 text-white rounded-full"
                >
                    -
                </button>
            </div> */}

            <button
                onClick={handleViewInMaps}
                className="mt-4 w-full bg-[#1d3a76] text-white py-3 rounded-md"
            >
                View in Maps
            </button>
        </div>
    );
};

export default GoogleMapView;
