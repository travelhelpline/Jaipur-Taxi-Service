import React from 'react'
import { FaCar, FaCircle, FaCircleChevronDown, FaCircleDot, FaCircleExclamation, FaDAndD, FaDiamondTurnRight, FaDrawPolygon, FaHandshake, FaMoneyBillWave, FaPlane, FaRegSquare, FaSafari, FaSquare, FaSquareFontAwesome, FaUserTie } from 'react-icons/fa6'
import { MdSanitizer, MdSupportAgent } from 'react-icons/md'

const WhyChooseUs = () => {
    return (
        <>
            <div className="container why-us py-5" id="why-us">
                <div className="row py-2 px-2 d-flex justify-content-center align-items-center">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <h3 className="w-auto text-capitalize home-head fw-bold">
                            <span className="fw-normal">why </span>choose us
                        </h3>
                    </div>
                    <div className="col-lg-10 d-flex justify-content-center align-items-center">
                        <hr />
                        <span className='bg-tertary-down p-1 rounded-5 d-flex mx-2'>
                            <FaSquare className='text-tertary p-1' style={{ rotate: '45deg' }} />
                        </span>
                        <hr />
                    </div>
                </div>
                <div className="row p-2">
                    <div className="col-lg-4 col-md-6 col-12 px-0 d-flex my-2 justify-content-between align-items-center">
                        <div className="why-us-card col1 d-flex w-100 justify-content-between align-items-start gap-3 flex-column">
                            <div className="icon bg-black p-3 d-flex text-tertary rounded-5">
                                <MdSanitizer className="" />
                            </div>
                            <div className="content">
                                <h4 className="text-capitalize fw-bold">Sanitized Cars</h4>
                                <p className="text-capitalize mb-0">
                                    Jaipur Taxi Service provides fully sanitized taxi car for Jaipur Local & Outstation Trips.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 px-0 d-flex my-2 justify-content-between align-items-center">
                        <div className="why-us-card col2 d-flex w-100 justify-content-between align-items-start gap-3 flex-column">
                            <div className="icon bg-black p-3 d-flex text-tertary rounded-5">
                                <FaCar className="" />
                            </div>
                            <div className="content">
                                <h4 className="text-capitalize fw-bold">Well-Maintained Car</h4>
                                <p className="text-capitalize mb-0">
                                    Jaipur Taxi Service provide well maintained taxi car for Local & Outstation trip.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 px-0 d-flex my-2 justify-content-between align-items-center">
                        <div className="why-us-card col2 d-flex w-100 justify-content-between align-items-start gap-3 flex-column">
                            <div className="icon bg-black p-3 d-flex text-tertary rounded-5">
                                <FaUserTie className="" />
                            </div>
                            <div className="content">
                                <h4 className="text-capitalize fw-bold">Professional Car Driver</h4>
                                <p className="text-capitalize mb-0">
                                    All our drivers are experienced, well-behaved, courteus, soft spoken, police verified.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 px-0 d-flex my-2 justify-content-between align-items-center">
                        <div className="why-us-card col1 d-flex w-100 justify-content-between align-items-start gap-3 flex-column">
                            <div className="icon bg-black p-3 d-flex text-tertary rounded-5">
                                <FaMoneyBillWave className="" />
                            </div>
                            <div className="content">
                                <h4 className="text-capitalize fw-bold">Affordable Taxi Services</h4>
                                <p className="text-capitalize mb-0">
                                    Jaipur Taxi Service assure you best & lowest car rental fare in Jaipur.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 px-0 d-flex my-2 justify-content-between align-items-center">
                        <div className="why-us-card col1 d-flex w-100 justify-content-between align-items-start gap-3 flex-column">
                            <div className="icon bg-black p-3 d-flex text-tertary rounded-5">
                                <FaPlane className="" />
                            </div>
                            <div className="content">
                                <h4 className="text-capitalize fw-bold">20 Years of Experience </h4>
                                <p className="text-capitalize mb-0">
                                    We are working since 2002 with same team.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 px-0 d-flex my-2 justify-content-between align-items-center">
                        <div className="why-us-card col1 d-flex w-100 justify-content-between align-items-start gap-3 flex-column">
                            <div className="icon bg-black p-3 d-flex text-tertary rounded-5">
                                <MdSupportAgent className="" />
                            </div>
                            <div className="content">
                                <h4 className="text-capitalize fw-bold">Travel Assistance</h4>
                                <p className="text-capitalize mb-0">
                                    Jaipur Taxi Service provides 24x7 assistance over call, whatsapp & email to all guests.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs