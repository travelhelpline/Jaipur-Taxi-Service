'use client'
import HeroBanner from '@/components/HeroBanner'
import React from 'react'
import Bread from '@/components/Bread'

const Page = () => {
  // breadItems
  const breadcrumbItems = [
    { label: "Home", link: "/", active: false },
    { label: "Rajasthan Tour Packages", link: "/tour-packages-rajasthan", active: false },
    { label: "jal mahal jaipur", link: null, active: true },
  ];


  return (
    <>
      {/* banner */}
      <HeroBanner
        slides={[
          { heading: "jal mahal jaipur", subheading: "Travel without breaking the bank" }
        ]}
        backgroundImage="" />

      {/* bread crumb */}
      <Bread items={breadcrumbItems} />

    </>
  )
}

export default Page