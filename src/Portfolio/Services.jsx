import React from 'react'
import MenuItems from './MenuItems';
import { Containers, Footer, Logo, Navbar } from './Portfolio';
import { Container } from 'react-bootstrap';
 const Services = () => {
  return (
    <div>
        <Container>
        <Navbar>
		<Logo>Rabin Shah</Logo>
      <MenuItems/>
      </Navbar>
        </Container>
        <Containers>
          
        </Containers>
        <Footer>
					<p>&copy; 2023 My Portfolio. All rights reserved.</p>
				</Footer>
    </div>
  )
}
export default Services;