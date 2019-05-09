import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import PropTypes from 'prop-types';
import MainMenu from "../components/MainMenu.jsx";
import '../sass/MovieDetails.scss';

class MovieDetails extends React.Component {
	constructor(props) {
		super(props);
		this._updateDims = this._updateDims.bind(this);
	}

	state= {
		width: window.innerWidth,
		height: window.outerHeight,
		time: `afternoon`
	}
	componentDidMount() {

		this._timeOfDay();
		window.scroll(0,0);
		window.addEventListener('resize', this._updateDims);
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
		const bgImage = `https://image.tmdb.org/t/p/w1000_and_h563_face`;
		const placeHolder = `src/client/public/media/placeholder.png`;
		const data = this.props.location.state.data;
		const bgStyle = {
			backgroundImage: `url(${data.backdrop_path ? bgImage + data.backdrop_path : data.poster_path ? bgImage + data.poster_path : placeHolder})`,
			minHeight: `${this.state.height}px`
		}
		return(
			<div className="movie-details-page generic-page" style={bgStyle}>
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
					<h1>{data.title}</h1>
				</div>
				<div className="desc">
					<p className="overview">
					{data.overview}
					</p>	
				</div>
				<div className="img-container">
					<img src={data.poster_path ? bgImage + data.poster_path : data.backdrop_path ? bgImage + data.backdrop_path : placeHolder} alt={data.title} />
				</div>
			</div>
		)
	}
}



export default MovieDetails;

