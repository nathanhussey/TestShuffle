import React, { useState, useEffect } from "react";
import { Row, Col, Button, Divider } from "antd";
import { Link } from "react-router-dom";
import ShowCardList from "../components/ShowCardList";
import AddMCCard from "../components/AddMCCard";
import SaveTestButton from "../components/SaveTestButton";
import ShuffleSaveButton from "../components/ShuffleSaveButton";
import uuid from "uuid";
import "array.prototype.move";
import * as jsPDF from "jspdf";

const TestCard = () => {
  const [fetchTest, setFetchTest] = useState([
    {
      userId: 1,
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
  ]);
  const [testData, setTestData] = useState(fetchTest);
  const [isTestSaved, setIsTestSaved] = useState(false);
  const [shuffledData, setShuffledData] = useState([]);
  const [didClickShuffle, setDidClickShuffle] = useState(false);
  let tempTest = [];

  useEffect(() => {
    if (didClickShuffle === true) {
      console.log(testData);
      shuffledTestData();
    }
  }, [testData]);
  const handleAddMCCard = () => {
    const newMCCardId = [
      {
        userId: 1,
        id: null,
        question: "",
        answers: [{ id: null, answer: "", checked: false }]
      }
    ];
    newMCCardId[0].id = uuid.v4();
    newMCCardId[0].answers[0].id = uuid.v4();
    setTestData(testData.concat(newMCCardId));
  };

  const handleDeleteMCCard = mcId => {
    testData.map((card, i) => {
      if (card.id === mcId) {
        testData.splice(i, 1);
      }
    });
    console.log(testData);
    setTestData([...testData]);
  };

  const changeSaveTest = () => {
    setIsTestSaved(true);
  };

  const handleSaveTest = (mcId, newQuestion, newAnswers) => {
    let newObj = { id: mcId, question: newQuestion, answers: newAnswers };
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
    console.log(sortedChoiceLetters);
    let ansSheet = [];

    sortedChoiceLetters.forEach((mcQ, i) => {
      mcQ.answers.forEach((item, i) => {
        if (item.checked === true) {
          ansSheet.push(item.choiceLetter);
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
      doc.text(element.question, x, y);
      y += 10;

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
  console.log("end");
  console.log(testData);
  return (
    <div>
      <h1>Test Title</h1>
      <ShowCardList
        testData={testData}
        handleDeleteMCCard={handleDeleteMCCard}
        isTestSaved={isTestSaved}
        handleSaveTest={handleSaveTest}
      />
      <AddMCCard handleClick={handleAddMCCard} />
      <SaveTestButton changeSaveTest={changeSaveTest} />
      <ShuffleSaveButton shuffle={saveTestThanShuffle} />
    </div>
  );
};

/*fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(json => {
  setiFetch_test(json);
});
}, []);*/
export default TestCard;
