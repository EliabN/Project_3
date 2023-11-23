/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// TeamList.js
// TeamList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const TeamList = ({ standings, title, isLoggedIn }) => {
  // Check if standings is undefined or null before accessing its length
  if (!standings) {
    return <h3>No Teams Yet</h3>;
  }

  return (
    <div className="layout-content-container">
      <div className="entity-body-content league teams">
        <div className="secondary-nav-content-container">
        <h1>Standings</h1>
          <div className="entity-teams-list">
            <div className="entity-list-group">
              {standings.slice(0, isLoggedIn ? standings.length : 5).map((teamStanding) => (
                <div key={teamStanding.team.id} className="entity-list-row-container image-logo">
                  <div className="image-wrapper">
                    <img
                      src={teamStanding.team.logo}
                      alt={teamStanding.team.name}
                      width="36"
                      height="36"
                      className="image-logo"
                    />
                  </div>
                  <div className="entity-list-row-content">
                    {/* Render link only when logged in */}
                    {isLoggedIn ? (
                      <Link to={`/transfers/team/${teamStanding.team.id}`}>
                        <h3 className="entity-list-row-title fs-18 lh-1">{teamStanding.team.name}</h3>
                      </Link>
                    ) : (
                      <h3 className="entity-list-row-title fs-18 lh-1">{teamStanding.team.name}</h3>
                    )}
                    <p>Points: {teamStanding.points}</p>
                    {isLoggedIn && (
                      <>
                        <p>Wins: {teamStanding.wins}</p>
                        <p>Losses: {teamStanding.losses}</p>
                        {/* Add more details as needed */}
                      </>
                    )}
                    <button className="image-button link-forward"></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamList;