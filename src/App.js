import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import SignUp from "./pages/SignUp/SignUp.js";
import Record from "./pages/Record/Record.js";
import PRBoard from "./pages/PRBoard/PRBoard.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import "./App.scss";

function App() {
  const [token, setToken] = useState(null);
  const [displayLogInModal, setDisplayLogInModal] = useState(false);

  return (
    <Router>
      <Header
        token={token}
        setDisplayLogInModal={setDisplayLogInModal}
        displayLogInModal={displayLogInModal}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={
            <SignUp
              setDisplayLogInModal={setDisplayLogInModal}
              displayLogInModal={displayLogInModal}
            />
          }
        />
        <Route
          path="/pr-board/"
          element={
            <PRBoard
              token={token}
              setDisplayLogInModal={setDisplayLogInModal}
              displayLogInModal={displayLogInModal}
            />
          }
        />
        <Route
          path="/record/"
          element={
            <Record
              token={token}
              setDisplayLogInModal={setDisplayLogInModal}
              displayLogInModal={displayLogInModal}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
