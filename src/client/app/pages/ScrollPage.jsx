import React from "react";
import {render} from "react-dom";
import {Link, IndexLink} from "react-router";
import MainMenu from "../components/MainMenu.jsx";
import * as PIXI from "pixi.js";
import "../sass/GenericPage.scss";
import { throwStatement } from "babel-types";
// import "../sass/ScrollPage.scss";

class ScrollPage extends React.Component {

	constructor(props) {
		super(props);
        this._updateDims = this._updateDims.bind(this);
        this._PIXIScroll = this._PIXIScroll.bind(this);
	}
	state = {
        width: window.innerWidth,
        height: window.outerHeight,
        time: 'afternoon',
        lastScrollTop: 0
	}

	componentDidMount() {
		this._timeOfDay();
        window.addEventListener(`resize`, this._updateDims);

        this.pa = new PIXI.Application({
            antialias: false,
            transparent: false,
            resolution: 1,
            width: this.state.width - 15,
            height: this.state.height
        });

        document.getElementById('scroll_this').appendChild(this.pa.view);

        const container = new PIXI.Container();
        container.x = this.state.width/2;

        this.pa.stage.addChild(container);
        
        let texture = PIXI.Texture.from(`src/client/public/media/perspective.png`);
        
        let blocks = new PIXI.TilingSprite(texture, this.state.width, this.state.height);
        let blocks2 = new PIXI.TilingSprite(texture, this.state.width, this.state.height);
        let blocks3 = new PIXI.TilingSprite(texture, this.state.width, this.state.height);
        let blocks4 = new PIXI.TilingSprite(texture, this.state.width, this.state.height);

        this._generateTile(blocks, 0.5, 0, -80, 0.7);
        this._generateTile(blocks2, 0.4, 0.02, -300, 0.5);
        this._generateTile(blocks3, 0.3, 0.02, -594, 0.4);
        this._generateTile(blocks4, 0.2, 0.02, 11, 0.2);



        window.addEventListener('scroll', this._PIXIScroll);
        
    }
    
	componentWillUnmount() {
        window.removeEventListener(`resize`, this._updateDims);
        // delete this._PIXIScript();
        this.pa.destroy(true);
        window.removeEventListener('scroll', this._PIXIScroll);
    }

    _generateTile(tileName, sCale,xPos, yPos, op) {
        this.pa.stage.addChild(tileName);
        tileName.tileScale.x = sCale;
        tileName.tileScale.y = sCale;
        tileName.tilePosition.x = this.state.width * xPos;
        tileName.tilePosition.y = yPos;
        tileName.alpha = op;
    }
        

    _PIXIScroll() {
        let yPos = window.pageYOffset || document.documentElement.ScrollTop;

        
        this.pa.stage.children
            .filter(obj => obj.constructor.name === `TilingSprite`)
            .map((item, key) => {
                if(yPos > this.state.lastScrollTop) {         
                    item.tilePosition.y -= 5 - (key);  
                } else {
                    item.tilePosition.y += 5 - (key); 
                }
            });
            this.state.lastScrollTop = yPos <= 0 ? 0 : yPos;
    }
    _updateDims() {
        this.setState({
            width: window.innerWidth,
            height: window.outerHeight
        });
    }
    _toggleMenu = () => {
        this.setState({
            menuOpen : this.state.menuOpen ? false : true,
            duration: this.state.menuOpen ?  this.state.duration : new Date().getTime()
        });
    }
    // determine color scheme, depending on time of day
    _timeOfDay() {
        const hour = new Date().getHours();
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
        if(hour >= 19 || hour <= 5) {
            this.setState({
                time: "evening"
            });
        }
    }

	render() {
        const scrollStyle = {
            position: `fixed`
        }
		return(

			<div style={{position: `relative`, height: `${this.state.height * 20}px`}} className={`main-page generic-page pixi-page ${this.state.time}`}>
				<MainMenu 
                    time={this.state.time}
                    width={this.state.width}
                    height={this.state.height}
                    toggleMenu={this._toggleMenu}
                    menuOpen={this.state.menuOpen}
                    duration={this.state.duration}
                    location={this.props.location}
                />
				
                <div id="scroll_this" className="scroll-this" style={scrollStyle}>
                    
                </div>
                

			</div>
		)
	}
}
export default ScrollPage;
