import React from "react";
import "../styles/About.css";
import image from "../images/character.png";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"

const About = () => {
  return (
    <>
      <div className="about-container">

        <div className="info">
          <h1 className="about-header">Hi, <br /> I am Bandhan</h1>
          <h3 className="mid-info">A front-end web developer and designer</h3>

          <p className="justify-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            quis unde eos temporibus omnis reprehenderit, labore eveniet
            dignissimos? Similique magnam reprehenderit tempore inventore,
            blanditiis adipisci fugit maxime debitis veniam enim! Rem
            exercitationem labore aspernatur molestias vel consequatur, quam
            fugit iusto. Lorem ipsum dolor sit amet?
          </p>
          <div className="icon-grp">

         <a className="icon gh" target={"_blank"} href="https://github.com/programmingwithbandhan/"> <FaGithub/> </a>
         <a className="icon fb" target={"_blank"} href="https://facebook.com/bandhanpokhrel/"> <FaFacebook/></a>
         <a className="icon ig" target={"_blank"} href="https://instagram.com/itz_bandhan/"> <FaInstagram/></a>
         <a className="icon tw" target={"_blank"} href="https://twitter.com/itzbandhan/"> <FaTwitter /></a>

          </div>

        </div>
        <div className="image-grp">
          <img src={image} alt="image" className="about-image" />
        </div>

      </div>
    </>
  );
};

export default About;
