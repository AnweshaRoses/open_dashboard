import React from "react";
import "./signIn.css";
// import Google from "../../assets/icons/google.svg";
import Apple from "../../components/icons/apple.svg";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";

function SignIn() {
    const navigate = useNavigate();
  return (
    <>
      <div id="left-container">
        <h1 className="company-name">Board.</h1>
      </div>

      <div id="right-container">
        <h3 className="sign-in-text">Sign In</h3>
        <p className="sign-in-account-text">Sign in to your account</p>
        <div className="sign-in-menue">

        <div className="rectangle-1  ">
          <GoogleOAuthProvider  className="btn-1" clientId="544166757740-f0445fl0l2pdhruuspsbe8c5m90089ta.apps.googleusercontent.com">

          <GoogleLogin
  onSuccess={credentialResponse => {
    navigate('/home');
  }}
  onError={() => {
    console.log('Login Failed');
  }}/>
          
            </GoogleOAuthProvider>
          
        </div>

        <div className="rectangle-2">
          <button className="btn-2">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img className="apple-icon" src={Apple} />
            <p className="sign-in-apple">Sign in with Apple</p>
          </button>
        </div>
        </div>


        <div className="card">
          <form action="submit">
            <label for="email" className="email-heading">
              Email address
            </label>
            <input
              type="email"
              id="email-text-box"
              name="email"
              value="johndoe@gmail.com"
            ></input>
            <label for="password" className="password-heading">
              Password
            </label>
            <input
              type="password"
              id="password-text-box"
              name="password"
              value="lorem"
            ></input>
          </form>

          <a className="forgot-password-link-text" href="/">
            Forgot Password?
          </a>
          <button className="btn-3">
            <p className="sign-in-text-button">
              <Link className="sign-in-text-link" to="/home">
                {" "}
                Sign In
              </Link>
            </p>
          </button>
        </div>

        <div className="account">
          <p className="no-account-text">Don't have an account?</p>
          <a href="/" className="register-link">
            Register here
          </a>
        </div>
      </div>
    </>
  );
}

export default SignIn;
