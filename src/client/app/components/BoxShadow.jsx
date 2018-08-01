import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import '../sass/BoxShadow.scss';

class BoxShadow extends React.PureComponent {
	constructor(props) {
	  super(props);
	  this.state = {
	  };
	  this.bxRef = null;
	  this.setBxRef = element => {
	  	this.bxRef = element;
	  }
	  this.boxShadow = this.boxShadow.bind(this);
	}

	componentDidMount() {
		this.boxShadow();
		window.addEventListener('scroll', this.boxShadow);
		window.addEventListener('resize', this.boxShadow);

	}
	componentWillUnmount() {
  		window.removeEventListener('scroll', this.boxShadow);
  		window.removeEventListener('resize', this.boxShadow);
	};
	boxShadow() {
		const winPos = window.scrollY;
		const winCenter = window.outerHeight / 2.75; 
		const winPC = window.scrollY + winCenter;
		const bxRef = this.bxRef.childNodes; 
		var i;
		for (i = 0; i < bxRef.length; i++) {
			bxRef[i].style.boxShadow = "2px " + Math.min(5, Math.max(-5, ((winPos) - (bxRef[i].offsetTop - winCenter)) * 0.015)) + "px 3px rgba(0,0,0,0.3)";
			if(this.props.parallax == "true") {
				bxRef[i].style.top = -(((winPos) + (bxRef[i].offsetTop - winCenter)) * this.props.rate) + "px";
			}
		}
	};
	render() {
		return(
			<div className="box-shadow" ref={this.setBxRef} >
				{this.props.children}
			</div>
		)
	}
}
export default BoxShadow;