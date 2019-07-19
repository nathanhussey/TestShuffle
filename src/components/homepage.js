import React from 'react';
import { Row, Col, Button} from 'antd';
import gradStudent from "../images/academic-degree.png";



const Homepage = () => {

	return (
		<div >
			<Row type="flex" justify="space-around" align="middle" className=" vh-100">
				<Col span={10} className='pa3' offset = {2}>
					<h1 className='f-subheadline lh-solid'>Increase interity in your classroom </h1>
					
					<h2 className="f3 lh-solid mb4">Easily create multiple versions of the same test with shuffled test answers </h2>
					<Button type="primary" size="large" className="f4 lh-copy mt3">Sign Up Free</Button>
				</Col>
				<Col span={10} className='pa3 ' offset = {2}>
					<img src={gradStudent} width={300} height={400} alt="cartoon student" />
				</Col>
			</Row>
			<Row className="vh-50">
				<Col span={6} className='pa3' offset = {2}>
					<h1>title 2 </h1>
					<h2>sub title 1 </h2>
				</Col>
				<Col span={6} className='pa3' offset = {2}>
					<h1>title 2</h1>
					<h2>sub title 2 </h2>
				</Col>
				<Col span={6} className='pa3' offset = {2}>
					<h1>title 3</h1>
					<h2>sub title 3 </h2>
				</Col>
			</Row>
		</div>



	)



}
export default Homepage;