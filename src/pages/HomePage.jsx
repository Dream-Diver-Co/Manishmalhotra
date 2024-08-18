import React from 'react';
import Header from '../components/Header';
import HomeCarousel from '../components/Carousel';
import FeaturedCollections from '../components/FeaturedCollections';
import CelebrityShowcase from '../components/CelebrityShowcase';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <HomeCarousel />
      <FeaturedCollections />
      <CelebrityShowcase />
      <Footer />
    </div>
  );
};

export default HomePage;
