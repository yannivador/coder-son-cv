import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";

const Hobbies = () => {

    const [data, setData] = useState([]);

    useEffect( () => {
        // http://127.0.0.1:5000/
        axios.get("http://127.0.0.1:5000/hobbies").then((res) => (setData(res.data)))
    }, [])


    return (
        <div className='hobbies'>
            <h3>Centres d'intérêts</h3>
            {
                data.map(item => {
                    return (
                        <div className='hob'>
                            <p>{item.id} {item.name}</p>
                        </div>
                    )
                })
            }
            
        </div>
    );
};

export default Hobbies;