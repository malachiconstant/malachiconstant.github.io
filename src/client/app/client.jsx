import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import "./sass/common.scss";
import HomePage from "./pages/HomePage.jsx";
import AboutTheSitePage from "./pages/AboutTheSitePage.jsx";
import ProgressMeter from "./components/ProgressMeter.jsx";


class Client extends React.Component{
	render() {
		return(
			<div ref="mainWrapper" className="main-wrapper">
				<ProgressMeter />
				<Router history={ hashHistory }>
					<Route path="/" component={HomePage}></Route>
					<Route path="about" component={AboutTheSitePage}></Route>
				</Router>
			</div>
		)
	}
}
ReactDOM.render(
 	React.createElement(Client),
 	document.getElementById('app')
);