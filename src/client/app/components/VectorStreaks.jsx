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
	
			createRect();
			svgContainerDims();

			window.addEventListener('resize',function(){
				svgContainerDims();
			});

				function svgContainerDims() {
					svgContainer.setAttribute("width", document.documentElement.clientWidth);
					svgContainer.setAttribute("height", document.body.offsetHeight);
				}

				function createRect() {

						let lastPos = null;
						let scrollSpeed = 0;

						const svgContainer = document.getElementById('svgContainer');
						let svgLine = document.getElementsByTagName("line");

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


							return scrollSpeed;
							

					}

					function generateRect(){

						const vX = document.documentElement.clientWidth;
						const vY = document.body.offsetHeight;
						const rW = Math.floor(Math.random() * 400)/100;





						function lineInstance(number) {
							const vX = document.documentElement.clientWidth;
							const vY = document.body.offsetHeight;

							svgContainer.appendChild(document.createElementNS("http://www.w3.org/2000/svg","line"));
							svgLine[number].setAttributeNS(null,"data-x", randomizePos(vX));
							svgLine[number].setAttributeNS(null,"data-y", randomizePos(vY));
							svgLine[number].setAttributeNS(null,"data-y2", 0);
							svgLine[number].setAttributeNS(null,"x1", svgLine[number].dataset.x);
							svgLine[number].setAttributeNS(null,"y1", svgLine[number].dataset.y);
							svgLine[number].setAttributeNS(null,"x2", svgLine[number].dataset.x);
							svgLine[number].setAttributeNS(null,"y2", svgLine[number].dataset.y);
							svgLine[number].setAttributeNS(null,"stroke", "#000000" );
							svgLine[number].setAttributeNS(null,"stroke-width", Math.floor(Math.random() * 400)/100);
							svgLine[number].style.opacity = Math.random();

						}
						for (var i = 0; i < generateAmount(100000); i++) {
							lineInstance(i);
						}
						window.addEventListener('resize',function(){

							while (svgContainer.firstChild) {
								svgContainer.removeChild(svgContainer.firstChild);
							}

							for (var i = 0; i < generateAmount(100000); i++) {
								lineInstance(i);
							}
						});						
						window.addEventListener('scroll',function(){
							for (var i = 0; i < generateAmount(100000); i++) {
								const eachLine = svgLine[i];
								TweenMax.from(eachLine, 1, {attr:{y2: ((vectorSpeed()/rW) + parseInt(svgLine[i].dataset.y))}, ease:Linear.easeNone});
								TweenMax.to(eachLine, 1, {attr:{y2: parseInt(svgLine[i].dataset.y)}, ease:Power2.easeIn});
							}
						});




					} 

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