import React, { useState } from "react";

const GenderSelector = () => {
  const [selectedGender, setSelectedGender] = useState("Gender");

  const handleChange = (event) => {
    setSelectedGender(event.target.value);
  };
  return (
    <select value={selectedGender} onChange={handleChange}>
      <option value="select" placeholder="select"></option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
  );
};

export default GenderSelector;
