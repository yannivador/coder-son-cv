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

    // handleExit = () => (
    //     this.setState(

    //     )
    // )
    
    render() {
        // console.log(this.props); // Attention !! on utilise this car on n'a pas passé en paramètre le props

        // destructuration des données
        let {name, languages, source, info, picture} = this.props.item;
        

        return (
            <div className='project'>
                <h3>{name}</h3>
                <img src={picture} alt="" />
                <div className='languageContent'>

                {
                    languages.map(item=> {
                        return (
                            <span className='language'>{item} </span>
                            )
                        })
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
                                    languages.map(item=> {
                                        return (
                                            <li>{item}</li>
                                            )
                                        })
                                }
                                </ul>
                                <div className='buttonContent'>
                                    <a href={source} rel='noopener noreferrer' target='_blank' className='button'>Code source</a>
                                    <span className='closeInfo' onClick={this.handleInfo}>
                                        Retourner sur la page
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