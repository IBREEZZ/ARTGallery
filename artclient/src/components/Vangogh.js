import React from "react";
import van from '../Images/vangogh.jpg';

function Vangogh (){
    return(
        <header className='h-100 min-vh-100 d-flex align-items-center justify-content-center text-light shadow' style={{ backgroundColor: 'rgba(22, 22, 22)' }}  >
<div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <img src={van} className='img-fluid w-50' alt="about img" />
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='myh2'>Van Gogh</h2>
                        <p className="p">Vincent Willem van Gogh was a Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art. In just over a decade, he created approximately 2100 artworks, including around 860 oil paintings, most of them in the last two years of his life.</p>
                        <di className="explore-button">
                        </di>
                    </div>
                </div>
            </div>
            </header>
    )
}
export default Vangogh;