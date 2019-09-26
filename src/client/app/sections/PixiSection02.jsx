import React from 'react';
import {render} from 'react-dom';
import PropTypes from "prop-types";
import * as PIXI from "pixi.js";
import { TSMethodSignature } from 'babel-types';

class PixiSection02 extends React.Component {
    app2: PIXI.Application;

    constructor(props) {
      super(props);
    }

    static propTypes = {
        time: PropTypes.string
    }

    componentDidMount() {
        window.motionX = [];
        window.motionY = [];
        
        this.app2 = new PIXI.Application({ 
            antialias: true,    // default: false
            transparent: false, // default: false
            resolution: 1,
           
          });
        document.getElementById("pixi-wrapper_02").appendChild(this.app2.view);
        
        this.app2.renderer.backgroundColor = pixiBG(this.props.time);
        
        // enable scroll on body
        
        this.app2.renderer.plugins.interaction.autoPreventDefault = false;
        this.app2.renderer.view.style.touchAction = 'auto';

        this.app2.renderer.view.style.display = "block";
        
        this.app2.renderer.autoResize = true;

        const container = new PIXI.Container();
        this.app2.stage.addChild(container);
        

        container.position.x = document.body.offsetWidth/2;
        container.position.y = window.innerHeight/2;
        
        const mobileBreak = (size) =>  {
            if(document.body.offsetWidth <= size) {
                this.app2.renderer.resize(document.body.offsetWidth, window.innerHeight/2);
                let ratio = (window.innerHeight/2)/document.body.offsetWidth;
            } else {
                this.app2.renderer.resize(document.body.offsetWidth, window.innerHeight - 113);
                let ratio = (window.innerHeight - 113)/document.body.offsetWidth;
            }
        };

        mobileBreak(480);
        

        function pixiBG(a) {
            switch(a) {
                case 'morning':
                    return 0xA600FF;
                    
                case 'afternoon':
                    return 0xCB74A0;
                    
                case 'evening':
                    return 0x000000;  
            }
        }

        function boxAnim(min, max) {
            let theNum = Math.floor(Math.random() * (max - min + 1) + min);  
                return theNum;
        }

        generateBoxes(this.app2, 80);

        function generateBoxes(machine, num) {
            let count = 0;
            
            for (let i = 0; i < num; i++) {
                const gr = new PIXI.Graphics();
                window.motionX.push(Math.floor(Math.random() * (2 - 1 + 1) + 1));
                window.motionY.push(Math.floor(Math.random() * (2 - 1 + 1) + 1));
                      
                let xPos = boxAnim(0, document.body.offsetWidth/2);
                let yPos = boxAnim(0, window.innerHeight/2);
                let boxWidth = boxAnim(100,300);
                let boxHeight = boxAnim(100,300);
                let borderColor = 0xFFFFFF;
                let fillColor = 0xFFFFFF;
                let fillOpacity = 0;
                gr.lineStyle(1, borderColor, 1);
                gr.beginFill(fillColor, fillOpacity);
                gr.drawRect(xPos, yPos, boxWidth, boxHeight);

                let rLength1 = Math.random() * (40 - 20) + 20;
                let rLength2 = Math.random() * (40 - 20) + 20;
                let rSpeed = Math.random() * (5 - 1) + 1;
                let rSpeed2 = Math.random() * (5 - 1) + 1;
                
                container.addChild(gr);
                
                let originX = gr.position.x;
                let newRand = originX + rLength1;
                gr.position.x = newRand;

                let originY = gr.position.y;
                let newRand2 = originY + rLength1;
                gr.position.y = newRand2;

                gr.pivot.x = document.body.offsetWidth/2;
                gr.pivot.y = window.innerHeight/2;
            
                machine.ticker.add(() => {
                    moving(i, gr, newRand, rLength1, rSpeed,rLength2, rSpeed2,newRand2);
                });
                    
            }

            function moving(i, gr, newRand, rLength1, rSpeed,rLength2, rSpeed2, newRand2) {             
                switch(window.motionX[i]) {
                    case 1:
                        gr.position.x += rSpeed2;
                        break;
                    case 2:
                        gr.position.x -= rSpeed;
                        
                }

                switch(window.motionY[i]) {
                    case 1:
                        gr.position.y += rSpeed;
                        break;
                    case 2:
                        gr.position.y -= rSpeed2;
                        
                }

                if(gr.position.x <= -(newRand * rLength1)) {
                    window.motionX[i] = 1; 
                }
                if(gr.position.x >= newRand * rLength1) {
                    window.motionX[i] = 2; 
                }

                if(gr.position.y <= -(newRand2 * rLength2)) {
                    window.motionY[i] = 1; 
                }
                if(gr.position.y >= newRand2 * rLength2) {
                    window.motionY[i] = 2; 
                }

                switch(window.motionX[i]) {
                    case 1:
                            gr.rotation += (Math.random() * (0.005 - 0.001) + 0.001);
                        break;
                    case 2:
                            gr.rotation -= (Math.random() * (0.005 - 0.001) + 0.001);     
                }
            }
        }

        window.addEventListener(`resize`, function(){
            mobileBreak(480);
            
        });
    }

    componentWillUnmount() {
        this.app2.stop();
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