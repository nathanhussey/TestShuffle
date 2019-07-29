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
          Answer Chooses
          <input type="text" value={answer} onChange={handleChange} />
        </label>
      </form>
    </div>
  );
};

export default AnswerCard;
