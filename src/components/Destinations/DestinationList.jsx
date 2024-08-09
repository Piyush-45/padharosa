import React from 'react';
import DestinationCard from './DestinationCard';

const DestinationList = ({ destinations }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {destinations.map(destination => (
      <DestinationCard key={destination.id} destination={destination} />
    ))}
  </div>
);

export default DestinationList;