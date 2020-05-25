import React from "react";

const Select = ({ name, lable, value, options, error, onChange }) => {
  return (
    <div className="form-group">
      <span>{lable}</span>
      <select
        value={value}
        onChange={onChange}
        autoFocus
        name={name}
        id={name}
        className="form-control"
      >
        <option value=""></option>
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
