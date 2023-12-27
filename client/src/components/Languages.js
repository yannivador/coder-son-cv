import React, { Component } from 'react';
import Progressbar from './Progressbar';

class Languages extends Component {
    // Données dans state 
    state = {
        languages: [
            {id: 1, value: "Javascript", xp:1.8},
            {id: 2, value: "CSS", xp:1.2},
            {id: 3, value: "HTML", xp:1.3},
            {id: 4, value: "PHP", xp:0.8}
        ],
        frameworks: [
            {id: 1, value: "React", xp:1.8},
            {id: 2, value: "Vue.js", xp:1.2},
            {id: 3, value: "laravel", xp:1.3},
            {id: 4, value: "bOOTSTRAP", xp:0.8}
        ]
    }

    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className='languagesFrameworks'>
                <Progressbar 
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <Progressbar 
                    languages={frameworks}
                    className="frameworksDisplay"
                    title="frameworks"
                />
                
            </div>
            
        );
    }
        
    
};

export default Languages;