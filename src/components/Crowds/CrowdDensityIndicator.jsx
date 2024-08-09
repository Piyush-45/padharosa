import React from 'react';

const CrowdDensityIndicator = ({ density }) => {
  let color = 'bg-green-500';
  if (density > 50) color = 'bg-yellow-500';
  if (density > 80) color = 'bg-red-500';

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h3 className="font-bold text-lg mb-2">Crowd Density</h3>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
        <div className={`h-2.5 rounded-full ${color}`} style={{ width: `${density}%` }}></div>
      </div>
      <p className="text-gray-700">{density}% crowded</p>
    </div>
  );
};

export default CrowdDensityIndicator;