import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from 'react-router-dom';
import logoImg from '../Images/artlogo.PNG';
function Navbarr (){
    return(
            
<Navbar expand="lg" className='fixed-top custom-navbar' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
  <Container>
    <Navbar.Brand>
      <Link to="/" className='navbar-brand text-white fw-semibold'>
        <img src={logoImg} alt="logo img" className="logo" />
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' style={{ backgroundColor: 'white' }} />
    <Navbar.Collapse id='basic-navbar-nav' >
      <Nav className='me-auto justify-content-end w-100'>
        <Nav.Link href='/' className='active text-uppercase text-white'>Home</Nav.Link>
        <Nav.Link href='/profile' className='text-uppercase text-white'>Profile</Nav.Link>
        <Nav.Link href='/exhibitions' className='text-uppercase text-white'>Exhibitions</Nav.Link>
        <Nav.Link href='/artist' className='text-uppercase text-white'>Artist</Nav.Link>
        <Nav.Link href='/aboutus' className='text-uppercase text-white'>About Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
export default Navbarr;