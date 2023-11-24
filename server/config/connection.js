// connection.js file
// import Mongoose library
const mongoose = require('mongoose');

// Connect to MongoDB using the provided URI or a local default URI
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/scoresphere');

// Export Mongoose connection
module.exports = mongoose.connection;
