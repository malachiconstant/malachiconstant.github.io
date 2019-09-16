import React from 'react';
import {render} from 'react-dom';
import firebase from "../firebaseConfig"
// import withFirebaseAuth from "react-auth-firebase";
import {Link, IndexLink} from 'react-router';
import "../sass/TOWGAPage.scss";
import MainMenu from "../components/MainMenu.jsx";
import { Sprite } from 'pixi.js';

class TOWGAPage extends React.Component {
    constructor(props) {
      super(props);
      this._updateDims = this._updateDims.bind(this);
      this._handleChange = this._handleChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    state = {
        width: window.innerWidth,
        height: window.outerHeight,
        data: {
                email: null,
                uid: null
        },
        towga: {
            status: false
        }
    }

    componentDidMount() {
        this._GoogleSignIn();
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
    _GoogleSignIn() {
        let provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    data: {
                        email: user.email,
                        uid: user.uid
                    }

                });
              // User signed in, you can get redirect result here if needed.
              // ....
            } else {
              // Show sign in screen with button above.
              firebase.auth().signInWithRedirect(provider);
            }
        });
       

    }
    
    _handleChange(propertyName, event) {
        let theInputs = this.state.data;
        theInputs[propertyName] = event.target.value;
        this.setState({
            theInputs
        });
    }
    _handleSubmit(event) {
        event.preventDefault();

        let user = this.state.data.email;
        let data = this.state.data;
        firebase.database().ref(`users/${this.state.data.uid}`).set({
            email: `${data.email}`,
            firstName: `${data.firstName}`,
            middleName: `${data.middleName == null ? ``: data.middleName}`,
            lastName: `${data.lastName}`,
            comments: `${data.comments == null ? ``: data.comments}`
        });
        
        firebase.database().ref(`users/`).once('value').then(snapshot => {
            const array = [];

            // prevent getting results from same user
            while (true) {
                const randomEntry = Object.keys(snapshot.val())[Math.floor(Math.random() * snapshot.numChildren())];
                array.push(randomEntry);
                if(this.state.data.uid != randomEntry) {
                    break;
                }
            }
            const latest = array[array.length -1]; 

            let towga = snapshot.child(`${latest}`).val();
            this.setState({
                towga: {
                    firstName: towga.firstName,
                    middleName: towga.middleName,
                    lastName: towga.lastName,
                    comments: towga.comments,
                    status: true
                }
            });


        });
    }

    render() {

        return(
            <div className={`towga-page generic-page ${this.state.time}`}>
                <MainMenu 
                    time={this.state.time}
                    width={this.state.width}
                    height={this.state.height}
                    toggleMenu={this._toggleMenu}
                    menuOpen={this.state.menuOpen}
                    duration={this.state.duration}
                    location={this.props.location}
                />

                <h2>TOWGA</h2>
                <ul>
                    <li>Created Realtime Database from Google Firebase</li>
                    <li>Users key information into database, which alters it, and receives an random entry from the database in return from a previous user</li>
                </ul>

                    <div className="page-wrapper">
                        <h3>Say the name of the one that got away into the ether,<br />and a name that someone else let slip away will come back to you.</h3>

                        <form onSubmit={this._handleSubmit} className={this.state.towga.status ? ` shrink` : ``}>
                            <div className="form-inputs">
                                <div className="input-container">                            
                                    <input type="text" name="first" value={this.state.data.firstName || ''} placeholder="first name *" onChange={this._handleChange.bind(this, 'firstName')} required />
                                </div>
                                <div className="input-container">
                                    <input type="text" name="middle" value={this.state.data.middleName || ''} placeholder="middle name(s)" onChange={this._handleChange.bind(this, 'middleName')} />
                                </div>
                                <div className="input-container">
                                    <input type="text" name="last" value={this.state.data.lastName || ''} placeholder="last name *" onChange={this._handleChange.bind(this, 'lastName')} required />
                                </div>
                            </div>
                                

                            <textarea maxLength="280" placeholder="Additional Comments" value={this.state.comments} onChange={this._handleChange.bind(this, 'comments')} />

                            <div>
                                <input type="submit" value="to the ether!" />
                            </div>
                        </form>
                        <div className="towga-reply">
                            <span className={this.state.towga.status ? ` appear` : ``}>{this.state.towga.firstName} </span><span className={this.state.towga.status ? ` appear` : ``}>{this.state.towga.middleName ? `${this.state.towga.middleName} ` : ``}</span><span className={this.state.towga.status ? ` appear` : ``}>{this.state.towga.lastName}</span>
                            <div className={`comment ${this.state.towga.status ? `appear` : ``}`}>
                                <p>{`${this.state.towga.comments == null || this.state.towga.comments == `` ? `` : `"${this.state.towga.comments}"`}` }</p>
                            </div>
                        </div>
                        
                    </div>
            </div>
        )
    }
}
export default TOWGAPage;