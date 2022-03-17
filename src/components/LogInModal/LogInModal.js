import { useState } from "react";
import { Link } from "react-router-dom";
import "./LogInModal.scss";

const LogInModal = ({ displayLogInModal, setDisplayLogInModal, token }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("TEST ERR");

  if (!displayLogInModal) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="modal-overlay"
      onClick={() => {
        setDisplayLogInModal(false);
      }}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className="username-div">
            <p className="login-label">Username</p>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => {
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
