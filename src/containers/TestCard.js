import React, { useState, useEffect } from "react";
import { Row, Col, Button, Divider } from "antd";
import { Link } from "react-router-dom";
import ShowCardList from "../components/ShowCardList";
import AddMCCard from "../components/AddMCCard";
import SaveTestButton from "../components/SaveTestButton";
import uuid from "uuid";

//fix add multiple choice question feature with handleAddAnswer from MCCard.js
//create shuffle algo

const TestCard = () => {
  const [fetchTest, setFetchTest] = useState([
    {
      userId: 1,
      id: 1,
      question:
        "sunt aut facere repellat provident wccaecati optio reprehenderit",
      answers: [
        {
          id: 424,
          answer:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          checked: false
        },
        {
          id: 133,
          answer: "um est autem sunt rem eveniet archi",
          checked: true
        }
      ]
    },
    {
      userId: 1,
      id: 2,
      question: "qui est esse",
      answers: [
        {
          id: 652,
          answer:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
          checked: false
        }
      ]
    },
    {
      userId: 1,
      id: 3,
      question: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      answers: [
        {
          id: 654,
          answer:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
          checked: false
        }
      ]
    },
    {
      userId: 1,
      id: 4,
      question: "eum et est occaecati",
      answers: [
        {
          id: 659,
          answer:
            "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
          checked: false
        }
      ]
    }
  ]);
  const [testData, setTestData] = useState(fetchTest);
  console.log(testData);

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

  const handleSaveTest = e => {};
  return (
    <div>
      <h1>Test Title</h1>
      <ShowCardList
        testData={testData}
        handleDeleteMCCard={handleDeleteMCCard}
      />
      <AddMCCard handleClick={handleAddMCCard} />
      <SaveTestButton handleSave={handleSaveTest} />
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
