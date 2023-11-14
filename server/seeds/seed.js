const db = require('../config/connection');
const { User, Team } = require('../models');
const userSeeds = require('./userSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    // Clean the existing data
    await cleanDB('User', 'users');
    await cleanDB('Team', 'teams');

    // Create teams and map to userSeeds
    const createdTeams = await Team.create(
      userSeeds.reduce((teams, userSeed) => teams.concat(userSeed.teams), [])
    );

    // Map userSeeds to add teams property
    const usersWithTeams = userSeeds.map((userSeed) => ({
      ...userSeed,
      teams: userSeed.teams.map((team, index) => createdTeams[index]._id),
    }));

    // Create users with associated teams
    await User.create(usersWithTeams);

    console.log('Seed data added successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding data:', err);
    process.exit(1);
  }
});
