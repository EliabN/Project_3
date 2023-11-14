// resolvers.js file
const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('teams');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('teams');
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
        },
        addTeam: async (_, { userId, teamId }) => {
            try {
              const user = await User.findOneAndUpdate(
                { _id: userId },
                { $addToSet: { teams: teamId } },
                { new: true }
              ).populate('teams');
          
              if (!user) {
                throw new Error('User not found');
              }
          
              return user;
            } catch (error) {
              throw new Error(`Failed to add team: ${error.message}`);
            }
          },
        removeTeam: async (parent, { userId, teamId }) => {
            try {
                const user = await User.findOneAndUpdate(
                    { _id: userId },
                    { $pull: { teams: teamId } },
                    { new: true }
                );

                if (!user) {
                    throw new Error('User not found');
                }

                return user;
            } catch (error) {
                throw new Error(`Failed to remove team: ${error.message}`);
            }
        },
    }
};

module.exports = resolvers;