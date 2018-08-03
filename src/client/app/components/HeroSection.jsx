import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import '../sass/HeroSection.scss';

class BoxShadow extends React.PureComponent {
	constructor(props) {
	  super(props);
	  this.state = {
	  };
	}

	render() {
		setTimeout(function(){
			heroDims();
			window.addEventListener('resize',function(){
				heroDims();
			});

			function heroDims() {
				const winH = window.outerHeight;
				document.querySelectorAll('.hero-section')[0].style.height = (winH - 138) + "px";
			}
		},25);
		return(
			<div className="hero-section" id="heroSection">
				{this.props.children}
			</div>
		)
	}
}
export default BoxShadow;