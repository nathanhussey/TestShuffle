import React from 'react';
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';
import "./signup.css"

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
    	<Row type="flex" justify="start" align="middle" className=" vh-75">
			<Col xs={6} sm={6} md={6} lg={6} xl={6} className='' offset = {9}>
		      <Form onSubmit={this.handleSubmit} className="">
		        <Form.Item>
		          {getFieldDecorator('username', {
		            rules: [{ required: true, message: 'Please input your username!' }],
		          })(
		            <Input
		              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
		              placeholder="Username"
		            />,
		          )}
		        </Form.Item>
		        <Form.Item>
		          {getFieldDecorator('password', {
		            rules: [{ required: true, message: 'Please input your Password!' }],
		          })(
		            <Input
		              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
		              type="password"
		              placeholder="Password"
		            />,
		          )}
		        </Form.Item>
		        <Form.Item>
					<Row type="flex" justify="space-between" align="middle">
			          {getFieldDecorator('remember', {
			            valuePropName: 'checked',
			            initialValue: true,
			          })(<Checkbox>Remember me</Checkbox>)}
			          <a className="login-form-forgot" href="">
			            Forgot password
			          </a>
		          	</Row>
		          	<Row type="flex" justify="center" align="middle">
		          		<Col xs={24} sm={24} md={24} lg={24} xl={24} className=''> 
				          <Button type="primary" htmlType="submit" className="log-in-padding">
				            Log in
				          </Button>
				        </Col>
			        </Row>
			        <Row type="flex" justify="start" align="middle">
			          Or <a className="ma1" href="">register now!</a>
		          	</Row>
		        </Form.Item>
		      </Form>
		    </Col>
		</Row>
    );
  }
}

const SignUp = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default SignUp;