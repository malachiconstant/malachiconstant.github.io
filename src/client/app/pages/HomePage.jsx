import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import '../sass/GenericPage.scss';
import '../sass/HomePage.scss';

class HomePage extends React.Component {
	componentDidMount() {
		const self = this;
		setTimeout(makeAppear, 1);
		function makeAppear (){
			self.refs.genericPage.classList.add("appear");
		}
	}
	render() {
		return(
			<div ref="genericPage" className="generic-page home-page ">
				<h2>Elegance through creativity and efficiency.</h2>
				<p>this website is under construction</p>
				<p><a href="https://github.com/malachiconstant/malachiconstant.github.io/tree/dev" title="github development repository for jonmanalo.com"> view the development repository of this website here</a></p>
			</div>
		)
	}
}
export default HomePage;