// API.js file
// Import API key

// import { myApiKey } from '../../oSecrets';
// import dotenv from 'dotenv';
// dotenv.config();

import { API_KEY } from '../../oSecrets';

// Now you can use API_KEY in this file
console.log(API_KEY);

//const apiKey = import.meta.env.VITE_API_KEY;
// console.log(apiKey)
fetch("https://v3.football.api-sports.io/standings?league=39&season=2019", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key":'apiKey', // Use the apiKey variable here
  },
})
  .then(response => response.json())
  .then(data => {
    console.log(data.response);
    // Process the data or update the state here
  })
  .catch(err => {
    console.error(err);
  });