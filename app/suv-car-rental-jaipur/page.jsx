import HeroBanner from '@/components/HeroBanner'
import RentalPackages from '@/components/RentalPackages'
import { suvCabRentals } from '@/data/cabRentalData'
import React from 'react'

const page = () => {
  const slides = [
    {
      image: '',
      alt: 'Jaipur Taxi',
      title: '',
      heading: 'suv car rental jaipur',
      subheading: 'Comfort & Convenience for Every Journey',
    },
  ]
  return (
    <>
      <HeroBanner slides={slides} />
      <div className="container-fluid py-5">
        <div className="container">

          <div className="row justify-content-center align-items-center packages rental-container">
            <RentalPackages rentals={suvCabRentals} />
          </div>
        </div>
      </div>
    </>
  )
}

export default page