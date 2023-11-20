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

    type FetchTeam {
        team: Team
      }

    type Query {
        users: [User]
        user(username: String!): User
        teams(username: String): [Team]
        team(teamId: ID!): Team
        fetchTeam: FetchTeam
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
    }
`;

module.exports = typeDefs;