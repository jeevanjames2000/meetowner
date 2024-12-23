import React from 'react'
import Propertybanner from './Propertybanner'
import Propertyamenities from './Propertyamenities'
import Propertypricetabs from './Propertypricetabs'
import Propertylocation from './Propertylocation'
import Propertyoverview from './Propertyoverview'

function Propertydetailswrapper({ propertyDetails }) {
    console.log(propertyDetails)
    return (
        <div className='flex bg-[#ffffffe6] px-[80px] pt-6 gap-6 mb-16'>
            <div className="w-[68%] space-y-14">
                <Propertybanner
                    propertyDetails={propertyDetails}
                />
                <Propertypricetabs
                    propertyDetails={propertyDetails}
                />
                <Propertyamenities
                    propertyDetails={propertyDetails}
                />
                <Propertylocation
                    propertyDetails={propertyDetails}
                />
                <Propertyoverview
                    propertyDetails={propertyDetails}
                />
            </div>

        </div>
    )
}

export default Propertydetailswrapper