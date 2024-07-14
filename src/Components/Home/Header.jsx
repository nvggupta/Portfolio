import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="px-3 py-2 text-bg-dark border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        <Link to='/' className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none text-3xl">𝕹𝖎𝖐𝖍𝖎𝖑 𝕲𝖚𝖕𝖙𝖆</Link>
         
          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li className="list">
            <Link className="nav-link text-white custom" to="/">Home</Link>
            </li>
            <li className="list">
            <Link className="nav-link text-white" to="/about">About</Link>
            </li>
            <li className="list">
             <Link className="nav-link text-white" to="/resume">Resume</Link>
            </li>
            <li className="list">
            <Link className="nav-link text-white" to="/project ">Projects</Link>
              
            </li>
            <li className="list">
              <a href="#" className="nav-link text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
