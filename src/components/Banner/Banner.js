import { Carousel } from 'react-bootstrap';
import React from 'react';

const Banner = () => {
    return (

        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/rtNXPft/banner-1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>Perfumania</h5>
                    <p>Get your best experience with Perfumania</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/WtQxPzm/banner-2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Perfumania</h5>
                    <p>Choose your best perfume</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/BgPc3sM/banner-3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Perfumania</h5>
                    <p>Pick your perfume from Perfumania</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
};

export default Banner;