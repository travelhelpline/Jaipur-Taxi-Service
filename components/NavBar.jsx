"use client";
import React, { useEffect, useState } from 'react'
import {
    FaGripLines,
    FaHouseMedical,
    FaPhone,
    FaTaxi,
    FaWhatsapp,
} from 'react-icons/fa6';
import {
    IoLogoWhatsapp,
    IoMdArrowDropdown,
    IoMdCall,
    IoMdClose,
} from 'react-icons/io';
import { MdEmail, MdMail, MdWhatsapp, } from 'react-icons/md';
import Logo from './Logo'
import Link from 'next/link';
import data, { cabRental, placesToVisit, taxiFares, tempoAndBus, tourData } from '@/data/HeaderData';

const NavBar = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [ismobile, setIsmobile] = useState(false);
    const [showNavigation, setShowNavigation] = useState(false);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    // Navigation handling
    const handleNavigation = () => {
        setShowNavigation((prevState) => !prevState);
    };
    // Handle window resize events
    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== "undefined") {
                setIsmobile(window.innerWidth <= 1200);
            }
        };

        // Initial check for the window size
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navItems = [
        {
            title: 'cab rental',
            content: (
                <div className="mega-content">
                    <div className="row w-100">
                        {cabRental.map((category, index) => (
                            <div className="col mb-4" key={index}>
                                <h4 className="text-tertary">{category.title}</h4>
                                <hr style={{ borderColor: 'white' }} />
                                <ul>
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className='p-2 d-flex'>
                                            <span className="text-tertary me-2">
                                            ≻</span> 
                                            <Link href="#" className='text-white'>{item}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
        {
            title: 'Tempo & Bus Rental',
            content: (
                <div className="mega-content">
                    <div className="row w-100">
                        {tempoAndBus.map((category, index) => (
                            <div className="col mb-4" key={index}>
                                <h4 className="text-tertary">{category.title}</h4>
                                <hr />
                                <ul>
                                    {category.items.map((item, idx) => (
                                       <li key={idx} className='p-2 d-flex'>
                                       <span className="text-tertary me-2">
                                       ≻</span> 
                                       <Link href="#" className='text-white'>{item}</Link>
                                   </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
        {
            title: 'Tour Packages',
            content: (
                <div className="mega-content">
                    <div className="row w-100">
                        {tourData.map((category, index) => (
                            <div className="col mb-4" key={index}>
                                <h4 className="text-tertary">{category.title}</h4>
                                <hr />
                                <ul>
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className='p-2 d-flex'>
                                        <span className="text-tertary me-2">
                                        ≻</span> 
                                        <Link href="#" className='text-white'>{item}</Link>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
        {
            title: 'Taxi Fares',
            content: (
                <div className="mega-content">
                    <div className="row w-100">
                        {taxiFares.map((category, index) => (
                            <div className="col mb-4" key={index}>
                                <h4 className="text-tertary">{category.title}</h4>
                                <hr />
                                <ul>
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className='p-2 d-flex'>
                                        <span className="text-tertary me-2">
                                        ≻</span> 
                                        <Link href="#" className='text-white'>{item}</Link>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
        {
            title: 'Places to visit',
            content: (
                <div className="mega-content">
                    <div className="row w-100">
                        {placesToVisit.map((category, index) => (
                            <div className="col mb-4" key={index}>
                                <h4 className="text-tertary">{category.title}</h4>
                                <hr />
                                <ul>
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className='p-2 d-flex'>
                                        <span className="text-tertary me-2">
                                        ≻</span> 
                                        <Link href="#" className='text-white'>{item}</Link>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
    ];
    return (
        <>
            <div className="m-auto nav container-fluid d-flex justify-content-center flex-column align-items-center px-0">
                {/* header two */}
                <div className="nav-child w-100 row bg-white px-lg-3 px-sm-2 py-lg-2 py-sm-2 justify-content-center align-items-center">
                    <div className="col mb-4-6 d-flex justify-content-start align-items-center">
                        <Logo />
                    </div>
                    {ismobile ? (
                        <div className="col mb-4-6 d-flex justify-content-end align-items-center">
                            <button
                                className="d-flex justify-content-center align-items-center p-3 rounded-5 bg-black shadow-none mobile-ham w-auto"
                                onClick={handleNavigation}
                            >
                                <FaGripLines className='text-white' />
                            </button>
                        </div>) : (<div className="book-now col-6 d-flex justify-content-end align-items-center">
                            <a href="tel:+91-"
                                className="rounded-5 d-flex justify-content-center align-items-center p-3 me-2 bg-tertary-down">
                                <FaPhone />
                            </a>
                            <a href="tel:+91-"
                                className="rounded-5 d-flex justify-content-center align-items-center p-3 me-2 bg-tertary-down">
                                <IoLogoWhatsapp />
                            </a>
                            <a href="tel:+91-"
                                className="rounded-5 d-flex justify-content-center align-items-center p-3 me-2 bg-tertary-down">
                                <MdMail />
                            </a>
                            <button className="rounded-4 text-black text-uppercase d-flex align-items-center justify-content-center gap-2 ">
                                <FaTaxi className='text-white' /> book now
                            </button>
                        </div>
                    )}
                </div>
                {/* header three */}
                <div className="nav-child row py-2 w-100 bg-black">
                    <ul className="list-inline d-flex justify-content-center align-items-center gap-0 mb-0">
                        <li className="nav-item text-uppercase">
                            <Link href="/" className="text-white p-2 px-3">
                                home
                            </Link>
                        </li>
                        <li className="nav-item text-uppercase">
                            <Link href="/about-jaipur-taxi-service" className="text-white p-2 px-3">
                                about us
                            </Link>

                        </li>
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className="nav-item text-uppercase"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link href="#" className="text-white p-2 px-3 text-nowrap">
                                    {item.title}
                                </Link>
                                {activeIndex === index && (
                                    <div className="mega-menu">
                                        <div className="insider p-5">
                                            {item.content}
                                        </div>
                                    </div>
                                )}
                            </li>))}
                        <li className="nav-item text-uppercase">
                            <Link href="/contact-us" className="text-white p-2 px-3">
                                contact us
                            </Link>

                        </li>
                    </ul>
                </div>
            </div>
            {/* mobile navigation */}
            <div
                className={`container mobile-navigation  px-0 pt-5 ${showNavigation ? 'show-navigation' : ''
                    }`}
            >
                <button
                    className="d-flex justify-content-center align-items-center p-3 rounded-5 bg-black shadow-none mobile-close-ham"
                    onClick={() => {
                        setShowNavigation(false);
                    }}
                >
                    {showNavigation ? <IoMdClose /> : <FaGripLines />}
                </button>
                <div className="row flex-column gap-4 p-4 w-100 px-2">
                    <div
                        className={`nav-mobile-item d-flex justify-content-center align-items-center flex-column`}

                    >
                        {' '}
                        <p className="nav-mobile-link text-capitalize mb-0 cursor-pointer w-100 d-flex justify-content-between align-items-center">
                            rajasthan tour by days{' '}
                            <IoMdArrowDropdown className="dropdown-icon" />
                        </p>
                        <div className="mobile-dropdown-menu py-2 w-100">
                            <Link
                                onClick={() => {
                                    setShowNavigation(false);
                                }}
                                href='/'
                                className="w-100 d-block d-flex justify-content-start align-items-center gap-1"
                            >
                                <icon className="dropdown-icon02">≻</icon>
                                link
                            </Link>
                            <Link
                                href="/rajasthan-tour-packages"
                                className="more-btn nav-more-btn"
                                onClick={() => {
                                    setShowNavigation(false);
                                }}
                            >
                                explore more...
                            </Link>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar