import React from "react";

const Search = ({ onSearch, value }) => {
  return (
    <input
      type="text"
      value={value}
      className="form-control mt-2 mb-2"
      placeholder="Search..."
      onChange={(event) => onSearch(event.target.value)}
    ></input>
  );
};

export default Search;
