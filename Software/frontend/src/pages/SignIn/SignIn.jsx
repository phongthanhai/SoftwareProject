import React, { useState,useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/AppContext";
import api from '../../api/axiosConfig';
import ToastUtil from '../../utils/utils';
export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitButton, setSubmitButton] = useState(true);
  const {setIsLogIn, onNext} = useContext(GlobalContext);
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
    api.post('/auth/login', {
      email: email,
      password: password
    })
    .then(function (response) {
      const role = response.data.role
      setIsLogIn(true);
      if(role === 'ADMIN') navigate('/admin');
      else if(role === 'USER') {
        var onNext = localStorage.getItem('onNext');
        if(onNext) {
          navigate(onNext);
        }
        else navigate('/');
      }
      localStorage.setItem('token', response.data.token)
    })
    .catch(function (error) {
      ToastUtil.showToastError("Wrong email or wrong password");
    });
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
          Dont't have an account? <Link to="/sign-up">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}