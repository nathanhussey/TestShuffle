import React, { useState } from "react";
import { Row, Col, Button, Divider } from "antd";

const ConfirmDeletingTest = ({ handleDeleteTest, cancelDelete }) => {
  return (
    <div>
      <Row type="flex" justify="center" align="middle">
        <Col
          xs={24}
          sm={24}
          md={20}
          lg={20}
          xl={20}
          className="bg-light-blue pa3 mt2 br3"
        >
          <h1>
            Are you sure you want to delete this Test? Deleting is permanent.
          </h1>
          <Row>
            <Col xs={24} sm={24} md={20} lg={20} xl={20} className=" br3">
              <Button onClick={handleDeleteTest}>Yes,Delete Test</Button>
              <Button onClick={cancelDelete}>No, Go Back</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default ConfirmDeletingTest;
