import React, { useEffect, useState } from 'react';
import './Donation.css';
import imgs from '../images/extraVolunteer.png';

const Donation = () => {

        const [fakeData, setFakeData] = useState([]);
        useEffect ( ()=>{
            fetch('http://localhost:5000/fakeDataUse')
            .then(res => res.json())
            .then(data => setFakeData(data));
        },[])
    return (
        <div className="container body-donation">
           
                {
                    fakeData.map (fake => <div className="donation-style">

                        <div className=" style-img">
                                <img src={fake.img} alt=""/>
                        </div>
                        <div className="donation-text">
                            <h4>{fake.name}</h4>
                        </div>
                        <div className="donation-btn">
                            <button> Cancel </button>
                        </div>
                    </div>
                    
                    )
                }

                
           </div>
    );
};

export default Donation;