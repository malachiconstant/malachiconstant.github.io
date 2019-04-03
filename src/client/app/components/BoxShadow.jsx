import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import '../sass/BoxShadow.scss';

class BoxShadow extends React.Component {

	boxRef = React.createRef();

	constructor(props) {
	  super(props);
	  this.boxFX = this.boxFX.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.boxFX);
		window.addEventListener('resize', this.boxFX);
	}

	componentWillUnmount() {
  		window.removeEventListener('scroll', this.boxFX);
  		window.removeEventListener('resize', this.boxFX);
	}
	// box shadow moves as user scrolls page.  shadow position dependent on y position of element in browser window
	boxFX() {
		const winPos = window.scrollY;
		const winCenter = window.outerHeight / 3; 
		const winPC = window.scrollY + winCenter;
		const boxRef = this.boxRef.current.childNodes;

		Array.from(boxRef).map(box => {
			box.style.boxShadow = `2px ${Math.min(8, Math.max(-8, ((winPos) - (box.offsetParent.offsetTop - winCenter)) * 0.015))}px 3px rgba(0,0,0,0.3)`;
		})
	}

	render() {
		return(
			<div className="box-shadow" ref={this.boxRef} >
				{this.props.children}
			</div>
		)
	}
}

export default BoxShadow;