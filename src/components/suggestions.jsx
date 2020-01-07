import React from "react";

const Suggestion = ({ results, query, onPick }) => {
  return (
    <ul className="suggestionContainer">
      {results.map(result => (
        <li
          key={result._id}
          className={
            query.toLowerCase() === result.place_name.toLowerCase()
              ? "u__display--none"
              : "suggestionContainer__list"
          }
          onClick={() => onPick(result.place_name)}
        >
          {result.place_name}
        </li>
      ))}
    </ul>
  );
};

export default Suggestion;
