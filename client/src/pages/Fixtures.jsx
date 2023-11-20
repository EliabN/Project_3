// Fixtures.jsx
import { useEffect, useState } from 'react';
import { fetchRounds } from './api'; // Adjust the path based on your file structure

const Fixture = () => {
  const [rounds, setRounds] = useState([]);
  const leagueId = 61; // Replace with your league ID
  const season = 2019; // Replace with your season

  useEffect(() => {
    const fetchRoundsData = async () => {
      const roundsData = await fetchRounds(leagueId, season);
      setRounds(roundsData);
    };

    fetchRoundsData();
  }, [leagueId, season]);
  return (
    <div className="fixture-container">
      <div className="fixture-details">
        <p>Date: {date}</p>
        <p>Venue: {venue.name}, {venue.city}</p>
        <p>Status: {status.long}</p>
      </div>

      <div className="league-details">
        <img src={league.logo} alt={league.name} />
        <p>{league.name}, {league.country}</p>
        <p>Round: {league.round}</p>
      </div>

      <div className="team-details">
        <div className="team">
          <img src={home.logo} alt={home.name} />
          <p>{home.name}</p>
          <p>Goals: {goals.home}</p>
        </div>

        <div className="versus">VS</div>

        <div className="team">
          <p>Goals: {goals.away}</p>
          <p>{away.name}</p>
          <img src={away.logo} alt={away.name} />
        </div>
      </div>

      <div className="score-details">
        <p>Halftime: {score.halftime.home} - {score.halftime.away}</p>
        {/* Add more score details as needed */}
      </div>
    </div>
  );
};

export default Fixture;