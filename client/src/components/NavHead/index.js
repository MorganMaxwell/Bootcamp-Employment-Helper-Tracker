import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import "./style.css";

export default function NavHead() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">$(Dev.Money)</Navbar.Brand>
            <Nav.Link href="#">Dashboard</Nav.Link>
            <Nav.Link href="#">Profile</Nav.Link>
            <Nav.Link href="#" id="sign-out" >Sign Out</Nav.Link>
        </Navbar>
    );
};