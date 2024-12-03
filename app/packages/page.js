import React from 'react'
import dynamic from 'next/dynamic'
const Packageswrapper = dynamic(() => import('@/components/packages/Packageswrapper'))
const Header = dynamic(() => import('@/components/header/Header'))


function page() {
  return (
    <>
      <Header />
      <Packageswrapper />
    </>
  )
}

export default page