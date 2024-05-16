import React from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Exhibitions from './components/Exhibitions';
import Artist from './components/Artist';
import Aboutus from './components/Aboutus';
import logoImg from './Images/artlogo.PNG';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Edouardmanet from './components/Edouardmanet';
import Leonardodavinci from './components/Leonardodavinci';
import Vangogh from './components/Vangogh';
import Signup from './components/Signup';
import Addart from './components/Addart';
import { Provider } from 'react-redux';
import {store} from './store';
import Navbarr from './components/Navbar';


function App() {
  return (
    <Provider store={store}>
   <div>
    <Navbarr/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/exhibitions' element={<Exhibitions />} />
        <Route path='/artist' element={<Artist />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/vangogh' element={<Vangogh />} />
        <Route path='/edouardmanet' element={<Edouardmanet />} />
        <Route path='/leonardodavinci' element={<Leonardodavinci />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/addart' element={<Addart />} />
      </Routes>

      <footer className='bg-dark text-white py-3' style={{ backgroundColor: 'rgba(0, 0, 0)' }} >
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col>
              <Link to="/" className='navbar-brand text-white fw-semibold'>
                <img src={logoImg} alt="logo img" className="logo" />
              </Link>
            </Col>
            <Col>
              <div>
                <p className="m-0 footer-text">What’s bad for your heart is good for art</p>
                <p className="m-0 footer-text">@ 2024 art.gallery Inc. All rights reserved</p>
              </div>
            </Col>
            <Col>
              <div className="d-flex align-items-center justify-content-end">
                <a href="https://www.instagram.com" className="text-white me-3">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com" className="text-white me-3">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" className="text-white me-3">
                  <FaTwitter />
                </a>
                <a href="https://www.youtube.com" className="text-white me-3">
                  <FaYoutube />
                </a>
                <p className="m-0 footer-text">Support: artgallery@gmail.com</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
    </Provider>
  );
}

export default App;
