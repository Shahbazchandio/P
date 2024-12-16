import React from 'react';

interface NavLinkProps {
  icon: React.ReactNode;
  text: string;
}

const NavLink = ({ icon, text }: NavLinkProps) => (
  <a
    href={`#${text.toLowerCase()}`}
    className="flex items-center space-x-1 text-gray-600 hover:text-red-500 transition-colors group"
  >
    <span className="group-hover:rotate-12 transition-transform duration-300">
      {icon}
    </span>
    <span>{text}</span>
  </a>
);

export default NavLink;