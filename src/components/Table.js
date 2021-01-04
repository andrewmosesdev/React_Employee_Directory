import React from "react";

function Table({ children }) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Name <span className=""></span> </th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Photo</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

export default Table;
