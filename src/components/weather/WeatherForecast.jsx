import React from 'react';

const WeatherForecast = ({ weather }) => (
  <div className="bg-white rounded-lg shadow-md p-4 mb-4">
    <h3 className="font-bold text-lg mb-2">Weather Forecast</h3>
    <p className="text-gray-700">Temperature: {weather.temp}°C</p>
    <p className="text-gray-700">Condition: {weather.condition}</p>
  </div>
);

export default WeatherForecast;