import React from "react";
import { useState, useEffect } from "react";

const QuestionCard = ({ questionInput, updateComp, isUpdateClicked }) => {
  const [question, setQuestion] = useState(questionInput);

  useEffect(() => {
    if (isUpdateClicked) {
      console.log("it woks");
      updateComp(question);
    }
  }, [isUpdateClicked]);

  const handleChange = e => {
    setQuestion(e.target.value);
  };
  return (
    <div>
      <form>
        <label>
          <textarea
            type="text"
            value={question}
            onChange={handleChange}
            cols="100"
            rows="2"
          />
        </label>
      </form>
    </div>
  );
};

export default QuestionCard;
