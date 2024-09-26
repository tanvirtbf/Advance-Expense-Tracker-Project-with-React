import React from "react";

const Select = ({
  className,
  label,
  id,
  name,
  value,
  onChange,
  errors,
  options,
  defaultOption,
}) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        {defaultOption && (
          <option value="" hidden>
            Select Category
          </option>
        )}
        {options.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
      <p className="error">{errors}</p>
    </div>
  );
};

export default Select;
