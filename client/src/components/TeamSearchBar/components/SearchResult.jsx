/* eslint-disable react/prop-types */
import "./SearchResult.css";

export const SearchResult = ({ result }) => {
  console.log(result)
  return (
    <div
      className="search-result"
    >
      <buttons type="button" className="favorite-btn btn btn-outline-info"
      onClick={(e) => alert(`You added ${result} to your favorites!`)}>
        +
      </buttons>
      <p>{result}</p>
    </div>
  );
};