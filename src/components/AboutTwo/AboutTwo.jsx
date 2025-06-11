'use client'
import aboutTwoData from '@/data/AboutTwoData';
import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';
import { Tilt } from 'react-tilt';

const { bg, image1, image2, count, tagLine, shape, text, title, tabItems, tabContents } = aboutTwoData

const AboutTwo = () => {
    const [active, setActive] = useState(1);
    const [counterOn, setCounterOn] = useState(false);

    const defaultOptions = {
        maxTilt: 7,
        scale: 1,
        speed: 700,
        glare: false,
        maxGlare: 0,
    };

    return (
        <section className="about-two" id="about">
            <Container className="tabs-box">
                <Row >
                    <Col lg={6}>
                        <ScrollTrigger
                            onEnter={() => setCounterOn(true)}
                            onExit={() => setCounterOn(false)}
                        >
                            <div className="about-two__image">
                                <Image src={image1} alt="tolak" />
                                <Image src={image2} alt="tolak" />
                                <Tilt className="about-two__image__shape tolak-tilt" options={defaultOptions}>
                                    <Image src={shape} alt="tolak" />
                                </Tilt>
                                <Tilt className="about-two__fact count-box tolak-tilt" options={defaultOptions}>
                                    <div className="about-two__fact__icon"><i className="icon-check-mark"></i></div>
                                    <h3 className="about-two__fact__count">
                                        {counterOn && (
                                            <CountUp className='count-text' end={count} duration={1.5} />
                                        )}
                                        k+</h3>
                                    <p className="about-two__fact__text">Satisfied \n End Users</p>
                                </Tilt>
                            </div>
                        </ScrollTrigger>
                    </Col>
                    <Col lg={6} className="wow fadeInRight" data-aos="fade-left" data-aos-delay="200">
                        <div className="about-two__content">
                            <div className="sec-title text-left">
                                <h6 className="sec-title__tagline"><span className="sec-title__tagline__left"></span> {tagLine}<span className="sec-title__tagline__right"></span></h6>
                                {/* <h3 className="sec-title__title">{title.split("\n").map((t, i) => (
                                    <Fragment key={i}>
                                        {t} <br />
                                    </Fragment>
                                ))}</h3> */}
                            </div>
                            <p className="about-two__content__text">
                                {text.split("\n").map((t, i) => (
                                    <Fragment key={i}>
                                        {t} <br />
                                    </Fragment>
                                ))}

                            </p>
                            
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutTwo;
