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
			bgAnim();
			window.addEventListener('resize', () => {
				heroDims();
				bgAnim();
			});

			function heroDims() {
				const winW = window.innerWidth;
				const winH = window.outerHeight;

					document.querySelectorAll('.hero-section')[0].style.height = (winH - 138) + "px";
				
			}
			function bgAnim() {
				const winW = window.innerWidth;
				const winH = window.innerHeight;
				const bgPos = document.querySelectorAll('.hero-section')[0];
			}
		},25);

		return(
			<div className={`hero-section ${this.props.time}`} id="heroSection">
				{this.props.children}
			</div>
		)
	}
}
export default BoxShadow;