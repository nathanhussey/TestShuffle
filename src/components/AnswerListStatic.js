import React from "react";
import { useState } from "react";
import AnswerCardStatic from "./AnswerCardStatic";

const AnswerListStatic = ({ answers }) => {
  return (
    <div>
      {answers.map((info, i) => {
        return (
          <AnswerCardStatic
            key={answers[i].id}
            answerInput={answers[i].answer}
          />
        );
      })}
    </div>
  );
};

export default AnswerListStatic;
