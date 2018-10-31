import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';

class AboutTheSitePage extends React.Component {
	render() {
		console.log("hi there hwo");
		return(
			<div className="main-page generic-page">
				<p>This is the about site</p>
			</div>
		)
	}
}
export default AboutTheSitePage;