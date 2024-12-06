'use client';
import React, { useEffect, useState } from 'react'
import { useUserDetails } from '../zustand/useUserDetails';

function Authuserverify({ children }) {
    const isLogged = useUserDetails(state => state.isLogged);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (!isLogged) {
            window.location.href = '/';
        } else {
            setIsLoading(false);
        }
    }, [isLogged])

    if (isLoading === true) {
        return (
            <div className="flex justify-center items-center h-screen">
                Loading...
            </div>
        )
    }

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default Authuserverify
