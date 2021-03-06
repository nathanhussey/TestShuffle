import React from "react";
import { Row, Col, Button, Divider } from "antd";

const DeleteTest = ({ confirmDeletingTest }) => {
  return (
    <Button
      type="primary"
      size="large"
      className="f4 lh-copy mr2 mt3"
      onClick={confirmDeletingTest}
    >
      Delete Test
    </Button>
  );
};

export default DeleteTest;
