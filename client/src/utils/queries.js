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
        venue
      }
    }
  }
`;

export const QUERY_TEAMS = gql`
  query getTeam {
    teams {
      _id
      name
      league
      venue    
    }
  }
`;

export const QUERY_SINGLE_TEAM = gql`
  query getSingleTeam($teamId: ID!) {
    team(teamId: $teamId) {
      _id
      name
      league
      venue 
    }
  }
`;

export const QUERY_SINGLE_TRANSFER = gql`
  query getSingleTransfer($transferId: ID!) {
    transfer(transferId: $transferId) {
      _id
      player {
        name
        position
      }
      transferDate
      type
      teamsIn {
        _id
        name
        logo
      }
      teamsOut {
        _id
        name
        logo
      }
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
