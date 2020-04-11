import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const {
      genres,
      currentGroupId,
      onGroupChange,
      textProp,
      valueProp,
    } = this.props;

    return (
      <ul className="list-group">
        {genres.map((genre) => (
          <li
            key={genre[valueProp]}
            className={
              currentGroupId === genre[valueProp]
                ? "list-group-item page-link active"
                : "list-group-item page-link"
            }
            onClick={() => onGroupChange(genre[valueProp])}
          >
            {genre[textProp]}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
