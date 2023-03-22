import React from "react";

const TableBody = ({ items, columns }) => {
  return (
    <tbody>
      {items.map((item, itemIndex) => (
        <tr key={itemIndex}>
          {columns.map((column, columnIndex) => (
            <td key={columnIndex}>{item[column.key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
