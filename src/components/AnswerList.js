import React from "react";
import { useState } from "react";
import AnswerCard from "./AnswerCard";

const AnswerList = ({ answers, updateComp, isUpdateClicked }) => {
  return (
    <div>
      {answers.map((info, i) => {
        return (
          <AnswerCard
            key={answers[i].id}
            id={answers[i].id}
            answerInput={answers[i].answer}
            updateComp={updateComp}
            isUpdateClicked={isUpdateClicked}
          />
        );
      })}
    </div>
  );
};

export default AnswerList;
