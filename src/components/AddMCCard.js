import React from "react";
import { Row, Col, Button, Divider } from "antd";
import { Link } from "react-router-dom";

const AddMCCard = ({ handleClick }) => {
  return (
    <button
      className="dib grow bg-light-blue pa3 br3 shadow-5 dark-blue"
      style={{ color: "white" }}
      onClick={handleClick}
    >
      Add Multiple Choice Question
    </button>
  );
};

export default AddMCCard;
