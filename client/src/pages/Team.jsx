// Team page
//import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useQuery, useMutation } from '@apollo/client';
// import { QUERY_SINGLE_TEAM } from '../utils/queries';
// import { ADD_TEAM, REMOVE_TEAM } from '../utils/mutations';
import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const FOOTBALL_DATA = gql`
  query getTeams {
    fetchTeam {
      leagueName
    }
  }
`;

const Team = () => {
  // const { loading, error, data } = useQuery(FOOTBALL_DATA);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  // const leagueName = data.footballData.leagueName;

  // return (
  //   <div>
  //     <h1>League Name: {leagueName}</h1>
  //   </div>
  // );
};

export default Team;