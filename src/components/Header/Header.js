import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogInModal from "../LogInModal/LogInModal.js";
import "./Header.scss";

const Header = ({ token, setDisplayLogInModal, displayLogInModal }) => {
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
              <div className="header-item">Log Out</div>
            </>
          )}
        </nav>
      </div>
      {displayLogInModal && (
        <LogInModal
          displayLogInModal={displayLogInModal}
          setDisplayLogInModal={setDisplayLogInModal}
          token={token}
        />
      )}
    </header>
  );
};

export default Header;
