import React from "react";
import errorSvg from "../images/404.svg"
import "../styles/NoPage.css"
import Button from "../components/Button"
import { Link } from "react-router-dom";

const NoPage = () => {
  return <>
    <div className="div--404">
      <img src={errorSvg} alt="404 not found"  id="error-img"/>
      <h1 className="error-head">404, <span className="errormsg">The requested url was not found on this page</span></h1> <Button><Link to="/">Go Back</Link></Button>
    </div>
  </>;
};

export default NoPage;
