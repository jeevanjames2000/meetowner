

import dynamic from 'next/dynamic'
import React from 'react'
const Loginwrapper = dynamic(() => import('@/components/login/Loginwrapper'))

function page() {
  return (
    <>
      <Loginwrapper />
    </>
  )
}

export default page