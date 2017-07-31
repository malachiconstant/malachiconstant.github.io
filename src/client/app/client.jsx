import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import "./sass/common.scss";
import HomePage from "./pages/HomePage.jsx";
import AboutTheSitePage from "./pages/AboutTheSitePage.jsx";
import MainMenu from "./components/MainMenu.jsx";
import ProgressMeter from "./components/ProgressMeter.jsx";
import VectorStreaks from "./components/VectorStreaks.jsx";
class Client extends React.Component{
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	componentDidMount(){
		var checkScrollSpeed = (function(settings){
		    settings = settings || {};
		  
		    var lastPos, newPos, timer, delta, 
		        delay = settings.delay || 50; // in "ms" (higher means lower fidelity )
		  
		    function clear() {
		      lastPos = null;
		      delta = 0;
		    }
		  
		    clear();
		    
		    return function(){
		      newPos = window.scrollY;
		      if ( lastPos != null ){ // && newPos < maxScroll 
		        delta = newPos -  lastPos;
		      }
		      lastPos = newPos;
		      clearTimeout(timer);
		      timer = setTimeout(clear, delay);
		      return delta;
		    };
		})();

		// listen to "scroll" event
		window.onscroll = function(){
		  console.log( checkScrollSpeed() );
		};		
	}
	render() {
		return(
			<div ref="mainWrapper" className="main-wrapper">
				<VectorStreaks />
				<MainMenu />
				<Router history={ hashHistory }>
					<Route path="/" component={HomePage}></Route>
					<Route path="about" component={AboutTheSitePage}></Route>
				</Router>
				<ProgressMeter />
			</div>
		)
	}
}
ReactDOM.render(
 	React.createElement(Client),
 	document.getElementById('app')
);