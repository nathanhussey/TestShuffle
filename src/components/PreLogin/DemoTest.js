import React, { useState, useEffect } from "react";
import { Row, Col, Button, Divider } from "antd";
import { Link, Redirect } from "react-router-dom";
import ShowCardList from "../ShowCardList";
import AddMCCard from "../AddMCCard";
import SaveTestButton from "../SaveTestButton";
import ShuffleDownloadButton from "../ShuffleDownloadButton";
import CancelToDashButton from "../CancelToDashButton";
import ConfirmCancelTest from "../ConfirmCancelTest";
import "../../containers/testCard.css";
import uuid from "uuid";
import "array.prototype.move";
import * as jsPDF from "jspdf";
import axios from "axios";

const DemoTest = () => {
  const [testTitle, setTestTitle] = useState("Test Title here");
  const [testData, setTestData] = useState([
    {
      mcId: 1,
      question: "Enter question here",
      answers: [
        {
          id: 424,
          answer: "Enter answer here",
          checked: false
        }
      ]
    }
  ]);
  const [isTestSaved, setIsTestSaved] = useState(false);
  const [shuffledData, setShuffledData] = useState([]);
  const [didClickShuffle, setDidClickShuffle] = useState(false);
  const [didClickSaveDash, setDidClickSaveDash] = useState(false);
  const [editTitle, setEditTitle] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [cancellingTest, setCancellingTest] = useState(false);
  let tempTest = [];

  //checks if user clicked shuffle test
  useEffect(() => {
    if (didClickShuffle === true) {
      shuffledTestData();
    }
  }, [testData]);

  // checks if user clicked 'save to dashboard'
  // redirects user to dashboard
  useEffect(() => {
    if (didClickSaveDash === true) {
      setRedirect(true);
    }
  }, [testData]);

  // gets the auth 'token' from local storage
  const getToken = () => {
    return localStorage.getItem("token");
  };

  // adds new multiple choice question to test
  const handleAddMCCard = () => {
    const newMCCardId = [
      {
        mcId: null,
        question: "",
        answers: [{ id: null, answer: "", checked: false }]
      }
    ];
    newMCCardId[0].mcId = uuid.v4();
    newMCCardId[0].answers[0].id = uuid.v4();
    setTestData(testData.concat(newMCCardId));
  };

  //deletes multiple choice question from test
  const handleDeleteMCCard = mcId => {
    testData.map((card, i) => {
      if (card.mcId === mcId) {
        testData.splice(i, 1);
      }
    });
    setTestData([...testData]);
  };

  //causes tests MCCard component to send updated data to testCard component
  // In additon triggers useeffect to save data to database and redirects to dashboard
  const changeSaveTest = () => {
    setIsTestSaved(true);
    setDidClickSaveDash(true);
  };

  // responsible updating testCard test data with updated data from MCCard
  //this function will get new data from all MCCards gather them in an array and update testCard test data
  const handleSaveTest = (mcId, newQuestion, newAnswers) => {
    let newObj = { mcId: mcId, question: newQuestion, answers: newAnswers };
    tempTest.push(newObj);
    setTestData(tempTest);
    setIsTestSaved(false);
  };

  // shuffles data, prepares data from pdf than creates pdf for download
  const shuffledTestData = () => {
    //randomly assigning each answer a letter
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
        // creates a new property called choiceLetter for each answer
        // and assigns random letter to that property
        element = { ...element, choiceLetter: letters[createdRandNum] };
        element.metadata = { ...element.metadata, type: "closed" };
        // remove assigned letter from array of available letters
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
            console.log("what went wrong in sorting");
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

    //start building pdf
    var doc = new jsPDF();
    let pageHeight = doc.internal.pageSize.height - 20;

    let x = 10;
    let y = 20;
    let splitTitle = doc.splitTextToSize(testTitle, 180);
    doc.text(splitTitle, x, y);
    y += splitTitle.length * 8;
    sortedChoiceLetters.forEach(element => {
      if (y >= pageHeight) {
        doc.addPage();
        y = 10;
      }
      y += 10;
      doc.text(element.quesNum, x, y);
      x += 9;
      let splitQuestion = doc.splitTextToSize(element.question, 180);
      doc.text(splitQuestion, x, y);
      y += splitQuestion.length * 8;
      y += 4;
      x -= 9;

      element.answers.forEach(item => {
        if (y >= pageHeight) {
          doc.addPage();
          y = 20;
        }
        doc.text(item.choiceLetter, x, y);
        x += 10;
        let splitAnswer = doc.splitTextToSize(item.answer, 180);
        doc.text(splitAnswer, x, y);
        y += splitAnswer.length * 8;
        x -= 10;
      });
    });

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

  //gets update MCCArd data and triggers Effect to save and shuffle test
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

  const handleCancelToDash = () => {
    setCancellingTest(true);
  };

  const cancelDelete = () => {
    setCancellingTest(false);
  };
  const handleRedirect = () => {
    setCancellingTest(false);
    setRedirect(true);
  };
  if (redirectToLogin) {
    return <Redirect to="/login" />;
  }
  if (redirect) {
    return <Redirect to="/dashboard" />;
  }

  if (cancellingTest) {
    return (
      <ConfirmCancelTest
        handleRedirect={handleRedirect}
        cancelDelete={cancelDelete}
      />
    );
  }

  // edit and display test title
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
          <span
            className="child pt1 pb1 pr2 pl2 ma1 mt2 br2"
            style={{
              cursor: "pointer",
              backgroundColor: "#4285f4",
              color: "white"
            }}
            onClick={handleEditTitle}
          >
            Edit title
          </span>
        </div>
      </div>
    );
  }
  //display test
  return (
    <div>
      {titleContent}
      <div className="intruction-margins">
        <h1 className="red">
          This is for Demo purposes only info will not be save. Sign up or login
          to save data{" "}
        </h1>
      </div>
      <div className="intruction-margins">
        <h2>Instructions</h2>
      </div>
      <div className="intruction-margins">
        <h3 className="red">
          Only add 5 answers to a question (letters "a" to "e"){" "}
        </h3>
      </div>
      <div className="intruction-margins">
        <h3>Do not forget - Click save after you edit a question </h3>
      </div>
      <div className="intruction-margins">
        <h3>Do not forget - Checkmark correct answers</h3>
      </div>
      <div className="intruction-margins">
        <h3>Questions will be automatically numbered in pdf</h3>
      </div>

      <ShowCardList
        testData={testData}
        handleDeleteMCCard={handleDeleteMCCard}
        isTestSaved={isTestSaved}
        handleSaveTest={handleSaveTest}
      />
      <div className="add-mc-margins ">
        <AddMCCard handleClick={handleAddMCCard} />
      </div>

      <div className="pages-margins ">
        <ShuffleDownloadButton shuffle={saveTestThanShuffle} />

        <CancelToDashButton handleCancelToDash={handleCancelToDash} />
      </div>
    </div>
  );
};

export default DemoTest;
