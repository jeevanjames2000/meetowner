import React from 'react'
const Listingswrapper = dynamic(() => import('@/components/listings/Listingswrapper'))
import dynamic from 'next/dynamic'
function page() {
    return (
        <Listingswrapper />
    )
}

export default page