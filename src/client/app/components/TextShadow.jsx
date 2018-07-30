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
	}

	componentDidMount() {
		this.textShadow(this.tsRef);
	}
	textShadow(theRef) {
			console.dir(theRef.childNodes.length);
			var i;
			for (i = 0; i < theRef.childNodes.length; i++) {
				theRef.childNodes[i].style.textShadow = "0px 0px 5px rgba(0,0,0,0.5)";
			}
	}
	render() {
				return(
					<div className="text-shadow" ref={this.setTsRef} >
						{this.props.children}
					</div>
				)
	}
}
export default TextShadow;