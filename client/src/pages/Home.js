import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className='content'>
                    <h1>Jean Ichigo</h1>
                    <h2>Développeur Shinigami</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;