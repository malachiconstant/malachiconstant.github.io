import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute} from 'react-router';
import HomePage from "./pages/HomePage.jsx";
import PlaygroundAreaPage from "./pages/PlaygroundAreaPage.jsx";
import PixiPage from "./pages/PixiPage.jsx";
import MoviesPage from "./pages/MoviesPage.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import PersonDetails from "./pages/PersonDetails.jsx";
import SpotifyPage from "./pages/SpotifyPage.jsx";
import App from "./App.jsx";


const Routes = (
	<Route path="/">
	 	<IndexRoute component={HomePage} />
		<Route path="playground-area/movies" component={MoviesPage}></Route>
		<Route path="playground-area" component={PlaygroundAreaPage}></Route>
		<Route path="playground-area/movies/:movieId" component={MovieDetails}></Route>
		<Route path="playground-area/movies/person/:personId" component={PersonDetails}></Route>
		<Route path="playground-area/pixi-page" component={PixiPage}></Route>
		<Route path="playground-area/spotify-page" component={SpotifyPage}></Route>

	</Route>
 )
export default Routes;
