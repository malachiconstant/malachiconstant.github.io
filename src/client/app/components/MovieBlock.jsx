import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

class MovieBlock extends React.Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
		data: PropTypes.array
	}
	componentDidMount() {

	}
	_movieStyle(bgImage) {
		return (
			{backgroundImage: `url(https://image.tmdb.org/t/p/w370_and_h556_bestv2/${bgImage})`}
		)
	}
	render() {
		console.dir(this.props.data);

		return(
			<React.Fragment>
				{
					(this.props.data).map((data, i) => (
						<div 
							style={this._movieStyle(data.poster_path)} 
							className={`${this.props.batch}`} key={i}>{data.title}</div>
					))
				}
			</React.Fragment>
		)
	}
}

export default MovieBlock;

