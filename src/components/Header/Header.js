import { Link, useNavigate } from "react-router-dom";
import LogInModal from "../LogInModal/LogInModal.js";
import "./Header.scss";

const Header = ({
  token,
  setDisplayLogInModal,
  displayLogInModal,
  setUser,
}) => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="header-container">
        <Link to="/" className="logo">
          <span>PR</span>kee<span>pr</span>
        </Link>

        <nav>
          {!token ? (
            <>
              <Link to="/signup" className="header-item">
                Sign Up
              </Link>
              <div
                className="header-item"
                onClick={() => {
                  setDisplayLogInModal(true);
                }}
              >
                Log In
              </div>
            </>
          ) : (
            <>
              <Link to="/pr-board" className="header-item">
                PRs
              </Link>
              <div
                className="header-item"
                onClick={() => {
                  setUser(null, null);
                  navigate("/");
                }}
              >
                Log Out
              </div>
            </>
          )}
        </nav>
      </div>
      {displayLogInModal && (
        <LogInModal
          displayLogInModal={displayLogInModal}
          setDisplayLogInModal={setDisplayLogInModal}
          token={token}
          setUser={setUser}
        />
      )}
    </header>
  );
};

export default Header;
