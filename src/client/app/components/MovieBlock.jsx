import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import { textCut } from "../helpers.js";

class MovieBlock extends React.Component {
	constructor(props) {
		super(props);
	}
	state= {
		gridNumber: Math.floor(Math.random() * 4) + 1
	}

	static propTypes = {
		data: PropTypes.array
	}
	componentDidMount() {

	}

	render() {
		console.dir(this.props.data);
		const bgImage = `https://image.tmdb.org/t/p/w1000_and_h563_face`;
		const placeHolder = `https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`;

		return(
			<React.Fragment>
				<div className={`movie-batch ${this.props.batch} grid-${this.state.gridNumber}`}>
					{
						(this.props.data).map((data, i) => (

							<div
								className={`movie-block mb-${i}`} 
								style={{
									backgroundImage: `url(${data.backdrop_path ? bgImage + data.backdrop_path : data.poster_path ? bgImage + data.poster_path : placeHolder})`
								}} 
								key={i}
							>
								<div className={`title-block`}>
									<h3>{textCut(data.title, 32)}</h3>
								</div>
								<div className={`desc-block`}>
									<p>{textCut(data.overview, 80)}</p>
								</div>

							</div>
						))
					}
				</div>
			</React.Fragment>
		)
	}
}

export default MovieBlock;

