import React from "react";

export function TableItem(props) {
    return (
        <tr class="table-dark">
          <th scope="row">{props.name}</th>
          <td>{props.phone}</td>
          <td>{props.email}</td>
          <td><img src={props.picture.thumbnail} alt={`${props.name}`}></img></td>
        </tr>
    )
}