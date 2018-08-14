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
				if(winW > 768){
					// bgPos.style.backgroundSize = "20px, " + (winW * 0.8) + "px";
					bgPos.style.backgroundPosition = "center center," + (2000) + "px " + 3000 + "px";
				
					var tl = new TimelineMax();

					tl.add(
						TweenMax.to(
							bgPos, 120,{
								css:{
									backgroundPosition: "center center, " + (-4000) + "px " + (-6000) + "px",
								}, 
								ease: Power0.easeNone
							}
						)
					);
					const repeat = tl.repeat();
					tl.repeat(-1);
				}
				else {
					bgPos.style.backgroundPosition = "center center," + (1000) + "px " + 1500 + "px";
				
					var tl = new TimelineMax();

					tl.add(
						TweenMax.to(
							bgPos, 120,{
								css:{
									backgroundPosition: "center center, " + (-2000) + "px " + (-3000) + "px",
								}, 
								ease: Power0.easeNone
							}
						)
					);
					const repeat = tl.repeat();
					tl.repeat(-1);
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