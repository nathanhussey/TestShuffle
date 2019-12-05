import React from "react";
import { useState, useEffect } from "react";

const QuestionCard = ({ questionInput, updateComp, isUpdateClicked }) => {
  const [question, setQuestion] = useState(questionInput);

  useEffect(() => {
    if (isUpdateClicked) {
      updateComp(question);
    }
  }, [isUpdateClicked]);

  const handleChange = e => {
    setQuestion(e.target.value);
  };
  return (
    <div>
      <textarea
        type="text"
        value={question}
        onChange={handleChange}
        cols="100"
        rows="2"
      />
    </div>
  );
};

export default QuestionCard;
