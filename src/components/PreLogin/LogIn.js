import React from "react";
import { Row, Col, Form, Icon, Input, Button, Checkbox } from "antd";
import "./Signup.css";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import Nav from "../Nav";

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
    this.props.form.validateFields((error, values) => {
      if (!error) {
        console.log("Received values of form: ", values);
        axios({
          method: "post",
          url: "https://pacific-beach-68901.herokuapp.com/user/login",
          data: {
            email: values.email,
            password: values.password
          }
        }).then(
          response => {
            console.log(response.data);
            localStorage.setItem("token", response.data);
            this.setState({ redirect: true });
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
    const { getFieldDecorator } = this.props.form;

    if (redirect) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div>
        <Nav />
        <Row type="flex" justify="start" align="middle" className="">
          <Col xs={24} sm={24} md={24} lg={24} xl={24} className="tc mt5">
            <h1>Log In</h1>
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
                    placeholder="Password"
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
                      className="button-padding "
                    >
                      Log in
                    </Button>
                  </Col>
                </Row>
                <Row type="flex" justify="start" align="middle">
                  Or{" "}
                  <Link to="/signup" className="ma1">
                    register now!
                  </Link>
                </Row>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export const LogIn = Form.create({ name: "normal_login" })(NormalLoginForm);

//code to add forgot password feature later
//<a className="login-form-forgot" href="">Forgot password</a>
