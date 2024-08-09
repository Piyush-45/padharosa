import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/common/SearchBar';
import DestinationList from '../components/destinations/DestinationList';
import Loader from '../components/common/Loader';
import { searchDestinations } from '../services/api';

const Search = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('q');
    if (query) {
      performSearch(query);
    }
  }, [location.search]);

  const performSearch = async (query) => {
    setLoading(true);
    try {
      const data = await searchDestinations(query);
      setResults(data);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="search">
      <h2>Search Results</h2>
      <SearchBar onSearch={performSearch} />
      <DestinationList destinations={results} />
    </div>
  );
};

export default Search;