import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Barbers from './components/Barbers';
import Products from './components/Products';
import Booking from './components/Booking';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Barbers />
      <Products />
      <Booking />
    </div>
  );
}

export default App;