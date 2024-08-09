import React from 'react';
import { Link } from 'react-router-dom';

const DestinationCard = ({ destination }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-xl mb-2">{destination.name}</h3>
      <p className="text-gray-700 text-base mb-4">{destination.description}</p>
      <Link 
        to={`/destination/${destination.id}`}
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        View Details
      </Link>
    </div>
  </div>
);

export default DestinationCard;