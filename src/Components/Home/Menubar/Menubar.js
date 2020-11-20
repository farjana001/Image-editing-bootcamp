import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menubar.scss';
import logo from '../../../images/logo/logo-2.png'

const Menubar = () => {
    return (
        <div className="menubar-bg w-100">
            <Navbar className="" expand="lg">
                <Link to="/home" className="logo ml-3"><img src={logo} alt=""/></Link>
                <Navbar.Toggle className="navbar-hamburger" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="menu-link" to="/home">Home</Link>
                        <Link className="menu-link" to="/dashboard">Dashboard</Link>
                        <Link className="menu-link" to="/instructor">Instructor</Link>
                        <Link className="menu-link" to="/students">Students</Link>
                        <Link className="menu-link" to="/login">Login</Link>
                        <Link className="menu-link" to="/about">About Us</Link>
                        <Link className="menu-link" to="/contact">Contact Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Menubar;