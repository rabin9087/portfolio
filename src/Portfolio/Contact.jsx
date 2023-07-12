import React from 'react'
import { useUser } from '../Context/UserContext';
import MenuItems from './MenuItems';
import { Footer, Logo, Navbar } from './Portfolio';
import { Container } from 'react-bootstrap';
const Contact = () => {

  return (
    <div>
      <Container>
      <Navbar>
		<Logo>Rabin Shah</Logo>
      <MenuItems/>
      </Navbar>
      </Container>
      <Footer>
					<p>&copy; 2023 My Portfolio. All rights reserved.</p>
				</Footer>
    </div>
  )
}
export default Contact;