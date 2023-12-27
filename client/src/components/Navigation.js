import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className='id'>
                <div className="idContent">
                    <img src='logo192.png' alt='img' />
                    {/* <img src='logo192.png' alt='img' /> */}
                    <h3>Jean Ichigo</h3>
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
                        <a href='https://github.com/' target='_blank' rel='noopener noreferrer'><i className='fab fa-github'></i></a>
                    </li>
                    <li>
                        <a href='https://linkedin.com/' target='_blank' rel='noopener noreferrer'><i className='fab fa-linkedin'></i></a>
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