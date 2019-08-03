import React, { useState } from "react";
import { Row, Col, Button, Divider } from "antd";
import AnswerList from "./AnswerList";
import AddAnswer from "./AddAnswer";
import Item from "antd/lib/list/Item";

//add fix unique key for added answers
//add edit to MCCard

const MCCard = ({ questions, answers }) => {
  const [questionsComp, setQuestionsComp] = useState(questions);
  const [answersComp, setanswersComp] = useState(answers);
  const [isUpdateClicked, setIsUpdateClicked] = useState(false);

  const handleUpdate = (input, id) => {
    answersComp.map((item, i) => {
      if (item.id == id) {
        return (item.answer = input);
      }
    });
    console.log(answersComp);
    setanswersComp(answersComp);

    setIsUpdateClicked(false);
  };

  const handleAddAnswer = () => {
    const newAns = [{ id: null, answer: "" }];
    let newarr = answersComp.map((item, i) => {
      return item;
    });

    setanswersComp(answersComp.concat(newAns));
    console.log(answersComp.concat(newAns));
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
                answers={answersComp}
                updateComp={handleUpdate}
                isUpdateClicked={isUpdateClicked}
              />
            </Col>
          </Row>
          <Row type="flex" justify="center" align="middle">
            <Col xs={24} sm={24} md={20} lg={20} xl={20}>
              <AddAnswer addAns={handleAddAnswer} />
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
/*setanswersComp(ans => {
      const newarr = answersComp.map((item, i) => {
        if (item[i].id === id) {
          return (item[i].answer = input);
        } else {
          return item;
        }
      });
      return newarr;
    });*/
export default MCCard;
