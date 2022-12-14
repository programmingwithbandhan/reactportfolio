import React from "react";
import Home from "../pages/Home";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Button from "../components/Button";


const Navbar = () => {
  return (
    <>
      <nav>
        {/* nav links */}
        <h1>
            <Link to="/" className="nav-link">ItzBandhan</Link>
          </h1>
        <div className="nav-content">
        
          <ul>
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/blogs" className="nav-link">Blogs</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li>
              <Link to="/project" className="nav-link">Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>

        {/* button starts */}
        <div className="btn-group">
          <Button>Download CV</Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
