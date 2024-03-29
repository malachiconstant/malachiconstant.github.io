import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import '../sass/GenericPage.scss';
import '../sass/HomePage.scss';
import '../sass/TechWrapper.scss';
import '../sass/Pens.scss';
import '../sass/Contact.scss';
import MainMenu from "../components/MainMenu.jsx";
import ProgressMeter from "../components/ProgressMeter.jsx";
import Hero from '../sections/Hero.jsx';
import AboutMe from '../sections/AboutMe.jsx';
import AboutTheSite from '../sections/AboutTheSite.jsx';
import Pens from '../sections/Pens.jsx';
import Contact from '../sections/Contact.jsx';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this._updateDims = this._updateDims.bind(this);
	}
	state = {
			time: "day",
			width: window.innerWidth,
			height: window.outerHeight,
			menuOpen: false,
			duration: 0
	};

	componentDidMount() {
		const link = document.createElement('meta');
		link.name="author";
		link.content="Jon Manalo";
		document.getElementsByTagName('head')[0].appendChild(link);

		this._timeOfDay();
		window.addEventListener('resize', this._updateDims);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this._updateDims);
	}
	// toggle main menu
	_toggleMenu = () => {
		this.setState({
			menuOpen : this.state.menuOpen ? false : true,
			duration: this.state.menuOpen ?  this.state.duration : new Date().getTime()
		});
	}
	// determine color scheme, depending on time of day
	_timeOfDay() {
		const hour = new Date().getHours();
		if(hour >= 5 && hour <= 11 ) {
			this.setState({
				time: "morning"
			});
		}
		if(hour >=12 && hour <= 18) {
			this.setState({
				time: "afternoon"
			});
		}
		if(hour >= 19 || hour <= 5) {
			this.setState({
				time: "evening"
			});
		}
	}
	// update dimensions of browser
	_updateDims() {
		this.setState({
			width: window.innerWidth,
			height: window.outerHeight
		});
	}

	render() {	

		return(
			<div className={"page-container " + this.state.time}>
				<MainMenu 
					time={this.state.time}
					width={this.state.width}
					height={this.state.height}
					toggleMenu={this._toggleMenu}
					menuOpen={this.state.menuOpen}
					duration={this.state.duration}
					location={this.props.location}
				/>
				<div className="page-content-wrapper">
					<div ref="genericPage" className={`generic-page home-page ${this.state.time}`}>
            <div 
              className="blm_container"
              style={
                {height: this.state.width > 300 ? `${(this.state.height - 120)}px` : `${this.state.height - 95}px`}
              }
            >
							<a href="https://blacklivesmatter.ca/">
								<img alt="BLM" src="/src/client/public/media/blm.svg" />
							</a>
            </div>
						{/* ======= HERO ======== */}	
						<Hero className={`block`} time={this.state.time} height={this.state.height} />

						{/* ======= ABOUT ME ======== */} 
						<div id="about-me">
						</div>
						<AboutMe />

						{/* ======= ABOUT THE SITE ======== */}
						<AboutTheSite time={this.state.time} />

						{/* ======= CONTACT ======== */}
						<Contact time={this.state.time} />
						{/* ======= FOOTER ======== */}
						<div className="block">
							<div className="section footer">
								<span>{`Jon Manalo -  ${new Date().getFullYear()}`}</span>
							</div>
						</div>
					</div>
				</div>
				<ProgressMeter
					time={this.state.time}
					width={this.state.width}
					height={this.state.height}
				/>
			</div>
		)
	}
}

export default HomePage;