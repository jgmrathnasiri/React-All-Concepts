import React, { Component } from "react";
import _ from "lodash";

//data: Arr
//colunms: Arr
//onLike: Func
//onDelete: Func

class TableBody extends Component {
  renderCell = (item, colunm) => {
    if (colunm.content) return colunm.content(item);

    return _.get(item, colunm.col);
  };

  render() {
    const { data, colunms, dataKey } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item[dataKey]}>
            {colunms.map((c) => (
              <td key={c.lable || c.key}>{this.renderCell(item, c)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;

// {/* <tbody>
//         {pageMovies.map((m) => (
//           <tr key={m._id}>
//             <td>{m.title}</td>
//             <td>{m.genre.name}</td>
//             <td>{m.numberInStock}</td>
//             <td>{m.dailyRentalRate}</td>
//             <td>
//               <Like onLike={() => onLike(m)} liked={m.liked}></Like>
//             </td>
//             <td>
//               <button
//                 onClick={() => onDelete(m)}
//                 className="btn btn-danger btn-sm"
//               >
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody> */}
