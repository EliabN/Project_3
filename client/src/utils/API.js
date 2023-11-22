// API.js file
// Import API key
// import dotenv from 'dotenv';
// dotenv.config();
// // Now you can use API_KEY in this file
// console.log(API_KEY);

// const apiKey = import.meta.env.API_KEY;

const fetchStandings = async () => {
  try {
    const response = await fetch("https://v3.football.api-sports.io/standings?league=39&season=2019", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": '59c7214420bf3f1d9545cf2ea7c6eb',
      },
    });

    const result = await response.json();

    if (result.response && result.response.length > 0) {
      return result.response[0].league.standings[0];
    }
  } catch (error) {
    console.error(error);
  }
};

const fetchRound = async () => {
  const response = await fetch("https://v3.football.api-sports.io/fixtures/rounds?season=2023&league=39&current=true", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "59c7214420bf3f1d9545cf2ea7c6eb",  // Replace with your actual API key
    },
  });

  const data = await response.json();

  if (data && data.response && data.response.length > 0) {
    const roundInfo = data.response[0];
    const match = roundInfo.match(/\d+/);
    const roundNumber = match ? parseInt(match[0]) : null;
    //console.log("Round Number:", roundNumber);
    return roundNumber;
  } else {
    console.log("No round information found in the response. Enter API key?");
    return null;
  }
};

const fetchFixtures = async () => {
  // Fetch current round
  // const round = await fetchRound(); //TODO: Uncomment later
  // console.log(round);
  const round = 20
  try {
    const response = await fetch(`https://v3.football.api-sports.io/fixtures?league=39&season=2023&round=Regular%20Season%20-%20${round}&status=NS`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': '59c7214420bf3f1d9545cf2ea7c6eb31', // TODO: Replace with actual key
      },
    });

    const result = await response.json();
    console.log(result);
    if (result.response) {
      return (result.response);
    }
  } catch (error) {
    console.error(error);
  }
};

export { fetchRound, fetchStandings, fetchFixtures };