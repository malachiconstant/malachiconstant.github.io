import React from 'react';
import {render} from 'react-dom';
import firebase from "../firebaseConfig"
// import withFirebaseAuth from "react-auth-firebase";
import {Link, IndexLink} from 'react-router';
import MainMenu from "../components/MainMenu.jsx";

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
                uid: null,
                firstName: '',
                middleName: '',
                lastName: ''
            }
    }

    componentDidMount() {
        this._GoogleSignIn();
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
    _GoogleSignIn() {
        let provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.dir(user);
                this.setState({
                    data : {
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
    _loadFireBase() {
        console.log(firebase.database());
       
            
    }
    _handleChange(propertyName, event) {
        let theInputs = this.state.data;
        theInputs[propertyName] = event.target.value;
        this.setState({
            theInputs
        });
    }
    _handleSubmit() {
        let user = this.state.data.email;
        let data = this.state.data;
        firebase.database().ref(`users/${this.state.data.uid}`).set({
            email: `${data.email}`,
            firstName: `${data.firstName}`,
            middleName: `${data.middleName}`,
            lastName: `${data.lastName}`
        })
    }

    render() {
        // const data = this.state.data; 

        // if(this.state.data.email){
        //     let email = this.state.data.email;
        //     firebase.database().ref(`users/${this.state.data.uid}/`).set({
        //         email: `${this.state.data.email}`,
        //     });
        // }

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

                <h2>TOWGA</h2>
                <ul>
                    <li>Using Google Firebase</li>
                    
                </ul>

                    <div className="spotify-page-wrapper">
                        <h5>Say the name of the one that got away<br />into the ether,<br />and a name that someone else let slip away<br />will come back to you.</h5>

                        <form onSubmit={this._handleSubmit}>
                            <input type="text" name="first" value={this.state.data.firstName || ''} placeholder="first name" onChange={this._handleChange.bind(this, 'firstName')} required />

                            <input type="text" name="middle" value={this.state.data.middleName || ''} placeholder="middle name" onChange={this._handleChange.bind(this, 'middleName')} required />

                            <input type="text" name="last" value={this.state.data.lastName || ''} placeholder="last name" onChange={this._handleChange.bind(this, 'lastName')} required />

                            <input type="submit" value="to the ether!" />
                        </form>
                        
                    </div>
            </div>
        )
    }
}
export default TOWGAPage;