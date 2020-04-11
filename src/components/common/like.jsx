import React, { Component } from "react";

class Like extends Component {
  render() {
    const { onLike, liked } = this.props;
    let classes = "fa fa-heart";
    if (!liked) classes += "-o";
    return (
      <i
        className={classes}
        aria-hidden="true"
        style={{ cursor: "pointer" }}
        onClick={() => onLike()}
      ></i>
    );
  }
}

export default Like;
