import React from 'react'
import Propertybanner from './Propertybanner'
import Propertyamenities from './Propertyamenities'
import Propertypricetabs from './Propertypricetabs'
import Propertylocation from './Propertylocation'
import Propertyoverview from './Propertyoverview'
import Propertymapview from './Propertymapview'

function Propertydetailswrapper({ propertyDetails }) {
    console.log(propertyDetails)
    return (
        <div className='flex bg-[#ffffffe6] px-[80px] py-6 gap-6'>
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
                <Propertymapview />
            </div>

        </div>
    )
}

export default Propertydetailswrapper