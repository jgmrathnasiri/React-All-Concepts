import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class MovieDetails extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: 0,
      dailyRentalRate: 0,
    },
    errors: {},
    genras: [],
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().required().label("Stock").max(100).min(0),
    dailyRentalRate: Joi.number().required().label("Rate").max(10).min(0),
  };

  componentDidMount() {
    const genras = getGenres();
    if (this.props.match.params._id !== "new") {
      const movie = getMovie(this.props.match.params._id);
      if (!movie) this.props.history.replace("/not-found");

      this.setState({ data: this.mapToViewModel(movie) });
    }

    this.setState({ genras });
  }

  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  render() {
    return (
      <div>
        <h1>Movie Form</h1>

        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title", "text")}
          {this.renderSelect("genreId", "Genre", this.state.genras)}
          {this.renderInput("numberInStock", "Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate", "number")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieDetails;
