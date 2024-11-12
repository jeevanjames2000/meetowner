import dynamic from 'next/dynamic'
import React from 'react'

const Signupwrapper = dynamic(() => import('@/components/signup/Signupwrapper'))

function page() {
  return (
    <>
    <Signupwrapper />
    </>
  )
}

export default page