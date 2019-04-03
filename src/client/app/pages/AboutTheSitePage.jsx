import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';

class AboutTheSitePage extends React.Component {
	constructor(props) {
	  super(props);
	}


	render() {

		// const postsPromise = fetch('http://www.omdbapi.com/?s=darjeeling&apikey=cb5bc753');

		return(
			<div className="main-page generic-page">
				<p>Lorem ipsum dolor amet gastropub farm-to-table everyday carry mixtape deep v knausgaard sustainable fanny pack kale chips godard enamel pin. Slow-carb drinking vinegar tousled, ugh health goth synth kitsch occupy celiac green juice. Salvia unicorn palo santo four loko listicle. Af polaroid freegan, beard selfies meh blue bottle twee pickled fingerstache disrupt quinoa blog.</p>

			</div>
		)
	}
}
export default AboutTheSitePage;