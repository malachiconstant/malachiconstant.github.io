import React from 'react';
import {render} from 'react-dom';
import TextShadow from "../components/TextShadow.jsx";
import '../sass/HeroSection.scss';

class Hero extends React.PureComponent {
	constructor(props) {
	  super(props);
	  this.state = {
	  };
	}

	render() {
		const secStyle= {
			height: `${this.props.secHeight - 138}px`
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