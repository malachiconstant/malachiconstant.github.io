import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import '../sass/HomePage.scss';

class HomePage extends React.Component {
	render() {
		return(
			<div className="main-page generic-page">
				<p>This is the main page</p>
			</div>
		)
	}
}
export default HomePage;