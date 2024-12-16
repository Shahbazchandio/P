import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/features/Features';
import Tokenomics from './components/Tokenomics';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Tokenomics />
    </div>
  );
}

export default App;