import React from 'react';
import {render} from 'react-dom';
import PropTypes from "prop-types";
import {Link, IndexLink, hashHistory} from 'react-router';
import { svgColors } from "../helpers.js";
import '../sass/GitHubNotification.scss';

class GitHubNotification extends React.Component {
	constructor(props) {
		super(props);
		this._toggleDetails = this._toggleDetails.bind(this);
	}
	state = {
		events: [{type: ""}],
		details: false
	}
	async componentDidMount() {
		const getEvents = fetch(`https://api.github.com/repos/malachiconstant/malachiconstant.github.io/events`);

		await getEvents
			.then(events => events.json())
			.then(events => {
				this.setState({
					events
				});
			})
			.catch((err) =>{
				console.error(err);
			});
	}
	_toggleDetails() {
		this.setState(prevState => ({
			details: !prevState.details
		}))
	}
	_displayEvent() {
		 const first = this.state.events.filter((event, i) => event.type === "PushEvent");
		 
		 if(first[0] != null){
		 	const latest = first[0];
		 	return (
		 		<React.Fragment>
		 		<div onClick={this._toggleDetails} className={`github-preview ${this.state.details}`}>
		 			<div target="_blank" href="https://github.com/malachiconstant/malachiconstant.github.io" className="svg-container">
		 				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
								 viewBox="0 0 500 500" enableBackground="new 0 0 500 500" >
							<g id="Layer_1">
								<rect fill="none" width="500" height="500"/>
							</g>
							<g id="Layer_2">
								<g>
									<path fill={(this.state.details ? '#b3002d' : svgColors(this.props.time,"#e0e0e0","#a600ff"))} d="M226.3,51.3C136.2,61.7,63.1,133.7,51.7,223.6c-12.6,99.7,47.8,187,135.1,216.1c10,1.8,13.8-4.2,13.8-9.5
										c0-4.8-0.2-20.5-0.2-37.2c-50.3,9.2-63.3-12.2-67.3-23.5c-2.2-5.8-12-23.5-20.5-28.2c-7-3.8-17-13-0.2-13.2
										c15.8-0.3,27,14.5,30.8,20.5c18,30.2,46.8,21.8,58.3,16.5c1.8-13,7-21.8,12.8-26.8c-44.5-5-91-22.3-91-98.8
										c0-21.8,7.8-39.8,20.5-53.8c-2-5-9-25.5,2-53c0,0,16.8-5.2,55,20.5c16-4.5,33-6.8,50-6.8s34,2.2,50,6.8c38.2-26,55-20.5,55-20.5
										c11,27.5,4,48,2,53c12.8,14,20.5,31.8,20.5,53.8c0,76.8-46.8,93.8-91.2,98.8c7.2,6.3,13.5,18.3,13.5,37c0,26.8-0.2,48.3-0.2,55
										c0,5.2,3.7,11.5,13.8,9.5C395.2,412.2,450,335.9,450,249.9C450,131.6,347.4,37.4,226.3,51.3z"/>
								</g>
							</g>
							</svg>
		 			</div>
		 			<div className={`update-container ${this.state.details}`}>
		 				<span className="update-time">{`Latest Update: ${latest.created_at.split(`T`)[0]}`}</span>
		 				<span className="details-button">{this.state.details ? `Hide` : `See`} details</span>
		 			</div>
		 		</div>
		 		</React.Fragment>
		 	);
		 }
	}
	_displayDetails() {
		const first = this.state.events.filter((event, i) => event.type === "PushEvent");

		if(first[0] != null){

			return (
				<div className={`detailed-update-container ${this.state.details}`}>
					<div>
						<span>Most Recent Update{first[0].payload.commits.length > 1 ? `s` : ``}</span>
						<span className="exit" onClick={this._toggleDetails}>X</span>
					</div>
					<ul>
						{first[0].payload.commits.map((entry, i) => {
							return (<li key={i}>{entry.message}</li>)
						})}
					</ul>
				</div>
			)
		}
	}
	render() {
		return(
			<React.Fragment>
				<div className={`github-container ${this.props.time} ${this.state.details}`}>
					{this._displayDetails()}
					{this._displayEvent()}
				</div>
			</React.Fragment>
		)
	}
}

export default GitHubNotification;