import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import PropTypes from 'prop-types';
import '../sass/MovieDetails.scss';

class MovieDetails extends React.Component {
	constructor(props) {
		super(props);
		this._updateDims = this._updateDims.bind(this);
	}

	state= {
		width: window.innerWidth,
		height: window.outerHeight
	}
	componentDidMount() {
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
	render() {
		const bgImage = `https://image.tmdb.org/t/p/w1000_and_h563_face`;
		const data = this.props.location.state.data;
		const bgStyle = {
			backgroundImage: `url(${data.backdrop_path ? bgImage + data.backdrop_path : data.poster_path ? bgImage + data.poster_path : placeHolder})`,
			minHeight: `${this.state.height}px`
		}
		return(
			<div className="movie-details-page generic-page" style={bgStyle}>
				<h1>{data.title}</h1>
				<p className="overview">
					{data.overview}
				</p>		
					<img src={data.poster_path ? bgImage + data.poster_path : data.backdrop_path ? bgImage + data.backdrop_path : placeHolder} alt={data.title} />
			</div>
		)
	}
}



export default MovieDetails;

