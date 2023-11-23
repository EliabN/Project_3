// queries
import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      favoriteTeams {
        _id
        name
      }
    }
  }
`;

export const QUERY_TEAMS = gql`
  query getTeams($username: String) {
    teams(username: $username) {
      _id
      name
    }
  }
`;

export const QUERY_SINGLE_TEAM = gql`
  query getSingleTeam($teamId: ID!) {
    team(teamId: $teamId) {
      _id
      name
    }
  }
`;

export const QUERY_SINGLE_TRANSFER = gql`
  query getSingleTransfer($transferId: ID!) {
    transfers(teamId: $transferId) {
      _id
      name
    }
  }
`;

export const QUERY_FETCH_STANDINGS = gql`
  query fetchData {
    fetchData {
      data 
    }
  }
`;
