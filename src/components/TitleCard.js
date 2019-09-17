import React from "react";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";

const TitleCard = ({ title, testCardId }) => {
  return (
    <Link to={`/testcard/${testCardId}`}>
      <div
        className="dib grow pa3 ma2 br3 shadow-5"
        style={{ backgroundColor: "#1890ff", color: "white" }}
      >
        {title}
      </div>
    </Link>
  );
};

export default TitleCard;
