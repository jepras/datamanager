import React from 'react';
import Link from 'gatsby-link';

import styles from "./index.module.css";

/* const IndexPage = () => (*/
class IndexPage extends React.Component {
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

  render() {
    var modalOverlayClass = this.state.modalActive ? [styles['modal-overlay'], styles.active].join(' ') : styles['modal-overlay'];
    var modalClass = this.state.modalActive ? [styles.modal, styles.active].join(' ') : styles.modal;
    return(
      <div>
        <main id={styles.main}>
          <div className={styles.heading}>
            <h1>DATA MANAGER</h1>
            <h2>A webapp to manage your Facebook data</h2>
            <div style={{display: 'none'}}>
              <Link to="/login/">Test - go to Login page 1</Link>
            </div>
            <br/>
            <button className={styles['open-modal']}
                    onClick={() => this.setState({ modalActive: true })}>
              Request Invite
            </button>
          </div>
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
        </main>
        <footer>
          <small>COMING SOON</small>
          <small>INVITATION ONLY</small>
        </footer>
      </div>
    )
  }
}

export default IndexPage