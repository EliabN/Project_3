// queries
import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      teams {
        _id
        name
        league
        coach
      }
    }
  }
`;

export const QUERY_TEAM = gql`
  query getTeam {
    teams {
      _id
      name
      league
      coach    
    }
  }
`;

export const QUERY_SINGLE_TEAM = gql`
  query getSingleTeam($teamId: ID!) {
    team(teamId: $teamId) {
      _id
      name
      league
      coach 
    }
  }
`;