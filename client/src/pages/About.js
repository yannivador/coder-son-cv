import React from 'react';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div className='about'>
            <Navigation />
            <div className='aboutContent'>
                <h3>About</h3>
                <img src='logo192.png' alt='profil' />
                
                {/* <img src='logo192.png' alt='img' /> */}
            </div>
        </div>
    );
};

export default About;