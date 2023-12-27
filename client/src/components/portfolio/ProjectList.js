import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project';

class ProjectList extends Component {

    state = {
        projects: portfolioData // On stocke les éléments de portfolioData dans le state
    };


    
    render() {
        let {projects} = this.state; // remplace this.state par projects

        return (
            <div className='portfolioContent'>
                <ul className="radioDisplay">
                    {/* A coder plus tard */}
                </ul>

                <div className="projects">
                    {
                        projects.map(item => {
                            return (
                                <Project 
                                    key={item.id}
                                    item={item}
                                />
                            )
                        })
                    }
                </div>
                {/* <ProjectListTest /> */}
            </div>
        );
    }
}

export default ProjectList;