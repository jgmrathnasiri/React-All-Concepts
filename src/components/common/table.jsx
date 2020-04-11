import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class Table extends Component {
  render() {
    const { tableId, data, colunms, dataKey, sortColunm, onSort } = this.props;
    return (
      <table id={tableId} className="table">
        <TableHeader
          sortColunm={sortColunm}
          onSort={onSort}
          colunms={colunms}
        ></TableHeader>
        <TableBody data={data} colunms={colunms} dataKey={dataKey}></TableBody>
      </table>
    );
  }
}

export default Table;
