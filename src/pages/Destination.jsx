import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import WeatherForecast from '../components/weather/WeatherForecast';
import CrowdDensityIndicator from '../components/crowds/CrowdDensityIndicator';
import Loader from '../components/common/Loader';
import { fetchDestinationById, fetchWeatherForecast, fetchCrowdDensity } from '../services/api';

const Destination = () => {
  const [destination, setDestination] = useState(null);
  const [weather, setWeather] = useState(null);
  const [crowdDensity, setCrowdDensity] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const loadDestinationData = async () => {
      try {
        const [destData, weatherData, densityData] = await Promise.all([
          fetchDestinationById(parseInt(id)),
          fetchWeatherForecast(parseInt(id)),
          fetchCrowdDensity(parseInt(id))
        ]);
        setDestination(destData);
        setWeather(weatherData);
        setCrowdDensity(densityData);
      } catch (error) {
        console.error('Failed to load destination data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadDestinationData();
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div className="destination-detail">
      <h2 className="text-3xl font-bold mb-4">{destination.name}</h2>
      <img src={destination.image} alt={destination.name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-gray-700 mb-6">{destination.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <WeatherForecast weather={weather} />
        <CrowdDensityIndicator density={crowdDensity} />
      </div>
    </div>
  );
};

export default Destination;