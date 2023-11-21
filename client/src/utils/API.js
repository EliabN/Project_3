// API.js file
// Import API key
// import dotenv from 'dotenv';
// dotenv.config();
// // Now you can use API_KEY in this file
// console.log(API_KEY);

const apiKey = import.meta.env.API_KEY;
console.log(apiKey)
// export const fetchRounds = async () => {
//   try {
//     const response = await fetch(`https://v3.football.api-sports.io/fixtures?live=all`, {
//       headers: {
//         'x-rapidapi-host': 'v3.football.api-sports.io',
//         'x-rapidapi-key': apiKey,
//       },
//     });

//     const result = await response.json();
//     console.log(result.response);

//     if (result.response && result.response.length > 0) {
//       setFixtures(result.response);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };