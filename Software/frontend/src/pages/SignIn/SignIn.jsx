import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitButton, setSubmitButton] = useState(true);
  const navigate = useNavigate();

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
  
  function handleSubmit(e) {
    e.preventDefault();
    if (email === "user" && password === "1") navigate("/");
    else if (email === "admin" && password === "1") navigate("/admin");
    else window.alert("wrong email or wrong password")
    // fetch("http://localhost:5000/login-user", {
    //   method: "POST",
    //   crossDomain: true,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data, "userRegister");
    //     if (data.status == "ok") {
    //       alert("login successful");
    //       window.localStorage.setItem("token", data.data);
    //       window.localStorage.setItem("loggedIn", true);

    //       window.location.href = "./userDetails";
    //     }
    //   });
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>

          <div className="mb-3  user-input">
            <label>Email</label>
            <input
              type="text"
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
              SIGN IN
            </button>
          </div>

        </form>
        <div className="NleHE1">
          <div className="rEVZJ2"></div>
          <span className="EMof35">or</span>
          <div className="rEVZJ2"></div>
        </div>
        <div className="sign-in-options">
          <button>
            <img src="/fb.png" alt="" />
            Facebook
          </button>
          <button>
            <img src="/gg.png" alt="" />
            Google
          </button>
        </div>
        <p className="forgot-password text-right">
          Dont't have an account? <a href="/sign-up">Sign Up</a>
        </p>
      </div>
    </div>
  );
}