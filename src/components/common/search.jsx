import React, { Component } from "react";

class Search extends Component {
  state = {};
  render() {
    const { onSearch } = this.props;
    return (
      <input
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="Search..."
        onChange={(event) => onSearch(event.target.value)}
      ></input>
    );
  }
}

export default Search;
