import React from 'react';
import logo from '../Assets/logo.png';
import styles from './Navbar.module.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg ${styles.navbody}`}>
                <Link className="navbar-brand" to="/"><img src={logo} alt='logo' /></Link>
                <button className={`navbar-toggler ${styles.toggler}`} type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <NavDropdown title="About" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3" style={{ backgroundColor: '#0a0a20' }}>
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4" style={{ backgroundColor: '#0a0a20'}}>
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5" style={{ backgroundColor: '#0a0a20'}}>
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="#">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Careers</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className={`btn ${styles.NavBtn}`}>Let's talk   →</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
