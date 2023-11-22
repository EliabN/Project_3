import React, { useState, useEffect } from 'react';
import TeamList from '../components/TeamList';
import Fixtures from '../components/Fixtures';
import Auth from '../utils/auth';

import { QUERY_FETCH_STANDINGS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const Home = () => {
  const { loading, error, data } = useQuery(QUERY_FETCH_STANDINGS);

  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    if (data) {
      // Access your data here
      console.log(data);
      // Update state or perform other actions based on data
      setFetchedData(data);
      // Assuming data.fetchData contains the structure you want
    }
  }, [data]);

  // Other component logic
  // For example, you might conditionally render based on loading or error states

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {/* Render components or display data */}
      <h1>Team Details</h1>

      {/* Display the fetched data */}
      <h2>Fetched Data</h2>
      <pre>{JSON.stringify(fetchedData, null, 2)}</pre>

      {/* Example usage of the TeamList component */}
      {/* <TeamList teams={fetchedData.teams} /> */}

      {/* Example usage of the Fixtures component */}

      {/* <Fixtures fixtures={fetchedData.fixtures} /> */}
    </div>
  );
};

export default Home;