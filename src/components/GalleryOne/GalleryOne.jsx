// GalleryOne.js
'use client'
import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'; // Assuming you're using react-bootstrap
import { galleryData } from '@/data/galleryData';
// import Masonry from "react-masonry-component";
import Image from 'next/image';
import Link from 'next/link';
import GalleryModal from '../GalleryModal/GalleryModal';

const GalleryOne = () => {

    const [currentIndex, setCurrentIndex] = useState(null);
    const [clickedImg, setClickedImg] = useState(null);

    const handleClick = (src, index) => {
        setCurrentIndex(index);
        setClickedImg(src);
    };

    const handelRotationRight = () => {
        const totalLength = galleryData.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = galleryData[0].src;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = galleryData.filter((item) => {
            return galleryData.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].src;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    const handelRotationLeft = () => {


        const totalLength = galleryData.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = galleryData[totalLength - 1].src;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = galleryData.filter((item) => {
            return galleryData.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].src;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    return (
        <section className="gallery-one">
            <Container fluid>
                
            </Container>
            

        </section>
    );
};

export default GalleryOne;
