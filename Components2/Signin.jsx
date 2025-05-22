import React, { useState } from "react";
import "./Signin.css";

const Signin = ({ isOpen, handleCloseForm }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleToggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className={`sign-in-modal ${isOpen ? "" : "hide"}`}>
      <div className="sign-in-form">
        <button className="btn" onClick={handleCloseForm}>
          ×
        </button>
        {isSignIn ? (
          <form>
            <h2>Sign In</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
          </form>
        ) : (
          <form>
            <h2>Sign Up</h2>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>Sign Up</button>
          </form>
        )}
        <p>
          {isSignIn ? (
            <span>
              Don't have an account?{" "}
              <a href="#" onClick={handleToggleForm}>
                Sign up
              </a>
            </span>
          ) : (
            <span>
              Already have an account?{" "}
              <a href="#" onClick={handleToggleForm}>
                Sign in
              </a>
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Signin;