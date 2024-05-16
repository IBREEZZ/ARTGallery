import React from "react";
import edo from '../Images/edouardmanet.jpg';

function Edouardmanet (){
    return(
<header className='h-100 min-vh-100 d-flex align-items-center justify-content-center text-light shadow' style={{ backgroundColor: 'rgba(22, 22, 22)' }}  >
<div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <img src={edo} className='img-fluid w-50' alt="about img" />
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <h3 className='myh33'>Édouard Manet</h3>
                        <p className="p">Édouard Manet was a French modernist painter. He was one of the first 19th-century artists to paint modern life, as well as a pivotal figure in the transition from Realism to Impressionism.</p>
                        <di className="explore-button">
                        </di>
                    </div>
                </div>
            </div>
            </header>
    )
}
export default Edouardmanet;