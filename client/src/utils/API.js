// API.js file
// Import API key
//import { myApiKey } from '../../../server/utils/auth/';
import dotenv from 'dotenv';
dotenv.config();

const apiKey = import.meta.env.VITE_API_KEY;
console.log(apiKey)
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