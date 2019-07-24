/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'antd';


const Nav = () => {

  return (
    <div >
      <Row type="flex" justify="start" className="bg-light-blue pa4">
        <Col span={2}>
          <Button type="primary">
            <Link to="/">Logo</Link>
          </Button>
        </Col>
        <Col span={2} offset={16}>
          <Button type="primary">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </Col>
        <Col span={2}>
          <Button type="link">
            <Link to="/dashboard">Dashboard</Link>
          </Button>
        </Col>
        <Col span={2}>
          <Button type="link">
            <Link to="/login">Log In</Link>
          </Button>
        </Col>
      </Row>
      <Row />

    </div>


  // eslint-disable-next-line no-tabs
  );

};
export default Nav;
