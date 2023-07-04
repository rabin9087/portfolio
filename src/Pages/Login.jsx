import React, { useState } from 'react'

import styles from '../style.module.css';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Register from './Register';
import 'firebase/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useUser, useUserUpdate } from '../Context/UserContext';

 const Login = () => {

  const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const updateLogedInStatus = useUserUpdate();
    const isUserLogedIn = useUser();

    const submitLogin = (e) => {
        e.preventDefault();

        const auth = getAuth();
          signInWithEmailAndPassword(auth, username, password)
          .then((userCredential) => {
            
            updateLogedInStatus();

            
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(alert("Please Enter valid email and password"))
            console.log(errorCode, errorMessage)
          });
    }
  return (


    <div className= {styles.teamGroup} >
      <h1>Login Your Account</h1>
        <br />
        <div className= {styles.startGameDiv}>

            <form onSubmit={submitLogin}> 
           <label className= {styles.teamInput} htmlFor='username'>User name: </label>
            <input className={styles.teamInput} 
            type='text' 
            name = "username"
            value = {username}
            onChange={(e) => setUsername(e.target.value)} 
            placeholder ='Enter your yousername' />

        <br />

      <label className= {styles.teamInput} htmlFor='password'>Password : </label>
      <input className={styles.teamInput} 
            type='password' 
            name = "password"
            value = {password}
            onChange={(e) => setPassword(e.target.value)} 
            placeholder ='Enter your password' />

        <br />

        <div>
        <button  className= {styles.teamButton} type='submit'>Login</button>
  
        <button className= {styles.teamButton} onClick={() => navigate('/register')}>Register</button>
        <br />
        <p>{errorMessage}</p>

        </div>
        
        </form>
        </div>
        
     
    </div>
  )
}
export default Login;