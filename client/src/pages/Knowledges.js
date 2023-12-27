import React from 'react';
import Navigation from '../components/Navigation';
import Experiences from '../components/Experiences';
import Languages from '../components/Languages';
import OtherSkills from '../components/OtherSkills';
import Hobbies from '../components/Hobbies';

const Knowledges = () => {
    return (
        <div className='knowledges'>
            <Navigation />
            <div className='knowledgesContent'>
                <Experiences />
                <Languages />
                <OtherSkills />
                <Hobbies />
            </div>
        </div>
    );
};

export default Knowledges;