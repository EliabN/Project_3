/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Fixtures = ({ fixture }) => {
    if (!fixture || !fixture.response || fixture.response.length === 0) {
        return <h3>No Fixtures Yet</h3>;
    }

    console.log("Fixtures component rendered with fixture:", fixture);

    // Extract fixture details
    const {
        fixture: {
            date,
            venue: { name: venueName, city: venueCity },
            status: { long: statusLong },
        },
        league: { logo: leagueLogo, name: leagueName, country: leagueCountry, round: leagueRound },
        teams: { home, away },
        goals: { home: goalsHome, away: goalsAway },
        score: {
            fulltime: { home: halftimeHome, away: halftimeAway },
        },
    } = fixture.response[0];

    return (
        <div className="fixture-container">
            <div className="fixture-details">
                <p>Date: {date}</p>
                <p>Venue: {venueName}, {venueCity}</p>
                <p>Status: {statusLong}</p>
            </div>

            <div className="league-details">
                <img src={leagueLogo} alt={leagueName} />
                <p>{leagueName}, {leagueCountry}</p>
                <p>Round: {leagueRound}</p>
            </div>

            <div className="team-details">
                <div className="team">
                    <img src={home.logo} alt={home.name} />
                    <p>{home.name}</p>
                    <p>Goals: {goalsHome}</p>
                </div>

                <div className="versus">VS</div>

                <div className="team">
                    <p>Goals: {goalsAway}</p>
                    <p>{away.name}</p>
                    <img src={away.logo} alt={away.name} />
                </div>
            </div>

            <div className="score-details">
                <p>Halftime: {halftimeHome} - {halftimeAway}</p>
                {/* Add more score details as needed */}
            </div>
        </div>
    );
};

export default Fixtures;