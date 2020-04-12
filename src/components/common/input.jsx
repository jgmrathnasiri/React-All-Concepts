import React from "react";
const Input = ({ name, lable, value, error, onChange }) => {
  return (
    <div className="form-group">
      <span>{lable}</span>
      <input
        value={value}
        onChange={onChange}
        autoFocus
        type="text"
        name={name}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
