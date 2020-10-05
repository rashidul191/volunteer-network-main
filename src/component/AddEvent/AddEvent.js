import React from 'react';
import './AddEvent.css';
import logo from '../logos/Group 1329.png';
import manIcon from '../logos/users-alt 1.png';
import plusIcon from '../logos/plus 1.png';
import { Link } from 'react-router-dom';

const AddEvent = () => {
    return (
        <div className="volunteer-body container">
                <div>
                <img className="main-logo" src={logo} alt=""/>
                <Link className="active" to="/volunteerlist"><p> <img src={manIcon} alt=""/>  Volunteer register list</p></Link>
                <Link className="active" to="/addevent"><p> <img src={plusIcon} alt=""/> Add Event</p></Link>
            </div>

            <div className="list-text-part">
                <h3>Add Event</h3>
                <div className="list-out-body">
                    <div className="list-part">
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;