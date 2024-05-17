import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logoImg from '../Images/artlogo.PNG';

function Navbarr() {
    return (
        <>
            <style>
                {`
                .nav-link-spacing {
                    margin-left: 10px;
                    margin-right: 10px;
                }
                .custom-navbar .nav-link {
                    color: white !important;
                }
                .custom-navbar .navbar-brand {
                    color: white !important;
                }
                .custom-navbar .navbar-toggler {
                    background-color: white !important;
                }
                `}
            </style>
            <Navbar expand="lg" className='fixed-top custom-navbar' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className='navbar-brand text-white fw-semibold'>
                            <img src={logoImg} alt="logo img" className="logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto justify-content-end w-100'>
                            <Link to='/' className='nav-link active text-uppercase nav-link-spacing'>Home</Link>
                            <Link to='/profile' className='nav-link text-uppercase nav-link-spacing'>Profile</Link>
                            <Link to='/exhibitions' className='nav-link text-uppercase nav-link-spacing'>Exhibitions</Link>
                            <Link to='/artist' className='nav-link text-uppercase nav-link-spacing'>Artist</Link>
                            <Link to='/aboutus' className='nav-link text-uppercase nav-link-spacing'>About Us</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbarr;
