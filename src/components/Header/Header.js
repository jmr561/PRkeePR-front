import { Link } from "react-router-dom";
import "./Header.scss";

const Header = ({ token }) => {
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
              <div className="header-item">Log In</div>
            </>
          ) : (
            <>
              <Link to="/" className="header-item">
                PRs
              </Link>
              <div className="header-item">Log Out</div>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
