import React from "react";
const Input = ({ name, lable, value, error, type, onChange }) => {
  return (
    <div className="form-group">
      <span>{lable}</span>
      <input
        value={value}
        onChange={onChange}
        autoFocus
        type={type}
        name={name}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
