import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import SignUp from "./pages/SignUp/SignUp.js";
import Record from "./pages/Record/Record.js";
import PRBoard from "./pages/PRBoard/PRBoard.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Cookies from "js-cookie";
import "./App.scss";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);
  const [displayLogInModal, setDisplayLogInModal] = useState(false);

  const setUser = (token, id) => {
    if (token) {
      // Gestion de cookie
      Cookies.set("userToken", token, { expires: 10 });
      Cookies.set("userID", id, { expires: 10 });
      setToken(token);
    } else {
      Cookies.remove("userToken");
      Cookies.remove("userId");
      setToken(null);
    }
    setToken(token);
  };

  return (
    <Router>
      <Header
        token={token}
        setDisplayLogInModal={setDisplayLogInModal}
        displayLogInModal={displayLogInModal}
        setUser={setUser}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={
            <SignUp
              setDisplayLogInModal={setDisplayLogInModal}
              setUser={setUser}
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
              setUser={setUser}
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
              setUser={setUser}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
