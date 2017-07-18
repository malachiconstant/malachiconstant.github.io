import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import '../sass/CrossHatch.scss';

class CrossHatch extends React.Component {
		constructor(props) {
	  super(props);
	  this.state = {

	  };
	}
	componentDidMount() {

	}
	render() {
		function numArray(num1) {
			const num = num1;
			const numbers = [];
			for (var i=0; i <= num; i++) {
			  numbers.push(i);
			}
			return numbers;
		}
		const hItems = numArray(this.props.hAmt).map((numbers) =>
		  <div className="h-lines" key={"h" + numbers}></div>);
		const vItems = numArray(this.props.vAmt).map((numbers) =>
		  <div className="v-lines" key={"v" + numbers}></div>);

		return(
			<div className="crosshatch-container">
				<div className="h-container">
					{hItems}
				</div>
				<div className="v-container">
					{vItems}
				</div>
			</div>
		)
	}
}
export default CrossHatch;