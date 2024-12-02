import React from 'react';
import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';
import Image from 'next/image';

const HeroBanner = ({ slides }) => {
    return (
        <div className="container-fluid px-0 car-rental-banner">
            <div className="container px-sm-0">
                <div className="row justify-content-center align-items-center px-2">
                    <Carousel fade pause={false} indicators={false} controls={false} interval={4000} className="w-100">
                        {slides.map((slide, index) => (
                            <CarouselItem key={index}>
                                {/* <Image
                                    src={slide.image}
                                    alt={slide.alt}
                                    title={slide.title}
                                    width={1500}
                                    height={1000}
                                    priority={true}
                                    className="w-100"
                                /> */}
                                <CarouselCaption style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                    <h1 className="text-center text-black fw-bold text-left mb-0 text-capitalize">{slide.heading}</h1>
                                    <hr style={{ width: '60%' }} />
                                    <h3 className="text-center text-tertary fw-normal text-capitalize text-left">{slide.subheading}</h3>
                                </CarouselCaption>
                            </CarouselItem>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
