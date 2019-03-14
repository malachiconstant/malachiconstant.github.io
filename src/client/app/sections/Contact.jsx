import React from 'react';
import {render} from 'react-dom';
import PropTypes from "prop-types";
import TextShadow from "../components/TextShadow.jsx";
import BoxShadow from "../components/BoxShadow.jsx";
import { svgColors } from "../helpers.js";

class Contact extends React.Component {
	constructor(props) {
	  super(props);
	}

	static propTypes = {
		time: PropTypes.string,
	}

	render() {

		return(
			<div className={`block shift-01 ${this.props.time}`}>
				<div id="contact">
				</div>
				<div>
					<TextShadow classAppend="offside_text" role="heading">
						<h2>Contact</h2>
					</TextShadow>
					<div className="section contact">
						<p>For any inquiries, please contact me through &nbsp;&nbsp;</p>
						<a href="https://www.linkedin.com/in/jon-manalo-7588b653" title="LinkedIn" target="_blank">
							<svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
							viewBox="0 0 288 76" enableBackground="new 0 0 288 76" >
								<g>
									<path id="path16_1_" fill={svgColors(this.props.time,"#c0c0c0","#323232")} d="M0,64h32V54H12V14H0C0,14,0,64,0,64z"/>
									<path id="path18_1_" fill={svgColors(this.props.time,"#c0c0c0","#323232")} d="M47,64V30H36v34H47z M41.9,25c4,0,6.5-2.6,6.5-5.9
								c-0.1-3.4-2.5-5.9-6.4-5.9c-3.9,0-6.5,2.6-6.5,5.9C35.5,22.4,38,25,41.9,25L41.9,25L41.9,25z"/>
									<path id="path20_1_" fill={svgColors(this.props.time,"#c0c0c0","#323232")} d="M54.5,64H65V45c0-1,0.1-2,0.3-2.8c0.8-2,2.5-4.1,5.4-4.1
								c3.8,0,5.3,3.1,5.3,7.7V64h12V44.6c0-10.4-5.5-15.3-12.9-15.3c-6,0-8.7,3.4-10.2,5.7H65v-5H54.5C54.7,33.2,54.5,64,54.5,64L54.5,64
								z"/>
									<path id="path22_1_" fill={svgColors(this.props.time,"#c0c0c0","#323232")} d="M104,14H93v50h11V52.8l2.7-3.6l8.6,14.8h13.5l-14.5-21.4
								L127.1,28h-13.2c0,0-9,12.9-9.8,14.5L104,14L104,14z"/>
									<path id="path24_1_" fill={svgColors(this.props.time,"#c0c0c0","#323232")} d="M161,49.1c0.2-0.9,0.4-2.6,0.4-4.5
								c0-8.9-4.5-17.9-16.4-17.9c-12.7,0-18.6,10.1-18.6,19.2c0,11.3,7.2,18.3,19.6,18.3c5,0,9.6-0.7,13.3-2.3l-1.5-7.6
								c-3.1,1-6.2,1.5-10.2,1.5c-5.3,0-10-2.2-10.4-6.9L161,49.1L161,49.1z M136.7,42c0.3-2.9,2.3-7.3,7.2-7.3c5.2,0,6.4,4.6,6.4,7.3
								H136.7z"/>
									<path id="path26_1_" fill={svgColors(this.props.time,"#c0c0c0","#323232")} d="M189,14v17h-0.1c-1.6-2.4-5-4-9.5-4
								c-8.7,0-16.3,6.9-16.2,18.8c0,11,6.9,18.1,15.5,18.1c4.7,0,9.1-2,11.3-5.9h0.4l0.5,6h9.6c-0.1-2.4-0.3-6.6-0.3-10.7V14H189L189,14z
								M189,47.9c0,0.9-0.1,1.8-0.2,2.5c-0.7,3.2-3.4,5.4-6.7,5.4c-4.7,0-7.8-3.8-7.8-9.8c0-5.7,2.6-10.2,7.9-10.2c3.5,0,6,2.4,6.7,5.4
								c0.2,0.7,0.2,1.4,0.2,2.1L189,47.9L189,47.9z"/>
								</g>
								<path fill="#D3D3D3" d="M282.4,0h-64.8c-3.1,0-5.6,2.4-5.6,5.4v65.1c0,3,2.5,5.4,5.6,5.4h64.8c3.1,0,5.6-2.4,5.6-5.4V5.4
								C288,2.4,285.5,0,282.4,0z M235,64h-11V30h11V64z M229.3,25L229.3,25L229.3,25c-3.9,0-6.4-2.6-6.4-5.9c0-3.4,2.6-5.9,6.5-5.9
								c3.9,0,6.3,2.6,6.4,5.9C235.8,22.4,233.3,25,229.3,25z M276,64h-11V45.8c0-4.6-1.7-7.7-5.8-7.7c-3.1,0-5,2.1-5.8,4.1
								C253.1,43,253,44,253,45v19h-11.4c0,0,0.1-30.8,0-34H253v4.9c1.5-2.3,4.2-5.6,10.1-5.6c7.4,0,12.9,4.8,12.9,15.3V64z"/>
							</svg>
						</a>
						
					</div>
					<div className="section">
						<p><a target="_blank" href="/src/client/public/media/JonManalo.pdf">CV</a></p>
					</div>
				</div>
			</div>
		)
	}
}
export default Contact;