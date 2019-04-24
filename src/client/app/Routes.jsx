import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import HomePage from "./pages/HomePage.jsx";
import MoviesPage from "./pages/MoviesPage.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import App from "./App.jsx";


const Routes = (
	<Route path="/">
	 	<IndexRoute component={HomePage} />
		<Route path="movies" component={MoviesPage}></Route>
		<Route path="movies/:movieId" component={MovieDetails}></Route>
	</Route>
 )
export default Routes;
