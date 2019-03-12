import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import HomePage from "./pages/HomePage.jsx";
// import MainPage from "./pages/MainPage.jsx";
import AboutTheSitePage from "./pages/AboutTheSitePage.jsx";
import App from "./App.jsx";


const Routes = (
	<Route path="/">
	 	<IndexRoute component={HomePage}/>
		<Route path="about" component={AboutTheSitePage}></Route>
	</Route>
 )
export default Routes;
