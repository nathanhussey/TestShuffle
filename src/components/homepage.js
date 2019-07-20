import React from 'react';
import { Row, Col, Button} from 'antd';
import gradStudent from "../images/academic-degree.png";
import {Link} from "react-router-dom"
import Nav from "./nav";


const Homepage = () => {

	return (
		<div >
			<Nav/>
			<Row type="flex" justify="start" align="middle" className=" vh-75">
				<Col xs={24} sm={24} md={12} lg={12} xl={6} className='mr5' offset = {6}>
					<h1 className="f1 lh-title">Increase interity in your classroom </h1>
					
					<h2 className="f4 lh-copy mb4">Easily create multiple versions of the same test with shuffled test answers </h2>
					<Link to="/signup"><Button type="primary" size="large" className="f4 lh-copy mt3">Sign Up Free</Button></Link>
				</Col>
				<Col xs={24} sm={24} md={12} lg={12} xl={6} className='pa3'>
					<img src={gradStudent} height={500} width={700} alt="cartoon student" />
				</Col>
			</Row>
			<Row type="flex" justify="start" align="middle" className="vh-75 ">
				<Col xs={24} sm={24} md={8} lg={8} xl={4} className='tc' offset = {6}>
					<h1>title 1 </h1>
					<h2>sub title 1 </h2>
				</Col>
				<Col xs={24} sm={24} md={8} lg={18} xl={4} className='tc' >
					<h1>title 2</h1>
					<h2>sub title 2 </h2>
				</Col>
				<Col xs={24} sm={24} md={8} lg={8} xl={4} className='tc' >
					<h1>title 3</h1>
					<h2>sub title 3 </h2>
				</Col>
			</Row>
			<Row type="flex" justify="start" align="middle" className="vh-25">
				<Col span={24} className='pa3 tc'>
					<h1 className="f3 lh-solid">"Our goal is to increase fairness in the classroom by decrasing incidents of cheating" </h1>
				</Col>
			</Row>
			<Row type="flex" justify="start" align="middle" className=" vh-100">
				<Col xs={24} sm={24} md={12} lg={12} xl={6} className='mr5 ' offset = {6}>
					<h1 className="f1 lh-title">Teachers care about the integity of classroom testing results. </h1>
				</Col>
				<Col xs={24} sm={24} md={12} lg={12} xl={6} className='pa3'>
					<img src={gradStudent} height={500} width={700} alt="cartoon student" />
				</Col>
			</Row>
			<Row type="flex" justify="start" align="middle" className=" vh-100">
				<Col xs={24} sm={24} md={24} lg={24} xl={12} className='pa3 tc' offset={6}>
					<h1 className="f1 lh-title">We Made Testshuffler For Teachers - Like You  </h1>
					<Link to="/signup"><Button type="primary" size="large" className="f4 lh-copy ma3">Get Started</Button></Link>
				</Col>

			</Row>
		</div>



	)



}
export default Homepage;