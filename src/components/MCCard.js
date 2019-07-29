import React, { useState } from "react";
import { Row, Col, Button, Divider } from "antd";
import AnswerList from "./AnswerList";
import AddAnswer from "./AddAnswer";

const MCCard = ({ questions, answers }) => {
  return (
    <div>
      <Row type="flex" justify="center" align="middle">
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={6}
          className="bg-light-blue pa3 mt2"
        >
          <h1>{questions}</h1>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="middle">
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={6}
          className="bg-light-blue pa3"
        >
          <AnswerList answers={answers} />
        </Col>
      </Row>
      <Row type="flex" justify="center" align="middle">
        <Col xs={24} sm={24} md={12} lg={12} xl={6}>
          <AddAnswer />
        </Col>
      </Row>
    </div>
  );
};
export default MCCard;
