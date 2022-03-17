import { useState, useEffect } from "react";
import "./SignUp.scss";

const SignUp = ({ setDisplayLogInModal }) => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setDisplayLogInModal(false);
  }, [setDisplayLogInModal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-container">
      <div className="signup-sub-container">
        <div className="signup-framed-form">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <div className="form-name-row">
              <input
                type="text"
                placeholder="First name"
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Last name"
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
            </div>
            <input
              type="text"
              placeholder="E-mail address"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Confirm password"
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            />
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <input
                type="submit"
                value="Sign Up"
                className="signup-submit-btn"
              />
            )}
          </form>
          <span className="error-msg">{errorMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
