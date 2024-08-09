import { mockDestinations, mockWeather, mockCrowdDensity } from '../mockData';

export const fetchDestinations = async () => {
  return new Promise((resolve) => {
    console.log('Fetched destinations:', mockDestinations);
    setTimeout(() => resolve(mockDestinations), 500);
  });
};

export const searchDestinations = async (query) => {
  return new Promise((resolve) => {
    const results = mockDestinations.filter(dest => 
      dest.name.toLowerCase().includes(query.toLowerCase()) ||
      dest.description.toLowerCase().includes(query.toLowerCase())
    );
    setTimeout(() => resolve(results), 500);
  });
};

export const fetchDestinationById = async (id) => {
  return new Promise((resolve, reject) => {
    const destination = mockDestinations.find(dest => dest.id === parseInt(id));
    if (destination) {
      setTimeout(() => resolve(destination), 500);
    } else {
      reject(new Error('Destination not found'));
    }
  });
};

export const fetchWeatherForecast = async (destinationId) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockWeather[destinationId]), 500);
  });
};

export const fetchCrowdDensity = async (destinationId) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockCrowdDensity[destinationId]), 500);
  });
};