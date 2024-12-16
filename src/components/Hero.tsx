import React from 'react';
import { Rocket, MessageCircle } from 'lucide-react';
import Button from './common/Button';
import StatsGrid from './hero/StatsGrid';
import HeroContent from './hero/HeroContent';
import HeroImage from './hero/HeroImage';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-red-900 to-purple-900">
        <div className="absolute inset-0 opacity-25 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <HeroContent />
            <div className="flex flex-wrap gap-4">
              <Button icon={Rocket}>Buy on Pump.fun</Button>
              <Button variant="secondary" icon={MessageCircle}>Join 10k+ Heroes</Button>
            </div>
            <StatsGrid />
          </div>
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

export default Hero;
