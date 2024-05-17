import React, { Component, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/AppContext";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitButton, setSubmitButton] = useState(true);

  function handleEmailChange(event) {
    const newEmail = event.target.value;
    setEmail(newEmail);
    if (newEmail && password) setSubmitButton(false);
    else setSubmitButton(true);
  }

  function handlePasswordChange(event) {
    const newPassword = event.target.value;
    setPassword(newPassword);
    if (email && newPassword) setSubmitButton(false);
    else setSubmitButton(true);
  }
  const handleSubmit = (e) => {
    // if (userType == "Admin" && secretKey != "AdarshT") {
    //   e.preventDefault();
    //   alert("Invalid Admin");
    // } else {
    //   e.preventDefault();

    //   console.log(fname, lname, email, password);
    //   fetch("http://localhost:5000/register", {
    //     method: "POST",
    //     crossDomain: true,
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //     body: JSON.stringify({
    //       fname,
    //       email,
    //       lname,
    //       password,
    //       userType,
    //     }),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data, "userRegister");
    //       if (data.status == "ok") {
    //         alert("Registration Successful");
    //       } else {
    //         alert("Something went wrong");
    //       }
    //     });
    // }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>

          <div className="mb-3 user-input">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={handleEmailChange}
            />
          </div>

          <div className="mb-3 user-input">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={handlePasswordChange}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className={submitButton ? "submit-btn-disabled" : "submit-btn"} disabled={submitButton}>
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}