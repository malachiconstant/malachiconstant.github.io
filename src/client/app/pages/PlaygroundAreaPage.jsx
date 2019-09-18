import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import MainMenu from "../components/MainMenu.jsx";
import '../sass/GenericPage.scss';
import '../sass/PlaygroundAreaPage.scss';

class PlaygroundAreaPage extends React.Component {
	constructor(props) {
		super(props);
		this._updateDims = this._updateDims.bind(this);
	}
	state = {
			width: window.innerWidth,
			height: window.outerHeight
	}

	componentDidMount() {
		this._timeOfDay();
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
		return(

			<div className={`main-page generic-page playground-area-page ${this.state.time}`}>
				<MainMenu 
                    time={this.state.time}
                    width={this.state.width}
                    height={this.state.height}
                    toggleMenu={this._toggleMenu}
                    menuOpen={this.state.menuOpen}
                    duration={this.state.duration}
                    location={this.props.location}
                />
				<h1 className="block">Playground Area</h1>
				<div className="block desc">
					<p>a collection of projects where I can learn and refine some skills, and have fun while doing so!</p>
				</div>
				<div className="block project-container">
					<div className="project-content">
					
							<Link className="project-image" to="playground-area/movies">
                                <div className="img-container">
                                    <img alt="film reel" src="src/client/public/media/placeholder.png" />
                                </div>
							<span>Upcoming Movies</span></Link>
						
					</div>
                    <div className="project-content">
                        
                            <Link className="project-image" to="playground-area/pixi-page">
                                <div className="img-container">
                                    <img alt="PixiJS" src="src/client/public/media/pixijs-v5-logo.png" />
                                </div>
                            <span>PixiJS Page</span></Link>
                        
                    </div>
                    <div className="project-content">
                        
                            <Link className="project-image" to="playground-area/totga">
                                <div className="img-container">
                                    <img alt="The One That Got Away" src="src/client/public/media/totga.jpeg" />
                                </div>
                            <span>The One That Got Away</span></Link>
                        
                    </div>
				</div>
			</div>
		)
	}
}
export default PlaygroundAreaPage;