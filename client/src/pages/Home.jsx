// Home.js
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TeamList from '../components/TeamList';
import Auth from '../utils/auth';

const Home = () => {
  const [data, setData] = useState([]);
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://v3.football.api-sports.io/standings?league=39&season=2019", {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": '59c7214420bf3f1d9545cf2ea7c6', // TODO: Replace with actual key
          },
        });

        const result = await response.json();

        if (result.response && result.response.length > 0) {
          setData(result.response[0].league.standings[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchFixtures = async (leagueId, season, round) => {
      try {
        const response = await fetch(`https://v3.football.api-sports.io/fixtures?league=${leagueId}&season=${season}&round=${round}`, {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': '59c7214420bf3f1d9545cf2ea7c6', // TODO: Replace with actual key
          },
        });

        const result = await response.json();

        if (result.response) {
          setFixtures(result.response);
        }
      } catch (error) {
        console.error(error);
      }
    };

    // Example usage
    const leagueId = 39;
    const season = 2022;
    const round = 10;
    fetchFixtures(leagueId, season, round);
  }, []);

  const handleLogout = () => {
    Auth.logout();
  };

  return (
    <main className="container-fluid">
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-8">
          <div className="card bg-light-green rounded">
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <div className="entity-header-wrapper">
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
              </div>
              <div className="app-container">
                {fixtures.length > 0 ? (
                  fixtures.map((fixture) => (
                    <Fixtures key={fixture.fixture.id} fixture={fixture} />
                  ))
                ) : (
                  <h3>No Fixtures Yet</h3>
                )}
              </div>
              <div>
                {Auth.loggedIn() ? (
                  <>
                    <button onClick={handleLogout} className="btn btn-danger">
                      Logout
                    </button>
                  </>
                ) : (
                  <p>
                    To see fixtures, please{' '}
                    <Link to="/login">login</Link> or{' '}
                    <Link to="/signup">signup</Link>.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="col-md-4">
          <div className="card bg-light-green">
            <div className="card-body">
              {/* Right side content */}
              <div className="flex-row justify-left w-100%">
                <div className="col-12 col-md-8 mb-3 w-100%">
                  <TeamList standings={data} title="Standings" isLoggedIn={Auth.loggedIn()} />
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