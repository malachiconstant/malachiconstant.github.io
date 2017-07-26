import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import '../sass/VectorStreaks.scss';

class VectorStreaks extends React.Component {
		constructor(props) {
	  super(props);
	  this.state = {
	  	vectorAmount: 0
	  };

	}
	componentDidMount() {
		const self = this;
		let perSquareArea = 250000;
		svgContainerDims();

		
		generateAmount(perSquareArea);
		window.addEventListener("resize", function(){			
			svgContainerDims();
			generateAmount(perSquareArea);

		});			
		function svgContainerDims() {
			const svgContainer = self.refs.svgContainer;
			svgContainer.setAttribute("width", document.documentElement.clientWidth);
			svgContainer.setAttribute("height", document.body.offsetHeight);
		}

		function generateAmount(perSquareArea) {
			const docArea = document.documentElement.clientWidth * document.body.offsetHeight;
			const rawAmountPerArea = docArea/perSquareArea;
			const roundedAmountPerArea = Math.ceil(rawAmountPerArea/100)*100;
			self.setState({ vectorAmount: roundedAmountPerArea });
		}

	}
	render() {
		const self = this;
		randomizeVector(document.documentElement.clientWidth);
		function createVectors() {
			const vectorAmount = self.state.vectorAmount;
			const theArray = [];
			for (var i=0; i <= vectorAmount; i++) {
			  theArray.push(i);
			}
			return theArray;
		}
		function randomizeVector(axis) {
			return Math.floor(Math.random() * axis)
		}

		const vectorLines = createVectors().map((number) =>
			<rect key={"rect" + number} x={randomizeVector(document.documentElement.clientWidth)} y={randomizeVector(document.body.offsetHeight)} style={{width:"10px",height:"10px",fill:"green",display:"inline"}} />
			
		)

		return(
			<div className="vector-streaks-container">
				<svg ref="svgContainer" className="svg-container">
					{vectorLines}
				</svg>
			</div>
		)
	}
}
export default VectorStreaks;