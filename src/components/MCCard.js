import React, { useState } from "react";
import { Row, Col, Button, Divider } from "antd";
import AnswerList from "./AnswerList";
import AddAnswer from "./AddAnswer";

//add update array in state in handleUpdate()
//add functionality to 'add additional Answer'
//add edit to MCCard

const MCCard = ({ questions, answers }) => {
  const [questionsComp, setQuestionsComp] = useState(questions);
  const [answersComp, setanswersComp] = useState([answers]);
  const [isUpdateClicked, setIsUpdateClicked] = useState(false);
  console.log(answersComp);
  const handleUpdate = (input, id) => {
    setanswersComp(ans => {
      const newarr = answersComp.map((item, i) => {
        if (item[i].id === id) {
          return (item[i].answer = input);
        } else {
          return item;
        }
      });
      return newarr;
    });
    setIsUpdateClicked(false);
  };

  const handleUpdateButton = () => {
    setIsUpdateClicked(true);
  };
  return (
    <div>
      <Row type="flex" justify="center" align="middle">
        <Col
          xs={24}
          sm={24}
          md={20}
          lg={20}
          xl={20}
          className="bg-light-blue pa3 mt2 br3"
        >
          <h1>{questions}</h1>
          <Row type="flex" justify="center" align="middle">
            <Col
              xs={24}
              sm={24}
              md={20}
              lg={20}
              xl={20}
              className="bg-light-blue pa3"
            >
              <AnswerList
                answers={answers}
                updateComp={handleUpdate}
                isUpdateClicked={isUpdateClicked}
              />
            </Col>
          </Row>
          <Row type="flex" justify="center" align="middle">
            <Col xs={24} sm={24} md={20} lg={20} xl={20}>
              <AddAnswer />
            </Col>
          </Row>
          <Row type="flex" justify="center" align="middle">
            <Col xs={24} sm={24} md={20} lg={20} xl={20}>
              <Button onClick={handleUpdateButton}>Update</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default MCCard;
