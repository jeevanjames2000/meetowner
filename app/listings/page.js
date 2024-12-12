import React from 'react'

const Header = dynamic(() => import('@/components/header/Header'))
const Listingswrapper = dynamic(() => import('@/components/listings/Listingswrapper'))
import dynamic from 'next/dynamic'


function page() {
    return (
        <>
            <Header />
            <Listingswrapper />
        </>
    )
}

export default page