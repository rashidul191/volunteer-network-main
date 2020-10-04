import React from 'react';
import logo from '../logos/Group 1329.png';
import {  Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header2 = () => {
    return (
        <div className="container">
            <Navbar bg="" variant="light">
                <Navbar.Brand href="#home"> <img className="main-logo" src={logo} alt=""/> </Navbar.Brand>
                <Nav className="ml-auto">
                    <div>
                        <Link className="nav-style" to="/home"> Home</Link>
                        <Link className="nav-style" to="/donation">Donation</Link>
                        <Link className="nav-style" to="/event">Events</Link>
                        <Link className="nav-style" to ="/blog">Blog</Link>                        
                    </div>
                        <h6>Sufi Ahmed</h6>
                </Nav>
            </Navbar>
            
        </div>
    );
};

export default Header2;