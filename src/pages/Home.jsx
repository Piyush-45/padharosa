// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/common/SearchBar';
import DestinationList from '../components/destinations/DestinationList';
import Loader from '../components/common/Loader';
import Carousel from '../components/common/Carousel';
import { fetchDestinations } from '../services/api';
import { mockDestinations } from '../mockData';
const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadDestinations = async () => {
      try {
        const data = await fetchDestinations();
        setDestinations(data);
      } catch (error) {
        console.error('Failed to load destinations:', error);
        // Use mock data if the API fails
        setDestinations(mockDestinations);
      } finally {
        setLoading(false);
      }
    };

    loadDestinations();
  }, []);

  const handleSearch = (query) => {
    navigate(`/search?q=${query}`);
  };

  if (loading) return <Loader />;

  return (
    <div className="home">
      <h1 className='text-2xl font-bold mb-4'>Welcome to AI-Powered Travel Recommendations</h1>
      <SearchBar onSearch={handleSearch} />
      <Carousel
        title="Top Destinations of All Time"
        destinations={destinations.slice(0, 5)}
      />
      <Carousel
        title="Discover More Destinations"
        destinations={destinations.slice(5, 10)}
      />
      <h2>All Destinations</h2>
      <DestinationList destinations={destinations} />
    </div>
  );
};

export default Home;
