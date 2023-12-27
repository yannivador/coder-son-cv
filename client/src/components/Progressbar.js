import React from 'react';

const Progressbar = (props) => {
    console.log(props);

    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div>
                {   // Affichage données du tableau
                    props.languages.map((item => {
                        return (
                            <div key={item.id} className="languagesList">
                                <li>{item.value}</li>
                            </div>
                        )
                    }))

                }
            
            </div>
        </div>
    );
};

export default Progressbar;