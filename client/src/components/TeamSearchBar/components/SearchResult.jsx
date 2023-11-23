/* eslint-disable react/prop-types */
import "./SearchResult.css";

export const SearchResult = ({ result }) => {
  console.log(result);
  return (
    <div className="search-result">
      <button
        type="button"
        className="favorite-btn btn btn-outline-info"
        onClick={(e) => alert(`You added ${result} to your favorites!`)}
      >
        +
      </button>
      {!result ? <p>Try again...</p> : <p>{result}</p>}
    </div>
  );
};