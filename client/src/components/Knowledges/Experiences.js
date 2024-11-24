import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";

const Experiences = () => {

    const [data, setData] = useState([]);

    useEffect( () => {
        // http://127.0.0.1:5000/
        axios.get("http://127.0.0.1:5000/experience").then((res) => (setData(res.data)))
    }, [])


    return (
        <div className='experience'>
            <h3>Experiences</h3>
            {
                data.map(item => {
                    return (
                        <div className='exp'>
                            {/* <p>{item.id}</p> */}
                            <h4>{item.date}</h4>
                            <p>{item.name}</p>
                            <p>{item.entreprise}</p>
                            <p>{item.description}</p>
                        </div>
                    )
                })
            }
            
        </div>
    );
};

export default Experiences;