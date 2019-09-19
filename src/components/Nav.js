/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import "./Nav.css";
import logo from "../images/test-shuffle-logo.png";

const Nav = () => {
  return (
    <div>
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