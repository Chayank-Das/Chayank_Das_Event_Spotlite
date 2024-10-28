// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedEvents from './components/FeaturedEvents';
import TopRatedEvents from './components/TopRatedEvents';
import ExclusiveDeals from './components/ExclusiveDeals';
import DiscoverNearbyEvents from './components/DiscoverNearbyEvents';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <section id="featured-events">
        <FeaturedEvents />
      </section>
      <section id="top-rated-events">
        <TopRatedEvents />
      </section>
      <ExclusiveDeals />
      <DiscoverNearbyEvents />
      <Footer />
    </div>
  );
}

export default App;
