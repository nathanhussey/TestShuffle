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
          md={20}
          lg={20}
          xl={20}
          className="bg-light-blue pa3 mt2 br3"
        >
          <h1>{questions}</h1>
          <Row type="flex" justify="center" align="middle">
            <Col
              xs={24}
              sm={24}
              md={20}
              lg={20}
              xl={20}
              className="bg-light-blue pa3"
            >
              <AnswerList answers={answers} />
            </Col>
          </Row>
          <Row type="flex" justify="center" align="middle">
            <Col xs={24} sm={24} md={20} lg={20} xl={20}>
              <AddAnswer />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default MCCard;
