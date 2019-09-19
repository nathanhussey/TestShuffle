import React from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import DemoTest from "./DemoTest";
import Nav from "../Nav";
import teacher from "../../images/undraw_teaching_f1cm.svg";
import student from "../../images/undraw_exams_g4ow.svg";
import "./Homepage.css";

const Homepage = () => (
  <div>
    <Nav />
    <Row type="flex" justify="center" align="middle" className="hero">
      <Col
        xs={24}
        sm={24}
        md={12}
        lg={8}
        xl={8}
        className="flex-item1 block-display"
      >
        <h1 className="f1 lh-title">Increase integrity in your classroom </h1>

        <h2 className="f4 lh-copy mb4">
          Easily create multiple versions of the same multiple choice test along
          with the corresponding answer key{" "}
        </h2>
        <Link to="/signup">
          <Button type="primary" size="large" className="f4 lh-copy mt3 mr2">
            Sign Up Free
          </Button>
        </Link>
        <Link to="/demotest">
          <Button type="primary" size="large" className="f4 lh-copy mt3">
            Try Demo
          </Button>
        </Link>
      </Col>
      <Col
        xs={24}
        sm={24}
        md={12}
        lg={8}
        xl={8}
        className="flex-item1 block-display"
      >
        <img className="image-teacher" src={teacher} />
      </Col>
    </Row>

    <Row
      type="flex"
      justify="center"
      align="middle"
      className="vh-75 text wave-image steps"
    >
      <div>
        <Col xs={24} sm={24} md={24} lg={8} xl={4} className="tc margins">
          <h1 className="mb4">
            <em>Step 1</em>{" "}
          </h1>
          <h1>Sign up to Testshuffler</h1>
          <h2>This way the tests you create can be saved for later </h2>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={4} className="tc margins">
          <h1 className="mb4">
            <em>Step 2</em>
          </h1>
          <h1> Create a Test</h1>
          <h2>Input the questions and answers to your multiple choice test </h2>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={4} className="tc margins">
          <h1 className="mb4">
            <em>Step 3</em>{" "}
          </h1>
          <h1>Shuffle & Download</h1>
          <h2>
            You are all finished! A pdf with the shuffled answers will be
            downloaded to your computer{" "}
          </h2>
        </Col>
      </div>
    </Row>

    <Row type="flex" justify="center" align="middle" className=" hero vh-75">
      <Col xs={24} sm={24} md={12} lg={8} xl={8} className="flex-item1">
        <h1 className="f1 lh-title ">
          Teachers care about the integrity of classroom testing results.{" "}
        </h1>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12} className="pa4">
        <img src={student} />
      </Col>
    </Row>
    <Row
      type="flex"
      justify="start"
      align="middle"
      className="background-color vh-25"
    >
      <Col span={24} className="pa3 tc">
        <h1 className="f3 lh-solid">
          {" "}
          " Our goal is to increase fairness in the classroom by decreasing
          incidents of cheating"{" "}
        </h1>
      </Col>
    </Row>
    <Row type="flex" justify="center" align="middle" className=" vh-100">
      <Col xs={24} sm={24} md={24} lg={24} xl={24} className=" tc">
        <h1 className="f1 lh-title">
          We Made Testshuffle For Teachers - Like You{" "}
        </h1>
        <Link to="/signup">
          <Button type="primary" size="large" className="f4 lh-copy ma3">
            Get Started
          </Button>
        </Link>
      </Col>
    </Row>
  </div>
);
export default Homepage;
