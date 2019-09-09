/* eslint-disable no-console */
/* eslint-disable no-tabs */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from "react";
import { Layout, Menu, Icon } from "antd";
import LoadTitles from "../components/LoadTitles";
import axios from "axios";
import CreateTestCard from "../components/CreateTestCard";

const Dashboard = () => {
  const [currentKey, setCurrentKey] = useState(["1"]);
  const [homeData, setHomeData] = useState([]);
  const [titlesData, setTitlesData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/user/dashboard", {
        headers: {
          Authorization: "Bearer " + getToken()
        }
      })
      .then(
        response => {
          setHomeData(response);
          setTitlesData(response.data);
          console.log(response);
        },
        err => {
          console.log(err.response);
        }
      );
  }, []);

  const getToken = () => {
    return localStorage.getItem("token");
  };
  const handleMenuClick = e => {
    setCurrentKey([e.key]);
  };

  const { Header, Content, Footer, Sider } = Layout;
  let content;
  console.log(currentKey[0]);
  if (currentKey[0] === "1") {
    content = (
      <div>
        <CreateTestCard />
        <LoadTitles titles={titlesData} />
      </div>
    );
  } else {
    content = "nav2 here";
  }
  return (
    <Layout className=" vh-100">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={currentKey}
          onClick={handleMenuClick}
        >
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>

          <Menu.Item key="2">
            <Icon type="user" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            {content}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }} />
      </Layout>
    </Layout>
  );
};
export default Dashboard;
