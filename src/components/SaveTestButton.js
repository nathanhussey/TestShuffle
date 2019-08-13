import React from "react";
import { Row, Col, Button, Divider } from "antd";

const SaveTestButton = ({ toggleIsTestSaved }) => {
  return (
    <Button
      type="primary"
      size="large"
      className="f4 lh-copy"
      onClick={toggleIsTestSaved}
    >
      Save Test
    </Button>
  );
};

export default SaveTestButton;
