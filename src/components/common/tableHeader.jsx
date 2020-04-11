import React, { Component } from "react";

//sortColunm
//onSort
//colunms

class TableHeader extends Component {
  raiseSort = (col) => {
    const sortColunm = { ...this.props.sortColunm };
    if (sortColunm.col === col) {
      sortColunm.order = sortColunm.order === "asc" ? "desc" : "asc";
    } else {
      sortColunm.col = col;
      sortColunm.order = "asc";
    }
    this.props.onSort(sortColunm);
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.colunms.map((c) => (
            <th key={c.lable || c.key} onClick={() => this.raiseSort(c.col)}>
              {c.lable}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
