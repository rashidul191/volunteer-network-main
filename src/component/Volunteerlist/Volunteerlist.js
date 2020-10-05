import React, { useEffect, useState } from 'react';
import './Volunteerlist.css';
import logo from '../logos/Group 1329.png';
import manIcon from '../logos/users-alt 1.png';
import plusIcon from '../logos/plus 1.png';
import deleteIcon from '../logos/trash-2 9.png';
import { Link } from 'react-router-dom';

const VolunteerList = () => {

    const [registration, setRegistration] = useState([]); 

    useEffect(() =>{
        fetch('https://fast-falls-44055.herokuapp.com/registration')
        .then(res => res.json())
        .then(data => setRegistration(data));
    },[])
    return (
        <div className="volunteer-body container">
            <div className="logo-body-part">
                <img className="main-logo" src={logo} alt=""/>
                <br/><br/><br/>
                <Link className="active" to="/volunteerlist"><p> <img src={manIcon} alt=""/>  Volunteer register list</p></Link>
                <Link className="active" to="/addevent"><p> <img src={plusIcon} alt=""/> Add Event</p></Link>
            </div>

            <div className="list-text-part">
                <h3>Volunteer register list</h3>
                <div className="list-out-body">
                    <div className="list-part">
                        <div>
                            
                        </div>
                        {
                            registration.map(regis => <div className="text">
                                <div>
                                    <p className="text-name"><span className="style-part">  Name :</span> {regis.name} </p>
                                </div>
                                <div>
                                     <p className="text-name"><span className="style-part"> Email : </span>{regis.email}</p>
                                </div>
                                <div>
                                    <img className="text-logo" src={deleteIcon} alt=""/>
                                </div>
                            </div> )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerList;