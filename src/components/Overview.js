import React from 'react'
import styles from "../pages/index.module.css";
import config from '../config';
import Link from 'gatsby-link';
import Dashboard from '../pages/dashboard.js';
import Section from './Section.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import meetings from '../img/meetings.png'

/* Have used reactstrap to create Bootstrap navbar */
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';


export default class Overview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div id='status'>

                {/* Attempt to recreate webflow dashboard view, with no real fb data yet */}
                <div>
                        <h4>Overview of your data</h4>
                    </div>
                    <div className={styles.topdashbar}>
                    <Row className={styles.full}>
                        <Col xs="4" className={styles.stathold}>
                        <Row>
                            <Col xs="4" className={styles.topdashimagecont}><img src={meetings} className={styles.topdashimage}/></Col>
                            <Col xs="8" style={{textAlign: "left"}}>
                            <div className={styles.topdashstat}>Number of contacts synced</div>
                            <div className={[styles.topdashstat, styles.topdashnumber].join(' ')}>96</div>
                            <div className={[styles.topdashstat, styles.topdashnumber, styles.topdashtext].join(' ')}>Through messenger</div></Col>
                        </Row></Col>    
                        <Col xs="4" className={styles.stathold}>
                        <Row>
                            <Col xs="4" className={styles.topdashimagecont}><img src={meetings} className={styles.topdashimage}/></Col>
                            <Col xs="8" style={{textAlign: "left"}}>
                            <div className={styles.topdashstat}>Number of locations logged in from</div>
                            <div className={[styles.topdashstat, styles.topdashnumber].join(' ')}>267</div>
                            <div className={[styles.topdashstat, styles.topdashnumber, styles.topdashtext].join(' ')}>This month</div></Col>
                        </Row></Col>    
                        <Col xs="4">
                        <Row>
                            <Col xs="4" className={styles.topdashimagecont}><img src={meetings} className={styles.topdashimage}/></Col>
                            <Col xs="8" style={{textAlign: "left"}}>
                            <div className={styles.topdashstat}>Number of applications</div>
                            <div className={[styles.topdashstat, styles.topdashnumber].join(' ')}>27</div>
                            <div className={[styles.topdashstat, styles.topdashnumber, styles.topdashtext].join(' ')}>With your address</div></Col>
                        </Row></Col>
                    </Row>
                    </div>
                    <div>
                        <h6 className={styles.infomidtext}>Info on friends, locations, applications and more..</h6>
                    </div>
                    <Row>
                        <Col xs="4"><div className={styles.dashcardcontain}>
                            <div className={styles.dashcardpic}><img src={meetings} /></div>
                            <div className={styles.dashcardhead}>Header</div>
                            <div className={styles.dashcardcontent}>hej</div>
                        </div></Col>
                        <Col xs="4"><div className={styles.dashcardcontain}>hej</div></Col>
                        <Col xs="4"><div className={styles.dashcardcontain}>hej</div></Col>
                        <Col xs="4"><div className={styles.dashcardcontain}>hej</div></Col>
                        <Col xs="4"><div className={styles.dashcardcontain}>hej</div></Col>
                        <Col xs="4"><div className={styles.dashcardcontain}>hej</div></Col>
                    </Row>
                    <div>

                    {/* Real information fetched from facebook */}
                    <ListGroup>
                        <ListGroupItem>Name: {this.props.name}</ListGroupItem>
                        <ListGroupItem>Email: {this.props.email}</ListGroupItem>
                        <ListGroupItem>Birthday: {this.props.birthday}</ListGroupItem>
                        <ListGroupItem>Location: {this.props.location.name}</ListGroupItem>
                    </ListGroup>
                    </div>
                </div>
        )
    }
}