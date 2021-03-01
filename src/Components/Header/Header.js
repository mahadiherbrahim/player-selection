import React from 'react';
import {Nav, Navbar } from 'react-bootstrap';
import '../../assets/css/bootstrap.min.css';
import './Header.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <div className="header">
             <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#"><img  className="logo" src={logo} alt=""/></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Players</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar> 
        </div>
    );
};

export default Header;