import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import CrossHatch from "../components/CrossHatch.jsx";
import '../sass/MainMenu.scss';

class MainMenu extends React.Component {
	componentDidMount() {

	}
	render() {
		return(
			<div className="main-menu">
				<div className="mobile-wrapper">
					<div className="top-bar">
						<div className="main-logo"></div>
						<div className="menu-button" role="button" aria-haspopup="true" tabIndex="0">x</div>
					</div>
				</div>
				<CrossHatch 
					hAmt={100} vAmt={50}
				/>
			</div>
		)
	}
}
export default MainMenu;