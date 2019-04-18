import React from 'react';
import {render} from 'react-dom';
import TextShadow from "../components/TextShadow.jsx";
import BoxShadow from "../components/BoxShadow.jsx";

class AboutMe extends React.Component {

	render() {
		return(
			<div className="block">			
				<div id="about-me">
					<TextShadow classAppend="offside_text" role="heading">
						<h2>About Me</h2>
					</TextShadow>
				</div>
				<div className="section about-me">
					<TextShadow parallax="false" rate="0.3">
						<p>I am a front-end web developer based in Toronto. Because of my background in visual arts, I've always been interested in the aesthetics and animations of a site or app. Whenever presented with a design comp, I enjoy problem-solving and finding solutions to match the designers' intent.</p>
						<p>I am an audiophile. I listen to music while I code, and I like playing with musical instruments.  I am a cinephile in my spare time. I am also an avid gamer with a preference for fps games.</p>
						<p>Oh, and I love food!</p>     
					</TextShadow>
					<BoxShadow parallax="true" rate="0.5">
						<img className="profile-image" src="/src/client/public/media/profile.jpg" alt="" />
					</BoxShadow>
				</div>
			</div>
		)
	}
}
export default AboutMe;