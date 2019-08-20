import React, { useState, useEffect } from "react";
import { Row, Col, Button, Divider } from "antd";
import { Link } from "react-router-dom";
import ShowCardList from "../components/ShowCardList";
import AddMCCard from "../components/AddMCCard";
import SaveTestButton from "../components/SaveTestButton";
import ShuffleSaveButton from "../components/ShuffleSaveButton";
import uuid from "uuid";
import "array.prototype.move";

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
          answer:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          checked: false
        },
        {
          id: 4134,
          answer:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          checked: false
        },
        {
          id: 41114,
          answer:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
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
          answer:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
          checked: true
        },
        {
          id: 41984,
          answer:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          checked: false
        },
        {
          id: 459034,
          answer:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          checked: false
        },
        {
          id: 41890634,
          answer:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
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
          answer:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
          checked: false
        },
        {
          id: 41123134,
          answer:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          checked: true
        },
        {
          id: 41010234,
          answer:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          checked: false
        },
        {
          id: 413822934,
          answer:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
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
          answer:
            "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
          checked: false
        },
        {
          id: 65999,
          answer:
            "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
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
    console.log(testData);
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

      return addLetter;
    });
    const sortedChoiceLetters = newShuffledArr.map((mcQ, i) => {
      mcQ.forEach((element, e) => {
        let letterOption = element.choiceLetter;
        switch (letterOption) {
          case "a)":
            return mcQ.move(e, 0);

          case "b)":
            return mcQ.move(e, 1);

          case "c)":
            return mcQ.move(e, 2);

          case "d)":
            return mcQ.move(e, 3);

          case "e)":
            return mcQ.move(e, 4);

          default:
            console.log("what went wrong");
        }
      });
      return mcQ;
    });

    let ansSheet = [];
    console.log(sortedChoiceLetters);
    sortedChoiceLetters.forEach((mcQ, i) => {
      mcQ.forEach((item, i) => {
        if (item.checked === true) {
          ansSheet.push(item.choiceLetter);
          console.log(ansSheet);
        } else {
          return;
        }
      });
    });

    const resultShuffle = { sortedChoiceLetters, ansSheet };
    console.log(resultShuffle);
    setShuffledData(resultShuffle);
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
