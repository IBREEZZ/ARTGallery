import React from "react";
import AboutImg from '../Images/AboutImg.jpg';
import aboutus from '../Images/aboutus.png';
 
function Aboutus (){
    return(
        <header className='h-100 min-vh-100 d-flex align-items-center justify-content-center text-light shadow' style={{ backgroundColor: 'rgba(22, 22, 22)' }}  >
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 position-relative'>
                        <div className="rectangular-background"></div>
                        <img src={AboutImg} className='img-fluid square-image' alt="about img" style={{height:"300px",width:"450px"}} />
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <img src={aboutus} alt="about us" style={{ marginBottom: '20px' }}/>
                        <p className="p" style={{ marginTop: '20px' }}>Our website gives art lovers the opportunity to explore wonderful and diverse art galleriesfrom around the world, where they can learn about the details of the exhibitions, their history, and the artworks displayed in them. We strive to be a fun and useful destination for everyone looking for value-added artistic experiences. We are interested in enriching . </p>
                        <div className="explore-button">
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Aboutus;
 