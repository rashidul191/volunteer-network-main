import React from 'react';
import './Donation.css';
import imgs from '../images/extraVolunteer.png';

const Donation = () => {
    return (
        <div className="container body-donation">
           <div className="donation-style">
                <div className=" style-img">
                    <img src={imgs} alt=""/>
                </div>
                <div className="donation-text">
                    <h4>Humanity More</h4>
                    <h6>29 sep, 2020</h6>
                </div>
                <div className="donation-btn">
                    <button> Cancel </button>
                </div>
           </div>
        </div>
    );
};

export default Donation;