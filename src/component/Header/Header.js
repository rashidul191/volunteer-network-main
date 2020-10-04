import React from 'react';
import logo from '../logos/Group 1329.png';
import './Header.css';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';

const Header = () => {
    
    // const history = useHistory()
    const handleRegister =() =>{
            // history.push('/register');
            console.log("Register click done...");
    }
    return (
        <div className="bg-img">
            <Navbar bg="" variant="light">
                <Navbar.Brand href="#home"> <img className="main-logo" src={logo} alt=""/> </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#donation">Donation</Nav.Link>
                    <Nav.Link href="#events">Events</Nav.Link>
                    <Nav.Link href="#Blog">Blog</Nav.Link>
                    <Button variant="primary" onClick={handleRegister}>Register</Button>
                    <Button variant="dark">Admin</Button>
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