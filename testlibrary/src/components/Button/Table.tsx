import React from 'react'
import './Button.css';


interface TableProps {
  tableheader: string;
  tableinput: string;
  tablefoot: string;

}
const Table = (props: TableProps) => {
  return <table>
  <thead>
    <tr>
      <th>{props.tableheader}</th>
      <th>{props.tableheader}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{props.tableinput}</td>
      <td>{props.tableinput}</td>
    </tr>
    <tr>
      <td>{props.tableinput}</td>
      <td>{props.tableinput}</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>{props.tablefoot}</td>
      <td>{props.tablefoot}</td>
    </tr>
  </tfoot>
</table>;
}
export default Table;