import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar navbar-dark bg-primary navbar-expand-sm">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <i className={this.props.icon+" mr-2"}></i> {this.props.title}
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>   
            </div>
        )
    }
}

Navbar.defaultProps = {
    title : "GitHub Kullanıcı Arama",
    icon : "fab fa-github"
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired
}

export default Navbar
