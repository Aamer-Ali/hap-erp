import React from "react";

const TableHead = ({ tableHeading }) => {
  return (
    <thead>
      <tr>
        {tableHeading.map((column) => (
          <th className="clickable" key={column}>
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
