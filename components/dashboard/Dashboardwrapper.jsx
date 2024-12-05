import Image from 'next/image'
import React from 'react'
import user_profile from '@/public/assets/user_profile.png'
import dynamic from 'next/dynamic'

const Checkoutpropertywrapper = dynamic(() => import('./Checkoutpropertywrapper'))
const Findplanner = dynamic(() => import('./Findplanner'))
const Housepackage = dynamic(() => import('./Housepackage'))
const Ownersreview = dynamic(() => import('./Ownersreview'))
const Queries = dynamic(() => import('./Queries'))
const Dashboardsidebarsection = dynamic(() => import('./Dasboradsidebar/Dashboardsidebarsection'))


function Dashboardwrapper() {
    return (
        <div className="grid grid-cols-12 gap-8 px-[80px] mt-5 w-full">
            {/* First Child: Spanning 8 Columns */}
            <div className="col-span-12 md:col-span-9 space-y-8 mb-8 ">
                <div className="bg-[#31539A] px-4 py-2 rounded-md flex flex-row items-center gap-4">
                    <div>
                        <Image src={user_profile} alt="logo" width={40} height={40} />
                    </div>
                    <p className="text-white text-[15px] font-semibold font-sans">Hello, MEETOWNER!</p>
                </div>
                <Checkoutpropertywrapper />
                <Findplanner />
                <Housepackage />
                <Ownersreview />
                <Queries />
            </div>

            {/* Second Child: Spanning 4 Columns */}
            <div className="col-span-12 md:col-span-3 space-y-8">
                <Dashboardsidebarsection />

            </div>
        </div>

    )
}

export default Dashboardwrapper