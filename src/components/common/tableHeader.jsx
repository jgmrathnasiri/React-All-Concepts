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

  renderSortIcon = (c) => {
    const { sortColunm } = this.props;
    if (c.col !== sortColunm.col) return null;

    if (sortColunm.order === "asc")
      return <i className="fa fa-sort-asc m-2"></i>;

    return <i className="fa fa-sort-desc m-2"></i>;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.colunms.map((c) => (
            <th
              className="clickable"
              key={c.lable || c.key}
              onClick={() => this.raiseSort(c.col)}
            >
              {c.lable}
              {this.renderSortIcon(c)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
