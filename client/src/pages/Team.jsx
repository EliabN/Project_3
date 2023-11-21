/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import TeamList from '../components/TeamList';
import Fixtures from '../components/Fixtures';

import { QUERY_FETCH_STANDINGS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const Team = () => {
  const { loading, error, data } = useQuery(QUERY_FETCH_STANDINGS);
  const [fetchedData, setFetchedData] = useState([]);
  const apiFetch = data.json()
  console.log(apiFetch);

  useEffect(() => {
  if (data) {
    // Assuming data is the result of a fetch request
    // Check if data.json is a function before calling it
    if (typeof data.json === 'function') {
      data.json()
        .then(apiFetch => {
          console.log(apiFetch);
          // ... rest of your code
          // Update state or perform other actions based on data
          setFetchedData(data.standings);
        })
        .catch(error => {
          console.error('Error parsing JSON:', error);
        });
    } else {
      console.error('Unexpected data format:', data);
    }
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
      <h1>Welcome to the Home Page</h1>

      {/* Display the fetched data */}
      <h2>Fetched Data</h2>
      <pre>{JSON.stringify(fetchedData, null, 2)}</pre>

      {/* Example usage of the TeamList component */}
      <TeamList teams={fetchedData.teams} /> {/* Update with the correct property name */}

      {/* Example usage of the Fixtures component */}
       {/* Update with the correct property name */}
    </div>
  );
};

export default Team;