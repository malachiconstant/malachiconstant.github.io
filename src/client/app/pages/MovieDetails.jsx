import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import PropTypes from 'prop-types';
import MainMenu from "../components/MainMenu.jsx";
import {tmdbApi} from "../helpers.js";
import '../sass/MovieDetails.scss';

class MovieDetails extends React.Component {

	constructor(props) {
		super(props);
		this._updateDims = this._updateDims.bind(this);
		this._popStats = this._popStats.bind(this);
		
	}

	state = {
		width: window.innerWidth,
		height: window.outerHeight,
		crew: [],
		time: `afternoon`,
		stats: false
	}
	async componentDidMount() {
		this._timeOfDay();
		window.scroll(0,0);
		window.addEventListener('resize', this._updateDims);
		window.addEventListener('scroll', this._popStats);
		window.addEventListener('load', this._popStats);

		const getCredits = fetch(`https://api.themoviedb.org/3/movie/${this.props.location.state.data.id}/credits?api_key=${tmdbApi()}`);

		await getCredits
			.then(credits => credits.json())
			.then(credits => {

				this.setState({
					crew: credits.crew,
				})
			})
			.catch((err) =>{
				console.error(err);
			});
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this._updateDims);
		window.removeEventListener('scroll', this.popStats);
		window.removeEventListener('load', this.popStats);
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
	// POPULARITY SECTION
	_popStats() {
		// POPULARITY CHART
		CanvasJS.addColorSet("chartRatings",
            [//colorSet Array
            "#ffff00",
           	"transparent"                
            ]);
		const popularity = Math.round(this.props.location.state.data.popularity);
		const animChartDur = (1/(popularity/100)) * 2000;

		const winPos = window.scrollY; 
		const winThresh = winPos + (window.outerHeight);
		const body = document.body;
		const html = document.documentElement;
		const theHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
		
		if(winThresh >= (theHeight * 0.95) && this.state.stats == false) {
			var chart = new CanvasJS.Chart("popularity", {
				colorSet: "chartRatings",
				animationEnabled: true,
				animationDuration: animChartDur,
				backgroundColor: "transparent",
				title:{
					horizontalAlign: "left"
				},
				data: [{
					type: "doughnut",
					startAngle: -90,
					//innerRadius: 60,
					dataPoints: [
						{ y: popularity ? (popularity > 100 ? 100 : popularity) : 0 },
						{ y: (100 - (popularity ? (popularity > 100 ? 100 : popularity) : 0))}
					]
				}]
			});

			chart.render();

			//POPULARITY NUMBER
			const popVar = this.props.location.state.data.popularity
			const popTween={val:0.00};
			const NewVal = Math.round(popVar * 100) / 100;
			const animDur = NewVal/16.67;
			const popRating = document.getElementById("pop-rating");

			TweenMax.to(popTween,2,{val:NewVal,onUpdate:function(){
					popRating.innerHTML=popTween.val.toFixed(2);
				}
			});

			this.setState({
				stats: true
			});

		}

	}
	_findRole(role) {
		this.state.crew.map(crew => `%${crew.job}`);
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
				<div className="img-container">
					<img src={data.poster_path ? bgImage + data.poster_path : data.backdrop_path ? bgImage + data.backdrop_path : placeHolder} alt={data.title} />
				</div>
				<div className="desc">
					<p className="overview">
					{data.overview}
					</p>	
				</div>
				<div className="stats-container">
					<div className="pop-container">
						<span id="pop-rating" className="pop-rating"></span>
						<div id="popularity">
						</div>
						<span className="stats-text pop-text">popularity<br />rating</span>
					</div>
				</div>
				<div className="credits-container">
					<p><span>Director: </span>
					{
						this.state.crew.filter(crew => crew.job == `Director`).map((crew, i) => crew.name).join(`, `)				
					}
					</p>
					<br />
					<p><span>Writer(s): </span>
						{
						this.state.crew.filter(crew => crew.department ==`Writing`).map((crew, i) => crew.name).join(`, `)
						}
					</p>
					
				</div>
			</div>
		)
	}
}



export default MovieDetails;

