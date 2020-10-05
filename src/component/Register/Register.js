import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import './Register.css';
import Logo from '../logos/Group 1329.png';
import { useHistory } from 'react-router-dom';



const Register = () => {

    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {
      console.log('form submit',data)
    };

    const history = useHistory()
    const handleBtn =() =>{
        history.push('/donation');

        
        const registerData = {...loggedInUser,}
        fetch('http://localhost:5000/addRegisterData',{
          method: 'POST',
          headers:{'Content-Type': 'application/json'},
          body: JSON.stringify(registerData)
        })
        .then(res => res.json())
        .then(date =>{
          console.log(date);
        })
    }

  return (
    
    <div className=" body">
        <img className="main-logo" src={Logo} alt=""/>
       <div className="from-body">
             <h3>Register as a Volunteer</h3>
            <form className="regi-form" onSubmit={handleSubmit(onSubmit)}>

                <input name="name" defaultValue={loggedInUser.name} placeholder="Full Name" ref={register({ required: true })} />
                {errors.name && <span className="error">Name is required</span>}

                <input name="email" defaultValue={loggedInUser.email} placeholder="Username or Email" ref={register({ required: true })} />
                {errors.email && <span className="error">Username or Email is required</span>}

                <input type="date" name="date" placeholder="Date" ref={register({ required: true })} id=""/>
                {errors.date && <span className="error">Date is required</span>}

                <input name="desicription" placeholder="Desicription" ref={register({ required: true })} />
                {errors.desicription && <span className="error">Desicription is required</span>}

                <input name="organize" placeholder="Organize" ref={register({ required: true })} />
                {errors.organize && <span className="error">Organize is required</span>}

                <input id="regi-btn-style" type="submit" onClick={handleBtn} value="Registration"/>
            </form>
       </div>
    </div>
  );
};

export default Register;