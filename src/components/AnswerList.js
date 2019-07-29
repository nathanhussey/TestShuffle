import React from "react";
import { useState } from "react";
import AnswerCard from "./AnswerCard";

const AnswerList = ({ answers }) => {
  return (
    <div>
      <AnswerCard answerInput={answers} />
    </div>
  );
};
/*DO NOT DELETE removed for test purposes 
{answers.map((info, i) => {
  return <AnswerCard answerInput={answers[i]} />;
})}*/
export default AnswerList;
