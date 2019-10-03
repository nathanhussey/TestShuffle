/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import { useState } from "react";
import "./Nav.css";
import logo from "../images/test-shuffle-logo.png";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    console.log("clicked");
    switch (showMenu) {
      case false:
        setShowMenu(true);
        break;
      case true:
        setShowMenu(false);
        break;
      default:
        console.log("error with toggle");
    }
  };
  console.log(showMenu);
  let toggleMenu;
  if (showMenu === true) {
    toggleMenu = (
      <div className="mobile-menu">
        <Link className="mobile-menu-link" to="/signup">
          Sign Up
        </Link>
        <Link className="mobile-menu-link" to="/login">
          Log In
        </Link>
      </div>
    );
  } else {
  }
  return (
    <div>
      <div className="nav-margins-mobile">
        <Link to="/">
          <img src={logo} className="logo"></img>
        </Link>
        <label onClick={handleToggleMenu}>&#9776;</label>
      </div>
      {toggleMenu}
      <div className=" nav-margins">
        <div>
          <Link to="/">
            <img src={logo} className="logo"></img>
          </Link>
        </div>

        <div>
          <Button type="primary" className="">
            <Link to="/signup">Sign Up</Link>
          </Button>

          <Button type="link" className="">
            <Link to="/login">Log In</Link>
          </Button>
        </div>
      </div>
    </div>

    // eslint-disable-next-line no-tabs
  );
};
export default Nav;
