import React, { useState, useEffect } from "react";
import { Row, Col, Button, Divider } from "antd";
import { Link } from "react-router-dom";
import ShowCardList from "../components/ShowCardList";
import AddMCCard from "../components/AddMCCard";

const TestCard = () => {
  const [fetch_test, setFetch_test] = useState([
    { userId: "", id: "", title: "", body: "" }
  ]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        setFetch_test(json);
      });
  }, []);

  return (
    <div>
      <h1>Test Title</h1>
      <ShowCardList testData={fetch_test} />
      <AddMCCard />
    </div>
  );
};

export default TestCard;
