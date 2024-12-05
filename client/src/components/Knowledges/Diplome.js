import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";

const Diplome = () => {

    const [data, setData] = useState([]);

    useEffect( () => {
        // http://127.0.0.1:5000/
        axios.get("http://127.0.0.1:5000/diplome").then((res) => (setData(res.data)))
    }, [])


    return (
        <div className='diplome'>
            <h3>Diplôme</h3>
            {
                data.map(item => {
                    return (
                        <div className='dipl'>
                            <h4>{item.niveau} </h4>
                            <p>{item.name}</p>
                            <p>{item.ecole} - {item.lieu}</p>
                            <p>{item.description}</p>
                            <br/>
                        </div>
                    )
                })
            }
            
        </div>
    );
};

export default Diplome;