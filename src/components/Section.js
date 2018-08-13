import React from 'react'
import styles from "../pages/index.module.css";
import config from '../config';
import Link from 'gatsby-link'
import Dashboard from '../pages/dashboard.js'


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
                        <Sidebar />
                    </Col>
                    <Col xs="8" className={styles.inforight}>
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
                <Row>
                    <Col xs="3"><img src="http://bit.ly/datamanagerlogo" className={styles.navpic} /></Col>
                    <Col xs="9">
                    <h3>Buttons </h3>
                    </Col>
                </Row>
                <Row>
                    <ListGroup>
                        <ListGroupItem active tag="button" action>Cras justo odio</ListGroupItem>
                        <ListGroupItem tag="button" action>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem tag="button" action>Morbi leo risus</ListGroupItem>
                        <ListGroupItem tag="button" action>Porta ac consectetur ac</ListGroupItem>
                        <ListGroupItem disabled tag="button" action>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
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
                <div id='notlogged'>Please login to this app to see the magic</div>
                <div id='status' className={styles.topdashbar}>
                    <Row>
                        <Col xs="3">Stathold 1</Col>    
                        <Col xs="3">Stathold 2</Col>    
                        <Col xs="3">Stathold 3</Col>
                    </Row>
                    <Row>
                        <h2>36 Advertisors with your info</h2>
                    </Row>
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