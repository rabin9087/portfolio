import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link className='content' to={"/"}>Home</Link>
      <Link className='content' to="/contact">Contact</Link>
    </div>
  )
}
export default Navbar;