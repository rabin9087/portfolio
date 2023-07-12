import React from 'react'
import MenuItems from './MenuItems';
import { Link } from 'react-router-dom';
import { AboutSection, Containers, Footer, Logo, Navbar, ProjectItem, ServicesSection } from './Portfolio';
import { Container } from 'react-bootstrap';
 const Projects = () => {
  return (
    <div>
        <Container>
        <Navbar>
		<Logo>Rabin Shah</Logo>
      <MenuItems/>
      </Navbar>
      <br />
      <div>
        <ProjectItem>
        <Link className='content' to={"/cricketScore"}>Cricket Score App</Link>
    
        </ProjectItem>

        <ProjectItem>
        <Link className='content' to={"/todoApp"}>Todo App</Link>
        </ProjectItem>
      </div>
        </Container>
        <Containers>

        </Containers>

        <Footer>
					<p>&copy; 2023 My Portfolio. All rights reserved.</p>
				</Footer>
       
    </div>
  )
}
export default Projects;