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
import TextShadow from "../components/TextShadow.jsx";
import BoxShadow from "../components/BoxShadow.jsx";
import SvgContainer from "../components/SvgContainer.jsx";
import Hero from '../sections/Hero.jsx';
import AboutMe from '../sections/AboutMe.jsx';
import AboutTheSite from '../sections/AboutTheSite.jsx';
import Pens from '../sections/Pens.jsx';
import Contact from '../sections/Contact.jsx';

class HomePage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			time: "day",
			width: window.innerWidth,
			height: window.outerHeight
		};
	}
	componentDidMount() {
		const link = document.createElement('meta');
		link.name="author";
		link.content="Jon Manalo";
		document.getElementsByTagName('head')[0].appendChild(link);

		const hour = new Date().getHours();
		console.log(hour);
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
		if(hour >= 19 && hour <= 5) {
			this.setState({
				time: "evening"
			});
		}

		this._updateDims();
		window.addEventListener('resize', this._updateDims.bind(this));
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this._updateDims.bind(this));
	}
	_updateDims() {
		this.setState({
			width: window.innerWidth,
			height: window.outerHeight
		});
	}
	_penH() {
		const winW = this.state.width;
		if(winW > 768) {
			return 400;
		}
		else {
			return 250;
		}
	}
	render() {		
		return(
			<div className={"page-container " + this.state.time}>
				<MainMenu time={this.state.time} />
				<div className="page-content-wrapper">
					<div ref="genericPage" className={`generic-page home-page ${this.state.time}`}>

				{/* ======= HERO ======== */}	
						<Hero className={`block`} time={this.state.time} secHeight={this.state.height} />

				{/* ======= ABOUT ME ======== */} 
						<div id="about-me">
						</div>
						<AboutMe />

				{/* ======= ABOUT THE SITE ======== */}
						<AboutTheSite time={this.state.time} />

				{/* ======= PENS ======== */}
						<Pens width={this._penH()}/>

				{/* ======= CONTACT ======== */}
						<Contact time={this.state.time} />

				{/* ======= FOOTER ======== */}
						<div className="block">
							<div className="section footer">
								<span>Jon Manalo - 2018</span>
							</div>
						</div>
					</div>
				</div>
				<ProgressMeter time={this.state.time} />
			</div>
		)
	}
}
export default HomePage;