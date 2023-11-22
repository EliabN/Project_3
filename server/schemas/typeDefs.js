// typeDefs.js file
const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        teams: [Team]!
    }

    type Transfer {
        _id: ID!
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
        addComment(transferId: ID!, commentText: String!, commentAuthor: String!): Comment!
        deleteComment(commentId: ID!): Comment!
    }
`;

module.exports = typeDefs;