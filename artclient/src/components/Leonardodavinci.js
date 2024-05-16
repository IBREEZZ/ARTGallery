import React from "react";
import leo from '../Images/leonardodavinci.jpg';

function Leonardodavinci (){
    return(
<header className='h-100 min-vh-100 d-flex align-items-center justify-content-center text-light shadow' style={{ backgroundColor: 'rgba(22, 22, 22)' }}  >
<div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <img src={leo} className='img-fluid w-50' alt="about img" />
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <h3 className='myh33'>Leonardo da Vinci</h3>
                        <p className="p">Leonardo di ser Piero da Vinci was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect.</p>
                        <di className="explore-button">
                        </di>
                    </div>
                </div>
            </div>
            </header>
    )
}
export default Leonardodavinci;