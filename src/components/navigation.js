import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Navigation extends Component {
    render() {

        return (
            <>

                <Navbar>
                    <Nav defaultActiveKey="/" className="flex-column">

                        <NavItem eventkey={1} href="/" id="menu-link">
                            <NavLink exact activeClassName='activeNav' to="/">Home</NavLink>
                        </NavItem>

                        <NavItem eventkey={2} href="/" id="menu-link">
                            <NavLink exact activeClassName='activeNav' to='/Services'>Services</NavLink>
                        </NavItem>

                        <NavItem eventkey={3} href="/CreativeBrief" id="menu-link">
                            <NavLink exact activeClassName='activeNav' to="/CreativeBrief">Inquire</NavLink>
                        </NavItem>

                        <NavItem eventkey={4} href="About" id="menu-link">
                            <NavLink exact activeClassName='activeNav' to="/About" >About</NavLink>
                        </NavItem>

                    </Nav>
                </Navbar>

                
            </>
        )
    };
}

export default Navigation;