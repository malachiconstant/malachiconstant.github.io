import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import MovieDetails from "../pages/MovieDetails.jsx";
import PropTypes from 'prop-types';
import { textCut, scrollView } from "../helpers.js";

class MovieBlock extends React.Component {
	constructor(props) {
		super(props);
	}
	state= {
		gridNumber: Math.floor(Math.random() * 7) + 1
	}

	static propTypes = {
		data: PropTypes.array
	}
	componentDidMount() {
	}
	render() {
		return(
			<React.Fragment>
				<div className={`movie-batch ${this.props.batch} grid-${this.state.gridNumber}`}>
					{
						(this.props.data).map((data, i) => (
							<IndBlock data={data} key={i} order={i} />
						))
					}
				</div>
			</React.Fragment>
		)
	}
}
class IndBlock extends React.Component {

	mvRef = React.createRef();

	constructor(props) {
		super(props);
		this._scrollView = this._scrollView.bind(this);
	}
	componentDidMount() {
		this._scrollView();
		window.addEventListener('scroll', this._scrollView);
		window.addEventListener('resize', this._scrollView);

	}

	componentWillUnmount() {
  		window.removeEventListener('scroll', this._scrollView);
  		window.removeEventListener('resize', this._scrollView);
	}	
	_scrollView() {
		scrollView(this.mvRef);	
	}
	render() {
		const bgImage = `https://image.tmdb.org/t/p/w1000_and_h563_face`;
		const placeHolder = `https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`;
		const data = this.props.data;
		return(
				<div
					ref={this.mvRef}
					className={`movie-block-wrapper mb-${this.props.order}`} 
				>
					<div
						className={`movie-block`}
						style={{
						backgroundImage: `url(${data.backdrop_path ? bgImage + data.backdrop_path : data.poster_path ? bgImage + data.poster_path : placeHolder})`
					}}
					>
						<div className={`text-block`}>
							<div className={`title-block`}>
								<h3>{textCut(data.title, 32)}</h3>
							</div>
							<div className={`desc-block`}>
								<p>{textCut(data.overview, 80)}</p>
							</div>
						</div>
						<Link className={`details`} to={`/movies/${data.id}`}><span>details</span></Link>
					</div>
					{/*<Route path={`/movies/:movieId`} component={MovieDetails}/>*/}

				</div>
		)
	}
}

export default MovieBlock;

