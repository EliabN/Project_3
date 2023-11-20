// API.js file
// Import API key
//import { myApiKey } from '../../../server/utils/auth/';

fetch("https://v3.football.api-sports.io/teams?id=33", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": "a2007e10bdcd4f227088177295d996ea",
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