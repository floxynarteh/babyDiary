import { Button } from "@material-ui/core";
import React, { useState } from "react";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Username:", username, "Email:", email, "Password:", password);
  };

  return (
    <div>
      <h2>SignUp</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="username"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
