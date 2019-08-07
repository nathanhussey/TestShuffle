import React, { useState } from "react";
import { Row, Col, Button, Divider } from "antd";
import AnswerList from "./AnswerList";
import AddAnswer from "./AddAnswer";
import QuestionCard from "./QuestionCard";
import DeleteCard from "./DeleteCard";
import Item from "antd/lib/list/Item";

//add edit to MCCard
//give question it own updatehandler

const MCCard = ({ questions, answers }) => {
  const [questionsComp, setQuestionsComp] = useState(questions);
  const [answersComp, setAnswersComp] = useState(answers);
  const [isUpdateClicked, setIsUpdateClicked] = useState(false);
  const [deleteCard, setDeleteCard] = useState("");

  const handleUpdate = (input, id) => {
    answersComp.map((item, i) => {
      if (item.id == id) {
        return (item.answer = input);
      }
    });
    setAnswersComp(answersComp);

    setIsUpdateClicked(false);
  };

  const handleAddAnswer = () => {
    const rndNumfunc = () => {
      let rndNumId = Math.floor(Math.random() * 100);
      return rndNumId;
    };
    const createNewId = () => {
      let r = rndNumfunc();
      let match = false;
      answersComp.forEach(item => {
        console.log(r);
        if (item.id === r) {
          match = true;
        }
        return match;
      });
      let isThereMatch = [match, r];
      return isThereMatch;
    };
    let newIdFunc = () => {
      const newAns = [{ id: null, answer: "" }];
      let runCreateNewId = createNewId();
      if (runCreateNewId[0]) {
        newIdFunc();
      } else {
        newAns[0].id = runCreateNewId[1];
        setAnswersComp(answersComp.concat(newAns));
      }
    };
    newIdFunc();
  };

  const handleUpdateButton = () => {
    setIsUpdateClicked(true);
  };
  const handleDelete = () => {
    setDeleteCard("DELETE");
  };
  if (deleteCard === "DELETE") {
    return <DeleteCard />;
  } else {
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
            <QuestionCard
              questionInput={questions}
              isUpdateClicked={isUpdateClicked}
              updateComp={handleUpdate}
            />
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
                <Button onClick={handleDelete}>Delete Question</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
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
