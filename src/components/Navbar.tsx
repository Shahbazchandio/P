import React from 'react';
import { Bone, Dog, Users, ShoppingBag, Heart } from 'lucide-react';
import NavLink from './common/NavLink';
import NavButton from './common/NavButton';

const navLinks = [
  { icon: Bone, text: 'About' },
  { icon: Users, text: 'Community' },
  { icon: ShoppingBag, text: 'Store' },
  { icon: Heart, text: 'Impact' },
];

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Dog className="h-8 w-8 text-red-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">PupPower</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.text} icon={<link.icon className="h-4 w-4" />} text={link.text} />
            ))}
            <NavButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;