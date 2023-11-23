const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        favoriteTeams: [Team]!
    }

    type Team {
        _id: ID!
        name: String
    }

    input TeamInput {
        _id: ID!
        name: String!
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
        addComment(transferId: ID!, commentText: String!, commentAuthor: String!): Comment!
        deleteComment(commentId: ID!): Comment!
        saveFavTeam(teamInput: TeamInput!): User
        removeFavTeam(teamId: String!): User
    }
`;

module.exports = typeDefs;