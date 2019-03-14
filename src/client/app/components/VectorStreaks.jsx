import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import '../sass/VectorStreaks.scss';





class VectorStreaks extends React.Component {
		constructor(props) {
	  super(props);
	  this.state = {
	  };

	}
	componentDidMount() {

	}	

	render() {
		
		setTimeout(function(){
			const svgContainer = document.getElementById('svgContainer');
	
			createRect();
			svgContainerDims();

			window.addEventListener('resize', () =>{
				svgContainerDims();
			});

				function svgContainerDims() {
					svgContainer.setAttribute("width", window.innerWidth);
					svgContainer.setAttribute("height", window.innerHeight);
				}

				function createRect() {

						let lastPos = null;
						let scrollSpeed = 0;

						const svgContainer = document.getElementById('svgContainer');
						let svgLine = document.getElementsByTagName("line");

					generateRect();

					function generateAmount(perSquareArea) {
						const docArea = window.innerWidth * window.innerHeight;
						const rawAmountPerArea = docArea/(perSquareArea * 1000);
						const roundedAmountPerArea = Math.round(rawAmountPerArea);
						return roundedAmountPerArea;
					}
					function vectorSpeed() {

							const newPos = window.scrollY;
							if(lastPos != null) {
								scrollSpeed = newPos - lastPos;
								clearTimeout(timer);
							}

							const timer = setTimeout(function(){
								lastPos = newPos;
							}, 100);	

							return scrollSpeed;
					}

					function generateRect(){

						const vX = document.documentElement.clientWidth;
						const vY = window.innerHeight;
						const rW = Math.floor(Math.random() * 400)/100;

						function lineInstance(number) {
							const vX = window.innerWidth;
							const vY = window.innerHeight;

							svgContainer.appendChild(document.createElementNS("http://www.w3.org/2000/svg","line"));
							svgLine[number].setAttributeNS(null,"data-x", Math.floor(Math.random() * (vX - 0 + 1) + 0));
							svgLine[number].setAttributeNS(null,"data-y", Math.floor(Math.random() * (vY - 0 + 1) + 0));
							svgLine[number].setAttributeNS(null,"data-yr", Math.floor(Math.random() * (10 - 2 + 1 ) + 2) / 100);
							svgLine[number].setAttributeNS(null,"x1", svgLine[number].dataset.x);
							svgLine[number].setAttributeNS(null,"y1", svgLine[number].dataset.y);
							svgLine[number].setAttributeNS(null,"x2", svgLine[number].dataset.x);
							svgLine[number].setAttributeNS(null,"y2", svgLine[number].dataset.y);
							svgLine[number].setAttributeNS(null,"stroke", "#000000" );
							svgLine[number].setAttributeNS(null,"stroke-width", Math.floor(Math.random() * (5 - 1 + 1) + 1)  );
							svgLine[number].style.opacity = Math.floor(Math.random() * (3 - 1 + 1 ) + 1) / 10;
						}
						for (var i = 0; i < generateAmount(25); i++) {
							lineInstance(i);
						}
						window.addEventListener('resize',function(){

							while (svgContainer.firstChild) {
								svgContainer.removeChild(svgContainer.firstChild);
							}

							for (var i = 0; i < generateAmount(25); i++) {
								lineInstance(i);
							}
						});	
						var isScrolling;				
						window.addEventListener('scroll',function(){
							for (var i = 0; i < generateAmount(25); i++) {
								const eachLine = svgLine[i];
								window.clearTimeout( isScrolling );
								TweenMax.to(eachLine, 0.1, {
									attr:{
										y2: (vectorSpeed() * -(eachLine.dataset.yr)) + parseInt(eachLine.dataset.y)
									},
									ease:Linear.easeNone
								});
							}
							isScrolling = setTimeout(function(){
								for (var i = 0; i < generateAmount(25); i++) {	
									const eachLine = svgLine[i];	
									eachLine.setAttributeNS(null,"data-x", Math.floor(Math.random() * (vX - 0 + 1) + 0));
										TweenMax.to(eachLine, 0.1, {
											attr:{
												y2: parseInt(eachLine.dataset.y),
												x1: (eachLine.dataset.x),
												x2: (eachLine.dataset.x)

											}, 
											ease:Power1.easeOut
										});	
								}
							}, 250);
						});
					} 

				}
		},25);

		return(
			<div id="theVContainer" className="vector-streaks-container">
				<svg id="svgContainer" ref="svgContainer" className="svg-container">
					<defs>
					
					</defs>
				</svg>
			</div>
		)
	}

}
export default VectorStreaks;