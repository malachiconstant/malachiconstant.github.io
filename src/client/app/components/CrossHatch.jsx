import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import '../sass/CrossHatch.scss';

class CrossHatch extends React.Component {
		constructor(props) {
	  super(props);
	  this.state = {
	  	menuVisible: this.props.menuOpen
	  };	
	}
	componentDidMount() {

	}
	render() {

		const hItems = crossLines(window.innerHeight,0.05).map((number) =>
			<div className="h-lines" 
				style={{
					width: ((this.props.menuOpen) ? 100 : 0) + "%",
					transition: "width 0.5s",
					transitionDelay: Math.round(100*(number * 0.02))/100 + "s"
				}}
				key={"h" + number}>
			</div>
		);

		const vItems = crossLines(window.innerWidth,0.05).map((number) =>
			<div className="v-lines" 
				style={{
					height: ((this.props.menuOpen) ? window.innerHeight : 0) + "px",
					transition: "height 0.5s",
					transitionDelay: Math.round(100*(number * 0.01))/100 + "s"
				}}
				key={"v" + number}>
			</div>
		);

		const lastLine = Math.max(
							Math.round(100*((crossLines(window.innerWidth,0.05).length)*0.01))/100,
							Math.round(100*((crossLines(window.innerHeight,0.15).length)*0.01))/100);

		const crossHatchStyle = {
			transitionDelay: ((this.props.menuOpen) ? 0 : lastLine*1.5) + "s"
		}

		if (this.props.menuOpen) {
			var recordedTime = this.props.duration;
			
		} else {
			var recordedTime = new Date().getTime();

		}	

		var totalTime = ((recordedTime - this.props.duration) < (lastLine * 1000)) ? (recordedTime - this.props.duration) : lastLine*1000;

		const bgStyle = {
			transitionDelay: ((this.props.menuOpen) ? 0 : (totalTime/1000)) + "s"
		}

		function crossLines(dimension,splitBy) {
			const totalLines = dimension * splitBy;
			const round =  Math.round(totalLines);
			const theArray = [];
			for (var i=0; i <= round; i++) {
			  theArray.push(i);
			}
			return theArray;
		}
		
		return(
			<div className={`crosshatch-container ${this.props.time} ${(this.props.menuOpen) ? "open": ""}`} style={crossHatchStyle}>
				<div className="cross-hatch-bg" style={bgStyle}></div>
				<div className="h-container">
					{hItems}
				</div>

				<div className="v-container">
					{vItems}
				</div>

			</div>
		)
	}
}
export default CrossHatch;