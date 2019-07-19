import React from 'react';
import {Link} from "react-router-dom"
import { Row, Col, Button} from 'antd';



const Nav = () => {

	return(
		<div >
			<Row type="flex" justify="end" className="bg-light-blue pa4">
				<Col span={2}>
					<Button type="primary">
						<Link to="/signup">Sign Up</Link>
					</Button>
				</Col>
				<Col span={2}>
					<Button type="link">
						<Link  to="/login">Log In</Link>
					</Button>
				</Col>
			</Row>
			<Row>

			</Row>

		</div>



	)

//className="ma3 tc dib"

}
export default Nav;