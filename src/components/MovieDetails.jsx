import React, { Component } from "react";

class MovieDetails extends Component {
  state = {};

  handleSave = () => {
    this.props.history.replace("/movies");
  };

  render() {
    return (
      <div>
        <h1>Movie Details - {this.props.match.params._id}</h1>
        <button className="btn btn-primary" onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }
}

export default MovieDetails;
