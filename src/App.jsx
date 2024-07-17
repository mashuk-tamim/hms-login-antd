// import React from "react";
// import "./App.jsx";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
	Button,
	Checkbox,
	Form,
	Input,
	Typography,
	Divider,
	ConfigProvider,
} from "antd";

function App() {
	const onFinish = (values) => {
		console.log("Received values of form: ", values);
	};
	return (
		<main className="w-screen h-screen flex font-nunito">
			{/* text */}
			<div className="w-[50%] h-full bg-[#f5f5f5] text-black pt-40 px-10">
				<h1 className="text-3xl font-semibold uppercase">
					<span className="text-secondary font-bold">Hms</span> Admin
				</h1>
				<h2 className="text-2xl font-bold pt-1">Hospital Management System</h2>
				<p className="font-medium text-xl pt-5">
					Welcome to HMS Admin, your all-in-one solution for hospital
					management. Our system simplifies patient record-keeping, appointment
					scheduling, billing, and more. Designed to enhance operational
					efficiency and improve patient care, HMS Admin ensures that your
					healthcare facility runs smoothly and effectively.
				</p>
			</div>
			{/* login form */}
			{/* <div className="w-[50%] h-full bg-[#ffffff] text-black">
				<Typography.Title level={5}>Email/Phone</Typography.Title>
				<Input
					size="large"
					placeholder="Email address or phone"
					prefix={<UserOutlined />}
					className="font-semibold"
				/>
				<Typography.Title level={5}>Password</Typography.Title>
				<Input size="large" placeholder="Password" prefix={<LockOutlined />} />
			</div> */}
			<div className="w-[50%] h-full bg-[#ffffff] text-black">
				<ConfigProvider
					theme={{
						token: {
							colorPrimary: "3e33e1", // your color
						},
						components: {
							Button: {
								colorPrimary: "#3e33e1",
								algorithm: true, // Enable algorithm
							},
							Input: {
								colorPrimary: "#3e33e1",
								algorithm: true, // Enable algorithm
							},
						},
					}}
				>
					<div className="flex flex-col w-[50%] h-full mx-auto justify-center">
						<h1 className="text-3xl font-bold">Sign In</h1>
						<Divider />
						<Form
							name="normal_login"
							className="login-form"
							initialValues={{
								remember: true,
							}}
							onFinish={onFinish}
						>
							<Form.Item
								name="username"
								rules={[
									{
										required: true,
										message: "Please input your Username!",
									},
								]}
							>
								<Typography.Title level={5}>
									<span className="text-2xl text-red-400 relative top-2">
										*
									</span>{" "}
									Email/Phone
								</Typography.Title>
								<Input
									prefix={<UserOutlined className="site-form-item-icon" />}
									placeholder="Email address or phone"
									size="large"
								/>
							</Form.Item>
							<Form.Item
								name="password"
								rules={[
									{
										required: true,
										message: "Please input your Password!",
									},
								]}
							>
								<Typography.Title level={5}>
									<span className="text-2xl text-red-400 relative top-2">
										*
									</span>{" "}
									Password
								</Typography.Title>
								<Input.Password
									prefix={<LockOutlined className="site-form-item-icon" />}
									type="password"
									placeholder="Password"
									size="large"
								/>
							</Form.Item>
							<Form.Item>
								<div className="flex items-center justify-between">
									<div>
										<Form.Item name="remember" valuePropName="checked" noStyle>
											<Checkbox>Remember me</Checkbox>
										</Form.Item>
									</div>
									<div>
										<a
											className="login-form-forgot text-primary hover:text-primary/50 font-semibold"
											href=""
										>
											Forgot password
										</a>
									</div>
								</div>
							</Form.Item>

							<Form.Item>
								<Button
									type="primary"
									htmlType="submit"
									className="login-form-button"
									size="large"
									block
								>
									Log in
								</Button>
							</Form.Item>
						</Form>
						<div className="text-[14px] text-center font-semibold">
							<p>
								Powered by <span className="text-primary">Pro Software Lab</span>
							</p>
							<p>&copy; Pro Software Lab | Admin Panel</p>
						</div>
					</div>
				</ConfigProvider>
			</div>
		</main>
	);
}

export default App;
