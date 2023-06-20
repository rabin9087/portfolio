import React, { useState } from 'react'

import styles from '../style.module.css';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Register from './Register';
 const Login = () => {

  const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [login, setLoging] = useState([]);

    const submitLogin = (e) => {
        e.preventDefault();
        const logInData = {username: username, password: password}
        setLoging([logInData])
       console.log('username:', username)
       console.log('password:', password)
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

        </div>
        
        </form>
        </div>
        
     
    </div>
  )
}
export default Login;