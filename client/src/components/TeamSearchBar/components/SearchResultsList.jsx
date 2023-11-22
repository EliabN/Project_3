/* eslint-disable react/prop-types */
import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
    //console.log(results)
  return (
    <div className="results-list">
      {results.map((result) => {
        console.log(result.team.id)
        return <SearchResult result={result.team.name} key={result.team.id} />;
      })}
    </div>
  );
};