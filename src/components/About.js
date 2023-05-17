import React from 'react';
import staff from './images/barber-pole.jpg';

function About () {
    return (
        <div className='parent-container'>
            <div className='child-container'>
            <h1 className='header-moved' >About</h1>
                <p className='about-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore         et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum      dolore eu fug.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris     nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse    cillum dolore eu fug.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor   incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate        velit esse cillum dolore eu fug</p>
            </div>
                <div className='child-container'>
                    <img src={staff} className='gallery-staff crew-img' alt='Barber Staff' />
                </div>
            
        </div>
    )
}

export default About;