import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import SignUp from "./pages/SignUp/SignUp.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import "./App.scss";

function App() {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <Header token={token} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
