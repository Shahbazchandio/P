import React from 'react';

interface DistributionItemProps {
  percentage: number;
  label: string;
}

const DistributionItem = ({ percentage, label }: DistributionItemProps) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-gray-700">{label}</span>
      <span className="text-red-500 font-semibold">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-red-500 rounded-full h-2"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

export default DistributionItem;