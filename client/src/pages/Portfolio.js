import React from 'react';
import Navigation from '../components/Navigation';
// import ProjectList from '../components/portfolio/ProjectList';
import ProjectListTest from '../components/portfolio/ProjectListTest';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <Navigation />
            {/* <ProjectList /> */}
            <ProjectListTest />
        </div>
    );
};

export default Portfolio;