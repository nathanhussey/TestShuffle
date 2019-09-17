import React from "react";
import { Row, Col, Button, Divider } from "antd";

const ShuffleSaveButton = ({ shuffle }) => {
  return (
    <Button
      type="primary"
      size="large"
      className="f4 lh-copy mr2"
      onClick={shuffle}
    >
      Save, Shuffle & Download Test
    </Button>
  );
};

export default ShuffleSaveButton;
