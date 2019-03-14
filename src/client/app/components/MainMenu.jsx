import React from 'react';
import {render} from 'react-dom';
import PropTypes from "prop-types";
import {Link, IndexLink} from 'react-router';
import CrossHatch from "../components/CrossHatch.jsx";
import '../sass/MainMenu.scss';

class MainMenu extends React.Component {

	constructor(props) {
		super(props);
	}

	static propTypes = {
		time: PropTypes.string,
		width: PropTypes.number,
		height: PropTypes.number,
		menuOpen: PropTypes.bool,
		duration: PropTypes.number
	}
	// scroll to top of page
	_goTop() {
		TweenMax.to(window, 1, {scrollTo: 0, ease: Power3.easeOut});
	}
	// go to section when menu item is clicked
	goToSection(anchor) {
		console.log(`${anchor}`);
		TweenMax.to(window, 1, {scrollTo: (document.getElementById(`${anchor}`).offsetTop -41), ease: Power3.easeOut});
	}

	render() {
		// absolute positioned menu will fit and resize to dimension of browser
		const listDimensions = {
			width: `${this.props.width}px`,
			height: `${this.props.height - 138}px`
		}

		const menuList = [
			{
				"linkTitle": "About Me",
				"linkDescription": "About Me",
				"hRef" : "about-me"
			},
			{
				"linkTitle": "About The Site",
				"linkDescription": "About The Site",
				"hRef" : "about-the-site"
			},
			{
				"linkTitle": "Pens",
				"linkDescription": "Pens",
				"hRef" : "pens"
			},
			{
				"linkTitle": "Contact",
				"linkDescription": "Contact",
				"hRef" : "contact"
			}
		];

		return(
			<div className={`main-menu ${this.props.time} ${this.props.menuOpen ? "active" : "not-active"}` }>
				<div className="mobile-wrapper">
					<div className="top-bar">
						<div className="main-logo" onClick={() => this._goTop()}><span>jonManalo.com</span></div>
						<div onClick={this.props.toggleMenu} className={"menu-button " + ((this.props.menuOpen) ? "visible" : "hidden")} role="button" aria-haspopup="true" tabIndex="0">
							<div className="bars-container ">
								<div className="common-icon menu-icon top"></div>
								<div className="common-icon menu-icon middle"></div>
								<div className="common-icon menu-icon bottom"></div>
							</div>
							<div className="exit-container">
								<div className="common-icon exit-icon bar1"></div>
								<div className="common-icon exit-icon bar2"></div>
							</div>
						</div>
					</div>
				</div>
				<CrossHatch 
					menuOpen={this.props.menuOpen}
					duration={this.props.duration}
					time={this.props.time}
					height={this.props.height}
					width={this.props.width}
				/>
				<div className="list-container" style={listDimensions}>
					<ul>
						{menuList.map((menu,i) => {
							return (
								<li key={i}>
									<div onClick={() => {this.props.toggleMenu, this.goToSection(menu.hRef)}} title={menu.linkDescription}>
										<span>{menu.linkTitle}</span>
									</div>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		)
	}
}

export default MainMenu;