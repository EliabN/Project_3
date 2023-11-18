// Home page
import { useQuery } from '@apollo/client';

import TeamList from '../components/TeamList';

import { QUERY_TEAMS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_TEAMS);
  const teams = data?.teams || [];

  console.log('Loading:', loading);
  console.log('Teams:', teams);

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TeamList teams={teams} title="Available Teams" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;