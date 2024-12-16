import React from 'react';
import { Rocket, Flame, Star, Zap } from 'lucide-react';
import StatCard from './tokenomics/StatCard';

const stats = [
  { name: 'Total Supply', value: '1,000,000,000', icon: Rocket },
  { name: 'Meme Power Level', value: 'Over 9000', icon:Flame },
  { name: 'Viral Potential', value: 'Infinite', icon: Star },
  { name: 'Community Power', value: 'Maximum', icon: Zap },
];

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-24 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">PupPower Stats</h2>
          <p className="text-xl text-gray-600">The Most Powerful Numbers in Meme History! 🚀</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.name} {...stat} />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-3xl font-bold text-red-500 mb-6">🦸‍♂️ The PupPower Advantage</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-left">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🎯</span>
                <p className="text-lg">Zero complications - just pure meme power!</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🎮</span>
                <p className="text-lg">Active Discord community with daily meme contests</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🚀</span>
                <p className="text-lg">Regular Twitter raids and meme campaigns</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">💎</span>
                <p className="text-lg">Diamond paw community - we HODL together!</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="/src/image.jpg"
                alt="PupPower Superhero"
                className="w-64 h-64 rounded-full object-cover border-8 border-red-500 transform hover:rotate-12 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
