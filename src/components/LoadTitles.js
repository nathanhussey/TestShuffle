import React from "react";
import { useState } from "react";
import TitleCard from "./TitleCard";
const LoadTitles = ({ titles }) => {
  return (
    <div>
      {titles.map((info, i) => {
        return (
          <TitleCard
            key={titles[i]._id}
            testCardId={titles[i]._id}
            title={titles[i].testTitle}
          />
        );
      })}
    </div>
  );
};

export default LoadTitles;
