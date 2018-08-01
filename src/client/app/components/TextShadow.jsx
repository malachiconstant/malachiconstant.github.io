import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import '../sass/TextShadow.scss';


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
	}

	componentDidMount() {
		this.textShadow();
		window.addEventListener('scroll', this.textShadow);
		window.addEventListener('resize', this.textShadow);

	}
	componentWillUnmount() {
  		window.removeEventListener('scroll', this.textShadow);
  		window.removeEventListener('resize', this.textShadow);
	};
	textShadow() {
		const winPos = window.scrollY;
		const winCenter = window.outerHeight / 2.75; 
		const winPC = window.scrollY + winCenter;
		const tsRef = this.tsRef.childNodes;
		// console.log(shCenter); 
		var i;
		for (i = 0; i < tsRef.length; i++) {
			tsRef[i].style.textShadow = "2px " + Math.min(5, Math.max(-5, ((winPos) - (tsRef[i].offsetTop - winCenter)) * 0.015)) + "px 3px rgba(0,0,0,0.3)";
		}
	};
	render() {
		return(
			<div className="text-shadow" ref={this.setTsRef} >
				{this.props.children}
			</div>
		)
	}
}
export default TextShadow;