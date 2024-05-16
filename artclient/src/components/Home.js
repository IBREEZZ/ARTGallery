import React from "react";
import { ExploreBut } from "./ExploreBut";
import "./Home.css";
import { useSelector } from "react-redux";


function Home() {
    const user = useSelector((state) => state.users.user);
    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center justify-content-center text-light shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col text-center'>
                            {/* <h1>Welcome to {user.name}</h1>
                            <img src={user.pic}/> */}
                            <h3 className="my-text">ART IS NOT ABOUT ART.</h3>
                            <h3 className="my-text" style={{ marginBottom: '30px' }}>ART IS ABOUT LIFE, AND THAT SUMS IT UP</h3>
                            
                            <div className="explore-button">
                                <ExploreBut />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
        </div>
    )
}

export default Home;
