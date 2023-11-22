// Fixtures.jsx
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Fixtures = ({ fixture }) => {
  // Check if fixture.response exists and has elements before accessing its first element
  if (!fixture.length === 0) {
    return <h3>No Fixtures Yet OKAY</h3>;
  }

  const {
    fixture: {
      date,
      venue: { name: venueName, city: venueCity },
    },
    league: { name: leagueName, country: leagueCountry, round: leagueRound },
    teams: { home, away },
  } = fixture;

  // Format date to include time
  const formattedDate = new Date(date).toLocaleString();

  return (
    <div className="fixture-container">
      <div className="fixture-details">
        <div className="center">
          <p>Date & Time: {formattedDate}</p>
          <p>Venue: {venueName}, {venueCity}</p>
        </div>
      </div>

      <div className="league-details">
        <p>{leagueName}, {leagueCountry}</p>
        <p>Round: {leagueRound}</p>
      </div>

      <div className="team-details">
        <div className="team">
          <img className="team-logo" src={home.logo} alt={home.name} />
          <p>{home.name}</p>
        </div>

        <div className="versus">VS</div>

        <div className="team">
          <img className="team-logo" src={away.logo} alt={away.name} />
          <p>{away.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Fixtures;