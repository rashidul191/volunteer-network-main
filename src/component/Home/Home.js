import React, { useState } from 'react';
import './Home.css';
import { useHistory } from 'react-router-dom';
import fakeData from '../fakeData/fakeData';

const Home = () => {
    const allData = fakeData.slice (0,20);
    const [dataInfo , setDataInfo] = useState(allData);

    const history = useHistory()
    const handleRegister =() =>{
        history.push('/register');


        const dataPas = {...dataInfo};
        fetch('http://localhost:5000/addFakeData',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dataPas)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })

    }

    return (
        <div className="container data-body-style ">
            <div className="data-component">
                {
                    dataInfo.map (data =>
                         <div  className="card-style">
                              <img onClick={handleRegister} className="card-style-img" src={data.img} alt=""/>
                              <h5 onClick={handleRegister} >{data.titleName}</h5>
                         </div>
                         )
                }
            </div>

        </div>
    );
};

export default Home;