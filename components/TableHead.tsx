import React from "react";

const TableHead = ({ columns }) => {
  return (
    <thead>
      <tr className="">
        {columns.map(({ label, key }, i) => (
          <th key={i}>
            <span>{label}</span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
