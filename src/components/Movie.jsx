import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import { paginate } from "../util/paginate";
import ListGroup from "./common/listGroup";
import MoviesTable from "./MoviesTable";
import _ from "lodash";

class Movie extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGroupId: 0,
    sortColunm: { col: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ name: "All Genres", _id: 0 }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres,
    });
  }

  render() {
    const {
      pageSize,
      currentPage,
      movies,
      genres,
      selectedGroupId,
      sortColunm,
    } = this.state;

    var a = ["a", "b"];
    a[100] = "s";
    console.log(a.length);

    if (this.state.movies.length === 0)
      return <p>There is no movies in the database..!</p>;

    const filtered =
      selectedGroupId !== 0
        ? movies.filter((m) => m.genre._id === selectedGroupId)
        : movies;

    console.log(sortColunm);
    const sorted = _.orderBy(filtered, [sortColunm.col], [sortColunm.order]);

    const pageMovies = paginate(sorted, pageSize, currentPage);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            genres={genres}
            onGroupChange={this.handleGroupChange}
            currentGroupId={selectedGroupId}
            textProp="name" //makes the list group re-usable
            valueProp="_id" //makes the list group re-usable
          ></ListGroup>
        </div>
        <div className="col">
          <span>Showing {filtered.length} movies in the database</span>
          <MoviesTable
            pageMovies={pageMovies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColunm={sortColunm}
          ></MoviesTable>
          <Pagination
            movieCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          ></Pagination>
        </div>
      </div>
    );
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGroupChange = (groupId) => {
    this.setState({ selectedGroupId: groupId, currentPage: 1 });
  };

  handleSort = (sortColunm) => {
    this.setState({ sortColunm });
  };
}

export default Movie;
