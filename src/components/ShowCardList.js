import React from "react";
import MCCard from "./MCCard";

const ShowCardList = ({ testData, handleDeleteMCCard }) => {
  return (
    <div>
      {testData.map((info, i) => {
        return (
          <MCCard
            key={testData[i].id}
            mcId={testData[i].id}
            questions={testData[i].question}
            answers={testData[i].answers}
            handleDeleteMCCard={handleDeleteMCCard}
          />
        );
      })}
    </div>
  );
};

export default ShowCardList;
