import React, { useState, useEffect } from "react";
import { Row, Col, Button, Divider } from "antd";
import { Link } from "react-router-dom";
import ShowCardList from "../components/ShowCardList";
import AddCard from "../components/AddCard";

const TestCard = () => {
  const [fetch_test, setFetch_test] = useState([0]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => setFetch_test(json));
  }, []);
  console.log(fetch_test);

  return (
    <div>
      <h1>Title</h1>
      <ShowCardList test={fetch_test[0].title} />
      <AddCard />
    </div>
  );
};

export default TestCard;
