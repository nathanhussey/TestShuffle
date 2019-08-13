import React, { useState, useEffect } from "react";
import { Row, Col, Button, Divider } from "antd";
import AnswerList from "./AnswerList";
import AddAnswer from "./AddAnswer";
import QuestionCard from "./QuestionCard";
import DeleteCard from "./DeleteCard";
import AnswerListStatic from "./AnswerListStatic";
import Item from "antd/lib/list/Item";

const MCCard = ({
  questions,
  answers,
  mcId,
  handleDeleteMCCard,
  handleSaveTest,
  isTestSaved
}) => {
  const [questionsComp, setQuestionsComp] = useState(questions);
  const [answersComp, setAnswersComp] = useState(answers);
  const [isUpdateClicked, setIsUpdateClicked] = useState(false);
  const [MCCardState, setMCCardState] = useState("");

  useEffect(() => {
    if (isTestSaved === true) {
      handleSaveTest(mcId, questionsComp, answersComp);
    }
  }, [isTestSaved]);

  const handleUpdateAns = (input, checkedInput, id) => {
    const newArr = answersComp.map((item, i) => {
      if (item.id == id) {
        item.answer = input;
        item.checked = checkedInput;
        return item;
      } else {
        return item;
      }
    });
    setAnswersComp(newArr);
    setIsUpdateClicked(false);
    setMCCardState("");
  };

  const handleUpdateQues = input => {
    setQuestionsComp(input);
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
      const newAns = [{ id: null, answer: "", checked: false }];
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
    setMCCardState("DELETING");
  };

  const handleEdit = () => {
    setMCCardState("EDITMODE");
  };

  const handleDeleteAns = ansId => {
    answersComp.map((ans, i) => {
      if (ans.id === ansId) {
        answersComp.splice(i, 1);
      }
    });
    setAnswersComp([...answersComp]);
  };

  const goBack = () => {
    setMCCardState("");
  };
  if (MCCardState === "DELETING") {
    return (
      <DeleteCard
        mcId={mcId}
        handleDeleteMCCard={handleDeleteMCCard}
        goBack={goBack}
      />
    );
  } else if (MCCardState === "EDITMODE") {
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
            <Row>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
                className="bg-light-blue mt2 br3"
              >
                <QuestionCard
                  questionInput={questionsComp}
                  isUpdateClicked={isUpdateClicked}
                  updateComp={handleUpdateQues}
                />
              </Col>
            </Row>
            <Row type="flex" justify="start" align="middle">
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
                className="bg-light-blue"
              >
                <AnswerList
                  answers={answersComp}
                  updateComp={handleUpdateAns}
                  isUpdateClicked={isUpdateClicked}
                  handleDeleteAns={handleDeleteAns}
                />
              </Col>
            </Row>
            <Row type="flex" justify="start" align="middle">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <AddAnswer addAns={handleAddAnswer} />
              </Col>
            </Row>
            <Row type="flex" justify="start" align="middle">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Button onClick={handleUpdateButton}>Update</Button>
                <Button onClick={handleDelete}>Delete Question</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  } else {
    return (
      <div className=" link  hide-child br2 cover">
        <Row type="flex" justify="center" align="middle">
          <Col
            xs={24}
            sm={24}
            md={20}
            lg={20}
            xl={20}
            className="bg-light-blue pa3 mt2 br3"
          >
            <Row>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
                className="bg-light-blue mt2 mb4 br3"
              >
                {questionsComp}
              </Col>
            </Row>
            <Row type="flex" justify="start" align="middle">
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
                className="bg-light-blue"
              >
                <AnswerListStatic answers={answersComp} />
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} offset={22}>
                <span className="child bg-black-40 " onClick={handleEdit}>
                  Edit
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
};

export default MCCard;
