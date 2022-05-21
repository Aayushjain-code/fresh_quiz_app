import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./authentication.css";

const Login = () => {
  const { login, testlogin } = useAuth();

  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState({ isError: false, text: "" });
  const [toggleShowPassword, setToggleShowPassword] = useState(true);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setError({ isError: false, text: "" });
    }, 3000);
    return () => clearTimeout(timeOutId);
  }, [error]);

  const loginHandler = (e) => {
    e.preventDefault();
    if (!userDetails.email || !userDetails.password) {
      setError({ isError: true, text: "Please enter all the fields" });
    } else if (!userDetails.email.includes("@")) {
      setError({ isError: true, text: "Invalid Email-Id" });
    } else {
      login(userDetails);
      setUserDetails({ email: "", password: "" });
    }
  };

  return (
    <div>
      <div className="wrapper login-wrapper">
        <h2>Login</h2>
        <form>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your email"
              value={userDetails.email}
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
            ></input>
          </div>
          <div className="input-box">
            {toggleShowPassword ? (
              <i
                class="fas fa-eye icon"
                onClick={() => setToggleShowPassword(!toggleShowPassword)}
              ></i>
            ) : (
              <i
                class="fas fa-eye-slash icon"
                onClick={() => setToggleShowPassword(!toggleShowPassword)}
              ></i>
            )}

            <input
              type={toggleShowPassword ? "password" : "text"}
              placeholder="Create password"
              value={userDetails.password}
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
            ></input>
          </div>
          <div className="button" onClick={(e) => loginHandler(e)}>
            Login Now
          </div>
          <div
            className="button"
            onClick={() => {
              testlogin();
              console.log("hello");
              console.log("Cred:", userDetails);
            }}
          >
            Test Login
          </div>
          <div className="m1 btn btn-link">
            <h3>
              Not having an account? <Link to="/signup"> Signup now </Link>{" "}
            </h3>
            <h3>
              Go Back to Home Page <Link to="/"> Home Page </Link>{" "}
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
