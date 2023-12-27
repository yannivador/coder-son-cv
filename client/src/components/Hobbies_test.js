import React, { Component } from 'react';
import { portfolioData } from '../data/portfolioData';

class Hobbies_test extends Component {

    state = {
        projects: portfolioData // On stocke les éléments de portfolioData dans le state
    };

    render() {

        let {projects} = this.state;


        return (
            <div className='projects'>
                {
                    projects.map(item => {
                        return (
                            <p>{item.name}</p>
                        )
                    })
                }
            </div>
        );
    }
}

export default Hobbies_test;