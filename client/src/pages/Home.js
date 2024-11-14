import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import axios from 'axios';

const Home = () => {
    // Récupère les infos
    const [data, setData] = useState([]);

    useEffect( () => {
        axios.get("http://127.0.0.1:5000/users").then((res) => (setData(res.data)))
    }, [])

    // Comment afficher les résultats
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className='content'>
                    {
                        data.map(item => {
                            return (
                                <div>
                                    <h1>{item.name}</h1>
                                    <h2>{item.surname}</h2>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Home;