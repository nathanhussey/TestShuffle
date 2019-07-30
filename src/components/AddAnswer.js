import React from "react";
import { Row, Col, Button, Divider } from "antd";
import { Link } from "react-router-dom";
import ShowCardList from "./ShowCardList";

const AddAnswer = () => {
  return (
    <div>
      <Button type="primary" size="large" className="f4 lh-copy">
        Add Additional Answer
      </Button>
    </div>
  );
};

export default AddAnswer;
