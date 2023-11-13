// typeDefs.js file
const typeDefs = `
    type User {
     _id: ID
     username: String
     email: String
     password: String
    }

    type Query {
     users: [User]
     user(username: String!): User
    }
    
    type Auth {
     token: ID!
     user: User
    }

    type Mutation {
     addUser(username: String!, email: String!, password: String!): Auth
     login(email: String!, password: String!): Auth
  }
`;

//teams: [Team]!
module.exports = typeDefs;