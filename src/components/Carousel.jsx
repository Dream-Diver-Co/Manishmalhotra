import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';

const HomeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="path_to_your_image_1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide Title</h3>
          <p>First slide description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="path_to_your_image_2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide Title</h3>
          <p>Second slide description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="path_to_your_image_3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide Title</h3>
          <p>Third slide description</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
