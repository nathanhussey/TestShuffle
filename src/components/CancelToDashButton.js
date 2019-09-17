import React from "react";
import { Row, Col, Button, Divider } from "antd";

const CancelToDashButton = ({ handleCancelToDash }) => {
  return (
    <Button
      type="primary"
      size="large"
      className="f4 lh-copy mr2"
      onClick={handleCancelToDash}
    >
      Cancel
    </Button>
  );
};

export default CancelToDashButton;
