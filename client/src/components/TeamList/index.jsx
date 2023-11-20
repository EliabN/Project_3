/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const TeamList = ({ standings, title }) => {
  if (!standings.length) {
    return <h3>No Teams Yet</h3>;
  }

  return (
    <div className="layout-content-container">
      <div className="entity-body-content league teams">
        <div className="secondary-nav-content-container">
          <div className="entity-teams-list">
            <div className="entity-list-group">
              {standings.map((teamStanding) => (
                <Link
                  to={`/teams/${teamStanding.team.id}`}
                  key={teamStanding.team.id}
                  className="entity-list-row-container image-logo"
                >
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
                    <h3 className="entity-list-row-title fs-18 lh-1">{teamStanding.team.name}</h3>
                    <p>Points: {teamStanding.points}</p>
                    <p>Goals Difference: {teamStanding.goalsDiff}</p>
                    {/* Add more details as needed */}
                    <button className="image-button link-forward"></button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamList;