import React from 'react';
import './Header.css';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="bg-img">
            <Navbar bg="" variant="light">
                <Navbar.Brand href="#home">Logo Here</Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#donation">Donation</Nav.Link>
                <Nav.Link href="#events">Events</Nav.Link>
                <Nav.Link href="#Blog">Blog</Nav.Link>
                <Button variant="primary">Register</Button>
                <Button variant="dark">Admin</Button>
                </Nav>
               
            </Navbar>
                <h1 className="text-center">I GROW BY HELPING PEOPLE IN NEED.</h1>
            <Form inline>
                    <FormControl type="text" placeholder="Search" className=" " />
                    <Button variant="primary">Search</Button>
                </Form>
            
        </div>
    );
};

export default Header;