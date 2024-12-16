import React from 'react';

const HeroImage = () => (
  <div className="hidden md:block">
    <div className="relative">
      <div className="absolute -inset-4 bg-red-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
      <img 
        src="/src/image.jpg"
        alt="PupPower Superhero Dog"
        className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl transform hover:rotate-2 transition-transform duration-300"
      />
    </div>
  </div>
);

export default HeroImage;