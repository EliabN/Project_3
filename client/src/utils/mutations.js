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

export const REMOVE_TEAM = gql`
  mutation removeTeam($userId: ID!, $teamId: ID!) {
    removeTeam(userId: $userId, teamId: $teamId) {
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

export const DELETE_COMMENT = gql`
  mutation deleteComment($commentId: ID!) {
    deleteComment(commentId: $commentId) {
      _id
    }
  }
`;