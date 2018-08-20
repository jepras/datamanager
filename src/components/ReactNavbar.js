import React from 'react'
import styles from "../pages/index.module.css";
import config from '../config';
import Link from 'gatsby-link'
import Dashboard from '../pages/dashboard.js'


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    Button,
    DropdownItem } from 'reactstrap';

export default class ReactNavbar extends React.Component {
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
        <div>
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/"  className={styles.anav}>DataManager</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>

                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret  className={styles.anavitem}>
                    Profile
                    </DropdownToggle>
                    <DropdownMenu right>
                    <DropdownItem>
                        Settings
                    </DropdownItem>
                    <DropdownItem>
                        Delete
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Logout
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>

                <NavItem>

                        <Button size="sm" id="login" onClick={Dashboard.checkLoginState}>
                        Login with Facebook
                        </Button>

                </NavItem>
                <NavItem>

                        <Button size="sm" id="logout" className={styles.anav} onClick={Dashboard.logout}>
                        Logout
                        </Button>
                </NavItem>

                </Nav>
            </Collapse>
            </Navbar>
        </div>
        );
    }
}
