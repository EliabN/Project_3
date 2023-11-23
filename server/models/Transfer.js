// Transfer.js module
const mongoose = require('mongoose');

const transferSchema = new mongoose.Schema({
  player: {
    name: String,
    position: String,
  },
  update: String,
  transfers: [
    {
      date: String,
      type: String,
      teams: {
        in: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Team',
          },
        out: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Team',
        },
      },
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

const Transfer = mongoose.model('Transfer', transferSchema);

module.exports = Transfer;