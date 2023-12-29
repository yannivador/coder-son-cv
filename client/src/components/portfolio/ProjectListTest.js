import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import Project from './Project';

// Sur ProjectListTest.js on utilise l'url créer pour récupérer les données en JSON
// Les données affichées viennent d'une sorte d'API

const ProjectListTest = () => {

    const [data, setData] = useState([]);

    useEffect( () => {
        // http://127.0.0.1:5000/
        axios.get("http://127.0.0.1:5000/portfolio").then((res) => (setData(res.data)))
    }, [])

    return (
        <div className='portfolioContent'>
            <ul className="radioDisplay">
                {/* A coder plus tard (filtre) */}
            </ul>
            <div className="projects">
                {
                    data.map(item => {
                        return (
                            <Project 
                                key={item.id}
                                item={item}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProjectListTest;