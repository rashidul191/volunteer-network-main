import React from 'react';
import logo from '../logos/Group 1329.png';
import './Header.css';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';


const Header = () => {

    const history = useHistory()
    const handleAdmin =() =>{
        history.push('/volunteerlist');
    }
    
    return (
        <div className="container bg-img">
            <Navbar bg="" variant="light">
                <Navbar.Brand href="#home"> <img className="main-logo" src={logo} alt=""/> </Navbar.Brand>
                <Nav className="ml-auto">
                    <div>
                        <Link className="nav-style" to="/home"> Home</Link>
                        <Link className="nav-style" to="/donation">Donation</Link>
                        <Link className="nav-style" to="/event">Events</Link>
                        <Link className="nav-style" to ="/blog">Blog</Link>                        
                    </div>
                    <Button className="nav-btn-style" variant="primary" >Register</Button>
                    <Button className="nav-btn-style" onClick={handleAdmin} variant="dark">Admin</Button>
                </Nav>
            </Navbar>
            <br/>
            <br/>
                <h1 className="text-center">I GROW BY HELPING PEOPLE IN NEED.</h1>
            <Form inline>
                    <FormControl type="text" placeholder="Search......" className=" " />
                    <Button variant="primary">Search</Button>
                </Form>
            
        </div>
    );
};

export default Header;