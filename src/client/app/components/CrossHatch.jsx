import React from 'react';
import {render} from 'react-dom';
import PropTypes from "prop-types";
import {Link, IndexLink} from 'react-router';
import '../sass/CrossHatch.scss';

class CrossHatch extends React.Component {

	constructor(props) {
  		super(props);
	}

	static propTypes = {
		time: PropTypes.string,
		width: PropTypes.number,
		height: PropTypes.number,
		menuOpen: PropTypes.bool,
		duration: PropTypes.number
	}

	crossLines(dimension,splitBy) {
		const totalLines = dimension * splitBy;
		const round =  Math.round(totalLines);
		return Array.from(Array(round).keys());
	}

	render() {
		// lastLine determines how long the  transition delay of the menu when toggling
		const lastLine = Math.max(
			Math.round(100*((this.crossLines(this.props.width,0.05).length)*0.01))/100,
			Math.round(100*((this.crossLines(this.props.height,0.15).length)*0.01))/100

		);

		const crossHatchStyle = {
			transitionDelay: `${this.props.menuOpen ? 0 : lastLine*1.5}s`
		}

		let recordedTime = this.props.menuOpen ? this.props.duration : new Date().getTime();	

		let totalTime = (recordedTime - this.props.duration) < (lastLine * 1000) ? recordedTime - this.props.duration : lastLine*1000;

		const bgStyle = {
			transitionDelay: `${this.props.menuOpen ? 0 : totalTime/1000}s`
		}

		return(
			<div className={`crosshatch-container ${this.props.time} ${(this.props.menuOpen) ? "open": ""}`} style={crossHatchStyle}>
				<div className="cross-hatch-bg" style={bgStyle}></div>
				<div className="h-container">
					{
						this.crossLines(this.props.height,0.05).map((number) =>
							<div className="h-lines" 
								style={{
									width: `${this.props.menuOpen ? 100 : 0}%`,
									transition: "width 0.5s",
									transitionDelay: `${Math.round(100*(number * 0.02))/100}s`
								}}
								key={`h${number}`}>
							</div>
						)
					}
				</div>

				<div className="v-container">
					{
						this.crossLines(this.props.width,0.05).map((number) =>
							<div className="v-lines" 
								style={{
									height: `${this.props.menuOpen ? this.props.height : 0}px`,
									transition: "height 0.5s",
									transitionDelay: `${Math.round(100*(number * 0.01))/100}s`
								}}
								key={`v${number}`}>
							</div>
						)
					}
				</div>

			</div>
		)
	}
}

export default CrossHatch;