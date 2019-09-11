import React from "react";
import { Row, Col, Button, Divider } from "antd";

const UpdateTestDashButton = ({ changeSaveTest }) => {
  return (
    <Button
      type="primary"
      size="large"
      className="f4 lh-copy ma2"
      onClick={changeSaveTest}
    >
      Update & Exit To DashBoard
    </Button>
  );
};

export default UpdateTestDashButton;
