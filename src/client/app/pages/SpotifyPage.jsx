import React from 'react';
import {render} from 'react-dom';
import firebase from "../firebaseConfig"
// import withFirebaseAuth from "react-auth-firebase";
import {Link, IndexLink} from 'react-router';
import MainMenu from "../components/MainMenu.jsx";
import { spotifyClientId, spotifyClientSecret } from "../hide.js";

class SpotifyPage extends React.Component {
    constructor(props) {
      super(props);
      this._updateDims = this._updateDims.bind(this);
    }

    state = {
        width: window.innerWidth,
        height: window.outerHeight,
        data: []
    }

    async componentDidMount() {
        this._loadFireBase();
        this._timeOfDay();
        

        window.addEventListener('resize', this._updateDims);

    }
    componentWillUnmount() {
        window.removeEventListener('resize', this._updateDims);
    }

    // toggle main menu
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
    // update dimensions of browser
    _updateDims() {
        this.setState({
            width: window.innerWidth,
            height: window.outerHeight
        });
    }

    _loadFireBase() {

        const database = firebase.database().ref().child(`test-data/`);
           
        database.on(`value`, (snapshot) => {

            const array = [];
            const data = Object.keys(snapshot.val()).forEach(key => {
                let info = snapshot.val()[key];
                array.push(info);

            });
          this.setState({
            data: array
          });
        });
       
    }





    render() {
        // const data = this.state.data; 
        return(
            <div className={`spotify-page generic-page ${this.state.time}`}>
                <MainMenu 
                    time={this.state.time}
                    width={this.state.width}
                    height={this.state.height}
                    toggleMenu={this._toggleMenu}
                    menuOpen={this.state.menuOpen}
                    duration={this.state.duration}
                    location={this.props.location}
                />

                <h2>My Spotify</h2>
                <ul>
                    <li>Displaying Spotify Info.</li>
                    
                </ul>

                    <div className="spotify-page-wrapper">

                    <ul>
                        {
                          this.state.data.map((item, key) => {
                            return (
                                 <li key={key}>{item.artist} - {item.song}</li>
                                )
                           
                           })
                        }
                        
                    </ul>
                            
                        
                    </div>
            </div>
        )
    }
}
export default SpotifyPage;