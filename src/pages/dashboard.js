import React from 'react'
import ReactDOM from 'react-dom';
import Link from 'gatsby-link'

import styles from "./index.module.css";
import config from '../config';
import ReactNavbar from '../components/ReactNavbar'
import Section from '../components/Section'
import { Container, Row, Col } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faBullseye, faUserFriends, faMapMarkedAlt, faTabletAlt, faEnvelopeOpen, faUserCircle, faPowerOff, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faBullseye, faUserFriends, faMapMarkedAlt, faTabletAlt, faEnvelopeOpen, faUserCircle, faPowerOff, faTachometerAlt)

class Dashboard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          name: '',
          birthday: '',
          location: '',
          email: '',
          firstname: ''
      };
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

     // This is called with the results from from FB.getLoginStatus().
     statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
        // Logged into your app and Facebook.
        this.testAPI();
        this.setElements(true);
        } else {
        // The person is not logged into your app or we are unable to tell.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into this app.';
        this.setElements(false);
        }
    };

     // This function is called when someone finishes with the Login
    // Button.  See the onlogin handler attached to it in the sample
    // code below.
    checkLoginState() {
        FB.getLoginStatus(function(response) {
        this.statusChangeCallback(response);
        }.bind(this))
    }

    // Load the SDK asynchronously
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
            appId      : '207358966557597',
            cookie     : true,  // enable cookies to allow the server to access 
                                // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.8' // use graph api version 2.8
        });

        FB.getLoginStatus(function(response) {
            this.statusChangeCallback(response);
          }.bind(this));
        }.bind(this)
    };

    // Now that we've initialized the JavaScript SDK, we call 
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.
 

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('me?fields=id,name,email,location,birthday,first_name', function(response) {
      console.log('Successful login for: ' + response.name);
      this.buildAdPage(response);
      /* document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!'
        + response.email + response.birthday
        + response.location.name; */
    }.bind(this));
  }

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

    logout() {
        FB.logout(function(response) {
            setElements(false);
        }.bind(this));
    } 

    render () {
        return (
            <div>
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