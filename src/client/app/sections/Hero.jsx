import React from 'react';
import {render} from 'react-dom';
import PropTypes from "prop-types";
import TextShadow from "../components/TextShadow.jsx";
import '../sass/HeroSection.scss';

class Hero extends React.Component {
	constructor(props) {
	  super(props);
	}

static propTypes = {
		time: PropTypes.string,
		height: PropTypes.number
	}

	render() {
		const secStyle= {
			height: `${this.props.height - 138}px`
		}
		return(
			<div className={`hero-section ${this.props.time}`} id="heroSection" style={secStyle}>
					<div className="section">
						<TextShadow>
							<h2>Good {this.props.time}!</h2>
							<p>Welcome to my site.  Most of everything you see here has been designed and developed by yours truly.</p>
						</TextShadow>
					</div>	
			</div>
		)
	}
}
export default Hero;