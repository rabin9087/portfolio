import React from 'react'
import { useUser } from '../../Context/UserContext';

const Contact = () => {

  const isUserLogedIn = useUser();
 console.log("isUserLogedIn",isUserLogedIn)
  return (
    <div>
      {isUserLogedIn? "True" : "False"}
      <h1>Contact Us</h1>
    </div>
  )
}
export default Contact;