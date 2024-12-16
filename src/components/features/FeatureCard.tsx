import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:transform hover:scale-105">
    <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
      <Icon className="h-6 w-6 text-red-500" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default FeatureCard;