import React from 'react'
import Link from 'gatsby-link'

import styles from "./index.module.css";
import config from '../config';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      modalActive: false,
      emailValue: '',
      firstNameValue: '',
      lastNameValue: '',
      botInputValue: ''
    }
  }

  componentDidMount(){
    // Load the required SDK asynchronously for facebook, google and linkedin
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    
    window.fbAsyncInit = function() {
        window.FB.init({
          appId      : 207358966557597,
          cookie     : true,  // enable cookies to allow the server to access the session
          xfbml      : true,  // parse social plugins on this page
          version    : 'v2.8' // use version 2.1
        });
    };
  }

  facebookLogin = () => {
      /*window.FB.login(
          this.checkLoginState(), 
          { scope : 'email, public_profile' } //Add scope whatever you need about the facebook user
      ); */
      
      window.FB.login(
          function(resp){
              this.statusChangeCallback(resp);
          }.bind(this),{ scope : 'email,public_profile,user_birthday,user_likes' });
  }

  checkLoginState() {
      alert("Checking Login Status")
      console.log( "Checking login status..........." );
      
      window.FB.getLoginStatus(function(response) {
          alert("FB Callback")
          console.log("----------->")
          console.log(response)
          this.statusChangeCallback(response);
      }.bind(this));
  }

  statusChangeCallback(response) {
      console.log('statusChangeCallback');
      console.log(response);
      if (response.status === 'connected') {
          // Logged into your app and Facebook.
          this.fetchDataFacebook();
          console.log("Logged in and authenticated");
      } else if (response.status === 'not_authorized') {
          console.log('Import error', 'Authorize app to import data', 'error')
      } else {
          console.log('Import error', 'Error occured while importing data', 'error')
      }
  }

  fetchDataFacebook = () => {
      window.FB.api('/me', function(user) {
          document.getElementById('status').innerHTML =
              'Thanks for logging in, ' + user.name + '!' + ' your id is ' + user.id + ' and your mail ' + user.email 
              + ' and your birthday is: ' + user.user_birthday;
      });
  }

  logout() {
      fb.logout(function(response) {
        // setElements(false); -- if I want to show/hide elements
      });
  }
  
  render() {
    return(
      <div>
        <main id={styles.main}>
          <div className={styles.heading}>
            <h2>Unlock the mysteries of what Facebook knows about you!</h2>
            
            <button className={styles['open-modal']}
                    onClick={ () => this.facebookLogin() }>
                    Login with Facebook
                    </button>
            <br/><br/><Link to="/">Go back to the homepage</Link>
          </div>
          <div id="status"></div>
        </main>
      </div>
    )
  }
}


export default Login