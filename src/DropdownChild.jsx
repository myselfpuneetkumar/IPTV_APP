import React from "react";

// Destructure the passed props directly in the function arguments
export default function DropdownChild({ label, options, selectedValue, onSelectionChange }) {
  return (
    <div>
      <h3>Child Component</h3>
      <label htmlFor="custom-select" style={{ marginRight: "10px" }}>
        {label}
      </label>

      {/* Bind the value and the onChange handler to the props */}
      <select 
        id="custom-select"
        value={selectedValue} 
        onChange={(e) => onSelectionChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}