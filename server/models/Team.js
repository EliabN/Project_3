// Team.js module
const { Schema, model } = require('mongoose');

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  league: {
    type: String,
    required: true,
    trim: true,
  },
  coach: {
    type: String,
    trim: true,
  },
  trophies: {
    type: Number,
    default: 0,
  },
//   players: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Player',
//     },
//   ],
});

const Team = model('Team', teamSchema);

module.exports = Team;