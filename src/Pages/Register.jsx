import React, { useState } from 'react'
import styles from '../style.module.css';
import { dataref, storage } from '../Connection/Config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import firebase from '../Connection/Config';
import 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {

    const goToLogIn = useNavigate();

    const navigateLogin = useNavigate();
    const [register, setRegister] = useState({
        fName: '',
        lName: '',
        userName: '',
        email: '',
        phone: '',
        password: '',
    })
    const [image, setImage] = useState('')

    const registerInput = (e) => {
       let name = e.target.name;
       let value = e.target.value;
        setRegister({...register, [name]: value})
    }

    const { fName, lName, userName, email, phone, password} = register;

    const submitRegister = async (e) => {
        e.preventDefault();
        if ( fName && lName && userName && email && phone && password){
        const auth = getAuth();
        
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          alert("signedup");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(password)
          // ..
        });

        dataref.ref("user").push().set({
            FirstName: fName,
            LastName: lName,
            UserName: userName,
            Email: email,
            Phone: phone,
            Password: password
        }).catch(alert)

        console.log(register)

        const imageref = storage.ref('/image/' + image.name).put(image)
        .on("state_changed", alert("success"), alert);

        imageref();

        navigateLogin('/logIn')
        toast.success("Register successful", {
            position:"top-center",
           theme:"colored"
          });

        } else{
            alert("Please fill all the data")

        }
        }

  return (
    <div className= {styles.teamGroup}>
        <h1>SignUp Your Account</h1>
        <br />

        <div className= {styles.startGameDiv}>

            <form onSubmit={submitRegister}> 

            <div className={styles.registerBackGround}>
                <div className={styles.registerInput}>
                <label className= {styles.registerLabel} htmlFor='fName'>First name: </label>
                    <input className={styles.teamInput} 
                    type='text' 
                    name = "fName"
                    value = {register.fName}
                    onChange={registerInput} 
                    placeholder ='First Name' />
                </div>
                <div className={styles.registerInput}>
                <label className= {styles.registerLabel} htmlFor='lName'>Last Name : </label>
                    <input className={styles.teamInput} 
                    type='text' 
                    name = "lName"
                    value = {register.lName}
                    onChange={registerInput} 
                    placeholder ='Last Name' />
                </div>
                   

                   <div className={styles.registerInput}>
                   <label className= {styles.registerLabel} htmlFor='username'>User Name: </label>
                    <input className={styles.teamInput} 
                    type='text' 
                    name = "userName"
                    value = {register.userName}
                    onChange={registerInput} 
                    placeholder ='User Name' />
                   </div>
                   
                    <div className={styles.registerInput}>
                    <label className= {styles.registerLabel} htmlFor='email'>Email : </label>
                    <input className={styles.teamInput} 
                    type='email' 
                    name = "email"
                    value = {register.email}
                    onChange={registerInput} 
                    placeholder ='E-mail' />
                    </div>
                    
                    <div className={styles.registerInput}>
                    <label className= {styles.registerLabel} htmlFor='phone'>Phone : </label>
                    <input className={styles.teamInput} 
                    type='phone' 
                    name = "phone"
                    value = {register.phone}
                    onChange={registerInput} 
                    placeholder ='Phone' />
                    </div>
                    
                    <div className={styles.registerInput}>
                    <label className= {styles.registerLabel} htmlFor='password'>Password: </label>
                    <input className={styles.teamInput} 
                    type='password' 
                    name = "password"
                    value = {register.password}
                    onChange={registerInput} 
                    placeholder ='Password' />
                    </div>

                    <div className={styles.registerInput}>
                    <label className= {styles.registerLabel} htmlFor='image'>Upload Image: </label>
                    <input className={styles.teamInput} 
                    type='file' 
                    // name = "image"
                    // value = {register.image}
                    onChange={(e) => {setImage(e.target.files[0])}} 
                    placeholder ='Choose Image' />
                    </div>
                    
                    <div>
                 
                    <button  className= {styles.teamButton} onClick={() =>goToLogIn('/logIn')}>Log In</button>
                    <button  className= {styles.teamButton} type='submit'>Sign up</button>
                    </div>
             </div>
            </form>

           
        </div>
    <ToastContainer/>
    </div>
  )
}
export default Register;