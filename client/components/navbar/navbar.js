import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link, IndexRoute } from 'react-router'
import './navbar.scss'

export default React.createClass({
    render: function () {
        return <Navbar className="navbar-custom navbar-fixed-top">
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">acambas</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <li>
                        <Link to="/">Blog</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    }
})