import React, { useState } from "react";
import { Row, Col, Button, Divider } from "antd";
import "../containers/testCard.css";

const DeleteCard = ({ mcId, handleDeleteMCCard, goBack }) => {
  return (
    <div>
      <Row
        type="flex"
        justify="center"
        align="middle"
        className="intruction-margins"
      >
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={24}
          className="shadow-1 pa3 mt3 br3"
        >
          <h1>Are you sure you want to delete?</h1>
          <Row>
            <Col xs={24} sm={24} md={20} lg={20} xl={20} className=" br3">
              <Button onClick={() => handleDeleteMCCard(mcId)}>
                Yes, Delete
              </Button>
              <Button onClick={goBack}>No, Go Back</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default DeleteCard;
