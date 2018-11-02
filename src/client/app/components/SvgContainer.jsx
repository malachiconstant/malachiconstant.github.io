import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import '../sass/SvgContainer.scss';

class SvgContainer extends React.PureComponent {
	constructor(props) {
	  super(props);
	  this.state = {
	  };
	  this.tsRef = null;
	  this.setTsRef = element => {
	  	this.tsRef = element;
	  }
	  this.SvgAnim = this.SvgAnim.bind(this);
	}

	componentDidMount() {
		window.addEventListener('load', this.SvgAnim);
		window.addEventListener('scroll', this.SvgAnim);

	}
	componentWillUnmount() {
  		window.removeEventListener('scroll', this.SvgAnim);
	};

	SvgAnim() {
		const winPos = window.scrollY; 
		const winThresh = winPos + (window.outerHeight * 0.66666);
		const tsRef = this.tsRef;
			if(winThresh > tsRef.offsetTop) {
				tsRef.classList.add('flips');
			}
			
	};
	render() {
		return(
			<div className={`svg-container ${this.props.classAppend ? this.props.classAppend : ""}`} ref={this.setTsRef} >
				{this.props.children}
			</div>
		)
	}
}
export default SvgContainer;