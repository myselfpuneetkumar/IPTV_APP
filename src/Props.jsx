import React, { useState } from "react";
import DropdownChild from "./DropdownChild";


export default function ParentComponent() {
  // 1. Manage the selected option state in the parent
  const [selectedFruit, setSelectedFruit] = useState("apple");

  // 2. Define an options array to keep the data clean
  const fruitOptions = [
    { value: "apple", label: "🍎 Apple" },
    { value: "banana", label: "🍌 Banana" },
    { value: "orange", label: "🍊 Orange" },
  ];

  // 3. Handler function to update state when the child triggers an event
  const handleFruitChange = (newValue) => {
    setSelectedFruit(newValue);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Parent Component</h1>
      <p>Currently Selected: <strong>{selectedFruit}</strong></p>
      <hr />


      {/* 4. Pass state and functions to the child via props */}
      <DropdownChild
        label="Choose a fruit:"
        options={fruitOptions}
        selectedValue={selectedFruit}
        onSelectionChange={handleFruitChange}
      />
    </div>
  );
}