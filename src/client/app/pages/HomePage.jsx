import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import '../sass/GenericPage.scss';
import '../sass/HomePage.scss';
import TextShadow from "../components/TextShadow.jsx";
import BoxShadow from "../components/BoxShadow.jsx";
import HeroSection from "../components/HeroSection.jsx";



class HomePage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {

		};
	}
	componentWillMount() {
		
	}
	render() {
		return(
			<div ref="genericPage" className="generic-page home-page ">
				<HeroSection>
					<div className="section left">
						<TextShadow>
							<h2>Good {this.props.time}!</h2>
							<p>Welcome to my site.  Most of everything you see here has been designed and developed by yours truly.</p>
						</TextShadow>
					</div>
				</HeroSection>
		{/* ======= ABOUT ME ======== */} 
				<div id="about-me">
				</div>
				<div>
					<TextShadow>
						<h2>About Me</h2>
					</TextShadow>
				</div>
				<div className="section left">
					<TextShadow parallax="false" rate="0.3">
						<p>I am a front-end web developer based in Toronto. Because of my background in visual arts, I've always been interested in the aesthetics and animations of a site or app. Whenever presented with a design comp, I enjoy problem-solving and finding solutions to match the designers' intent.</p>
						<p>I am an audiophile. I listen to music while I code, and I like playing with musical instruments.  I am a cinephile in my spare time. I am also an avid gamer with a preference for fps games.</p>
						<p>Oh, and I love food!</p>     
					</TextShadow>
					<BoxShadow parallax="true" rate="0.5">
						<img className="profile-image" src="/src/client/public/media/profile.jpg" alt="" />
					</BoxShadow>
				</div>
		{/* ======= ABOUT THE SITE ======== */}
				<div id="about-the-site">
				</div>
				<div>
					<TextShadow>
						<h2>About The Site</h2>
					</TextShadow>
				</div>
				<div className="section left">
					<TextShadow parallax="false" rate="0.5">
						<p>This website aims to use the technologies I've learned, thus far.  It will be constantly evolving as I refine the skills I already have, and as I learn new ones.  You can view the <a href="https://github.com/malachiconstant/malachiconstant.github.io" title="github repository" target="_blank">Github repository for this site here.</a></p>
					</TextShadow>
				</div>
				<div className="section">
					<TextShadow>
						<p>Disrupt selvage raclette poutine, raw denim paleo asymmetrical woke chillwave wayfarers. Hot chicken cliche butcher 90's, ugh  messenger bag vaporware iPhone.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Welcome to my site.  Most of everything you see here has been designed and developed by yours truly.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>this is the other paragraph</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Disrupt selvage raclette poutine, raw denim paleo asymmetrical woke chillwave wayfarers. Hot chicken cliche butcher 90's, ugh  messenger bag vaporware iPhone.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Welcome to my site.  Most of everything you see here has been designed and developed by yours truly.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>this is the other paragraph</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Disrupt selvage raclette poutine, raw denim paleo asymmetrical woke chillwave wayfarers. Hot chicken cliche butcher 90's, ugh  messenger bag vaporware iPhone.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Welcome to my site.  Most of everything you see here has been designed and developed by yours truly.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>this is the other paragraph</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Disrupt selvage raclette poutine, raw denim paleo asymmetrical woke chillwave wayfarers. Hot chicken cliche butcher 90's, ugh  messenger bag vaporware iPhone.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Welcome to my site.  Most of everything you see here has been designed and developed by yours truly.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>this is the other paragraph</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Disrupt selvage raclette poutine, raw denim paleo asymmetrical woke chillwave wayfarers. Hot chicken cliche butcher 90's, ugh  messenger bag vaporware iPhone.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Welcome to my site.  Most of everything you see here has been designed and developed by yours truly.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>this is the other paragraph</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Disrupt selvage raclette poutine, raw denim paleo asymmetrical woke chillwave wayfarers. Hot chicken cliche butcher 90's, ugh  messenger bag vaporware iPhone.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Welcome to my site.  Most of everything you see here has been designed and developed by yours truly.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>this is the other paragraph</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Disrupt selvage raclette poutine, raw denim paleo asymmetrical woke chillwave wayfarers. Hot chicken cliche butcher 90's, ugh  messenger bag vaporware iPhone.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Welcome to my site.  Most of everything you see here has been designed and developed by yours truly.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>this is the other paragraph</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Disrupt selvage raclette poutine, raw denim paleo asymmetrical woke chillwave wayfarers. Hot chicken cliche butcher 90's, ugh  messenger bag vaporware iPhone.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Welcome to my site.  Most of everything you see here has been designed and developed by yours truly.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>this is the other paragraph</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Disrupt selvage raclette poutine, raw denim paleo asymmetrical woke chillwave wayfarers. Hot chicken cliche butcher 90's, ugh  messenger bag vaporware iPhone.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Welcome to my site.  Most of everything you see here has been designed and developed by yours truly.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>this is the other paragraph</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Disrupt selvage raclette poutine, raw denim paleo asymmetrical woke chillwave wayfarers. Hot chicken cliche butcher 90's, ugh  messenger bag vaporware iPhone.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Welcome to my site.  Most of everything you see here has been designed and developed by yours truly.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>this is the other paragraph</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Disrupt selvage raclette poutine, raw denim paleo asymmetrical woke chillwave wayfarers. Hot chicken cliche butcher 90's, ugh  messenger bag vaporware iPhone.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Welcome to my site.  Most of everything you see here has been designed and developed by yours truly.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>this is the other paragraph</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Disrupt selvage raclette poutine, raw denim paleo asymmetrical woke chillwave wayfarers. Hot chicken cliche butcher 90's, ugh  messenger bag vaporware iPhone.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Welcome to my site.  Most of everything you see here has been designed and developed by yours truly.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>this is the other paragraph</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Disrupt selvage raclette poutine, raw denim paleo asymmetrical woke chillwave wayfarers. Hot chicken cliche butcher 90's, ugh  messenger bag vaporware iPhone.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Welcome to my site.  Most of everything you see here has been designed and developed by yours truly.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>this is the other paragraph</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Disrupt selvage raclette poutine, raw denim paleo asymmetrical woke chillwave wayfarers. Hot chicken cliche butcher 90's, ugh  messenger bag vaporware iPhone.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Welcome to my site.  Most of everything you see here has been designed and developed by yours truly.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>this is the other paragraph</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Disrupt selvage raclette poutine, raw denim paleo asymmetrical woke chillwave wayfarers. Hot chicken cliche butcher 90's, ugh  messenger bag vaporware iPhone.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Welcome to my site.  Most of everything you see here has been designed and developed by yours truly.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>this is the other paragraph</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Disrupt selvage raclette poutine, raw denim paleo asymmetrical woke chillwave wayfarers. Hot chicken cliche butcher 90's, ugh  messenger bag vaporware iPhone.</p>
					</TextShadow>
				</div>
			</div>
		)
	}
}
export default HomePage;