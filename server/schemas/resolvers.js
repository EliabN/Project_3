// resolvers.js file
const { User, Team, Transfer, Comment } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
require('dotenv').config();
const { MY_API_KEY } = process.env;
const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('teams');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('teams');
        },
        teams: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Team.find(params).sort({ createdAt: -1 });
        },
        team: async (parent, { teamId }) => {
            return Team.findOne({ _id: teamId });
        },
        transfers: async (_, { teamId }) => {
            return Team.findOne({ _id: teamId });
        },
        fetchData: async () => {
            try {
                const response = await axios("https://v3.football.api-sports.io/standings?league=39&season=2019", {
                    method: "GET",
                    headers: {
                        "x-rapidapi-host": "v3.football.api-sports.io",
                        "x-rapidapi-key": MY_API_KEY,
                    },
                });

                return response.data
            } catch (error) {
                console.error(error.message);
                throw new Error('Internal Server Error');
            }
        },
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
        addTransferComment: async (_, { transferId, commentText, commentAuthor }) => {
            try {
                const transfer = await Transfer.findById(transferId);

                if (!transfer) {
                    throw new UserInputError('Transfer not found');
                }

                const comment = new Comment({
                    text: commentText,
                    author: commentAuthor,
                });

                transfer.comments.push(comment);
                await transfer.save();

                return comment;
            } catch (error) {
                console.error(error);
                throw new ApolloError('Internal server error');
            }
        },
        deleteComment: async (_, { commentId }) => {
            try {
                const transfer = await Transfer.findOne({ 'comments._id': commentId });

                if (!transfer) {
                    throw new UserInputError('Transfer or Comment not found');
                }

                transfer.comments = transfer.comments.filter(comment => comment._id.toString() !== commentId);
                await transfer.save();

                return { _id: commentId }; // Return the deleted comment's ID
            } catch (error) {
                console.error(error);
                throw new ApolloError('Internal server error');
            }
        },
    }
};

module.exports = resolvers;