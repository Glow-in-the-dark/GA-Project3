import React from "react";

const BaseTextArea = ({
  rows,
  label,
  id,
  value,
  handleChange,
  required = false,
  disabled = false,
  placeholder,
  className,
}) => {
  function handleInputChange(e) {
    handleChange(e.target.id, e.target.value);
  }
  return (
    <label>
      {label ?? ""}
      <input
        rows={rows}
        id={id}
        value={value}
        onChange={handleInputChange}
        required={required}
        disabled={disabled}
        placeholder={placeholder ?? ""}
        className={`bg-transparent placeholder:text-greyscale2 py-2 border w-full border-primary focus:outline-none ${
          className ?? ""
        }`}
      />
    </label>
  );
};

export default BaseTextArea;
