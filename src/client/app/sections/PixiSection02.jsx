import React from 'react';
import {render} from 'react-dom';
import PropTypes from "prop-types";
import * as PIXI from "pixi.js";

class PixiSection02 extends React.Component {

    constructor(props) {
      super(props);
    }

    static propTypes = {
        time: PropTypes.string
    }

    componentDidMount() {
        this._PixiScript();
    }

    // -- PIXI SCRIPT
    _PixiScript() {
        let app = new PIXI.Application({ 
            antialias: true,    // default: false
            transparent: false, // default: false
            resolution: 1,
            backgroundColor: 0x000000 
          });
        document.getElementById("pixi-wrapper_02").appendChild(app.view);

        app.renderer.view.style.display = "block";
        app.renderer.autoResize = true;
        app.renderer.resize(document.body.offsetWidth, window.innerHeight - 113);
        const ratio = (window.innerHeight - 113)/document.body.offsetWidth;

        const graphics = new PIXI.Graphics();

        //Square
        generateBoxes(25);
        function generateBoxes(num) {
            for (let i = 0; i < num; i++) {
                Box(
                    randomizer(0, document.body.offsetWidth), 
                    randomizer(0, window.innerHeight), 
                    randomizer(100,300), 
                    randomizer(100,300)
                );  
            }     
        }


        // Box();
        // Box(500, 200, 400, 300);

       
                    //function for creating boxes

        function Box(
            xPos = 0,
            yPos = 0,
            boxWidth = 100,
            boxHeight = 100,
            borderColor = 0xFFFFFF,
            fillColor = 0xFFFFFF,
            fillOpacity = 0
        ) {
            graphics.lineStyle(1, borderColor, 1);
            graphics.beginFill(fillColor, fillOpacity);
            graphics.drawRect(xPos, yPos, boxWidth, boxHeight);
        } 
        
        function randomizer(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        app.stage.addChild(graphics);       

        window.addEventListener(`resize`, function(){
            app.renderer.resize(document.body.offsetWidth, document.body.offsetWidth * ratio);
        });
    }

    render() {

        return(
            <div className="pixi-section">
                <h3>Test # 2</h3>
                <p><strong>Description:</strong> canvas where squares are generated in random positions and random dimensions.</p>
                <div id="pixi-wrapper_02"></div>
            </div>
        )
    }
}
export default PixiSection02;