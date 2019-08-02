import React from "react";
import { useState, useEffect } from "react";

const AnswerCard = ({ answerInput, updateComp, isUpdateClicked, id }) => {
  const [answer, setAnswer] = useState(answerInput);
  useEffect(() => {
    if (isUpdateClicked) {
      updateComp(answer, id);
      console.log("hello");
    }
  }, [isUpdateClicked]);

  const handleChange = e => {
    setAnswer(e.target.value);
  };
  return (
    <div>
      <form>
        <label>
          <textarea
            type="text"
            value={answer}
            onChange={handleChange}
            cols="100"
            rows="2"
          />
        </label>
      </form>
    </div>
  );
};

export default AnswerCard;
