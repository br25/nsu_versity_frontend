import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import log from "../img/login.jpg";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [allEntry, setAllEntry] = useState("");
	
	const onFinish = () => {
		const newEntry = { username: username, password: password};

		setAllEntry([...allEntry, newEntry]);
		console.log(allEntry);
	};

	  const onFinishFailed = (errorInfo) => {
	    console.log('Failed:', errorInfo);
	  };


	return(	
			<div>
				<div>
					<img className="loginPic" src={log} alt="background"/>
				</div>
				<div>
					<Form
						name="normal_login"
						className="login-form center"
						initialValues={{
						remember: true,
						}}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
					>
					      <Form.Item
					        name="username"
					        value={username}
					        onChange={(e) => setUsername(e.target.value)}
					        rules={[
					          {
					            required: true,
					            message: 'Please input your Username!',
					          },
					        ]}
					      >
					        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
					      </Form.Item>
					      <Form.Item
					        name="password"
					        value={password}
					        onChange={(e) => setPassword(e.target.value)}
					        rules={[
					          {
					            required: true,
					            message: 'Please input your Password!',
					          },
					        ]}
					      >
					        <Input
					          prefix={<LockOutlined className="site-form-item-icon" />}
					          type="password"
					          placeholder="Password"
					        />
					      </Form.Item>
					      <Form.Item>
					        <Form.Item name="remember" valuePropName="checked" noStyle>
					          <Checkbox>Remember me</Checkbox>
					        </Form.Item>

					        <a className="login-form-forgot" href="">
					          Forgot password
					        </a>
					      </Form.Item>

					      <Form.Item>
					        <Button type="primary" htmlType="submit" className="login-form-button">
					          Log in
					        </Button>
					        Or <Link to="/registration">register now!</Link>
					      </Form.Item>
					    </Form>
			    </div>
			</div>

		);
};


export default Login;