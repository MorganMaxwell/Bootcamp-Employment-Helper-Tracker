import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import './style.css';
import auth from "../../auth";

export default function NavHead() {
    return (
        <Navbar className="topNav" bg="dark" expand="lg">
            <Navbar.Brand id="test" href="#home"><span id="home-link">
            <span className="first">$</span>
            <span className ="parenth">(</span>
            <span className ="dev">Dev</span>
            <span className ="money">.Money</span>
            <span className ="parenth">)</span></span></Navbar.Brand>
            <Nav.Link href="#">Dashboard</Nav.Link>
            <Nav.Link href="#">Profile</Nav.Link>
            <Nav.Link href="#" id="sign-out" >Sign Out</Nav.Link>
        </Navbar>
    );
};