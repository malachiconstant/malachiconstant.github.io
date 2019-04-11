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
		data: [],
		number: 1,
		total_pages: 1
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
					data: data.results,
					total_pages: data.total_pages,
					number: 1
				}) 
			})
			.catch((err) =>{
				console.error(err);
			});

		window.addEventListener('scroll', () => {
			if (this.state.number <= 20){
				this._showMore(this.state.height);
			}
			
		});
	}

	_nextFriday(day_in_week) {
		const theDate = new Date();

		// the date adjusts to next friday
		theDate.setDate(theDate.getDate() + (day_in_week - 1 - theDate.getDay() + 7) % 7 + 1);
		const startRelease = theDate.toISOString().slice(0,10);


		// 4 weeks after
		theDate.setDate(theDate.getDay() + 112);
		const endRelease = theDate.toISOString().slice(0,10);
		
		this.setState({
			startRelease,
			endRelease
		});
	}
	async _showMore(height) {
		const endBlock = height + (window.scrollY);
		const body = document.body;
 		const html = document.documentElement;
 		const oldData = this.state.data;
		const docHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
		 if (endBlock > (docHeight * 0.99)) {
			const releasePromise2 = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b9ee7a8429ae1c80a5b558bd87dfe79d&language=en-US&sort_by=popularity.desc&include_adult=false&primary_release_date.gte=${this.state.startRelease}&primary_release_date.lte=${this.state.endRelease}&page=${this.state.number + 1}`);

		await releasePromise2
			.then(data => data.json())
			.then(data => {
				const newData = oldData.concat(data.results);
				this.setState({
					data: newData,
					number: this.state.number + 1
				}) 
				console.dir(data);
			})
			.catch((err) =>{
				console.error(err);
			});
		 }
	}

	render() {
		// const data = this.state.data; 
		return(
			<div className="movies-page generic-page">

				<h2>Upcoming Movies</h2>
					<div className="movie-page-wrapper">
								<MovieBatch data={this.state.data} />
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