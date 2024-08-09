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
        destinations={destinations.slice(0, 10)}
      />
      <h1 className='font-bold text-3xl text-center my-4 '>All Destinations</h1>
      <DestinationList destinations={destinations} />
    </div>
  );
};

export default Home;
