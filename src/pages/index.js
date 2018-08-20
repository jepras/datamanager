import React from 'react';
import Link from 'gatsby-link';

import styles from "./index.module.css";

/* Adds pictures with {name} in img src="" */
import ads from '../img/ads.png'
import network from '../img/network.png'
import search from '../img/search.png'
import demogrey from '../img/demogrey.png'
import arrowdown from '../img/arrowdown.png'


/* Create Index Page */
class IndexPage extends React.Component {
  constructor() {
    super();
    /* State references for request invite popup */
    this.state = {
      modalActive: false,
      emailValue: '',
      firstNameValue: '',
      lastNameValue: '',
      botInputValue: ''
    }
  }

  render() {
    /* Raul to add comments */
    var modalOverlayClass = this.state.modalActive ? [styles['modal-overlay'], styles.active].join(' ') : styles['modal-overlay'];
    var modalClass = this.state.modalActive ? [styles.modal, styles.active].join(' ') : styles.modal;
    
    return(
        <main id={styles.main}>
        <div>

          {/* Div for top element */}
        <div className={styles.banner}>
        
        {/* Header element */}
          <div className={styles.heading}>
            <h1>DATA MANAGER</h1>
            <h2>A webapp to manage your Facebook data</h2>
            <br/>
            <button className={styles['open-modal']}
                    onClick={() => this.setState({ modalActive: true })}>
              Request Invite
            </button>
          </div>

        {/* Popup box */}

          <div className={modalOverlayClass}>
            <div className={modalClass}>
              <a className={styles['close-modal']} onClick={() => this.setState({ modalActive: false })}>
                <svg viewBox="0 0 20 20">
                          <path fill="#000000" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                        </svg>
              </a>
              <div className={styles['modal-content']}>
                <form action="https://jepras.us14.list-manage.com/subscribe/post?u=671c8542725c29d88f8ea0ec8&amp;id=eb1b287263"
                            method="post"
                            id="mc-embedded-subscribe-form"
                            name="mc-embedded-subscribe-form"
                            className={styles.validate}
                            target="_blank"
                            noValidate>
	          <div id="mc_embed_signup_scroll" className={styles['modal-content']}>
	            <div className={styles['modal-title']}><h1>Be the first to know</h1></div>
	            <div className={styles['modal-desc']}><p>About latest news and launch details</p></div>
	            <div className={styles['input-field']}>
                <label htmlFor="mce-EMAIL">*Email Address:</label><br/>
                <input type="email"
                            value={this.state.emailValue}
                            name="EMAIL"
                            id="mce-EMAIL"
                            onChange={(event) => this.setState({ emailValue: event.target.value })} />
              </div>
              <div className={styles['input-field']}>
                <label htmlFor="mce-FNAME">*First Name:</label><br/>
                <input type="text"
                            value={this.state.firstNameValue}
                            name="FNAME"
                            id="mce-FNAME"
                            onChange={(event) => this.setState({ firstNameValue: event.target.value })} />
	            </div>
	            <div className={styles['input-field']}>
                <label htmlFor="mce-LNAME">Last Name:</label><br/>
                <input type="text"
                             value={this.state.lastNameValue}
                             name="LNAME"
                             id="mce-LNAME"
                             onChange={(event) => this.setState({ lastNameValue: event.target.value })} />
	            </div>
	            <div id="mce-responses" className={styles.clear}>
                <div className={styles.response} id="mce-error-response" style={{display: "none"}}></div>
                <div className={styles.response} id="mce-success-response" style={{display: "none"}}></div>
	            </div>
	            <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
		            <input type="text"
                             value={this.botInputValue}
                             name="b_671c8542725c29d88f8ea0ec8_eb1b287263"
                             tabIndex="-1"
                             onChange={(event) => this.setState({ botInputValue: event.target.value })} />
	            </div>
	            <div className={styles.clear}>
		            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className={styles['submit-button']}/>
	            </div>
	          </div>
	        </form>
	      </div>
        </div>
        </div>

        {/* End of popup box */}

        </div>
        </div>  
        
        {/* Footer */}
        
        <footer>
          <small>COMING SOON</small>
          <small>INVITATION ONLY</small>
        </footer>

        {/* Start of page content */}

        <div className={styles.pagecontent}>
          <div className={styles.scroll}>
          <a href="#Scroll" className={styles.scrolldownicon}><img src={arrowdown} width="30" /></a>
          </div> 

        {/* Features element */}

        {/* Headline page content */}
        <div className={styles.pagecontainer}>
          <div className={styles.titlewrapper}>
            <h1>Take ownership of your data</h1> 
          <div className={styles.headerparagraph}>
            <h4>See the surprising data they have and delete it</h4>
          </div></div>

        {/* Cards in feature element */}
        <div className={[styles.section, styles.group].join(' ')}> {/* .join(' ') is to add multiple className's */}
          <div className={[styles.col, styles.span_1_of_3].join(' ')}>
            <div><img src={ads} 
                      className={styles.cardpic} /></div>
            <div className={styles.cardcontent}>
              <h3 className={styles.cardhead}>Advertisors with your data</h3>
              <p>You know that companies can buy your information through other services? 
                More than 80% of advertisors we found are usually unknown to the user</p>
              <div className={styles.cardbutton}><button className={styles.buttonsmall}>Learn more</button></div>
            </div>
          </div>
          <div className={[styles.col, styles.span_1_of_3].join(' ')}>
            <div><img src={network} 
                      className={styles.cardpic} /></div>
            <div className={styles.cardcontent}>
              <h3 className={styles.cardhead}>Permissions to apps</h3>
              <p>We tend not to review the permissions we give to apps when we are in a hurry. 
                Sometimes they have much more access than they need. 
              </p>
              <div className={styles.cardbutton}><button className={styles.buttonsmall}>Learn more</button></div>
            </div>
          </div>
          <div className={[styles.col, styles.span_1_of_3].join(' ')}>
            <div><img src={search} 
                      className={styles.cardpic} /></div>
            <div className={styles.cardcontent}>
              <h3 className={styles.cardhead}>Your category</h3>
              <p>Based on your profile, where you logged in, what you have clicked & many more data points, companies categorize their users. 
                Are you interested in yours?</p>
              <div className={styles.cardbutton}><button className={styles.buttonsmall}>Learn more</button></div>
            </div>
          </div>
        </div>

        </div>

        {/* How it works */}

        <div className={styles.pagecontainerspecial}>
          <div className={styles.titlewrapper}>
            <h1>Dashboard view</h1> 
          <div className={styles.headerparagraph}>
            <h4>Login and see it quickly for yourself!</h4>
          </div>
          </div>
          <div><img src={demogrey} className={styles.demopic} /></div> {/* example of how to add pictures */}

        </div>

        {/* Disclaimer element */}

        </div>
        <div className={styles.pagecontainer}>
          <div className={styles.titlewrapper}>
            <h1>Disclaimer</h1> 
          <div className={styles.headerparagraph}>
            <h4 className={styles.headerparagraph}>We are not saving and taking advantage of your data. <br/>
              We are just 2 dudes creating an interface that channels all the information from your profiles.<br/>
              Instead of hiding it faraway as some companies tend to do .. </h4>
          </div>
            <button className={styles['open-modal']}
                    onClick={() => this.setState({ modalActive: true })}>
              Request Invite
            </button>
          </div>

        </div>
        
        {/* End of page content */}

        </main>
    )
  }
}

export default IndexPage