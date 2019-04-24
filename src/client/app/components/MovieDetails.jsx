import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import HomePage from "../pages/HomePage.jsx";
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import PropTypes from 'prop-types';
import { textCut, scrollView } from "../helpers.js";

class MovieDetails extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.dir(this.props.location);
	}

	render() {

		return(
			<React.Fragment>
				<h1>hello worlds</h1>
			</React.Fragment>
		)
	}
}



export default MovieDetails;

