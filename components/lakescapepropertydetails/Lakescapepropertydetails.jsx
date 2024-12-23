import React from 'react'
import Propertybanner from './Propertybanner'
import Propertyamenities from './Propertyamenities'
import Propertypricetabs from './Propertypricetabs'
import Propertylocation from './Propertylocation'
import Propertyoverview from './Propertyoverview'

function Lakescapepropertydetails() {
    return (
        <div className='flex bg-[#ffffffe6] px-[80px] pt-6 gap-6 mb-16'> 
             <div className="w-[68%] space-y-14">
                <Propertybanner />
                <Propertypricetabs />
                <Propertyamenities />
                <Propertylocation />
                <Propertyoverview />
            </div>
           
        </div>
    )
}

export default Lakescapepropertydetails