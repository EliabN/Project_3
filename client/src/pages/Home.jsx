// Home page
// eslint-disable-next-line no-unused-vars
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import TeamList from '../components/TeamList';
import Fixture from './Fixture';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://v3.football.api-sports.io/standings?league=39&season=2019", {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "37d1232ff7a559103a48f9a21b2bd7",
          },
        });

        const result = await response.json();
        console.log(result);

        if (result.response && result.response.length > 0) {
          setData(result.response[0].league.standings[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    const fetchRounds = async (leagueId, season) => {
      try {
        const response = await fetch(`${BASE_URL}/fixtures/rounds?league=${leagueId}&season=${season}&current=true`, {
          headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io', // Replace with your RapidAPI host
            'x-rapidapi-key': '93db411c7f7e2e844090f2a5ea7d7474',
          },
        });
    
        const data = await response.json();
        return data.response || [];
      } catch (error) {
        console.error('Error fetching rounds:', error);
        return [];
      }
    };
  }, []);

  return (
    <main className="container-fluid">
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-8">
          <div className="card bg-light-green rounded">
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <div className="entity-header-wrapper">
                <div className="entity-header nav-close">
                  <div className="entity-logo-fav">
                    <picture>
                      <source
                        srcSet="https://b.fssta.com/uploads/application/soccer/competition-logos/EnglishPremierLeague.vresize.350.350.medium.0.png"
                        media="(min-width: 1024px)"
                      />
                      <source
                        srcSet="https://b.fssta.com/uploads/application/soccer/competition-logos/EnglishPremierLeague.vresize.220.220.medium.0.png"
                        media="(max-width: 1023px)"
                      />
                      <source
                        srcSet="https://b.fssta.com/uploads/application/soccer/competition-logos/EnglishPremierLeague.vresize.160.160.medium.0.png"
                        media="(max-width: 767px)"
                      />
                      <img
                        src="https://b.fssta.com/uploads/application/soccer/competition-logos/EnglishPremierLeague.vresize.350.350.medium.0.png"
                        alt="ENGLISH PREMIER LEAGUE"
                        width="175"
                        height="175"
                        className="entity-card-logo image-logo"
                      />
                    </picture>
                  </div>
                  <div className="center flex entity-title">
                    <div className="fs-40 fs-sm-30 cl-wht uc">ENGLISH PREMIER LEAGUE</div>
                  </div>
                  <div className="entity-header-divider"></div>
                  <div className="mg-xl-t-7 mg-md-sm-t-5 ff-n fs-11 uc cl-wht">
                    <span>NO MATCHES yesterday</span>
                  </div>
                  <div className="app-container">
                    {fixtures.map(fixture => (
                      <Fixture key={fixture.fixture.id} fixture={fixture} />
                    ))}
                  </div>
                  <div>
                    <button
                      data-favorite-uri="league:soccer/epl/league/1"
                      data-action-location="entity header"
                      data-favorite-text="FOLLOW"
                      data-remove-text="FOLLOWING"
                      aria-label="Follow Button"
                      className="button-favorite entity pointer fs-14"
                    >
                      <span className="favorite-star"></span>{' '}
                      <span className="favorite-text">FOLLOW</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="col-md-4">
          <div className="card bg-light-green">
            <div className="card-body">
              {/* Your existing right side content */}
              <div className="flex-row justify-left w-100%">
                <div className="col-12 col-md-8 mb-3 w-100%">
                  <TeamList standings={data} title="Standings" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;