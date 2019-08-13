import React from "react";
import { useState } from "react";
import AnswerCard from "./AnswerCard";

const AnswerList = ({
  answers,
  updateComp,
  isUpdateClicked,
  handleDeleteAns
}) => {
  return (
    <div>
      {answers.map((info, i) => {
        return (
          <AnswerCard
            key={answers[i].id}
            ansId={answers[i].id}
            isChecked={answers[i].checked}
            answerInput={answers[i].answer}
            updateComp={updateComp}
            isUpdateClicked={isUpdateClicked}
            handleDeleteAns={handleDeleteAns}
          />
        );
      })}
    </div>
  );
};

export default AnswerList;
