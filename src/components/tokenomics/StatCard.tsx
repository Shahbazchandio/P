import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  name: string;
  value: string;
  icon: LucideIcon;
}

const StatCard = ({ name, value, icon: Icon }: StatCardProps) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
      <Icon className="h-6 w-6 text-red-500" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
    <p className="text-2xl font-bold text-red-500">{value}</p>
  </div>
);

export default StatCard;