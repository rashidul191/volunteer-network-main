import React from 'react';
import './Admin.css';
import logo from '../logos/Group 1329.png';

const Admin = () => {
    return (
        <div className="admin-body container">
            <div>
                <img className="main-logo" src={logo} alt=""/>
                <p>Volunteer register list</p>
                <p> Add Event</p>
            </div>

            <div>
                <div>
                    <h1>Add event part</h1>
                </div>

                <div>
                    <h1>Volunteer register list</h1>
                </div>
            </div>
        </div>
    );
};

export default Admin;