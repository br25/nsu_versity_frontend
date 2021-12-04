import React,{ useState } from "react";
import { Layout, Modal, Button, Image, Descriptions, Skeleton, message } from 'antd';
import "./profile.css";

const { Header, Content } = Layout;

const Test = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
		message.success('Successfully send the friend Request');
	};

	const handleCancel = () => {
		setIsModalVisible(false);
		message.warning("Please Go back");
	};







	return(
		<>
		      <Layout style={{height: "100vh"}}>
		        <Header className="header-color">
		        	User Profile
		        </Header>
		        <Content className="content">
		        	<Skeleton />
			        <div>
				        <Image
						      width={300}
						      height={300}
						      className="profile-img"
						      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
						/>
					</div>
					<div style={{padding:"40px 20px"}}>
						<Descriptions title="User Info" layout="horizontal">
						    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
						    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
						    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
						    <Descriptions.Item label="Address" span={1}>
						      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
						    </Descriptions.Item>
						    <Descriptions.Item label="Remark">empty</Descriptions.Item>
						</Descriptions>
						<div style={{margin: "50px 0"}}>
							<Button type="primary" onClick={showModal}>
						        Send Friend Request
						    </Button>
						    <Modal title="Are you sure?" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
						        <p>If you wanna send friend request then type ok.</p>
						   		<p>or Cancel</p>
						    </Modal>
						</div>
					</div>
				</Content>
		      </Layout>
		</>
		);
};



export default Test;





