import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import MovieBatch from "../components/MovieBatch.jsx";
import MainMenu from "../components/MainMenu.jsx";

class MoviesPage extends React.Component {
	constructor(props) {
	  super(props);
	  this._showScroll = this._showScroll.bind(this);
	  this._updateDims = this._updateDims.bind(this);
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

		this._timeOfDay();
		window.addEventListener('resize', this._updateDims);

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

		window.addEventListener('scroll', this._showScroll);

	}

	componentWillUnmount() {
		window.removeEventListener('resize', this._updateDims);
		window.removeEventListener('scroll', this._showScroll);
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
	//Show more results
	_showScroll() {
		if (this.state.number <= 20){
			this._showMore(this.state.height);
		}
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
				<MainMenu 
					time={this.state.time}
					width={this.state.width}
					height={this.state.height}
					toggleMenu={this._toggleMenu}
					menuOpen={this.state.menuOpen}
					duration={this.state.duration}
					location={this.props.location}
				/>

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