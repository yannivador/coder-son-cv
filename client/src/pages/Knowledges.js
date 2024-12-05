import React from 'react';
import Navigation from '../components/Navigation';
import Experiences from '../components/Knowledges/Experiences';
// import Languages from '../components/Knowledges/Languages';
import OtherSkills from '../components/Knowledges/OtherSkills';
import Hobbies from '../components/Knowledges/Hobbies';
import Diplome from '../components/Knowledges/Diplome';

const Knowledges = () => {

    return (
        <div className='knowledges'>
            <Navigation />
            <div className='knowledgesContent'>
                <Experiences />
                <Diplome />
                {/* <Languages /> */}
                <OtherSkills />
                <Hobbies />
            </div>
        </div>
    );
};

export default Knowledges;