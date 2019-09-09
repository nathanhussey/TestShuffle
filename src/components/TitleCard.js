import React from "react";
import { useState } from "react";

const TitleCard = ({ title }) => {
  return (
    <div className="dib grow bg-light-blue pa3 ma2 br3 shadow-5">{title}</div>
  );
};

export default TitleCard;
