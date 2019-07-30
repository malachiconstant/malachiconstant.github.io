import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import MainMenu from "../components/MainMenu.jsx";
import * as PIXI from 'pixi.js';
import '../sass/GenericPage.scss';
import '../sass/PixiPage.scss';

class PixiPage extends React.Component {
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

         let app = new PIXI.Application({ 
            antialias: true,    // default: false
            transparent: false, // default: false
            resolution: 1,
            backgroundColor: 0xFF0000  
          }
        );
        // app.renderer.backgroundColor = 0xFF0000;  
        document.getElementById("pixi-wrapper").appendChild(app.view);
        app.renderer.view.style.position = "absolute";
        app.renderer.view.style.display = "block";
        app.renderer.autoResize = true;
        app.renderer.resize(window.innerWidth, window.innerHeight);
        window.addEventListener('resize', function(){
            app.renderer.resize(window.innerWidth, window.innerHeight);
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

		return(

			<div className={`main-page generic-page pixi-page ${this.state.time}`}>
				<MainMenu 
                    time={this.state.time}
                    width={this.state.width}
                    height={this.state.height}
                    toggleMenu={this._toggleMenu}
                    menuOpen={this.state.menuOpen}
                    duration={this.state.duration}
                    location={this.props.location}
                />
				<h1 className="block">Pixi</h1>
                <div id="pixi-wrapper"></div>
			</div>
		)
	}
}
export default PixiPage;