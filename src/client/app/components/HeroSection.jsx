import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import '../sass/HeroSection.scss';

class BoxShadow extends React.PureComponent {
	constructor(props) {
	  super(props);
	  this.state = {
	  };
	}

	render() {
		return(
			<div className="hero-section" >
				{this.props.children}
			</div>
		)
	}
}
export default BoxShadow;