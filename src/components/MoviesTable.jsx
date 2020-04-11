import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

class MoviesTable extends Component {
  render() {
    const { pageMovies, onLike, onDelete, onSort, sortColunm } = this.props;
    const colunms = [
      { col: "title", lable: "Title" },
      { col: "genre.name", lable: "Genre" },
      { col: "numberInStock", lable: "Stock" },
      { col: "dailyRentalRate", lable: "Rate" },
      { key: "like" },
      { key: "delete" },
    ];
    return (
      <table id="movies" className="table">
        <TableHeader
          sortColunm={sortColunm}
          onSort={onSort}
          colunms={colunms}
        ></TableHeader>
        <TableBody
          pageMovies={pageMovies}
          onLike={onLike}
          onDelete={onDelete}
        ></TableBody>
      </table>
    );
  }
}

export default MoviesTable;
