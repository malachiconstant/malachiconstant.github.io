import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import '../sass/ProgressMeter.scss';

class ProgressMeter extends React.Component {
	componentDidMount() {
		const self = this;
		window.addEventListener('load', function() {
			progressBar();
		});
		window.addEventListener('scroll', function(){
			progressBar();
		});
		window.addEventListener('resize', function(){
			progressBar();
		});
		function progressBar() {
			const gauge = self.refs.gauge;
			const winHeight = window.innerHeight;
			const winWidth = window.innerWidth;
			const body = document.body;
			const html = document.documentElement;
			const docHeight = (Math.max( body.scrollHeight, body.offsetHeight,html.clientHeight, html.scrollHeight, html.offsetHeight )) - winHeight;
			const YTop = document.body.scrollTop;
			const pPercentage = (YTop / docHeight) * 100;

			gauge.style.width = pPercentage + "%";
		}
	}
	render() {
		return(
			<div className="progress-meter">
				<div ref="gauge" className="gauge">
				</div>
			</div>
		)
	}
}
export default ProgressMeter;