import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import MovieBlock from "../components/MovieBlock.jsx";
import '../sass/Movies.scss';

class MovieBatch extends React.Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
		data: PropTypes.array
	}
	componentDidMount() {

	}
	// divide arrays
	_chunk(array, size) {
		const chunked_arr = [];
		let index = 0;
		while (index < array.length) {
			chunked_arr.push(array.slice(index, size + index));
			index += size;
		}
		return chunked_arr;
	}
	render() {
		const chunk = this._chunk(this.props.data, 5);
		return(
			<React.Fragment>
				{
					chunk.map((data, i) => (
						<MovieBlock batch={`batch-${i}`} key={i} data={data} />
					))
				}
			</React.Fragment>
		)
	}
}

export default MovieBatch;

