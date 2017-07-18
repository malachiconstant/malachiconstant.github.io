import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import CrossHatch from "../components/CrossHatch.jsx";
import '../sass/MainMenu.scss';

class MainMenu extends React.Component {
		constructor(props) {
	  super(props);
	  this.state = {
	  	menuOpen : false
	  };
	   this._toggleMenu = this._toggleMenu.bind(this);
	}
	componentDidMount() {


	}
	_toggleMenu(){
		console.log("hellowwww");
		this.setState(prevState => ({menuOpen : !prevState.menuOpen}));
	}
	render() {

		return(
			<div className="main-menu">
			<p>something will go here</p>
				<div className="mobile-wrapper">
					<div className="top-bar">
						<div className="main-logo"></div>
						<div onClick={() => this._toggleMenu()} className="menu-button" role="button" aria-haspopup="true" tabIndex="0">x</div>
					</div>
				</div>
				<CrossHatch 
				menuOpen={this.state.menuOpen}
				/>
			</div>
		)
	}
}
export default MainMenu;