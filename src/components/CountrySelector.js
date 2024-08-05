import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

const CountrySelector = () => {
  const options = useMemo(() => countryList().getData(), []);
  const [value, setVlaue] = useState("");
  const handleCountryChange = (value) => {
    setVlaue(value);
  };

  return (
    <Select options={options} value={value} onChange={handleCountryChange} />
  );
};

export default CountrySelector;
