import React from 'react';
import Hero from '../components/home/Hero';
import QuoteCarousel from '../components/home/QuoteCarousel';
import MissionSection from '../components/home/MissionSection';
import FoundersPreview from '../components/home/FoundersPreview';
import FeaturedContent from '../components/home/FeaturedContent';
import CallToAction from '../components/home/CallToAction';

const HomePage = () => {
  return (
    <div className="relative">
      <Hero />
      <QuoteCarousel />
      <MissionSection />
      <FoundersPreview />
      <FeaturedContent />
      <CallToAction />
    </div>
  );
};

export default HomePage;
