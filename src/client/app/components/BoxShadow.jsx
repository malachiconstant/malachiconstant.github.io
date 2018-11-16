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
	  this.mobileImage = this.mobileImage.bind(this);
	}

	componentDidMount() {
		this.boxShadow();
		// this.mobileImage();
		window.addEventListener('load', this.mobileImage);
		// window.addEventListener('scroll', this.boxShadow);
		window.addEventListener('resize', this.boxShadow);
		window.addEventListener('resize', this.mobileImage);
	}
	componentWillUnmount() {
  		// window.removeEventListener('scroll', this.boxShadow);
  		window.removeEventListener('resize', this.boxShadow);
  		window.removeEventListener('resize', this.mobileImage);
	};
	mobileImage() {
			// if(this.props.parallax == "true" && document.body.clientWidth <= 786) {
			// 	this.bxRef.style.marginTop = this.bxRef.childNodes[0].clientHeight * 0.5 + "px";
			// } else {
			// 	this.bxRef.style.marginTop = 0 + "px";
			// }			
	};
	boxShadow() {
		const winPos = window.scrollY;
		const winCenter = window.outerHeight / 3; 
		const winPC = window.scrollY + winCenter;
		const bxRefParent = this.bxRef;
		const bxRef = this.bxRef.childNodes; 
		var i;
		for (i = 0; i < bxRef.length; i++) {
			bxRef[i].style.boxShadow = "2px " + Math.min(5, Math.max(-5, ((winPos) - (bxRef[i].offsetParent.offsetTop - winCenter)) * 0.015)) + "px 3px rgba(0,0,0,0.3)";

			// if(this.props.parallax == "true" && document.body.clientWidth > 768) {
			// 	bxRef[i].style.transform = "translateY(" + (-(Math.min(50, Math.max(-500,(winPos) + (bxRef[i].offsetTop - winCenter)) * this.props.rate))) + "px)";
			// }
			// if(this.props.parallax == "true" && document.body.clientWidth <= 768) {
			// 	bxRef[i].style.transform = "translateY(" + (-(winPos) + (((bxRef[i].offsetTop - winCenter) * 0.015) + (bxRefParent.parentNode.clientHeight * 1.15))) + "px)";
			// }

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