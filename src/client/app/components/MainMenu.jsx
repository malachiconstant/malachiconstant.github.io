import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import CrossHatch from "../components/CrossHatch.jsx";
import '../sass/MainMenu.scss';

class MainMenu extends React.Component {
		constructor(props) {
	  super(props);
	  this.state = {
	  	menuOpen : false,
	  	duration: 0
	  };
	   this._toggleMenu = this._toggleMenu.bind(this);
	}
	componentDidMount() {

	}
	_toggleMenu(){
		this.setState(prevState => ({
			menuOpen : !prevState.menuOpen,
			duration: this.state.menuOpen ?  this.state.duration : new Date().getTime()
		}));

	}
	render() {


		return(
			<div className="main-menu">
			<p>something will go here</p>
				<div className="mobile-wrapper">
					<div className="top-bar">
						<div className="main-logo"></div>
						<div onClick={() => this._toggleMenu()} className={"menu-button " + ((this.state.menuOpen) ? "visibe" : "hidden")} role="button" aria-haspopup="true" tabIndex="0">
							<div className="common-icon menu-icon top"></div>
							<div className="common-icon menu-icon middle"></div>
							<div className="common-icon menu-icon bottom"></div>
							<div className="common-icon exit-icon bar-1"></div>
							<div className="common-icon exit-icon bar2"></div>
						</div>
					</div>
				</div>
				<CrossHatch 
				menuOpen={this.state.menuOpen}
				duration={this.state.duration}
				/>
			</div>
		)
	}
}
export default MainMenu;