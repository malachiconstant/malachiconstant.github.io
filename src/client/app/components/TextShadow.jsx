import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import '../sass/TextShadow.scss';
import '../sass/TextAnim.scss';

class TextShadow extends React.PureComponent {
	constructor(props) {
	  super(props);
	  this.state = {
	  };
	  this.tsRef = null;
	  this.setTsRef = element => {
	  	this.tsRef = element;
	  }
	  this.textShadow = this.textShadow.bind(this);
	  this.textAnim = this.textAnim.bind(this);
	}

	componentDidMount() {
		this.textShadow();
		window.addEventListener('load', this.textAnim);
		window.addEventListener('scroll', this.textShadow);
		window.addEventListener('scroll', this.textAnim);
		window.addEventListener('resize', this.textShadow);

	}
	componentWillUnmount() {
  		window.removeEventListener('scroll', this.textShadow);
  		window.removeEventListener('scroll', this.textAnim);
  		window.removeEventListener('resize', this.textShadow);
	};
	textShadow() {
		const winPos = window.scrollY;
		const winCenter = window.outerHeight / 3; 
		const winPC = window.scrollY + winCenter;
		const tsRef = this.tsRef.childNodes;
		// console.log(shCenter); 
		var i;
		for (i = 0; i < tsRef.length; i++) {
			tsRef[i].style.textShadow = "2px " + Math.min(5, Math.max(-5, ((winPos) - (tsRef[i].offsetParent.offsetTop - winCenter)) * 0.015)) + "px 3px rgba(0,0,0,0.3)";
			// if (this.props.role == "heading") {
			// 	console.dir('yes title role');
			// }
		}
	};
	textAnim() {
		const winPos = window.scrollY; 
		const winThresh = winPos + (window.outerHeight * 0.66666);
		const tsRef = this.tsRef.childNodes;
		var i;
		for (i = 0; i < tsRef.length; i++) {
			if(winThresh > tsRef[i].offsetParent.offsetTop && this.props.role == "heading") {
				tsRef[i].classList.add('vroom');
			}
			
		}
	};
	render() {
		return(
			<div className={`text-shadow ${this.props.classAppend ? this.props.classAppend : ""}`} ref={this.setTsRef} >
				{this.props.children}
			</div>
		)
	}
}
export default TextShadow;