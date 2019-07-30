import React from "react";
import { useState } from "react";

const AnswerCard = ({ answerInput }) => {
  const [answer, setAnswer] = useState(answerInput);
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
