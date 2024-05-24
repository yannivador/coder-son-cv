import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import axios from 'axios';

const Contact = () => {

    const [data, setData] = useState([]);

    useEffect( () => {
        axios.get("http://127.0.0.1:5000/users").then((res) => (setData(res.data)))
    }, [])


    return (
        <div className='contact'>
            <Navigation />
            <div className="contactContent">
                <h3>Contact</h3>
                {
                    data.map(item => {
                        return (
                            <div>
                                <li>{item.name}</li>
                                <li>{item.surname}</li>
                                <li>{item.slogan}</li>
                                <li>{item.mail}</li>
                                <li>{item.descrip}</li>
                            </div>
                        )
                        
                    })
                }
            </div>
        </div>
    );
};

export default Contact;