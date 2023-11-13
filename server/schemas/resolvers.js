// resolvers.js file
const { User} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('thoughts');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('thoughts');
        }
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
          // Create the user
          const user = await User.create({ username, email, password });
          // Sign a JSON Web Token and log user in after created
          const token = signToken(user);
          // Return an `Auth` object with signed token and user's info
          return { token, user };
        },
        login: async (parent, { email, password }) => {
          // Look up the user by the provided email address(unique)
          const user = await User.findOne({ email });
    
          // If no user, return an authentication error
          if (!user) {
            throw AuthenticationError
          }
    
          // If user found, check password with `isCorrectPassword` 
          const correctPw = await user.isCorrectPassword(password);
    
          // If password incorrect, Authentication error
          if (!correctPw) {
            throw AuthenticationError
          }
    
          // If email and password are correct, sign user into the application with a JWT
          const token = signToken(user);
    
          // Return an `Auth` with signed token and user's info
          return { token, user };
        }
    }
};

module.exports = resolvers;