import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div id="header" >
                <Link to="/">
                    <h1>An Idea</h1>
                </Link>
            </div>
            
        );
    }
}

export default Header;