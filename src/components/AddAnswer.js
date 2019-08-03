import React from "react";
import { Row, Col, Button, Divider } from "antd";
import { Link } from "react-router-dom";

const AddAnswer = ({ addAns }) => {
  return (
    <div>
      <Button
        onClick={addAns}
        type="primary"
        size="large"
        className="f4 lh-copy"
      >
        Add Additional Answer
      </Button>
    </div>
  );
};

export default AddAnswer;
