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
			duration: 0,
			initOffset: 0,
			scrollOffset: 0,
			scrolling: false,
			topBar: true
		};
	   this._toggleMenu = this._toggleMenu.bind(this);
	}
	componentDidMount(){
		const self = this;
		let scrollDetect = self.state.scrolling;

		this.setState({initOffset: window.pageYOffset});
		if (self.state.scrollOffset == self.state.initOffset) {
			self.setState({
				topBar: true
			});
		}
		document.addEventListener('scroll', menuScroll);

		function menuScroll() {
			const initOffset = self.state.initOffset;
			const scrollOffset = self.state.scrollOffset;
			const scrollingAction = (scrollDetect !== self.state.scrolling);
			const scrollUpOrTop = (scrollOffset < initOffset || scrollOffset == 0 || window.pageYOffset < 100);
			const scrollDown = ((scrollOffset - 150) > initOffset);

			if (scrollingAction) {
				self.setState({
					scrolling: true,
					scrollOffset: window.pageYOffset
				});	
				clearTimeout(scrollDetect);
			}
			if(scrollUpOrTop){
				self.setState({
					topBar: true
				});
			}
			if(scrollDown && !self.state.menuOpen){
				self.setState({
					topBar: false
				});
				clearTimeout(scrollDetect);
			}
			scrollDetect = setTimeout(function(){
				self.setState({
					initOffset: window.pageYOffset,
					scrolling: false
				});
			}, 25);
		}

	}
	_toggleMenu(){
		this.setState(prevState => ({
			menuOpen : !prevState.menuOpen,
			duration: this.state.menuOpen ?  this.state.duration : new Date().getTime()
		}));

	}
	render() {
		function renderMenuList(){
			const menuList = [
				{
					"linkTitle": "About Me",
					"linkDescription": "About Me",
					"hRef" : "#aboutme"
				},
				{
					"linkTitle": "About The Site",
					"linkDescription": "About The Site",
					"hRef" : "#aboutthesite"
				},
				{
					"linkTitle": "Playground",
					"linkDescription": "Playground",
					"hRef" : "#playground"
				},
				{
					"linkTitle": "Contact Us",
					"linkDescription": "Contact Us",
					"hRef" : "#contactus"
				}
			];

			return[...menuList].map((menu,i) => {
				return(
					<li key={i}>
						<a href={menu.hRef} title={menu.linkDescription}>
							<span>{menu.linkTitle}</span>
						</a>
					</li>
				)
			} )
		}
		const listDimensions = {
			width: window.innerWidth + "px",
			height: window.innerHeight + "px"
		}
			
		return(
			<div ref="refMenu" className={"main-menu " + ((this.state.menuOpen) ? "active" : "not-active") + " " + ((this.state.topBar) ? "nav-down" : "nav-up")}>
				<div className="mobile-wrapper">
					<div className="top-bar">
						<div className="main-logo">logo will go here</div>
						<div onClick={() => this._toggleMenu()} className={"menu-button " + ((this.state.menuOpen) ? "visible" : "hidden")} role="button" aria-haspopup="true" tabIndex="0">
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
				menuOpen={this.state.menuOpen}
				duration={this.state.duration}
				/>
				<div className="list-container" style={listDimensions}>
					<ul>
						{renderMenuList()}
					</ul>
				</div>
			</div>
		)
	}
}
export default MainMenu;