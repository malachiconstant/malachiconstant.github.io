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
        person: [],
        credits: []
    }

    componentDidMount() {
        this._timeOfDay();
        window.scroll(0,0);
        window.addEventListener('resize', this._updateDims);

        this._getPersonAndCreds().then(([person, credits]) => {
            this.setState({
                person,
                credits
            });
        })


    }
    componentWillUnmount() {
        window.removeEventListener('resize', this._updateDims);
    }
    _getPersons() {
        return fetch(`https://api.themoviedb.org/3/person/${this.props.location.state.crew.id}?api_key=${tmdbApi()}`).then(person => person.json()).catch((err) =>{
                console.error(err);
            });
    }
    _getCreds() {
        return fetch(`https://api.themoviedb.org/3/person/${this.props.location.state.crew.id}/combined_credits?api_key=${tmdbApi()}`).then(credits => credits.json()).catch((err) =>{
                console.error(err);
            });
    }
    _getPersonAndCreds() {
        return Promise.all([this._getPersons(), this._getCreds()]);
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
        const bgPath = `https://image.tmdb.org/t/p/original`


             // console.log(Array.from(this.state.credits.crew));
            const arrLength = this.state.credits.crew ? this.state.credits.crew.filter((crew, i, arr) => crew.job == `Director` && crew.backdrop_path != null).length -1 : ``;
            const randomBg = this.state.credits.crew ? this.state.credits.crew.filter((crew, i, arr) => crew.job == `Director`)[Math.floor(Math.random() * arrLength)].backdrop_path : ``;
            
            const bgImage = {
                backgroundImage: `url(${imagePath}${randomBg})`,
                minHeight: `${this.state.height}px`
            }
        
        return (
            <div className="person-details-page movie-details-page generic-page" style={bgImage}>
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
                <div className="also-in credits-container">
                    <p><span className="job-title">Also directed: </span>
                    {
                        this.state.credits.crew ? ( 
                        this.state.credits.crew.filter(crew => crew.job == `Director`).map((crew, i, arr) => {
                            return (<span key={i}>{crew.title ? crew.title : crew.name}{i === arr.length - 1 ? ``: `, `}</span>)
                        })) : ``
                    }</p>
                </div>
            </div>

        )
    }
}

export default PersonDetails;