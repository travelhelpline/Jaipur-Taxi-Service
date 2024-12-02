"use client"
import RentalSlider from '@/components/RentalSlider';
import WhyChooseUs from '@/components/WhyChooseUs';
import { Carousel, CarouselCaption, Modal } from 'react-bootstrap';
import Image from 'next/image';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';
import PackagesSlider from '@/components/PackagesSlider';
import { PopularTourPackages } from '@/data/TourPackagesData';
import Link from 'next/link';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { getPackagesByCategory } from '@/utils/utils';
import { allCabRentals } from '@/data/cabRentalData';
import { useEffect, useState } from 'react';
import SearchBar from '@/components/SearchBar';
const HomeBanner01 = '/Images/Banners/home-banner.png';
const Home = () => {

  const [showSearch, setShowSearch] = useState(false);
  const handleCloseSearch = () => setShowSearch(false);
  const handleShowSearch = () => setShowSearch(true);

  const popularRentals = getPackagesByCategory(allCabRentals, 'popular')
  return (

    <>
      <div className="container-fluid home-banner px-0">
        <Carousel fade pause={false} controls={false} interval={4000}>
          <Carousel.Item>
            <Image src={HomeBanner01} alt="Rajasthan Shotmen also Camel during sunset in desert" title='India is a country of Temples, Tradition and Scenic beauty' width={1500} height={1000} priority={true} />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container-fluid bg-white pb-4">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0">
            <h1 className='text-capitalize text-center mb-0 fw-bold'>Reliable taxi services across rajasthan</h1>
            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
              <hr />
              <p className="text-justify">
                Jaipur Taxi Service is one of the oldest Car Rental Companies in Jaipur, Rajasthan (India), which provides <strong>Jaipur sightseeing Taxi & Car</strong>. Car Hire Rental Service for Jaipur on an hourly, daily, weekly and monthly basis to fulfil your business, leisure, wedding, conference & other taxi car rental needs for <strong>Jaipur</strong>, Jaisalmer, Jodhpur, Bikaner, Udaipur, Mount Abu and at all major tourist, pilgrimage and industrial cities of Rajasthan & all over Rajasthan.
              </p>
              <p className='text-justify'>We are one of the best taxi car rental service providers in Jaipur, having head office in Jaipur and associate offices in Jaisalmer, Jodhpur, Udaipur & Pushkar. We are equipped with all types of Cars, Tempo Travellers, Buses & Coaches driven by decent, well behaved, Soft Spoken and well-mannered drivers holding Commercial Vehicle Driving Licences issued by Transport Department. All chauffeurs of Jaipur Taxi Service are well trained to handle all kinds of situations occurred during the road journey and are also well versed with local roads and languages.</p>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center gap-2">
              <hr />
              <h4 className='text-capitalize text-nowrap mb-0'>want to know <span className='text-tertary'>more about us</span>?</h4>
              <Link href='/about-jaipur-taxi-service'>
                <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-capitalize'>read more <MdOutlineArrowOutward className='text-tertary' /></button>
              </Link>
            </div>
          </div>
        </div>
      </div >
      {/* popular tour packages */}
      <div className="container-fluid py-5 bg-tertary-down">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center px-lg-2 px-sm-0 packages rental-container">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h2 className='text-capitalize text-center fw-bold'>popular cab rental</h2>
              <p className='text-center text-capitalize'>explore Jaipur taxi tour packages & tourist cab packages</p>
            </div>
            <RentalSlider rentals={popularRentals} />
            <div className="col-12 d-flex justify-content-between align-items-center gap-2 px-4 mt-3">
              <hr />
              <Link href='/car-rental-jaipur'>
                <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-capitalize'>explore more<MdOutlineArrowOutward className='text-tertary' /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* popular tour packages */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center  px-lg-2 px-sm-0 packages">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h2 className='text-capitalize text-center fw-bold'>popular tour packages</h2>
              <p className='text-center text-capitalize'>explore Jaipur taxi tour packages & tourist cab packages</p>
            </div>
            <PackagesSlider packages={PopularTourPackages} showPrice={true} />
            <div className="col-12 d-flex justify-content-between align-items-center gap-2 px-4 mt-3">
              <hr />
              <Link href='/tour-packages-rajasthan'>
                <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-capitalize'>explore more<MdOutlineArrowOutward className='text-tertary' /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* jaipur taxi for locals */}
      <div className="container-fluid py-5" style={{ background: 'var(--color-tertary-down2)' }}>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center  px-lg-2 px-sm-0 why-us">
            <div className="col-12 col-lg-8 col-sm-10 px-5 mb-lg-3 mb-sm-2">
              <h2 className='text-capitalize text-center fw-bold'>why choose us</h2>
              <p className='text-center text-capitalize'>Discover the Benefits of Choosing Our Jaipur Taxi Services</p>
            </div>
            <WhyChooseUs />
            <div className="col-12 d-flex w-100 align-items-center gap-2 px-4">
              <hr />
              <Link href='/why-choose-jaipur-taxi-service'>
                <button className='bg-tertary-down rounded-5 d-flex justify-content-between align-items-center gap-2 d-flex text-nowrap text-right text-capitalize'>explore more<MdOutlineArrowOutward className='text-tertary' /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>



      {/* search model */}
      <Modal size='lg' show={showSearch} style={{ padding: '16px' }} onHide={handleCloseSearch} className='search-modal'>
        <Modal.Dialog style={{ width: '100%' }} className='my-0' >
          <Modal.Body style={{ width: '100%' }}>
            <SearchBar />
          </Modal.Body>
        </Modal.Dialog>
        {/* <Button onClick={handleCloseSearch} className='bg-black rounded-5 text-white d-flex jutify-content-center align-items center p-3 border-0'>
                    <IoClose />
                </Button> */}
      </Modal >
    </>
  );
};

export default Home;
