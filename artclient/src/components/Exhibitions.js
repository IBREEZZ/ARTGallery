import React from "react";
import exhibition from '../Images/exhibition.png';
import mon from '../Images/monalisa.png';
import starr from '../Images/thestarrynight.png';
import roc from '../Images/rockycoastinthemoonlight.png';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


function Exhibitions (){
    const user = useSelector((state) => state.users.user);
    const art = useSelector((state) => state.art);
    return(
        <header className='h-100 min-vh-100 d-flex  text-light shadow' style={{ backgroundColor: 'rgba(22, 22, 22)' }}  >
<div className='container my-5'>
<div className="row">
                    <div className="col-lg-12">
                    <img src={exhibition} className='img-fluid ' alt="exhibition img" style={{height:"300px",marginTop: "70px",marginBottom: "70px",width:"400px"}} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                    <p className="e" style={{ marginTop: '50px' }}>Leonardo da Vinci's Mona Lisa (also known as the Gioconda) is perhaps the most famous work of art in the world. Believed to be Lisa Gherardini, wife of Francesco del Giocondo, it was painted between 1503-1506 on a poplar pane.</p>
                    </div>
                    <div className="col-lg-6 text-center">
                    <img src={mon} className='img-fluid ' alt="monalisa img" style={{height:"300px",width:"300px"}} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 ">
                    <img src={starr} className='img-fluid ' alt="thestarrynight img" style={{height:"550px",width:"800px"}} />
                    </div>
                    <div className="col-lg-4">
                    <p className="e" style={{ marginTop: '50px' }}>The Starry Night is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                    <p className="e" style={{ marginTop: '50px' }}>Rocky Coast in the Moonlight is a beautiful landscape painting by Johann Nepomuk Schödlberger. The scene depicted in the painting is a rocky coastline at night, with the moon casting a soft glow over the water and the jagged rocks. The waves crash against the shore, and several trees and other plants are growing along the coastline.</p>
                    </div>
                    <div className="col-lg-4">
                    <img src={roc} className='img-fluid ' alt="rockycoastinthemoonlight img" style={{height:"400px",width:"400px"}} />
                    </div>
                </div>
                <div style={{ color: "white", fontFamily: 'Playfair Display, serif' ,fontSize: "25px"}}>
  Do You Want To Add Your Own Art   ?   
  <Link to="/addart" style={{ color: "rgba(218, 191, 137, 0.7)", fontWeight: "bold" ,fontFamily: 'Playfair Display, serif' }}>
       YES
  </Link>
</div>

</div>


            </header>
    )
}
export default Exhibitions;