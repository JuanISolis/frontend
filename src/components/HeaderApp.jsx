import React from "react";
import puce2Logo from "../assets/puce.png";
import puceLogo from "../assets/logo-puce.png";
import logo from "../assets/logo.jpg";
import istecLogo from "../assets/logo-istec.png";
import "../App.css";
import { Link } from "react-router-dom";

const HeaderApp = () => {
  return (
    <>
      <header className="App-header">
        <img src={logo} alt="Logo" className="header-logo" />
        <h1>MATRICULACIÓN</h1>
        <img src={puce2Logo} alt="PUCE Logo" className="header-logo" />
      </header>
      <section className="logo-section">
        <Link to="/istec">
          <img
            src={istecLogo}
            alt="ISTEC Logo"
            className="logo"
            style={{ cursor: "pointer", marginRight: "20px" }}
          />
        </Link>
        <img
          src={puceLogo}
          alt="PUCE Logo"
          className="logo"
          onClick={() => handleClick("PUCE")}
          style={{ cursor: "pointer", marginRight: "20px" }}
        />
      </section>
    </>
  );
};

export default HeaderApp;
