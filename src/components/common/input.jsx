import React from "react";

const Input = ({ name, label, value, onChange, error, type, placeholder }) => {
  console.log();
  return (
    <div className=" form-group">
      {label ? <label htmlFor={name}>{label}</label> : null}
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
