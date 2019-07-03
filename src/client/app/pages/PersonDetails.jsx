import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink, Router, Route, IndexRoute, hashHistory} from 'react-router';
import PropTypes from 'prop-types';
import MainMenu from "../components/MainMenu.jsx";
import '../sass/MovieDetails.scss';
import '../sass/PersonDetails.scss';
import {tmdbApi} from "../helpers.js";

class PersonDetails extends React.Component {

	constructor(props) {
		super(props);
		this._updateDims = this._updateDims.bind(this);	
	}

	state = {
		width: window.innerWidth,
		height: window.outerHeight,
		time: `afternoon`,
		person: []
	}

	async componentDidMount() {
		this._timeOfDay();
		window.scroll(0,0);
		window.addEventListener('resize', this._updateDims);

		const getPerson = fetch(`https://api.themoviedb.org/3/person/${this.props.location.state.crew.id}?api_key=${tmdbApi()}`);

		await getPerson
			.then(person => person.json())
			.then(person => {
				this.setState({
					person
				})
			})
			.catch((err) =>{
				console.error(err);
			});
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this._updateDims);
	}
	_updateDims() {
		this.setState({
			width: window.innerWidth,
			height: window.outerHeight
		});
	}
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

	render() {
		const data = this.props.location.state.crew;
		const imagePath = `https://image.tmdb.org/t/p/h632`;
		return (
			<div className="person-details-page movie-details-page generic-page">
				<MainMenu 
					time={this.state.time}
					width={this.state.width}
					height={this.state.height}
					toggleMenu={this._toggleMenu}
					menuOpen={this.state.menuOpen}
					duration={this.state.duration}
					location={this.props.location}
				/>
				<div className="title">
					<h1>{data.name}</h1>
				</div>
				<div className="img-container">
					<img src={imagePath + data.profile_path} alt={data.title} />
				</div>
				<div className="desc">
					<p className="overview">
					{this.state.person.biography}
					</p>	
				</div>
			</div>

		)
	}
}

export default PersonDetails;