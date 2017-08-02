import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import '../sass/GenericPage.scss';
import '../sass/HomePage.scss';
import VectorStreaks from "../components/VectorStreaks.jsx";
import MainMenu from "../components/MainMenu.jsx";
import ProgressMeter from "../components/ProgressMeter.jsx";

class MainPage extends React.Component {
	render() {
		return(
			<div className="page-container">
				<VectorStreaks />
					<MainMenu />
					{this.props.children}
				<ProgressMeter />
			</div>
		)
	}
}
export default MainPage;