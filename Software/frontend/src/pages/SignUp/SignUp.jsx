import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import api from '../../api/axiosConfig'
import ToastUtil from "../../utils/utils.jsx";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  function handleEmailChange(event) {
    const newEmail = event.target.value;
    setEmail(newEmail);
  }

  function handlePasswordChange(event) {
    const newPassword = event.target.value;
    setPassword(newPassword);
  }

  function handleFirstNameChange(event) {
    const newFirstName = event.target.value;
    setFirstName(newFirstName);
  }

  function handleLastNameChange(event) {
    const newLastName = event.target.value;
    setLastName(newLastName);
  }

  function handleMobileChange(event) {
    const newMobile = event.target.value;
    setMobile(newMobile);
  }

  function handleGenderChange(event) {
    const newGender = event.target.value;
    setGender(newGender);
  }

  function handleSubmit(event) {
    event.preventDefault();
    api.post('/auth/signup', {
      firstName: firstName,
      lastName: lastName,
      mobile: mobile,
      email: email,
      password: password,
      gender: gender
    })
    .then(function (response) {
      navigate('/sign-in')
      ToastUtil.showToastSuccess("Sign Up successully")
    })
    .catch(function (error) {
      ToastUtil.showToastError("Please try again.");
    });
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <Row>
            <Col>
              <div className="mb-3 user-input">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              <div className="mb-3 user-input">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
            </Col>
            <Col>
              <div className="mb-3 user-input">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </div>

              <div className="mb-3 user-input">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </div>
              <div className="mb-3 user-input">
               
              <label>Mobile</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter Mobile"
                  value={mobile}
                  onChange={handleMobileChange}
                />
              </div>

              <div className="mb-3 user-input">
                <label>Gender</label>
                <select
                  className="form-control"
                  value={gender}
                  onChange={handleGenderChange}
                  style={{ padding: "10px", fontSize: "14px" }}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </Col>
          </Row>

          <div className="d-grid">
            <button
              type="submit"
              className="submit-btn"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <Link to="/sign-in">sign in?</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
