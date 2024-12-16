import React from 'react';
import { Rocket, Flame, Trophy, Star, Zap } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Flame,
    title: "Viral Meme Potential",
    description: "The most memeable superhero dog coin ever created! Our community creates hilarious content daily 🔥"
  },
  {
    icon: Rocket,
    title: "Moon Mission Ready",
    description: "Strap in for the most epic journey to the moon! Our superhero pup is ready for takeoff 🚀"
  },
  {
    icon: Trophy,
    title: "Community Champions",
    description: "Weekly meme contests with $PUPPOWER rewards! Best meme creators become legendary 🏆"
  },
  {
    icon: Star,
    title: "Celebrity Potential",
    description: "Our adorable superhero pup has what it takes to catch celebrity attention and go viral! ⭐"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-red-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why PupPower Will Moon! 🚀</h2>
          <p className="text-xl text-gray-600">The Most Adorable Superhero in the Memecoin Universe!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-white rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-red-500 mb-4">🎮 Join the PupPower Movement!</h3>
            <p className="text-lg text-gray-700">
              We're not just another meme coin - we're a movement! Our superhero pup is here to save the crypto world with cuteness and power! 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
