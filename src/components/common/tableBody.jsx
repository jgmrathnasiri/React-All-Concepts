import React, { Component } from "react";
import Like from "./like";

//pageMovies: Arr
//onLike: Func
//onDelete: Func

class TableBody extends Component {
  render() {
    const { pageMovies, onLike, onDelete } = this.props;
    return (
      <tbody>
        {pageMovies.map((m) => (
          <tr key={m._id}>
            <td>{m.title}</td>
            <td>{m.genre.name}</td>
            <td>{m.numberInStock}</td>
            <td>{m.dailyRentalRate}</td>
            <td>
              <Like onLike={() => onLike(m)} liked={m.liked}></Like>
            </td>
            <td>
              <button
                onClick={() => onDelete(m)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
