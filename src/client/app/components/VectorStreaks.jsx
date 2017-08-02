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
		const self = this;
		let perSquareArea = 90000;

		var lastPos = null;
		var scrollSpeed = 0;

		this._svgContainerDims();
		this._generateAmount(perSquareArea);
		 
		window.addEventListener("resize", function(){			
			self._svgContainerDims();
			self._generateAmount(perSquareArea);

		});
		window.addEventListener("scroll", function(){			
			// self._checkScrollSpeed();
			checkScrollSpeed();

		});
		function checkScrollSpeed(){
			const newPos = window.scrollY;
			if( lastPos != null){
				scrollSpeed = newPos - lastPos;
				clearTimeout(timer);
			}
			const timer = setTimeout(function(){
				lastPos = newPos;
			}, 50);
			return scrollSpeed;
		}

	}
		_svgContainerDims() {
			const svgContainer = this.refs.svgContainer;
			svgContainer.setAttribute("width", document.documentElement.clientWidth);
			svgContainer.setAttribute("height", document.body.offsetHeight);
		}
		_generateAmount(perSquareArea) {
			const docArea = document.documentElement.clientWidth * document.body.offsetHeight;
			const rawAmountPerArea = docArea/perSquareArea;
			const roundedAmountPerArea = Math.ceil(rawAmountPerArea/100)*100;
			this.setState({ vectorAmount: roundedAmountPerArea });
		}	

	_createVectors() {

		const vW = document.documentElement.clientWidth;
		const vH = document.body.offsetHeight;
		const vectorAmount = this.state.vectorAmount;
		const theArray = [];
		for (var i=0; i <= vectorAmount; i++) {
		  theArray.push({
		  	rW : Math.floor(Math.random() * 400)/100,
		  	vW : Math.floor(Math.random() * vW),
		  	vH : Math.floor(Math.random() * vH),
		  	rH : 200
		  });
		}
		return theArray;		
	}
	render() {
		const self = this;
		const vectorLines = self._createVectors().map((item, number) =>
			<path
				className="vector-streak"
				ref="pathref"
				key={"pathkey" + number}
				id={"pathID" + number}
				d={"M " + item.vW + " " + item.vH + " h " + item.rW + " v " + item.rH + " h -" + item.rW + " Z"}
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