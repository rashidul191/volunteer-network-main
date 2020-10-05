import React, { useEffect, useState } from 'react';
import './Volunteerlist.css';
import logo from '../logos/Group 1329.png';

const VolunteerList = () => {

    const [registration, setRegistration] = useState([]); 

    useEffect(() =>{
        fetch('http://localhost:5000/registration')
        .then(res => res.json())
        .then(data => setRegistration(data));
    },[])
    return (
        <div className="volunteer-body container">
            <div>
                <img className="main-logo" src={logo} alt=""/>
                <p>Volunteer register list</p>
                <p> Add Event</p>
            </div>

            <div>
                <h3>you have: {registration.length}  register</h3>
                {
                    registration.map(regis => <div>
                        <li> {regis.name} {regis.email}</li>
                    </div> )
                }
            </div>
        </div>
    );
};

export default VolunteerList;