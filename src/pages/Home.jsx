import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/common/SearchBar';
import DestinationList from '../components/destinations/DestinationList';
import Loader from '../components/common/Loader';
import { fetchDestinations } from '../services/api';

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
      <h1 className="text-3xl font-bold mb-6">Welcome to AI-Powered Travel Recommendations</h1>
      <SearchBar onSearch={handleSearch} />
      <DestinationList destinations={destinations} />
    </div>
  );
};

export default Home;