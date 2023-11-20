// auth.js
const { GraphQLError } = require('graphql');
require('dotenv').config();
const myApiKey = process.env.API_KEY

// Import 'jsonwebtoken' for (JWT)JSON Web Tokens 
const jwt = require('jsonwebtoken');

// Key used to sign and verify JWTs tokens
const secret = 'mysecretssshhhhhhh';

// Token expiration time set to 2 hours
const expiration = '2h';

// Export AuthenticationError and signToken function
module.exports = {
  // Error if authentication fails
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),

  // Function to sign a JWT with user info
  signToken: function ({ email, username, _id }) {
    // Payload with user info
    const payload = { email, username, _id };

    // Sign JWT with payload, secret key, and expiration
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },

  // API key
  myApiKey: myApiKey
};