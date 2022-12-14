import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"
import Button from "../components/Button";
import heroImg from "../images/hero.svg"

const Home = () => {
  return (
    <>
      <div className="container">

        {/* title for the container */}
        <div className="header">
          <h1 className="header-title">Hi, I am <span className="userName">Bandhan</span></h1>
          <span className="header-desc">
            A <span className="psn">passionate</span> front-end web developer from
            <span className="desc-country"> Nepal</span>.
          </span>

    <div className="btn-link">
          <Button>
            <Link to="/project">Projects</Link>
          </Button>
          </div>


        </div>
        {/* title ends */}

        <div className="image-container">
          <img src={heroImg} alt="image" className="hero-image"/>
        </div>

      </div>
    </>
  );
};

export default Home;
