// mutations
import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TEAM = gql`
  mutation addTeam($userId: ID!, $teamId: ID!) {
    addTeam(userId: $userId, teamId: $teamId) {
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

export const ADD_TRANSFER_COMMENT = gql`
  mutation addTransferComment($transferId: ID!, $commentText: String!, $commentAuthor: String!) {
    addTransferComment(transferId: $transferId, commentText: $commentText, commentAuthor: $commentAuthor) {
      _id
      text
      author
      createdAt
    }
  }
`;

export const ADD_TO_FAVORITES = gql`
  mutation addToFavorites($teamId: ID!) {
    addToFavorites(teamId: $teamId) {
      _id
      favorites
    }
  }
`;

export const ADD_FAV_TEAM = gql`
  mutation saveTeam($teamData: teamInput!) {
    saveTeam(teamData: $teamData) {
      _id
    }
  }
`;

export const REMOVE_FAV_TEAM = gql`
  mutation removeTeam($teamId: ID!) {
    removeTeam(teamId: $teamId) {
      _id
    }
  }
`;
