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
        <Link to='/' className='active text-uppercase text-white'>Home</Link>
        <Link to='/profile' className='text-uppercase text-white'>Profile</Link>
        <Link to='/exhibitions' className='text-uppercase text-white'>Exhibitions</Link>
        <Link to='/artist' className='text-uppercase text-white'>Artist</Link>
        <Link to='/aboutus' className='text-uppercase text-white'>About Us</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
export default Navbarr;
