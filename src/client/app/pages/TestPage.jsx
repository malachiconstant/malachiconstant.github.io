import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import DisplayTheSecret from "../components/DisplayTheSecret.jsx";

class TestPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	componentDidMount() {



	}
	render() {
		return(
			<div className="main-page generic-page test-page">
				<DisplayTheSecret />
			</div>
		)
	}
}
export default TestPage;