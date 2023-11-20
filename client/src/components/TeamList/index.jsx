import React from 'react';
import { Link } from 'react-router-dom';

const TeamList = ({ teams, title }) => {
  if (!teams.length) {
    return <h3>No Teams Yet</h3>;
  }

  return (
    <div className="layout-content-container">
      <div className="entity-body-content league teams">
        <div className="secondary-nav-content-container">
          <div className="entity-teams-list">
            <div className="entity-list-group">
              {teams.map((team) => (
                <Link
                  to={`/teams/${team._id}`}
                  key={team._id}
                  className="entity-list-row-container image-logo"
                >
                  <div className="image-wrapper">
                    <img
                      src={team.logoUrl}
                      alt={team.name}
                      width="36"
                      height="36"
                      className="image-logo"
                    />
                  </div>
                  <div className="entity-list-row-content">
                    <h3 className="entity-list-row-title fs-18 lh-1">{team.name}</h3>
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