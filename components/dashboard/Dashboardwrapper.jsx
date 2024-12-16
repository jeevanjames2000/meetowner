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
        <div className="grid grid-cols-12 gap-10 px-[80px] mt-16 w-full">
            {/* First Child: Spanning 8 Columns */}
            <div className="col-span-12 md:col-span-8 space-y-10 mb-12">
                <div className="bg-[#31539A] px-8 py-3 rounded-md flex flex-row items-center gap-10">
                    <div>
                        <Image src={user_profile} alt="logo" width={48} height={48} />
                    </div>
                    <p className="text-white text-[16px] font-[600] font-sans tracking-extra-wide">Hello, MEETOWNER!</p>
                </div>
                <Checkoutpropertywrapper />
                <Findplanner />
                <Housepackage />
                <Ownersreview />
                <Queries />
            </div>

            {/* Second Child: Spanning 4 Columns */}
            <div className="col-span-12 md:col-span-4 space-y-8">
                <Dashboardsidebarsection />

            </div>
        </div>

    )
}

export default Dashboardwrapper