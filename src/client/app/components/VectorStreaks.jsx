import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import '../sass/VectorStreaks.scss';





class VectorStreaks extends React.Component {
		constructor(props) {
	  super(props);
	  this.state = {
	  	vectorAmount: 0,
	  };

	}
	componentDidMount() {

	}	




	render() {
		
		setTimeout(function(){
			const svgContainer = document.getElementById('svgContainer');

			svgContainerDims();
			createRect();

				function svgContainerDims() {
					svgContainer.setAttribute("width", document.documentElement.clientWidth);
					svgContainer.setAttribute("height", document.body.offsetHeight);
				}

				function createRect() {

						const vX = document.documentElement.clientWidth;
						const vY = document.body.offsetHeight;

						let lastPos = null;
						let scrollSpeed = 0;

						const svgContainer = document.getElementById('svgContainer');
						let svgRect = document.getElementsByTagName("rect");



					generateRect();



					function generateAmount(perSquareArea) {
						const docArea = document.documentElement.clientWidth * document.body.offsetHeight;
						const rawAmountPerArea = docArea/perSquareArea;
						const roundedAmountPerArea = Math.round(rawAmountPerArea);

						return roundedAmountPerArea;
					}

					function randomizePos(axis) {
						  	// Math.floor(Math.random() * 400)/100;
						  	return Math.floor(Math.random() * axis);
					}

					function randomizeWidth() {
						return Math.floor(Math.random() * 400)/100;
					}

					function vectorSpeed() {

							const newPos = window.scrollY;
							if(lastPos != null) {
								scrollSpeed = newPos - lastPos;
								clearTimeout(timer);
							}

							const timer = setTimeout(function(){
								lastPos = newPos;
							}, 50);	
							console.log(scrollSpeed);

							return scrollSpeed;
							

					}

					function generateRect(){


						for (var i = 0; i < generateAmount(100000); i++) {
							// console.log("hiiii " + i);
							var rX = randomizePos(vX);
							var rY = randomizePos(vY);
							svgContainer.appendChild(document.createElementNS("http://www.w3.org/2000/svg","rect"));
							svgRect[i].setAttributeNS(null,"x", randomizePos(vX));
							svgRect[i].setAttributeNS(null,"y", randomizePos(vY));
							svgRect[i].setAttributeNS(null,"width", randomizeWidth());
							svgRect[i].setAttributeNS(null,"height", "300");
							svgRect[i].style.fill = '#000000';

						}
						window.addEventListener('scroll',function(){
							for (var i = 0; i < generateAmount(100000); i++) {
								svgRect[i].setAttributeNS(null,"height", Math.abs(vectorSpeed()));

								
							}
						});
					} 

					// svgPath[0].setAttribute("d", "M " + window.innerWidth/2 + " " + document.body.offsetHeight/2 + " h 10 v " + vectorSpeed() + " h -10 Z");
				}
		},25);

		return(
			<div id="theVContainer" className="vector-streaks-container">
				<svg id="svgContainer" ref="svgContainer" className="svg-container">
					
				</svg>
			</div>
		)
	}

}
export default VectorStreaks;