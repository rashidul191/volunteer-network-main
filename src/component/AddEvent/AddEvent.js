import React from 'react';
import './AddEvent.css';
import logo from '../logos/Group 1329.png';

const AddEvent = () => {
    return (
        <div className="container">
                <div>
                    <img className="main-logo" src={logo} alt=""/>
                    <p>Volunteer register list</p>
                    <p> Add Event</p>
                </div>

                <div>
                    <h1>Add Event part</h1>
                </div>
        </div>
    );
};

export default AddEvent;