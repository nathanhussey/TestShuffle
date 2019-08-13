import React from "react";
import { Row, Col, Button, Divider, Checkbox, Icon } from "antd";
import { useState, useEffect } from "react";

const AnswerCard = ({
  answerInput,
  updateComp,
  isChecked,
  isUpdateClicked,
  ansId,
  handleDeleteAns
}) => {
  const [answer, setAnswer] = useState(answerInput);
  const [isBoxChecked, setIsBoxChecked] = useState(isChecked);

  useEffect(() => {
    if (isUpdateClicked) {
      updateComp(answer, isBoxChecked, ansId);
      console.log(isBoxChecked);
    }
  }, [isUpdateClicked]);

  const handleChange = e => {
    setAnswer(e.target.value);
  };
  const handleBoxClick = e => {
    setIsBoxChecked(e.target.checked);
  };
  return (
    <div>
      <Row type="flex" justify="start" align="middle">
        <Col className="ma2">
          <Checkbox
            defaultChecked={isBoxChecked}
            onChange={handleBoxClick}
          ></Checkbox>
        </Col>
        <Col>
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
        </Col>
        <Col className="ma2">
          <Icon
            onClick={() => handleDeleteAns(ansId)}
            type="close"
            style={{ fontSize: "18px" }}
            className="grow"
          />
        </Col>
      </Row>
    </div>
  );
};

export default AnswerCard;
