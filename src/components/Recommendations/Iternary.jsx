import React, { useState } from 'react';

const Iternary = () => {
  // State variables for each input field
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [budget, setBudget] = useState('');
  const [transportation, setTransportation] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [activities, setActivities] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a recommendation object with the state values
    const recommendation = {
      destination,
      duration,
      budget,
      transportation,
      accommodation,
      activities,
    };
    console.log('Recommendation:', recommendation);
    // You can send this data to a backend or perform other actions
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Plan Your Itinerary</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="destination" className="block text-gray-700">Destination</label>
          <input
            id="destination"
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your destination"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="duration" className="block text-gray-700">Duration</label>
          <input
            id="duration"
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            placeholder="Enter duration of your trip"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="budget" className="block text-gray-700">Budget</label>
          <input
            id="budget"
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your budget"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="transportation" className="block text-gray-700">Preferred Transportation</label>
          <input
            id="transportation"
            type="text"
            value={transportation}
            onChange={(e) => setTransportation(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your preferred transportation"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="accommodation" className="block text-gray-700">Accommodation Preference</label>
          <input
            id="accommodation"
            type="text"
            value={accommodation}
            onChange={(e) => setAccommodation(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your accommodation preference"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="activities" className="block text-gray-700">Preferred Activities</label>
          <input
            id="activities"
            type="text"
            value={activities}
            onChange={(e) => setActivities(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your preferred activities"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Iternary;
