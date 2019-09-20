import React from "react";
import { Row, Col, Button, Divider } from "antd";

const SaveTestButton = ({ changeSaveTest }) => {
  return (
    <Button
      type="primary"
      size="large"
      className="f4 lh-copy mr2 mt3"
      onClick={changeSaveTest}
    >
      Save Test & Go to Dashboard
    </Button>
  );
};

export default SaveTestButton;
