import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/Footer";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.substring(1); // removes "/" from "/about" → "about"
    if (!sectionId || sectionId === "") return;

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToSection />
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
