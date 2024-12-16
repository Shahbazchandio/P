import React from 'react';

const stats = [
  { value: '10k+', label: 'Holders' },
  { value: '50k+', label: 'Tweets' },
  { value: '100k+', label: 'Memes' },
];

const StatsGrid = () => (
  <div className="mt-8 grid grid-cols-3 gap-4">
    {stats.map(({ value, label }) => (
      <div key={label} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
        <p className="text-2xl font-bold text-white">{value}</p>
        <p className="text-sm text-gray-200">{label}</p>
      </div>
    ))}
  </div>
);

export default StatsGrid;