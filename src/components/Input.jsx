import React from "react";

const Input = ({
  className,
  label,
  id,
  name,
  value,
  onChange,
  errors
}) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} value={value} onChange={onChange} />
      <p className="error">{errors}</p>
    </div>
  );
};

export default Input;
