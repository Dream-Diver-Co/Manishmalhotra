import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';
import image1 from '../assets/1722246261Saree_banner_desktop_final.avif';
import image2 from '../assets/1722246606Bridal_Couture_banner_desktop_final.avif';
import image3 from '../assets/1721819429kashmir_banner_desktop_final.avif';


const HomeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {image1}
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
          src= {image2}
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
          src= {image3}
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
