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
		let perSquareArea = 90000;
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
		function createVectors() {
			const vectorAmount = self.state.vectorAmount;
			const theArray = [];
			for (var i=0; i <= vectorAmount; i++) {
			  theArray.push(i);
			}
			return theArray;
		}

		function createVectors2() {
			const vectorAmount = self.state.vectorAmount;
			const theArray = [];
			for (var i=0; i <= vectorAmount; i++) {
			  theArray.push({rW : Math.floor(Math.random() * 400)/100 });
			}
			return theArray;
			
		}
		//random vector position
		function vectorPos(axis) {
			return Math.floor(Math.random() * axis)
		}
		const vW = document.documentElement.clientWidth;
		const vH = document.body.offsetHeight;
		const vectorLines = createVectors2().map((item, number) =>

			<path
				ref="pathref"
				key={"pathkey" + number}
				id={"pathID" + number}
				d={"M " + vectorPos(vW) + " " + vectorPos(vH) + " h " + item.rW + " v 500 h -" + item.rW + " Z"}
				stroke="none"
  				strokeWidth="0"
  				fill="#000000" />
			
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