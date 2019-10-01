import React from "react";
import {render} from "react-dom";
import {Link, IndexLink} from "react-router";
import MainMenu from "../components/MainMenu.jsx";
import "../sass/GenericPage.scss";
import "../sass/PixiPage.scss";
import PixiSection01 from '../sections/PixiSection01.jsx';
import PixiSection02 from '../sections/PixiSection02.jsx';

class PixiPage extends React.Component {
	constructor(props) {
		super(props);
        this._updateDims = this._updateDims.bind(this);
	}
	state = {
			width: window.innerWidth,
            height: window.outerHeight,
            time: 'afternoon'
	}

	componentDidMount() {
		this._timeOfDay();
		window.addEventListener(`resize`, this._updateDims);
	}
	componentWillUnmount() {
        window.removeEventListener(`resize`, this._updateDims);
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
				<h2 className="block">Pixi</h2>
                <ul>
                    <li>testing capabilities of <a target="_blank" href="https://www.pixijs.com/" title="PixiJS">PixiJS</a>, which is a 2D <a href="https://get.webgl.org/" title="WebGL">WebGL</a> renderer</li>
                </ul>
                <PixiSection02 width={this.state.width} height={this.state.height} time={this.state.time} />
                <PixiSection01 width={this.state.width} height={this.state.height} time={this.state.time} />
			</div>
		)
	}
}
export default PixiPage;