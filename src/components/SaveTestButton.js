import React from "react";
import { Row, Col, Button, Divider } from "antd";

const SaveTestButton = ({ handleSave }) => {
  return (
    <Button
      type="primary"
      size="large"
      className="f4 lh-copy"
      onClick={handleSave}
    >
      Save Test & got to DashBoard
    </Button>
  );
};

export default SaveTestButton;
