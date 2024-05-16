import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import van from '../Images/vangogh.jpg';
import edo from '../Images/edouardmanet.jpg';
import leo from '../Images/leonardodavinci.jpg';
import { FaArrowAltCircleRight } from 'react-icons/fa'; 



function Artist() {
    return (
        <header className='h-100 min-vh-100 d-flex align-items-center justify-content-center text-light shadow' style={{ backgroundColor: 'rgba(22, 22, 22)' }}>
            <div className='container my-5'>
                <Row >
                    <div className='col text-center'>
                        <h1 className="myh1">ARTIST</h1>
                        <Col>
                            <Row>
                                <Col>
                                    <div style={{ position: 'relative' }}>
                                    <Link to="/vangogh"> 
                                        <div style={{ position: 'relative' }}>
                                            <img src={van} alt="van img" className="vangogh" />
                                            <FaArrowAltCircleRight style={{ position: 'absolute', bottom: 15, right: 15, color: 'rgba(255, 255, 255, 0.525)' }} />
                                        </div>
                                    </Link>
                                    </div>
                                    <div><h3 className="artist">Van Gogh</h3></div>
                                </Col>
                                <Col>
                                    <div style={{ position: 'relative' }}>
                                        <Link to="/edouardmanet"> 
                                            <img src={edo} alt="edo img" className="edouardmanet" />
                                            <FaArrowAltCircleRight style={{ position: 'absolute', bottom: 15, right: 15, color: 'rgba(255, 255, 255, 0.525)' }} />
                                        </Link>
                                    </div>
                                    <div><h3 className="artist">Édouard Manet </h3></div>
                                </Col>
                                <Col>
                                    <div style={{ position: 'relative' }}>
                                        <Link to="/leonardodavinci"> 
                                            <img src={leo} alt="leo img" className="leonardodavinci" />
                                            <FaArrowAltCircleRight style={{ position: 'absolute', bottom: 15, right: 15, color: 'rgba(255, 255, 255, 0.525)' }} />
                                        </Link>
                                    </div>
                                    <div><h3 className="artist">Leonardo da Vinci</h3></div>
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </Row>
            </div>
        </header>
    )
}
export default Artist;
