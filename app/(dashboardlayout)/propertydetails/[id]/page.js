
import React from 'react'
import Propertydetails from '@/components/propertydetails/propertydetails'
function page({ params }) {
    const { id } = params;
    return (
        <>
            <Propertydetails id={id} />
        </>
    )
}

export default page