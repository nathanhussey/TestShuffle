import React, { useState, useEffect } from "react";
import { Row, Col, Button, Divider } from "antd";
import { Link, Redirect } from "react-router-dom";
import ShowCardList from "./ShowCardList";
import AddMCCard from "./AddMCCard";
import UpdateTestDashButton from "./UpdateTestDashButton";
import ShuffleSaveButton from "./ShuffleSaveButton";
import uuid from "uuid";
import "array.prototype.move";
import * as jsPDF from "jspdf";
import axios from "axios";

const UpdateTestCard = ({ match }) => {
  const [testTitle, setTestTitle] = useState("");
  const [testData, setTestData] = useState([]);
  const [isTestSaved, setIsTestSaved] = useState(false);
  const [shuffledData, setShuffledData] = useState([]);
  const [didClickShuffle, setDidClickShuffle] = useState(false);
  const [didClickUpdateDash, setDidClickUpdateDash] = useState(false);
  const [editTitle, setEditTitle] = useState(false);
  const [redirect, setRedirect] = useState(false);
  let tempTest = [];
  useEffect(() => {
    console.log(match);
    axios
      .get(`http://localhost:3001/testcard/edit/${match.params.id}`, {
        headers: {
          Authorization: "Bearer " + getToken()
        }
      })
      .then(
        response => {
          setTestTitle(response.data.testTitle);
          setTestData(response.data.testCard);
        },
        err => {
          console.log(err.response);
        }
      );
  }, []);

  useEffect(() => {
    if (didClickShuffle === true) {
      console.log(testData);
      axios
        .put(
          `http://localhost:3001/testcard/edit/${match.params.id}/saved`,
          {
            testTitle: testTitle,
            testCard: testData
          },
          {
            headers: {
              Authorization: "Bearer " + getToken()
            }
          }
        )
        .then(response => {
          console.log(response);
        })
        .then(() => {
          shuffledTestData();
        });
    }
  }, [testData]);

  useEffect(() => {
    if (didClickUpdateDash === true) {
      axios
        .put(
          `http://localhost:3001/testcard/edit/${match.params.id}/saved`,
          {
            testTitle: testTitle,
            testCard: testData
          },
          {
            headers: {
              Authorization: "Bearer " + getToken()
            }
          }
        )
        .then(response => {
          console.log(response);
        })
        .then(setRedirect(true));
    }
  }, [testData]);

  const getToken = () => {
    return localStorage.getItem("token");
  };
  const handleAddMCCard = () => {
    const newMCCardId = [
      {
        userId: 1,
        mcId: null,
        question: "",
        answers: [{ id: null, answer: "", checked: false }]
      }
    ];
    newMCCardId[0].mcId = uuid.v4();
    newMCCardId[0].answers[0].id = uuid.v4();
    setTestData(testData.concat(newMCCardId));
  };

  const handleDeleteMCCard = mcId => {
    testData.map((card, i) => {
      if (card.mcId === mcId) {
        testData.splice(i, 1);
      }
    });
    console.log(testData);
    setTestData([...testData]);
  };

  const changeSaveTest = () => {
    setIsTestSaved(true);
    setDidClickUpdateDash(true);
  };

  const handleSaveTest = (mcId, newQuestion, newAnswers) => {
    let newObj = { mcId: mcId, question: newQuestion, answers: newAnswers };
    tempTest.push(newObj);
    setTestData(tempTest);
    setIsTestSaved(false);
  };

  const shuffledTestData = () => {
    const newShuffledArr = testData.map((mcQ, i) => {
      let letters = ["a)", "b)", "c)", "d)", "e)"];

      let addLetter = mcQ.answers.map(element => {
        let randfunc = () => {
          if (mcQ.answers.length < letters.length) {
            letters.splice(mcQ.answers.length);
            let randomNum = Math.floor(Math.random() * letters.length);

            return randomNum;
          } else {
            let randomNum = Math.floor(Math.random() * letters.length);

            return randomNum;
          }
        };
        let createdRandNum = randfunc();
        element = { ...element, choiceLetter: letters[createdRandNum] };
        element.metadata = { ...element.metadata, type: "closed" };
        letters.splice(createdRandNum, 1);

        return element;
      });
      mcQ = { ...mcQ, answers: addLetter };
      return mcQ;
    });

    //sorting answers based on letter assigned to it
    const sortedChoiceLetters = newShuffledArr.map((mcQ, i) => {
      let newAnswerArr = [];

      for (let i = 0; i < mcQ.answers.length; i++) {
        newAnswerArr.push("null");
      }
      console.log("check");
      mcQ.answers.forEach((element, e) => {
        switch (element.choiceLetter) {
          case "a)":
            return newAnswerArr.splice(0, 1, element);

          case "b)":
            return newAnswerArr.splice(1, 1, element);

          case "c)":
            return newAnswerArr.splice(2, 1, element);

          case "d)":
            return newAnswerArr.splice(3, 1, element);

          case "e)":
            return newAnswerArr.splice(4, 1, element);

          default:
            console.log("what went wrong");
        }
      });
      mcQ = { ...mcQ, answers: newAnswerArr };
      return mcQ;
    });

    // creating answer sheet
    let ansSheet = [];
    sortedChoiceLetters.forEach((mcQ, i) => {
      let questionNumber = i + 1;
      mcQ.quesNum = `${questionNumber}.`;
      mcQ.answers.forEach((item, i) => {
        if (item.checked === true) {
          ansSheet.push(`${mcQ.quesNum} ${item.choiceLetter}`);
        } else {
          return;
        }
      });
    });
    console.log(sortedChoiceLetters);

    //start building pdf
    var doc = new jsPDF();

    let x = 10;
    let y = 10;
    sortedChoiceLetters.forEach(element => {
      y += 10;
      doc.text(element.quesNum, x, y);
      x += 7;
      doc.text(element.question, x, y);
      y += 10;
      x -= 7;

      element.answers.forEach(item => {
        doc.text(item.choiceLetter, x, y);
        x += 10;
        doc.text(item.answer, x, y);
        y += 10;
        x -= 10;
      });
    });
    console.log(ansSheet);
    doc.addPage();
    y = 10;
    x = 10;
    doc.text("Answer sheet", x, y);
    y += 10;
    ansSheet.forEach(element => {
      doc.text(element, x, y);
      y += 10;
    });

    doc.save("test.pdf");
  };

  const saveTestThanShuffle = () => {
    setIsTestSaved(true);
    setDidClickShuffle(true);
  };

  const handleEditTitle = () => {
    setEditTitle(true);
  };

  const handleTitleChange = e => {
    setTestTitle(e.target.value);
  };

  const handleSaveTitle = () => {
    setEditTitle(false);
  };

  if (redirect) {
    return <Redirect to="/dashboard" />;
  }

  console.log("update test Component");
  let titleContent;
  if (editTitle) {
    titleContent = (
      <div>
        <div className="flex">
          <div className=" w-100 tc pa3 mr2">
            <form>
              <label>
                <textarea
                  type="text"
                  value={testTitle}
                  onChange={handleTitleChange}
                  cols="100"
                  rows="2"
                />
              </label>
            </form>
            <Button
              onClick={handleSaveTitle}
              type="primary"
              size="large"
              className="f4 lh-copy"
            >
              Update title
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    titleContent = (
      <div className="flex">
        <div className=" w-100 tc pa3 mr2">
          <h1>{testTitle}</h1>
          <span className="child bg-black-40 " onClick={handleEditTitle}>
            Edit title
          </span>
        </div>
      </div>
    );
  }
  console.log(testData);
  return (
    <div>
      {titleContent}
      <ShowCardList
        testData={testData}
        handleDeleteMCCard={handleDeleteMCCard}
        isTestSaved={isTestSaved}
        handleSaveTest={handleSaveTest}
      />
      <AddMCCard handleClick={handleAddMCCard} />
      <UpdateTestDashButton changeSaveTest={changeSaveTest} />
      <ShuffleSaveButton shuffle={saveTestThanShuffle} />
    </div>
  );
};

export default UpdateTestCard;
/*const [fetchTest, setFetchTest] = useState([
    {
      userId: 1,
      mcId: 1,
      question:
        "sunt aut facere repellat provident wccaecati optio reprehenderit?",
      answers: [
        {
          id: 424,
          answer: "quia et suscipit",
          checked: false
        },
        {
          id: 133,
          answer: "um est autem sunt rem eveniet archi",
          checked: true
        },
        {
          id: 4321,
          answer: "quio",
          checked: false
        },
        {
          id: 4134,
          answer: "quia et suscicto",
          checked: false
        },
        {
          id: 41114,
          answer: "quia et suo",
          checked: false
        }
      ]
    },
    {
      userId: 1,
      mcId: 2,
      question: "qui est esse?",
      answers: [
        {
          id: 652,
          answer: "est r",
          checked: true
        },
        {
          id: 41984,
          answer: "quia et suscip",
          checked: false
        },
        {
          id: 459034,
          answer: "quia et suscip",
          checked: false
        },
        {
          id: 41890634,
          answer: "quia et suscipi",
          checked: false
        }
      ]
    },
    {
      userId: 1,
      mcId: 3,
      question: "ea molestias quasi exercitationem repellat qui ipsa sit aut?",
      answers: [
        {
          id: 654,
          answer: "et iusto sed quo iu",
          checked: false
        },
        {
          id: 41123134,
          answer: "quia et suscip",
          checked: true
        },
        {
          id: 41010234,
          answer: "quia et suscipitecto",
          checked: false
        },
        {
          id: 413822934,
          answer: "quia et suscipi",
          checked: false
        }
      ]
    },
    {
      userId: 1,
      mcId: 4,
      question: "eum et est occaecati?",
      answers: [
        {
          id: 659,
          answer: "ullam et saep",
          checked: false
        },
        {
          id: 65999,
          answer: "ullam et sae",
          checked: true
        }
      ]
    }
  ]);*/
