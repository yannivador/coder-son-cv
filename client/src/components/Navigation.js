import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Navigation = () => {
    // Récupère les infos
    const [data, setData] = useState([]);

    useEffect( () => {
        axios.get("http://127.0.0.1:5000/users").then((res) => (setData(res.data)))
    }, [])

    return (
        <div className='sidebar'>
            <div className='id'>
                <div className="idContent">
                    <img src='photo-profil.jpg' alt='profil' />
                    {/* <img src='logo192.png' alt='img' /> */}
                    
                    {
                        data.map(item => {
                            return (
                                <h3>{item.name} {item.surname}</h3>
                            )
                        })
                    }
                </div>
            </div>

            <div className='navigation'>
                <ul>
                    <li>
                        <NavLink to="/">
                            <i className='fas fa-home'></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/about">
                            <i className='fas fa-mountain'></i>
                            <span>A propos</span>
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink to="/knowledges">
                            <i className='fas fa-mountain'></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">
                            <i className='fas fa-images'></i>
                            <span>Mes projets</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <i className='fas fa-address-book'></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>

                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href='https://github.com/' target='_blank' rel='noopener noreferrer'><i className='fab fa-github'></i></a>
                    </li>
                    <li>
                        <a href='https://linkedin.com/' target='_blank' rel='noopener noreferrer'><i className='fab fa-linkedin'></i></a>
                    </li>
                    <li>
                        <a href='https://instagram.com/' target='_blank' rel='noopener noreferrer'><i className='fab fa-instagram'></i></a>
                    </li>
                </ul>
            </div>

            <div className="signature">
                From Yannivador
            </div>
        </div>
        
    );
};

export default Navigation;