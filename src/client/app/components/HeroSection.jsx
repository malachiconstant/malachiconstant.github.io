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
			window.addEventListener('resize',function(){
				heroDims();
				bgAnim();
			});

			function heroDims() {
				const winH = window.outerHeight;
				document.querySelectorAll('.hero-section')[0].style.height = (winH - 138) + "px";
			}
			function bgAnim() {
				const winW = window.innerWidth;
				const winH = window.innerHeight;
				const bgPos = document.querySelectorAll('.hero-section')[0];
				if(winW > 768){
					// bgPos.style.backgroundSize = "20px, " + (winW * 0.8) + "px";
					bgPos.style.backgroundPosition = "center center," + (winW * 0.5) + "px " + (winH * 0.15) + "px";

					
					const tl = new TimelineLite().to(bgPos, 10, {
						css:{
							backgroundPosition: "center center, " + (winW * -0.15) + "px " + (winH * -1) + "px"
						}, 
						ease:Power1.easeOut
					}).to(bgPos, 10, {
						css:{
							backgroundPosition: "center center, " + (winW * -0.65) + "px " + (winH * 0.15) + "px"
						}, 
						ease:Power1.easeIn
					});	
				}
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