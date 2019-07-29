import React from "react";
import MCCard from "./MCCard";

const ShowCardList = ({ testData }) => {
  return (
    <div>
      {testData.map((info, i) => {
        return (
          <MCCard
            key={testData[i].id}
            questions={testData[i].title}
            answers={testData[i].body}
          />
        );
      })}
    </div>
  );
};

export default ShowCardList;
