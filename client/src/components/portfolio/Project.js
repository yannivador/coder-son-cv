import React, { Component } from 'react';

class Project extends Component {
    
    state = {
        showInfo: false
    }

    handleInfo = () => (
        this.setState({
            showInfo:!this.state.showInfo
        })
    )

    fonctionTest = () => (
        console.log("ok")
    )

    
    render() {
        // console.log(this.props); // Attention !! on utilise this car on n'a pas passé en paramètre le props

        // destructuration des données
        let {name, languages, source, info, picture} = this.props.item;
        

        return (
            <div className='project'>
                <img src={picture} alt={picture} />
                <h3>{name}</h3> 
                <div className='languageContent'>

                <p>{languages}{this.fonctionTest}</p>

                {
                    // languages_info.map(item=> {
                    //     return (
                    //         <li>{item}</li>
                    //         )
                    // })
                    
                    // this.fonctionTest(item => {
                    //     return (
                    //         <h3>{item}</h3>
                    //     )
                    // })
                    
                }
                
                </div>
                <span className='info' onClick={this.handleInfo}>
                    <i className='fas fa-plus-circle' ></i>
                </span>
                {/* les informations en POPUP sont ci-dessous */}
                { 
                    this.state.showInfo && (
                        <div className="showInfo">
                            <div className="infoContent">
                                <h2>{name}</h2>
                                <img src={picture} alt="" />
                                <p>{info}</p>
                                <h3>Langages utilisées :</h3>
                                <ul>
                                {
                                    // languages.map(item=> {
                                    //     return (
                                    //         <li>{item}</li>
                                    //         )
                                    //     })
                                }
                                </ul>
                                <div className='buttonContent'>
                                    <a href={source} rel='noopener noreferrer' target='_blank' className='button'>Lien Github</a>
                                    <span className='closeInfo' onClick={this.handleInfo}>
                                        Quitter
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            
        );
    }
}

export default Project;