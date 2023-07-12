import React from 'react'
import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
`;

const Menu = styled.ul`
display: flex;
list-style: none;
`;

const MenuItem = styled.li`
margin-right: 20px;
cursor: pointer;
`;
const MenuItems = () => {
  return (
    <div>
                        <Menu>
						<MenuItem > <Link className='content' to={"/portfolio"}>Home</Link></MenuItem>
						<MenuItem><Link className='content' to={"/about"}>About</Link></MenuItem>
                        <MenuItem><Link className='content' to={"/services"}>Services</Link></MenuItem>
						<MenuItem><Link className='content' to={"/contact"}>Contact</Link></MenuItem>
						<MenuItem><Link className='content' to={"/projects"}>Projects</Link></MenuItem>
						<MenuItem><Link className='content' to={"/skills"}>Skills</Link></MenuItem>
					</Menu>
    </div>
  )
}
export default MenuItems;