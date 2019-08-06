import React from 'react';
import {render} from 'react-dom';
import PropTypes from "prop-types";
import * as PIXI from "pixi.js";

class PixiSection01 extends React.Component {

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
            backgroundColor: 0xFF0000  
          });
        document.getElementById("pixi-wrapper_01").appendChild(app.view);

        let num = 0;

        app.renderer.view.style.display = "block";
        app.renderer.autoResize = true;
        app.renderer.resize(document.body.offsetWidth, window.innerHeight - 113);
        const ratio = (window.innerHeight - 113)/document.body.offsetWidth;

        // -- texture 01
        const textA = PIXI.Texture.from(`src/client/public/media/car_01.png`);
        const textB = PIXI.Texture.from(`src/client/public/media/placeholder.png`);

        // -- pixi sprite
        const sprite = new PIXI.Sprite(textA);

        sprite.anchor.set(0.5);

        sprite.x = app.screen.width / 2;
        sprite.y = app.screen.height / 2;

        app.stage.addChild(sprite);

        sprite.interactive = true;
        sprite.buttonMode = true;
        sprite.scale.x = -1;
        app.ticker.add(moving);
        sprite.on(`pointertap`, () => {
            switch (num) {
                case 0:
                    num = 1;
                    break;
                case 1:
                    num = 2;
                    break;
                case 2:
                    num = 1;
            }       
        });

        function moving() {
                switch (num) {
                    case 0:
                        sprite.scale.x = -1;
                        sprite.position.x = sprite.position.x;
                        break;

                    case 1:
                        sprite.scale.x = -1
                        sprite.position.x += 1;
                        break;

                    case 2:
                        sprite.scale.x = 1
                        sprite.position.x -= 1;
                        
                }   
            }

        window.addEventListener(`resize`, function(){
            app.renderer.resize(document.body.offsetWidth, document.body.offsetWidth * ratio);
            sprite.x = app.screen.width / 2;
            sprite.y = app.screen.height / 2;
        });
    }

    render() {

        return(
            <div className="pixi-section">
                <h3>Test # 1</h3>
                <p><strong>Description:</strong> simple canvas where object changes direction on an onclick event.</p>
                <div id="pixi-wrapper_01"></div>
            </div>
        )
    }
}
export default PixiSection01;