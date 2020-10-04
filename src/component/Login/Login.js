import React, { useContext, useState } from 'react';
import './Login.css';
import mainLogo from '../logos/Group 1329.png';
import googleImg from '../logos/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {

    const[user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email:'',
        photo:'',
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogle =() =>{
        firebase.auth().signInWithPopup(provider)
        .then(result => {
            const{displayName, photoURL, email} = result.user;
            const signedInUser ={
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
            }
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
            // console.log(displayName,email, photoURL,);

            const token = result.credential.accessToken;
            const user = result.user;
            console.log(token, user);
           
          }).catch(error => {
            
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;

            console.log(errorCode, errorMessage,email,credential);
            
          });
    }
    return (
        <div className="body-login">
            <img className="mainLogo-style" src={mainLogo} alt=""/>
             <div className="container google-login-body">
                <h5>Login With</h5>
                 <button className="btn-style" onClick={handleGoogle}>
                    <img className="google-logo-size" src={googleImg} alt=""/>
                    <span className="btn-text-position">Continue With Google</span>
                    </button>
                    <p>Don't have an account?
                         <span className="create-new-account" >Create an account</span>
                         </p>
                 {
                    user.isSignedIn && <div>
                        <p>Login done</p>
                            {/* <p>Welcome, {user.name}</p>
                            <p>Email, {user.email}</p>
                            <img src={user.photo} alt=""/> */}
                    </div>
            
                 }
            </div>
        </div>
    );
};

export default Login;