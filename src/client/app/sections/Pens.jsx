import React from 'react';
import {render} from 'react-dom';
import PropTypes from "prop-types";
import TextShadow from "../components/TextShadow.jsx";
import BoxShadow from "../components/BoxShadow.jsx";

class Pens extends React.Component {
	constructor(props) {
	  super(props);
	}
	static propTypes = {
		width: PropTypes.number
	}
	render() {
		const penH = this.props.width > 768 ? 400 : 250;
		return(
			<div className="block">
				<div id="pens">
				</div>
				<div>
					<TextShadow classAppend="offside_text" role="heading">
						<h2>Pens</h2>
					</TextShadow>
				</div>
				<div className="section pens">
					<BoxShadow>
						<p data-height={penH} data-theme-id="0" data-slug-hash="pVXvqY" data-default-tab="result" data-user="malachiconstant" data-pen-title="parallax tests" className="codepen">See the Pen <a href="https://codepen.io/malachiconstant/pen/pVXvqY/">parallax tests</a> by malachiconstant (<a href="https://codepen.io/malachiconstant">@malachiconstant</a>) on <a href="https://codepen.io">CodePen</a>.</p>
					</BoxShadow>
					<BoxShadow>
						<p data-height={penH} data-theme-id="0" data-slug-hash="adQxaO" data-default-tab="result" data-user="malachiconstant" data-pen-title="adQxaO" className="codepen">See the Pen <a href="https://codepen.io/malachiconstant/pen/adQxaO/">adQxaO</a> by malachiconstant (<a href="https://codepen.io/malachiconstant">@malachiconstant</a>) on <a href="https://codepen.io">CodePen</a>.</p>
					</BoxShadow>
					<BoxShadow>
						<p data-height={penH} data-theme-id="0" data-slug-hash="MGpvrN" data-default-tab="result" data-user="malachiconstant" data-pen-title="career-sprite" className="codepen">See the Pen <a href="https://codepen.io/malachiconstant/pen/MGpvrN/">career-sprite</a> by malachiconstant (<a href="https://codepen.io/malachiconstant">@malachiconstant</a>) on <a href="https://codepen.io">CodePen</a>.</p>
					</BoxShadow>
					<BoxShadow>
						<p data-height={penH} data-theme-id="0" data-slug-hash="wxrvdx" data-default-tab="result" data-user="malachiconstant" data-pen-title="grid" className="codepen">See the Pen <a href="https://codepen.io/malachiconstant/pen/wxrvdx/">grid</a> by malachiconstant (<a href="https://codepen.io/malachiconstant">@malachiconstant</a>) on <a href="https://codepen.io">CodePen</a>.</p>

					</BoxShadow>
				</div>
			</div>
		)
	}
}
export default Pens;