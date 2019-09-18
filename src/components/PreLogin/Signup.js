import React from "react";
import { Row, Col, Form, Icon, Input, Button, Checkbox } from "antd";
import "./Signup.css";
import Nav from "../Nav";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { identifier } from "@babel/types";

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      errorMessage: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        axios
          .post("https://pacific-beach-68901.herokuapp.com/user/signup", {
            email: values.email,
            password: values.password
          })
          .then(
            response => {
              {
                localStorage.setItem("token", response.data);
                this.setState({ redirect: true });
              }
            },
            err => {
              console.log(err.response);
              this.setState({ errorMessage: err.response.data });
            }
          );
      }
    });
  };

  render() {
    const { redirect, errorMessage } = this.state;
    if (redirect) {
      return <Redirect to="/dashboard" />;
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Nav />

        <Row type="flex" justify="start" align="middle" className="">
          <Col xs={24} sm={24} md={24} lg={24} xl={24} className="tc mt5">
            <h1>Sign Up</h1>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} xl={6} className="" offset={9}>
            <Form onSubmit={this.handleSubmit} className="">
              <Form.Item>
                {getFieldDecorator("email", {
                  rules: [
                    { required: true, message: "Please input your email!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Email"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password must be at least 6 characters"
                  />
                )}
                <h4 className="tc dark-red">{errorMessage}</h4>
              </Form.Item>
              <Form.Item>
                <Row type="flex" justify="space-between" align="middle">
                  {getFieldDecorator("remember", {
                    valuePropName: "checked",
                    initialValue: true
                  })(<Checkbox>Remember me</Checkbox>)}
                </Row>
                <Row type="flex" justify="center" align="middle">
                  <Col xs={24} sm={24} md={24} lg={24} xl={24} className="">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="button-padding"
                    >
                      Create Account
                    </Button>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export const SignUp = Form.create({ name: "normal_login" })(NormalLoginForm);
