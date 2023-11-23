/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./components/index.css";
import { SearchResultsList } from "./components/SearchResultsList";

function TeamSearchBar({ allTeams }) {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");


  const fetchData = async (value) => {
    try {
      const teamStandings = allTeams;

      if (Array.isArray(teamStandings)) {
        const filteredResults = teamStandings.filter((team) => {
          return (
            value &&
            team &&
            team.team &&
            team.team.name &&
            team.team.name.toLowerCase().includes(value.toLowerCase())
          );
        });

        setResults(filteredResults);

      } else {
        console.error("Invalid data format:", teamStandings);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="SearchBar">
      <div className="search-bar-container">
        <div className="input-wrapper">
          <FaSearch id="search-icon" />
          <input
            placeholder="Type to search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        {results && results.length > 0 && (
          <SearchResultsList results={results} />
        )}
      </div>
    </div>
  );
}

export default TeamSearchBar;