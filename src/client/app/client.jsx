import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import Routes from "./Routes.jsx";
import "./sass/common.scss";

class Client extends React.Component{


	render() {
		return(
			<div ref="mainWrapper" className="main-wrapper">
				<Router history={hashHistory} routes={Routes} />
			</div>
		)
	}
}
ReactDOM.render(
 	React.createElement(Client),
 	document.getElementById('app')
);