import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateTestCard = () => {
  return (
    <Link to="/testcard">
      <div className="dib grow bg-light-blue pa3 ma2 br3 shadow-5">
        Create new Test
      </div>
    </Link>
  );
};
export default CreateTestCard;
