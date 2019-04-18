import React from 'react';
import {render} from 'react-dom';
import PropTypes from "prop-types";
import {Link, IndexLink} from 'react-router';
import '../sass/ProgressMeter.scss';

class ProgressMeter extends React.Component {

	constructor(props) {
		super(props);
		this._progressBar = this._progressBar.bind(this)
	}

	state = {
		progress: 0
	}

	static propTypes = {
		time: PropTypes.string,
		width: PropTypes.number,
		height: PropTypes.number
	}

	componentDidMount() {
		window.addEventListener('scroll', this._progressBar);
		window.addEventListener('resize', this._progressBar);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this._progressBar);
		window.removeEventListener('resize', this._progressBar);
	}

	_progressBar() {
		const winHeight = this.props.height;
		const winWidth = this.props.width;
		const body = document.body;
		const html = document.documentElement;
		const docHeight = (Math.max( body.scrollHeight, body.offsetHeight,html.clientHeight, html.scrollHeight, html.offsetHeight )) - winHeight;
		const YTop = document.body.scrollTop;
		const pPercentage = (YTop / docHeight) * 100;
		this.setState({
			progress: pPercentage < 100 ? pPercentage : 100
		});
	}

	render() {
		const progressBar = {
			width: `${this.state.progress}%`
		}
		return(
			<div className="progress-meter">
				<div ref="gauge" className="gauge" style={progressBar}>
				</div>
			</div>
		)
	}
}

export default ProgressMeter;