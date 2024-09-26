import React from "react";

const Input = ({ className, label, id, name, value, onChange, errors, type }) => {
  return (
    <div className={className}>
      <label htmlFor={id} >
        {label}
      </label>
      {type === "select" ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      ) : (
        <input id={id} name={name} value={value} onChange={onChange} />
      )}
      <p className="error">{errors}</p>
    </div>
  );
};

export default Input;
