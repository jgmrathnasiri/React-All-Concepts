import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";
import { Link } from "react-router-dom";

class MoviesTable extends Component {
  render() {
    const { pageMovies, onLike, onDelete, onSort, sortColunm } = this.props;
    const colunms = [
      {
        col: "title",
        lable: "Title",
        content: (m) => <Link to={`/movies/${m._id}`}>{m.title}</Link>,
      },
      { col: "genre.name", lable: "Genre" },
      { col: "numberInStock", lable: "Stock" },
      { col: "dailyRentalRate", lable: "Rate" },
      {
        key: "like",
        content: (m) => <Like onLike={() => onLike(m)} liked={m.liked}></Like>,
      },
      {
        key: "delete",
        content: (m) => (
          <button onClick={() => onDelete(m)} className="btn btn-danger btn-sm">
            Delete
          </button>
        ),
      },
    ];
    return (
      <Table
        TableId="movies"
        data={pageMovies}
        colunms={colunms}
        dataKey="_id"
        sortColunm={sortColunm}
        onSort={onSort}
      ></Table>
    );
  }
}

export default MoviesTable;
