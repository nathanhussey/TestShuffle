import React from "react";
import { Row, Col, Button, Divider } from "antd";

const ShuffleDownloadButton = ({ shuffle }) => {
  return (
    <Button
      type="primary"
      size="large"
      className="f4 lh-copy mr2"
      onClick={shuffle}
    >
      Shuffle & Download Test
    </Button>
  );
};

export default ShuffleDownloadButton;
