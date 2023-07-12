import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='content'>
      <Link className='content' to={"/portfolio"}>Portfolio</Link>
    </div>
  )
}
export default Navbar;