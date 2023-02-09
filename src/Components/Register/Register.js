import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfrimPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfrimPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your two password didn't matched");
      return;
    }
    console.log("Form Submitted", email, password, confirmPassword);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title"> Register </h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name=""
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="Password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name=""
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-Password">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name=""
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p className="NTEJ">
          Already Have an account?
          <Link className="form-link" to="/Login">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
