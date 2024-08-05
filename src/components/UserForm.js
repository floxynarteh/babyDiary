import React, { useState } from "react";
import "../style.css/userForm.css";
import DatePickers from "./DatePickers";
import CountrySelector from "./CountrySelector";
import GenderSelector from "./GenderSelector";

const UserForm = () => {
  const [values, setValues] = useState({
    childFirstName: "",
    childLastName: "",
    placeOfBirth: "",
    // date: "",
    country: "",
    gender: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="forms">
      <h1> Child's Personal Details</h1>
      <form
        className="child-form"
        onSubmit={handleSubmit}
        method="post"
        action="/saveData"
      >
        <label htmlFor="childFirstName">FirstName* </label>
        <input
          type="text"
          name="childFirstName"
          placeholder="Enter Child's Firstname"
          onChange={(e) => handleChange(e)}
          required
        />

        <label htmlFor="childLastName"> LastName* </label>
        <input
          type="text"
          name="childLastName"
          placeholder=" Enter Child's Lastname"
          onChange={(e) => handleChange(e)}
          required
        />

        <label htmlFor="placeOfBirth"> Place of Birth* </label>
        <input
          type="text"
          name="placeOfBirth"
          placeholder="Enter Child's Place of Birth"
          onChange={(e) => handleChange(e)}
          required
        />

        <label htmlFor="date"> Date of Birth* </label>
        <DatePickers name="date" onChange={(e) => handleChange(e)} required />

        <label htmlFor="country"> Country of Birth* </label>
        <CountrySelector name="country" onChange={(e) => handleChange(e)} />

        <label htmlFor="gender"> Gender* </label>
        <GenderSelector
          name="gender"
          onChange={(e) => handleChange(e)}
          required
        />

        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
