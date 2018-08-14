import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import '../sass/GenericPage.scss';
import '../sass/HomePage.scss';
import MainMenu from "../components/MainMenu.jsx";
import ProgressMeter from "../components/ProgressMeter.jsx";

class MainPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			time: "day",
		};
	}

	componentDidMount(){
		const hour= new Date().getHours();

		console.log(hour);
		if(hour >= 5 && hour <= 11 ) {
			this.setState({
				time: "morning"
			});
		}
		if(hour >=12 && hour <= 18) {
			this.setState({
				time: "afternoon"
			});
		}
		if(hour >= 19 && hour <= 5) {
			this.setState({
				time: "evening"
			});
		}
	}

	render() {
		const time = this.state.time;
		function PageContent(props) {
			const childrenWithProps = React.Children.map(props.children,
				(child) => React.cloneElement(child, {
					time: time	
				})
			);
			return(
				<div className="page-content-wrapper">{childrenWithProps}</div>
			);
		}
		return(
			<div className={"page-container " + this.state.time} >
					<MainMenu time={this.state.time} />
					<PageContent time={this.state.time} children={this.props.children}/>
				<ProgressMeter time={this.state.time} />
			</div>
		)
	}
}
export default MainPage;