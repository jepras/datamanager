import React from 'react'
import styles from "../pages/index.module.css";
import config from '../config';
import Link from 'gatsby-link';
import Dashboard from '../pages/dashboard.js';
import logo from "../img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Overview from './Overview'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';


export default class Section extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false
        };
    }

    toggle() {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }
    
    render() {
        return (
        <div className={styles.bigsection}>
            <div className={styles.sectioncontain}>
                <Row>
                    <Col xs="3" className={styles.menuleft}>
                        <Sidebar firstname={this.props.firstname} 
                                 name={this.props.name}/>
                    </Col>
                    <Col xs="9" className={styles.inforight}>
                        <Info name={this.props.name}
                            birthday={this.props.birthday}
                            location={this.props.location}
                            email={this.props.email} />
                    </Col>
                </Row>
            </div>
        </div>
        );
    }
}

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Row className={styles.menuheader}>
                    <Col xs="3"><img src={logo} className={styles.navpic} /></Col>
                    <Col xs="9">
                    <Row className={styles.menuheadertext}>
                    <h6>Welcome, {this.props.firstname}!</h6>
                    </Row>
                    </Col>
                </Row>
                <Row>
                    <div className={styles.leftlogout}>
                    <Row>
                        <div className={styles.sideicon}></div>
                        <div className={styles.sideicon}><FontAwesomeIcon icon="tachometer-alt" /></div>
                        <div className={styles.sidetext}>Overview</div>
                    </Row>
                    </div>
                    <div className={styles.leftmenulink}>
                    <Row>
                        <div className={styles.sideicon}></div>
                        <div className={styles.sideicon}><FontAwesomeIcon icon="user-friends" /></div>
                        <div className={styles.sidetext}>Friends</div>
                    </Row>
                    </div>
                    <div className={styles.leftmenulink}>
                    <Row>
                        <div className={styles.sideicon}></div>
                        <div className={styles.sideicon}><FontAwesomeIcon icon="bullseye" /></div>
                        <div className={styles.sidetext}>Advertisors</div>
                    </Row>
                    </div>
                    <div className={styles.leftmenulink}>
                    <Row>
                        <div className={styles.sideicon}></div>
                        <div className={styles.sideicon}><FontAwesomeIcon icon="map-marked-alt" /></div>
                        <div className={styles.sidetext}>Locations</div>
                    </Row>
                    </div>
                    <div className={styles.leftmenulink}>
                    <Row>
                        <div className={styles.sideicon}></div>
                        <div className={styles.sideicon}><FontAwesomeIcon icon="tablet-alt" /></div>
                        <div className={styles.sidetext}>Applications</div>
                    </Row>
                    </div>
                    <div className={styles.leftmenulink}>
                    <Row>
                        <div className={styles.sideicon}></div>
                        <div className={styles.sideicon}><FontAwesomeIcon icon="envelope-open" /></div>
                        <div className={styles.sidetext}>Messages</div>
                    </Row>
                    </div>
                    <div className={styles.leftmenulink}>
                    <Row>
                        <div className={styles.sideicon}></div>
                        <div className={styles.sideicon}><FontAwesomeIcon icon="user-circle" /></div>
                        <div className={styles.sidetext}>Profile</div>
                    </Row>
                    </div>
                    <div className={styles.leftlogout}>
                    <Row>
                        <div className={styles.sideicon}></div>
                        <div className={styles.sideicon}><FontAwesomeIcon icon="power-off" /></div>
                        <div className={styles.sidetext}>Logout</div>
                    </Row>
                    </div>    
                </Row>           
            </div>
        ) 
    }
}



class Info extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Overview name={this.props.name}
                            birthday={this.props.birthday}
                            location={this.props.location}
                            email={this.props.email}/>
                <div id='notlogged'>Please login to this app to see the magic</div>
            </div>
        )
    }
}