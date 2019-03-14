import React from 'react';
import {render} from 'react-dom';
import PropTypes from "prop-types";
import {Link, IndexLink} from 'react-router';
import '../sass/SvgContainer.scss';

class SvgContainer extends React.Component {

	svgRef = React.createRef();

	constructor(props) {
	  super(props);
	  this.SvgAnim = this.SvgAnim.bind(this);
	}

	static propTypes = {
		classAppend: PropTypes.string
	}

	componentDidMount() {
		window.addEventListener('scroll', this.SvgAnim);

	}

	componentWillUnmount() {
  		window.removeEventListener('scroll', this.SvgAnim);
	};

	SvgAnim() {
		const winPos = window.scrollY; 
		const winThresh = winPos + (window.outerHeight * 0.66666);
		const svgRef = this.svgRef.current;
		if(winThresh > svgRef.offsetTop) {
			svgRef.classList.add('flips');
		}
	}

	render() {
		return(
			<div className={`svg-container ${this.props.classAppend ? this.props.classAppend : ""}`} ref={this.svgRef} >
				{this.props.children}
			</div>
		)
	}
}

export default SvgContainer;