import React from 'react';
import GentsImage from './images/barbershop-v2.jpg';

const Home = () => {
    return (
        <>
            <div>
                <h1>Colt's Barbershop</h1>
                <p></p>
                <div className='home-container' >
                    <img src={GentsImage} className = 'home-img' alt="storefront" />
                </div>
            </div>
        </>
    );
};

export default Home;
