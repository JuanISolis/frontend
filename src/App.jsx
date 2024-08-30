import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Istec from "./components/Istec.jsx";
import HeaderApp from "./components/HeaderApp.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderApp />
        <Routes>
          <Route path="/istec" element={<Istec />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
