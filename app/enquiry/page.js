import dynamic from 'next/dynamic'
import React from 'react'
const Enquirieswrapper = dynamic(() => import('@/components/enquires/Enquirieswrapper'))
const Header = dynamic(() => import('@/components/header/Header'))


function page() {
  return (
    <>
      <Header />
      <Enquirieswrapper />
    </>
  )
}

export default page