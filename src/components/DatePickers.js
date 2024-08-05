import React, { useState } from "react";
import "../style.css/DatePickers.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickers = () => {
  const [selectedDateOfBirth, setSelectedDateOfBirth] = useState("");
  // const [values, setValues] = useState({
  //   date: "",
  // });

  // const handleChange = (e) => {
  //   setValues({ ...values, [e.target.name]: [e.target.value] });
  // };

  return (
    <div>
      {/* <input
        type="date"
        value={selectedDateOfBirth}
        placeholder="MM/DD/YYYY"
        onChange={(e) => handleChange(setSelectedDateOfBirth(e.target.value))}
      /> */}
      <DatePicker
        selected={selectedDateOfBirth}
        // onChange={(date) => console.log(setSelectedDateOfBirth(date))}
        onChange={(date) => setSelectedDateOfBirth(date)}
      />
    </div>
  );
};

export default DatePickers;
