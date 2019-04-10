import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import MovieBatch from "../components/MovieBatch.jsx";

class MoviesPage extends React.Component {
	constructor(props) {
	  super(props);
	}

	state = {
		width: window.innerWidth,
		height: window.outerHeight,
		startRelease: 0,
		endRelease: 0,
		data: []
	}

	async componentDidMount() {
		//wait for release range go to state
		await this._nextFriday(5);

		// fetch api according to release date
		const releasePromise = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b9ee7a8429ae1c80a5b558bd87dfe79d&language=en-US&sort_by=popularity.desc&include_adult=false&primary_release_date.gte=${this.state.startRelease}&primary_release_date.lte=${this.state.endRelease}&page=1`);

		await releasePromise
			.then(data => data.json())
			.then(data => {
				this.setState({
					data: data.results
				}) 
				console.dir(data);
			})
			.catch((err) =>{
				console.error(err);
			});

		window.addEventListener('scroll', this._showMore.bind(this));
	}

	_nextFriday(day_in_week) {
		const theDate = new Date();

		// the date adjusts to next friday
		theDate.setDate(theDate.getDate() + (day_in_week - 1 - theDate.getDay() + 7) % 7 + 1);
		const startRelease = theDate.toISOString().slice(0,10);


		// 4 weeks after
		theDate.setDate(theDate.getDay() + 28);
		const endRelease = theDate.toISOString().slice(0,10);
		
		this.setState({
			startRelease,
			endRelease
		});
	}
	_showMore() {
		console.log('hello world');
	}

	render() {
		const data = this.state.data; 
		return(
			<div className="main-page generic-page">

				<h2>Upcoming Movies</h2>
					<div className="movie-page-wrapper">
						<MovieBatch data={data} />
						{/*
							data.map((item, i) => (
								<p key={i}>{item.title}</p>
							))
						*/}
					</div>
			</div>
		)
	}
}
export default MoviesPage;