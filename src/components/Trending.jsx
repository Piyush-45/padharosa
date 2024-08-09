import React, { useState, useEffect } from 'react';

const TravelRecommendations = () => {
  const [trendingPlaces, setTrendingPlaces] = useState([]);
  const [topPicks, setTopPicks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingResponse = await fetch('http://localhost:3000/trendingPlaces');
        const trendingData = await trendingResponse.json();
        setTrendingPlaces(trendingData);

        const topPicksResponse = await fetch('http://localhost:3000/topPicks');
        const topPicksData = await topPicksResponse.json();
        setTopPicks(topPicksData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Trending Places</h2>
      <div>
        {trendingPlaces.map((place) => (
          <div key={place.id}>
            <img src={place.image} alt={place.name} />
            <h3>{place.name}</h3>
            <p>{place.description}</p>
          </div>
        ))}
      </div>

      <h2>Top Picks</h2>
      <div>
        {topPicks.map((pick) => (
          <div key={pick.id}>
            <img src={pick.image} alt={pick.name} />
            <h3>{pick.name}</h3>
            <p>{pick.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelRecommendations;