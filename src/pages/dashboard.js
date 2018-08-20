import React from 'react'
import ReactDOM from 'react-dom';
import Link from 'gatsby-link'

import styles from "./index.module.css";
import config from '../config';
import ReactNavbar from '../components/ReactNavbar'
import Section from '../components/Section'
import { Container, Row, Col } from 'reactstrap';

/* Add FontAwesome icons */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faBullseye, faUserFriends, faMapMarkedAlt, faTabletAlt, faEnvelopeOpen, faUserCircle, faPowerOff, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
library.add(faStroopwafel, faBullseye, faUserFriends, faMapMarkedAlt, faTabletAlt, faEnvelopeOpen, faUserCircle, faPowerOff, faTachometerAlt)

/* Create Dashboard class */
class Dashboard extends React.Component {
    constructor(props) {
      super(props);

      /* Store state for Facebook user info */
      this.state = {
          name: '',
          birthday: '',
          location: '',
          email: '',
          firstname: ''
      };

      /* bind to this in order to use accross functions and components */
      this.buildAdPage = this.buildAdPage.bind(this);
      this.checkLoginState = this.checkLoginState.bind(this);
      this.logout = this.logout.bind(this);
    }    

    buildAdPage(response) {
        this.setState({
            name: response.name,
            birthday: response.birthday,
            location: response.location,
            email: response.email,
            firstname: response.first_name
        });
        console.log("set state to " + this.state.firstname);
    }

     // LOGIN #2: Called with the results (response) from from FB.getLoginStatus().
     statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        // The response object is returned with a status field that lets the app know the current login status of the person.
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            this.testAPI(); /* Function below that fetches desired info from Facebook */
            this.setElements(true); /* Shows specific elements when logged in and hides others (see further below) */
        } 
        else 
        {
            // Show blank screen with please login text if user is not logged in
            document.getElementById('status').innerHTML = 'Please log ' + 'into this app.';
            this.setElements(false);
        }
    };

    // LOGIN #1: This function is called when someone finishes with the Login button
    checkLoginState() {
        FB.getLoginStatus(function(response) {
            this.statusChangeCallback(response); /* Seperate function above */
        }.bind(this))
    }

    // Loads the SDK asynchronously
    componentDidMount(){
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    
        window.fbAsyncInit = function() {
            window.FB.init({
                appId      : '207358966557597', /* Our specific APP id */
                cookie     : true,  
                xfbml      : true,  
                version    : 'v2.8' 
            });

        /* This might be a duplicate of above checkLoginState, but need to investigate */
        FB.getLoginStatus(function(response) {
            this.statusChangeCallback(response);
          }.bind(this));
        }.bind(this)
    }; 

  // LOGIN #3: Here we fetch information from the graph after statusChangeCallback
  testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('me?fields=id,name,email,location,birthday,first_name', function(response) { /* gets desired user fields from Graph */
      console.log('Successful login for: ' + response.name);
      this.buildAdPage(response); /* Calls the function to set State to the response variables so we can use them in other components */
    }.bind(this));
  }

  /* Sets elements to be shown or not based on isLoggedIn */
  setElements(isLoggedIn){
    if(isLoggedIn){
      document.getElementById('logout').style.display = 'block';
      document.getElementById('status').style.display = 'block';
      document.getElementById('login').style.display = 'none';
      document.getElementById('notlogged').style.display = 'none';
    } else {
      document.getElementById('logout').style.display = 'none';
      document.getElementById('status').style.display = 'none';
      document.getElementById('login').style.display = 'block';
      document.getElementById('notlogged').style.display = 'block';
        }
    }

    /* Non working logout function */
    logout() {
        FB.logout(function(response) {
            setElements(false);
        }.bind(this));
    } 

    render () {
        return (
            <div>
                {/* Renders components and passes on necessary props */}
                <ReactNavbar />
                <Section name={this.state.name}
                         birthday={this.state.birthday}
                         location={this.state.location}
                         email={this.state.email}
                         firstname={this.state.firstname} />
            </div>
        )
    }
}


export default Dashboard