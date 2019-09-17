import React from "react";
import { Row, Col, Button, Divider } from "antd";

const UpdateTestDashButton = ({ changeSaveTest }) => {
  return (
    <Button
      type="primary"
      size="large"
      className="f4 lh-copy mr2"
      onClick={changeSaveTest}
    >
      Save & Exit To DashBoard
    </Button>
  );
};

export default UpdateTestDashButton;
