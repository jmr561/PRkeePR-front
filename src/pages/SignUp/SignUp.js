import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./SignUp.scss";

const SignUp = ({ setDisplayLogInModal, setUser }) => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setDisplayLogInModal(false);
  }, [setDisplayLogInModal]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const validEmailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!username) {
        setErrorMessage("Please enter a username");
      } else if (!firstName) {
        setErrorMessage("Please enter your first name");
      } else if (!lastName) {
        setErrorMessage("Please enter your last name");
      } else if (!email.match(validEmailRegex)) {
        setErrorMessage("Please enter a valid e-mail address");
      } else if (!password) {
        setErrorMessage("Please enter a password (of at least 4 characters)");
      } else if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match");
      } else {
        const res = await axios.post(
          "https://prkeepr-backend.herokuapp.com/signup",
          {
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
          }
        );

        if (res.data.token) {
          console.log(res.data.token);
          console.log(res.data._id);

          setUser(res.data.token, res.data._id);
          navigate("/pr-board");
        }
      }
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
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
                setErrorMessage("");
                setUsername(event.target.value);
              }}
            />
            <div className="form-name-row">
              <input
                type="text"
                placeholder="First name"
                onChange={(event) => {
                  setErrorMessage("");
                  setFirstName(event.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Last name"
                onChange={(event) => {
                  setErrorMessage("");
                  setLastName(event.target.value);
                }}
              />
            </div>
            <input
              type="text"
              placeholder="E-mail address"
              onChange={(event) => {
                setErrorMessage("");
                setEmail(event.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setErrorMessage("");
                setPassword(event.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Confirm password"
              onChange={(event) => {
                setErrorMessage("");
                setConfirmPassword(event.target.value);
              }}
            />
            <input
              type="submit"
              value="Sign Up"
              className="signup-submit-btn"
            />
          </form>
          <span className="error-msg">{errorMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
