import React from "react";
import { Row, Col, Button, Divider } from "antd";
import { useState, useEffect } from "react";

const AnswerCardStatic = ({ answerInput }) => {
  return (
    <div>
      <Row type="flex" justify="start" align="middle">
        <Col xs={24} sm={24} md={24} lg={24} xl={24} className=" pa1">
          {answerInput}
        </Col>
      </Row>
    </div>
  );
};

export default AnswerCardStatic;
