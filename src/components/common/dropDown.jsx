import React from "react";

const DropDwon = ({ label, options, onChange }) => {
  return (
    <select onChange={onChange} className="cform-control form-select">
      {!options
        ? null
        : options.map((op) => (
            <option key={op["DataValueField"]} value={op["DataValueField"]}>
              {op["DataTextField"]}
            </option>
          ))}
    </select>
  );
};

export default DropDwon;
