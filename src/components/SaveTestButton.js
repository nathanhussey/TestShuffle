import React from "react";
import { Row, Col, Button, Divider } from "antd";

const SaveTestButton = ({ changeSaveTest }) => {
  return (
    <Button
      type="primary"
      size="large"
      className="f4 lh-copy ma2"
      onClick={changeSaveTest}
    >
      Save Test
    </Button>
  );
};

export default SaveTestButton;
