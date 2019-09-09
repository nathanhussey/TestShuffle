import React from "react";
import MCCard from "./MCCard";

const ShowCardList = ({
  testData,
  handleDeleteMCCard,
  handleSaveTest,
  isTestSaved
}) => {
  return (
    <div>
      {testData.map((info, i) => {
        return (
          <MCCard
            key={testData[i].mcId}
            mcId={testData[i].mcId}
            questions={testData[i].question}
            answers={testData[i].answers}
            handleDeleteMCCard={handleDeleteMCCard}
            isTestSaved={isTestSaved}
            handleSaveTest={handleSaveTest}
          />
        );
      })}
    </div>
  );
};

export default ShowCardList;
