import React from "react";
import { Row, Col, Button, Divider } from "antd";
import { Link } from "react-router-dom";

const AddMCCard = ({ handleClick }) => {
  console.log("it works");
  return (
    <div>
      <Row type="flex" justify="center" align="middle">
        <Col xs={24} sm={24} md={12} lg={12} xl={6} className="pa3 mt2">
          <Button
            onClick={handleClick}
            type="primary"
            size="large"
            className="f4 lh-copy"
          >
            Add Multiple Choice Question
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default AddMCCard;
