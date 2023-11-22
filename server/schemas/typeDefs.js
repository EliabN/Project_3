// typeDefs.js file
const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        teams: [Team]!
    }

    type Team {
        _id: ID
        name: String!
        league: String!
        venue: String
    }

    type Transfer {
        _id: ID!
        update: String!
        transfers: [TransferDetail!]!
        comments: [Comment!]!
      }
      
      type TransferDetail {
        date: String!
        type: String!
        teams: TransferTeams!
      }
      
      type TransferTeams {
        in: Team!
        out: Team!
      }
      
      type Team {
        id: ID!
        name: String!
        logo: String!
      }

      type FetchData {
        data: String
      }
      
      type Comment {
        _id: ID!
        text: String!
        author: String!
        createdAt: String!
      }

    type Query {
        users: [User]
        user(username: String!): User
        teams(username: String): [Team]
        team(teamId: ID!): Team
        transfers(teamId: ID!): [Transfer!]!
        fetchData: FetchData
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addTeam(userId: ID!, teamId: ID!): User
        removeTeam(userId: ID!, teamId: ID!): User
        addTransferComment(transferId: ID!, commentText: String!, commentAuthor: String!): Comment!
        deleteComment(commentId: ID!): Comment!
    }
`;

module.exports = typeDefs;