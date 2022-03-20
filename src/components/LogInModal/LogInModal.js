import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LogInModal.scss";

const axios = require("axios");

const LogInModal = ({ displayLogInModal, setDisplayLogInModal, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  if (!displayLogInModal) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!username) {
        setErrorMessage("Please enter your username");
      } else if (!password) {
        setErrorMessage("Please enter your password");
      } else {
        const res = await axios.post(
          "https://prkeepr-backend.herokuapp.com/login",
          {
            username: username,
            password: password,
          }
        );

        if (res.data.token) {
          console.log(res.data.token);
          console.log(res.data._id);

          setUser(res.data.token, res.data._id);
          setDisplayLogInModal(false);
          navigate("/pr-board");
        }
      }
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={() => {
        setDisplayLogInModal(false);
      }}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="log-in-header">Log In</div>
        <form onSubmit={handleSubmit}>
          <div className="username-div">
            <p className="login-label">Username</p>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setErrorMessage("");
                setUsername(e.target.value);
              }}
            />
          </div>

          <div className="password-div">
            <p className="login-label">Password</p>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setErrorMessage("");
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="submit-div">
            <input type="submit" value="Submit" className="login-submit-btn" />
            <p className="error-msg">{errorMessage}</p>
          </div>
        </form>
        <Link to="/signup" className="signup-link">
          <div
            onClick={() => {
              setDisplayLogInModal(false);
            }}
          >
            Not yet a member?
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LogInModal;
