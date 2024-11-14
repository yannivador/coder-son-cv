import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import axios from 'axios';

const About = () => {
    // Récupère les infos
    const [data, setData] = useState([]);

    useEffect( () => {
        axios.get("http://127.0.0.1:5000/users").then((res) => (setData(res.data)))
    }, [])

    // Comment afficher les résultats
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