import React from 'react';
import {render} from 'react-dom';
import PropTypes from "prop-types";
import {Link, IndexLink} from 'react-router';
import '../sass/TextShadow.scss';
import '../sass/TextAnim.scss';

class TextShadow extends React.Component {

	tsRef = React.createRef();

	constructor(props) {
	  super(props);
	  this.textFX = this.textFX.bind(this);
	}

	static propTypes = {
		role: PropTypes.string,
		classAppend: PropTypes.string
	}

	componentDidMount() {
		window.addEventListener('scroll', this.textFX);
		window.addEventListener('resize', this.textFX);

	}

	componentWillUnmount() {
  		window.removeEventListener('scroll', this.textFX);
  		window.removeEventListener('resize', this.textFX);
	}
	// text shadow moves as user scrolls page.  shadow position dependent on y position of element in browser window
	textFX() {
		const winPos = window.scrollY;
		const winCenter = window.outerHeight / 3; 
		const winPC = window.scrollY + winCenter;
		const tsRef = this.tsRef.current.childNodes;
		const winThresh = winPos + (window.outerHeight * 0.66666);

		Array.from(tsRef).map(box => {
			box.style.textShadow = `2px ${Math.min(8, Math.max(-8, ((winPos) - (box.offsetParent.offsetTop - winCenter)) * 0.015))}px 3px rgba(0,0,0,0.3)`;
			if(winThresh > box.offsetParent.offsetTop && this.props.role == "heading") {
				box.classList.add("vroom");
			}
		})
	}

	render() {
		return(
			<div className={`text-shadow ${this.props.classAppend ? this.props.classAppend : ``}`} ref={this.tsRef} >
				{this.props.children}
			</div>
		)
	}
}

export default TextShadow;