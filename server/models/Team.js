// Team.js module
const { Schema, model } = require('mongoose');

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
//  TODO: add later
  // league: {
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
  // venue: {
  //   type: String,
  //   trim: true,
  // },

//  Add later create Schema
//   players: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Player',
//     },
//   ],
});

const Team = model('Team', teamSchema);

module.exports = Team;