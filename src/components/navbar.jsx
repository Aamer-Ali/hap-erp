import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navBar navbar navbar-expand-lg navbar-dark ">
      <Link className=" navbar-brand" to="/">
        Hap-Erp
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">
            TeacherList <span className="sr-only"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
