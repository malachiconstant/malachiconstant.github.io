import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import '../sass/GenericPage.scss';
import '../sass/HomePage.scss';

class HomePage extends React.Component {
	componentDidMount() {
	}
	render() {
		return(
<div ref="genericPage" className="generic-page home-page ">
				<h2>Elegance through creativity and efficiency.</h2>
				<p>&nbsp;</p>
				<p>this website is under construction</p>
				<p>&nbsp;</p>
				<p><a href="https://github.com/malachiconstant/malachiconstant.github.io/tree/dev" title="github development repository for jonmanalo.com"><strong>view the development repository of this website here</strong></a></p>
			</div>
		)
	}
}
export default HomePage;